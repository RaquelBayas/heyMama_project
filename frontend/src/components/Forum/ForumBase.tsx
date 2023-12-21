import { ReactNode } from "react";
import Menu from "../Menu";
import Search from "../Search";

function Forum({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden">
      <Menu />
      <div className="grid w-screen grid-rows-[5em_1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3 ml-[3.5rem]">
          <div className="flex ml-auto mr-40 justify-evenly">
            <Search />
          </div>
          <div className="w-screen mt-2 mb-2 border-b border-secondary"></div>
        </div>

        <main className="flex gap-4 font-Montserrat justify-center ml-[3.5rem] mb-8">
          <section className="flex flex-col gap-6">{children}</section>
        </main>
      </div>
    </div>
  );
}

export default Forum;
