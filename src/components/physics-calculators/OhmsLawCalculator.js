"use client";

import { useState } from "react";

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState({});

  const calculate = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);

    const results = {};

    if (!isNaN(V) && !isNaN(I)) {
      results.Resistance = `${(V / I).toFixed(3)} Ω`;
    } else if (!isNaN(V) && !isNaN(R)) {
      results.Current = `${(V / R).toFixed(3)} A`;
    } else if (!isNaN(I) && !isNaN(R)) {
      results.Voltage = `${(I * R).toFixed(3)} V`;
    } else {
      results.Error = "Please provide any two values to calculate the third.";
    }

    setResult(results);
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-primary">Ohm's Law Calculator</h2>

      <div>
        <label className="block font-medium mb-1">Voltage (V):</label>
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full p-2 border rounded bg-white text-black"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Current (I):</label>
        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full p-2 border rounded bg-white text-black"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Resistance (R):</label>
        <input
          type="number"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full p-2 border rounded bg-white text-black"
        />
      </div>

      <button
        onClick={calculate}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate
      </button>

      {Object.keys(result).length > 0 && (
        <div className="text-lg font-semibold space-y-2">
          {Object.entries(result).map(([label, value]) => (
            <p key={label}>
              {label}: <span className="text-primary">{value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
