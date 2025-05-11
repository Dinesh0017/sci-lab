"use client";

import { useState } from "react";

const massUnits = {
  kg: 1,
  g: 0.001,
  t: 1000,
};

const velocityUnits = {
  "m/s": 1,
  "km/h": 1 / 3.6,
  "mph": 0.44704,
  "ft/s": 0.3048,
};

export default function MomentumCalculator() {
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [massUnit, setMassUnit] = useState("kg");
  const [velocityUnit, setVelocityUnit] = useState("m/s");
  const [momentum, setMomentum] = useState(null);

  const calculateMomentum = () => {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);

    if (!isNaN(m) && !isNaN(v)) {
      const mInKg = m * massUnits[massUnit];
      const vInMs = v * velocityUnits[velocityUnit];
      const pKgMs = mInKg * vInMs;
      setMomentum({
        "kg·m/s": pKgMs,
        "g·cm/s": pKgMs * 1000 * 100,
        "t·km/h": m * v,
      });
    } else {
      setMomentum(null);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-background text-foreground rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-primary">Momentum Calculator</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Mass:</label>
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
        <label className="block font-medium mb-1">Velocity:</label>
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
        onClick={calculateMomentum}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Momentum
      </button>

      {momentum && (
        <div className="text-lg font-semibold space-y-2">
          <p className="text-primary">Momentum:</p>
          {Object.entries(momentum).map(([unit, value]) => (
            <p key={unit}>{unit}: <span className="text-primary">{value.toFixed(3)}</span></p>
          ))}
        </div>
      )}
    </div>
  );
}