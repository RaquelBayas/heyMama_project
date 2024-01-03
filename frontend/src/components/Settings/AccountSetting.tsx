import { useEffect, useState } from "react";
import ToggleSwitch from "./Switch/ToggleSwitch";
import { getUserById } from "../../services/userService";

function AccountSetting() {
  const [email, setEmail] = useState("");

  const [active, setActive] = useState({
    isActive: "1",
  });

  const [passwords, setPasswords] = useState({
    pwdActual: "",
    pwdNueva: "",
  });

  const user = JSON.parse(localStorage.getItem("user")!);

  useEffect(() => {
    async function getData() {
      const data = await getUserById(user!.id);

      const email = data.data[0].email;

      setEmail(email);
    }
    getData();
  }, []);

  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.name);
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  }

  function handleActiveChange(e: React.ChangeEvent<HTMLButtonElement>) {
    setActive({
      ...active,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const baseUrl = `https://heymamaproject.onrender.com/users/setting/account/:${user.id}`;

    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pwdActul: passwords.pwdActual,
          pwdNueva: passwords.pwdNueva,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Error al enviar datos al servidor");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="account"
      className="flex flex-col gap-8 text-xl font-Montserrat"
    >
      <h1 className="my-10 text-4xl tracking-wider text-center uppercase lg:ml-40">
        Ajustes
      </h1>

      <div className="flex flex-col">
        <label htmlFor="name">Email:</label>
        <input
          name="email"
          value={email}
          onChange={handleDataChange}
          className="sm:w-[400px] text-orange-800 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name">Inserte contraseña actual:</label>
        <input
          name="pwcActual"
          onChange={handleDataChange}
          className="sm:w-[400px] text-orange-800 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name">Inserte nueva contraseña:</label>
        <input
          name="pwdNueva"
          onChange={handleDataChange}
          className="sm:w-[400px] text-orange-800 mt-2 mb-4 border-2 border-transparent border-b-black bg-transparent focus:outline-none"
        />
      </div>

      <ToggleSwitch />

      <button
        name="active"
        value={active.isActive}
        onChange={handleActiveChange}
        className="px-4 py-2 mx-auto text-red-600 border-2 border-red-400 rounded-md w-fit mr-aut bg-background hover:text-xl hover:bg-red-400 hover:text-amber-300 hover:font-bold hover:scale-110"
      >
        Eliminar mi cuenta
      </button>

      <button
        type="submit"
        className="p-2 w-[200px] mx-auto bg-background border-2 font-Montserrat border-green-800 hover:font-bold hover:text-green-800 rounded-md hover:bg-lime-400 hover:scale-110"
      >
        Actualizar perfil
      </button>
    </form>
  );
}

export default AccountSetting;
