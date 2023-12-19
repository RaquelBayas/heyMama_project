import { useEffect, useState } from "react";
import Menu from "../Menu";
import { getListConsult } from "../../services/consultsService";
import { Link } from "react-router-dom";

function ListConsults() {
  const user = JSON.parse(localStorage.getItem("user")!);

  const [consults, setConsults] = useState([]);

  useEffect(() => {
     const fetchConsults = async () => {
      try {
        const response = await getListConsult(parseInt(user.id)); 
        setConsults(response.data);
      } catch (error) {
        console.error("Error al obtener las consultas", error);
      }
    };

    fetchConsults();
  }, [user.id]);

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full">
        <main className="flex flex-col gap-4 mt-8 justify-top font-Montserrat">
        <h1>Consultas</h1>
          <ul>
            {consults.map((consult) => (
              <li key={consult.consult_id}>
                
                <Link to={`/consults/${consult.consult_id}`} state={{ professional_id: consult.professional_id }} >
                  Consulta {consult.consult_id}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default ListConsults;
