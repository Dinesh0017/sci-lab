"use client";

import { useState } from "react";

const massUnits = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
};

const velocityUnits = {
  "m/s": 1,
  "km/h": 1 / 3.6,
  "cm/s": 0.01,
  "mm/s": 0.001,
  "ft/s": 0.3048,
};

export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [massUnit, setMassUnit] = useState("kg");
  const [velocityUnit, setVelocityUnit] = useState("m/s");

  const [result, setResult] = useState(null);

  const calculate = () => {
    const m = parseFloat(mass) * massUnits[massUnit];
    const v = parseFloat(velocity) * velocityUnits[velocityUnit];

    if (!isNaN(m) && !isNaN(v)) {
      const ke = 0.5 * m * v * v;
      const results = {
        "Joules (J)": ke.toFixed(3),
        "Kilojoules (kJ)": (ke / 1000).toFixed(3),
        "Calories (cal)": (ke / 4.184).toFixed(3),
        "Watt-hours (Wh)": (ke / 3600).toFixed(6),
      };
      setResult(results);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Kinetic Energy Calculator</h2>

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
        <label className="block mb-1 font-medium">Velocity:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={velocityUnit}
            onChange={(e) => setVelocityUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(velocityUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate KE
      </button>

      {result && (
        <div className="text-lg font-semibold space-y-2">
          <p className="text-primary">Kinetic Energy Results:</p>
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>{label}: <span className="text-primary">{value}</span></p>
          ))}
        </div>
      )}
    </div>
  );
}
