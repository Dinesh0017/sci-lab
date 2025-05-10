"use client";

import { useState } from "react";

const massUnits = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
};

const accelUnits = {
  "m/s²": 1,
  "cm/s²": 0.01,
  "mm/s²": 0.001,
  "ft/s²": 0.3048,
};

export default function ForceCalculator() {
  const [mass, setMass] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [massUnit, setMassUnit] = useState("kg");
  const [accelUnit, setAccelUnit] = useState("m/s²");

  const [result, setResult] = useState(null);

  const calculate = () => {
    const m = parseFloat(mass) * massUnits[massUnit];
    const a = parseFloat(acceleration) * accelUnits[accelUnit];

    if (!isNaN(m) && !isNaN(a)) {
      const forceN = m * a;
      const forceResults = {
        "Newtons (N)": forceN.toFixed(3),
        "Kilonewtons (kN)": (forceN / 1000).toFixed(3),
        "Dyne": (forceN * 100000).toFixed(3),
        "Pound-force (lbf)": (forceN * 0.224809).toFixed(3),
      };
      setResult(forceResults);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Force Calculator (F = m × a)</h2>

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
        <label className="block mb-1 font-medium">Acceleration:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={acceleration}
            onChange={(e) => setAcceleration(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={accelUnit}
            onChange={(e) => setAccelUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(accelUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Force
      </button>

      {result && (
        <div className="text-lg font-semibold space-y-2">
          <p className="text-primary">Force Results:</p>
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>{label}: <span className="text-primary">{value}</span></p>
          ))}
        </div>
      )}
    </div>
  );
}
