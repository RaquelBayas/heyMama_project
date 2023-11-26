

function Register() {
  return (
    <div className="grid w-screen h-screen bg-background auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-auto xl:grid-cols-[320px,1fr]">
        <div className="hidden h-screen rotate-0 bg-center bg-no-repeat bg-cover w-80 bg-primary md:block"
        style={{ backgroundImage: `url('assets/img_registro2.png')` }}>
        </div>
        <div className="bg-background">
        <form className="max-w-md mx-auto my-auto mt-8 max-h-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-600">
          Nombre
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-600">
          Apellidos
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-600">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full py-2 bg-transparent border-b-2 border-dark_brown focus:outline-none focus:border-blue-700"
        />
      </div>
      <button type="submit" className="flex p-2 mx-auto border-2 border-solid rounded-md border-dark_brown text-dark_brown bg-primary">
        Registrarse
      </button>
        </form>
        </div>
    </div>
  )
}

export default Register