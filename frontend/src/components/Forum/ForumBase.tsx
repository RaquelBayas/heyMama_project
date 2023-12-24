import { ReactNode } from "react";
import Menu from "../Menu";
import Search from "../Search";

function Forum({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-background flex flex-col sm:grid sm:grid-cols-[100px,1fr] overflow-x-hidden">
      <Menu />
      <div className="h-fit mt-16 sm:h-screen sm:grid w-screen sm:grid-rows-[5em_1fr]">
        <div className="hidden sm:flex flex-col justify-center sm:mt-3 sm:mb-3 sm:ml-[3.5rem]">
          <div className="flex ml-auto mr-40 sm:hidden justify-evenly">
            <Search />
          </div>
          <div className="hidden w-screen mt-2 mb-2 border-b sm:block border-secondary"></div>
        </div>

        <main className="flex gap-4 mt-12 sm:mt-4 font-Montserrat justify-center sm:ml-[3.5rem] mb-8">
          <section className="flex flex-col gap-6">{children}</section>
        </main>
      </div>
    </div>
  );
}

export default Forum;
