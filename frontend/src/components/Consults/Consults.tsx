import { useLocation, useParams } from "react-router";
import { Consult } from "../../models/Consult";
import {
  addConsult,
  getConsult,
  getConsultById,
} from "../../services/consultsService";
import Menu from "../Menu";
import { ChangeEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

function Consults() {
  const user = JSON.parse(localStorage.getItem("user")!);
  const { professionalId: professionalIdFromParams, consult_id } = useParams();
  const location = useLocation();
  const professionalIdFromState = location.state
    ? location.state.professional_id
    : null;

  const professionalId = professionalIdFromParams || professionalIdFromState;
  console.log("consult-prof-id,", typeof user.type);

  const [consult, setConsult] = useState("");
  const [userConsult, setUserConsult] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      try {
        let response;

        if (consult_id) {
          // Si hay un consult_id en la ruta, usa la función getConsultById
          response = await getConsultById(parseInt(consult_id!));
        } else {
          // Si no hay consult_id, usa la función getConsultByUsers
          response = await getConsult(user.id, professionalId);
        }
        // Establecer la información de la consulta
        setMessages(response.data.messages);
        setUserConsult(response.data.consult.user_id);
        console.log("msgs recibidos.", response.data.consult.user_id);
      } catch (error) {
        console.error("Error al cargar los mensajes", error);
      }
    }

    loadMessages();
  }, [user.id, professionalId, consult_id]);
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    let newConsult: Consult = {
      user_id: 0,
      professional_id: 0,
      consult: "",
    };
    if (user.type === 2) {
      newConsult = {
        user_id: parseInt(userConsult!),
        professional_id: professionalId,
        consult: consult,
      };
    } else {
      newConsult = {
        user_id: parseInt(user.id),
        professional_id: professionalId,
        consult: consult,
      };
    }

    try {
      await addConsult(newConsult);
      Swal.fire({
        title: "Consulta enviada",
        icon: "success",
      });
      console.log("Consulta enviada correctamente");
      setConsult("");
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Ha ocurrido un error al enviar la consulta",
      });
      console.error("Error al enviar la consulta", error);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setConsult(event.target.value);
  }

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full">
        <main className="flex flex-col gap-4 mt-8 justify-top font-Montserrat">
          <div className="mx-auto">
            <div className="w-[60rem] bg-white h-[40rem] rounded-md">
              <div className="h-full p-12 rounded-md w-[60rem] border-2 border-secondary">
                <ul className="flex flex-col h-full overflow-y-scroll">
                  {messages.map((message, index) => (
                    <li
                      className={`px-8 py-3 mb-2 rounded-lg w-fit bg-primary  `}
                      key={index}
                    >
                      {message.message_text}
                      
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-[60rem]" action="">
              <div className="flex flex-row">
                <input
                  type="text"
                  name="consult"
                  id="consult"
                  value={consult}
                  required
                  onChange={handleChange}
                  className="w-[54rem] h-18 p-8 mt-4 border-2 rounded-md border-secondary"
                />
                <button
                  className="p-3 mt-4 ml-2 text-white rounded-md bg-secondary"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Consults;
