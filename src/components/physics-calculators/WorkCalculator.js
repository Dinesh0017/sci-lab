"use client";

import { useState } from "react";

const forceUnits = {
  N: 1,
  kN: 1000,
  lbf: 4.44822,
};

const distanceUnits = {
  m: 1,
  cm: 0.01,
  mm: 0.001,
  ft: 0.3048,
};

export default function WorkCalculator() {
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");
  const [forceUnit, setForceUnit] = useState("N");
  const [distanceUnit, setDistanceUnit] = useState("m");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const f = parseFloat(force) * forceUnits[forceUnit];
    const d = parseFloat(distance) * distanceUnits[distanceUnit];

    if (!isNaN(f) && !isNaN(d)) {
      const work = f * d;
      const results = {
        "Joules (J)": work.toFixed(3),
        "Kilojoules (kJ)": (work / 1000).toFixed(3),
        "Calories (cal)": (work / 4.184).toFixed(3),
        "Watt-hours (Wh)": (work / 3600).toFixed(6),
      };
      setResult(results);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Work Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Force:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={force}
            onChange={(e) => setForce(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={forceUnit}
            onChange={(e) => setForceUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(forceUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Distance:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border rounded bg-white text-black"
          />
          <select
            value={distanceUnit}
            onChange={(e) => setDistanceUnit(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(distanceUnits).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Work
      </button>

      {result && (
        <div className="text-lg font-semibold space-y-2">
          <p className="text-primary">Work Results:</p>
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>{label}: <span className="text-primary">{value}</span></p>
          ))}
        </div>
      )}
    </div>
  );
}
