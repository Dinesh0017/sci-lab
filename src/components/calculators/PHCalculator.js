"use client";

import { useState } from "react";

export default function PHCalculator() {
  const [concentration, setConcentration] = useState(0);

  const pH = concentration > 0 ? -Math.log10(concentration) : 0;

  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-primary">pH Calculator</h3>
      <div className="mb-2">
        <label className="block mb-1">Hydrogen Ion Concentration [H<sup>+</sup>] (mol/L)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={concentration}
          onChange={(e) => setConcentration(Number(e.target.value))}
        />
      </div>
      <div className="mt-2 font-medium">
        pH: <span className="text-primary">{pH.toFixed(2)}</span>
      </div>
    </div>
  );
}
