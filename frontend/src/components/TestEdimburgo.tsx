// src/components/EPDSForm.tsx
import React, { useState } from "react";
import Menu from "./Menu";
import Search from "./Search";

function TestEdimburgo() {
  const [epdsResults, setEPDSResults] = useState<number[]>(Array(10).fill(0));

  const questions = [
    "He sido capaz de reír y ver el lado bueno de las cosas",
    "He mirado el futuro con placer",
    "Me he culpado sin necesidad cuando las cosas no salían bien",
    "He estado ansiosa y preocupada sin motivo",
    "He sentido miedo y pánico sin motivo alguno",
    "Las cosas me oprimen o agobian",
    "Me he sentido tan infeliz que he tenido dificultad para dormir",
    "Me he sentido triste y desgraciada",
    "He sido tan infeliz que he estado llorando",
    "He pensado en hacerme daño a mí misma",
  ];

  const handleInputChange = (index: number, value: number) => {
    const newResults = [...epdsResults];
    newResults[index] = value;
    setEPDSResults(newResults);
  };

  const calculateTotalScore = (): number => {
    // Puntos para las preguntas 3, 5, 6, 7, 8, 9, 10 se anotan en orden inverso
    const reversedIndices = [2, 4, 5, 6, 7, 8, 9];

    let totalScore = 0;

    for (let i = 0; i < epdsResults.length; i++) {
      const score = reversedIndices.includes(i)
        ? 3 - epdsResults[i]
        : epdsResults[i];
      totalScore += score;
    }

    return totalScore;
  };

  const handleSubmit = async () => {
    const totalScore = calculateTotalScore();

    try {
      //const response = await axios.post('http://localhost:5000/api/submit-epds', { totalScore });
      //console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error("Error al enviar resultados al servidor:", error);
    }
  };

  return (
    <div className="grid w-screen h-screen grid-cols-[auto,1fr] overflow-hidden bg-background">
      <div>
        <Menu />
      </div>

      <div className="grid w-full h-fit grid-cols-1 grid-rows-[5em,1fr]">
        <div className="flex flex-col justify-center mt-3 mb-3">
          <div className="flex justify-evenly">
            <Search />
          </div>
          <div className="w-full mt-2 mb-2 border-b border-secondary"></div>
        </div>
        <div className="flex flex-row w-full mx-auto ml-4 justify-evenly">
          <div className="">
            <h2>Escala de Depresión Posparto de Edimburgo (EPDS)</h2>
            {questions.map((question, index) => (
              <div className="mb-4 " key={index}>
                <p>{question}</p>
                <div className="flex flex-col ml-2">
                <label className="">
                  Tanto como siempre
                  <input
                    type="radio"
                    value={3}
                    checked={epdsResults[index] === 3}
                    onChange={() => handleInputChange(index, 3)}
                  />
                </label>
                <label>
                  Algo menos de lo que solía hacer
                  <input
                    type="radio"
                    value={2}
                    checked={epdsResults[index] === 2}
                    onChange={() => handleInputChange(index, 2)}
                  />
                </label>
                <label>
                  Definitivamente menos
                  <input
                    type="radio"
                    value={1}
                    checked={epdsResults[index] === 1}
                    onChange={() => handleInputChange(index, 1)}
                  />
                </label>
                <label>
                  No, nada
                  <input
                    type="radio"
                    value={0}
                    checked={epdsResults[index] === 0}
                    onChange={() => handleInputChange(index, 0)}
                  />
                </label>
                </div>
              </div>
            ))}
            <button className="w-40 p-2 mx-auto mt-4 text-lg rounded-md bg-secondary" onClick={handleSubmit}>Enviar resultados</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestEdimburgo;
