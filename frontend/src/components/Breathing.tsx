import { useState, useRef } from "react";
import Menu from "./Menu";

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
      <div className="grid w-screen grid-cols-2 mx-auto text-center">
        <main className="flex gap-16 mx-auto font-Montserrat">
          <div className="flex justify-end gap-16 ml-16 text-center">
            <div className="flex my-auto w-fit">
              <blockquote className="flex flex-col gap-10 mx-auto w-[150px] md:w-96">
                <h1 className="p-3 border-2 rounded-xl border-marron bg-primary">
                  Enfrentar la ansiedad puede ser desafiante, pero tenemos técnicas
                  de relajación y mindfulness para ayudarte
                  reducir su impacto en tu bienestar.
                </h1>
                <p className="p-3 bg-white border-2 rounded-xl border-marron">
                  La práctica constante de estas técnicas contribuye a mejorar tu
                  salud mental y emocional.{" "}
                </p>
                <p className="p-3 border-2 rounded-xl border-marron bg-primary">
                  La respiración
                  consciente es una piedra angular en la gestión de la ansiedad.{" "}
                </p>
                <p className="p-3 bg-white border-2 rounded-xl border-marron">Aprender y aplica
                  técnicas de respiración para encontrar calma y
                  equilibrio en cualquier momento del día.{" "}</p>
              </blockquote>
            </div>
          </div>
        </main>
        <div className="flex flex-col items-center justify-center gap-4 mx-auto ml-32">
          <h1 className="mt-12 text-4xl tracking-wider">{breathing}</h1>
          <div className="my-16 rounded-full w-52 h-52 bg-sky-300 ball"></div>
          <button
            className="w-32 p-4 mb-8 text-2xlfont-bold border-2 rounded-xl border-marron bg-secondary animate-pulse animate-infinite hover:animate-none"
            onClick={initBreath}
          >
            EMPEZAR
          </button>
          <button
            className="w-32 p-4 border-2 rounded-xl border-marron bg-secondary"
            onClick={stopBreath}
          >
            PARAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Breathing;
