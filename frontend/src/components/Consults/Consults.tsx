import Menu from "../Menu";
import Search from "../Search";

function Consults() {
  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden gap-4">
      <div>
        <Menu />
      </div>
      <div className="grid w-full h-full grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-secondary"></div>
        </div>

        <main className="flex flex-col gap-4 font-Montserrat"></main>
      </div>
    </div>
  );
}

export default Consults;
