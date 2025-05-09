"use client";

import { useState } from "react";

export default function PercentCompositionCalculator() {
  const [massElement, setMassElement] = useState(0);
  const [massCompound, setMassCompound] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (massCompound === 0) return;
    const percent = (massElement / massCompound) * 100;
    setResult(percent.toFixed(2));
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Percent Composition Calculator
      </h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Mass of element (g)"
          value={massElement}
          onChange={(e) => setMassElement(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Mass of compound (g)"
          value={massCompound}
          onChange={(e) => setMassCompound(parseFloat(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={calculate}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        {result !== null && (
          <p className="mt-2">Percent Composition: {result}%</p>
        )}
      </div>
    </div>
  );
}
