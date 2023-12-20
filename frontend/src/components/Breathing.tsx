import { useState, useRef } from "react";
import Menu from "./Menu";
import Search from "./Search";

function Breathing() {
  const [breathing, setBreathing] = useState("Respira...");
  const [isIntervalActive, setIsIntervalActive] = useState(false);
  const breathIntervalRef = useRef<number | null>(null);
  const ball = document.querySelector("div.ball");

  function initBreath() {
    const ball = document.querySelector("div.ball");
    ball?.classList.add("circle", "pulse");

    if (!isIntervalActive) {
      setBreathing("Inhala...");

      breathIntervalRef.current = setInterval(() => {
        setBreathing((prevBreathing) =>
          prevBreathing === "Inhala..." ? "Exhala..." : "Inhala..."
        );
      }, 4000);

      setIsIntervalActive(true);
    }
  }

  function stopBreath() {
    ball?.classList.remove("circle", "pulse");

    clearInterval(breathIntervalRef.current!);
    setIsIntervalActive(false);
    setBreathing("Respira...");
  }

  return (
    <div className="w-screen h-screen bg-background grid grid-cols-[100px,1fr] overflow-x-hidden">
      <div>
        <Menu />
      </div>
      <div className="grid w-screen ">
        <main className="flex flex-col justify-center text-center font-Montserrat">
          <div className="mt-[3.5rem] justify-start">
            <p>
              Enfrentar la ansiedad puede ser desafiante, pero las técnicas de
              relajación y mindfulness ofrecen una vía efectiva para reducir su
              impacto en tu bienestar.
              La práctica constante de estas técnicas no solo te permite aliviar
              la ansiedad, sino que también contribuye a mejorar tu salud mental
              y emocional. 
            </p>

            <p>
              Para facilitar este proceso, hemos creado una herramienta dedicada
              a ayudarte a controlar tu respiración. La respiración consciente
              es una piedra angular en la gestión de la ansiedad. A través de
              esta herramienta, podrás aprender y aplicar técnicas de
              respiración que te permitirán encontrar calma y equilibrio en
              cualquier momento del día.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-12 text-2xl">{breathing}</h1>
            <div className="my-16 rounded-full w-52 h-52 bg-secondary ball"></div>
            <button
              className="w-32 p-4 mb-8 rounded-md bg-secondary"
              onClick={initBreath}
            >
              EMPEZAR
            </button>
            <button
              className="w-32 p-4 rounded-md bg-secondary"
              onClick={stopBreath}
            >
              PARAR
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Breathing;
