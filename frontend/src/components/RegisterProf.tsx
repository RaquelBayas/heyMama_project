import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { RegistrationFormState } from "../models/RegistrationForm.ts";
import { register } from "../services/registerService.ts";

function RegisterProf() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormState>({
    userType: "prof",
    name: "",
    surname: "",
    job: "",
    numCollege: 0,
    email: "",
    password: "",
    username: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentFormData = { ...formData };
    setFormData({
      userType: "prof",
      name: "",
      surname: "",
      job: "",
      numCollege: 0,
      email: "",
      password: "",
      username: "",
    });

    register(currentFormData).then((response) => {
      if (response.error) {
        return response.error;
      }
      console.log(response);
      return response;
    });
  }
  return (
    <div className="grid w-screen h-screen bg-background auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-auto xl:grid-cols-[320px,1fr]">
      <div
        className="hidden w-full h-screen rotate-0 bg-center bg-no-repeat bg-cover bg-primary md:block "
        style={{ backgroundImage: `url('assets/img_registro2.png')` }}
      ></div>
      <div className="my-auto bg-background">
        <h1 className="text-4xl text-center font-anybody">CREA UNA CUENTA</h1>
        <form
          className="max-w-md mx-auto my-auto mt-8 max-h-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="job"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Profesión
            </label>
            <input
              type="text"
              id="job"
              name="job"
              value={formData.job}
              onChange={handleChange}
              required
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numCollege"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Número de colegiado
            </label>
            <input
              type="number"
              id="numCollege"
              name="numCollege"
              value={formData.numCollege}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700 "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-2xl transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="mb-4">
          <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
            />
          </div>
          </div>
          <button
            type="submit"
            className="flex p-2 mx-auto my-auto border-2 border-solid rounded-md border-dark_brown text-dark_brown bg-primary"
          >
            <span className="my-auto mr-2">
              <FaArrowRight />{" "}
            </span>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterProf;

