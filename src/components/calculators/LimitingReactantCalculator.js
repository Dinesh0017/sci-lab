"use client";

import { useState } from "react";

export default function LimitingReactantCalculator() {
  const [molesA, setMolesA] = useState(0);
  const [molesB, setMolesB] = useState(0);
  const [ratioA, setRatioA] = useState(1);
  const [ratioB, setRatioB] = useState(1);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const possibleB = molesA / ratioA * ratioB;
    const limiting = possibleB > molesB ? "Reactant B" : "Reactant A";
    setResult(limiting);
  };

  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Limiting Reactant Calculator
      </h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Moles of Reactant A"
          value={molesA}
          onChange={(e) => setMolesA(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Moles of Reactant B"
          value={molesB}
          onChange={(e) => setMolesB(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Ratio A"
            value={ratioA}
            onChange={(e) => setRatioA(parseFloat(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Ratio B"
            value={ratioB}
            onChange={(e) => setRatioB(parseFloat(e.target.value))}
            className="w-1/2 p-2 border rounded"
          />
        </div>
        <button
          onClick={calculate}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        {result && <p className="mt-2">Limiting Reactant: {result}</p>}
      </div>
    </div>
  );
}
