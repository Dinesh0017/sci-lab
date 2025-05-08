"use client";

import { useState } from "react";

export default function EmpiricalFormulaCalculator() {
  const [massA, setMassA] = useState(0);
  const [massB, setMassB] = useState(0);
  const [atomicMassA, setAtomicMassA] = useState(1);
  const [atomicMassB, setAtomicMassB] = useState(1);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const molesA = massA / atomicMassA;
    const molesB = massB / atomicMassB;
    const ratioA = (molesA / Math.min(molesA, molesB)).toFixed(1);
    const ratioB = (molesB / Math.min(molesA, molesB)).toFixed(1);
    setResult(`A${ratioA}B${ratioB}`);
  };

  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Empirical Formula Calculator
      </h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Mass of Element A (g)"
          value={massA}
          onChange={(e) => setMassA(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Atomic Mass of A"
          value={atomicMassA}
          onChange={(e) => setAtomicMassA(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Mass of Element B (g)"
          value={massB}
          onChange={(e) => setMassB(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Atomic Mass of B"
          value={atomicMassB}
          onChange={(e) => setAtomicMassB(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={calculate}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        {result && <p className="mt-2">Empirical Formula: {result}</p>}
      </div>
    </div>
  );
}
