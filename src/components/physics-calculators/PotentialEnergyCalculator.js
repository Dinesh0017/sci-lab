"use client";

import { useState } from "react";

const massUnits = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
};

const heightUnits = {
  m: 1,
  cm: 0.01,
  mm: 0.001,
  ft: 0.3048,
};

const g = 9.80665; // acceleration due to gravity in m/s^2

export default function PotentialEnergyCalculator() {
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [massUnit, setMassUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("m");

  const [result, setResult] = useState(null);

  const calculate = () => {
    const m = parseFloat(mass) * massUnits[massUnit];
    const h = parseFloat(height) * heightUnits[heightUnit];

    if (!isNaN(m) && !isNaN(h)) {
      const pe = m * g * h;
      const results = {
        "Joules (J)": pe.toFixed(3),
        "Kilojoules (kJ)": (pe / 1000).toFixed(3),
        "Calories (cal)": (pe / 4.184).toFixed(3),
        "Watt-hours (Wh)": (pe / 3600).toFixed(6),
      };
      setResult(results);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Potential Energy Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Mass:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={massUnit}
            onChange={(e) => setMassUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(massUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Height:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(heightUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate PE
      </button>

      {result && (
        <div className="text-lg font-semibold space-y-2">
          <p className="text-primary">Potential Energy Results:</p>
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>{label}: <span className="text-primary">{value}</span></p>
          ))}
        </div>
      )}
    </div>
  );
}
