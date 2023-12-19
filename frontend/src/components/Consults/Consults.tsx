import { useLocation } from "react-router";
import { Consult } from "../../models/Consult";
import { addConsult } from "../../services/consultsService";
import Menu from "../Menu";
import { ChangeEvent, useState } from "react";

function Consults() {
  const user = JSON.parse(localStorage.getItem("user")!);

  const location = useLocation();
  const { professional_id } = location.state;
  console.log('consult-prof-id,',professional_id)

  const [consult, setConsult] = useState('');

  async function handleSubmit() {
    const newConsult : Consult = {
      user_id : parseInt(user.id),
      professional_id: professional_id,
      consult:consult
    };
    await addConsult(newConsult);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setConsult(event.target.value);
  }

  //

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full">
        <main className="flex flex-col gap-4 mt-16 justify-top font-Montserrat">
          <div className="mx-auto">
            <div className="w-[60rem] h-[30rem] rounded-md">
              <div className="h-full p-12 rounded-md w-[60rem] border-2 border-secondary"></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-[60rem]"
              action=""
            >
              <div className="flex flex-row">
                <input
                 type='text'
                 name='consult'
                 id='consult'
                 value={consult}
                 required
                 onChange={handleChange}
                  className="w-[54rem] h-24 p-12 mt-4 border-2 rounded-md border-secondary"
                 
                />
                <button
                  className="p-8 mt-4 rounded-md bg-secondary"
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
