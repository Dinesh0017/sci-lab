"use client";

import { useState } from "react";

export default function IdealGasCalculator() {
  const [pressure, setPressure] = useState(0);
  const [volume, setVolume] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const R = 0.0821; // L·atm/mol·K
  const moles = temperature > 0 ? (pressure * volume) / (R * temperature) : 0;

  return (
    <div className="p-4 bg-background rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-primary">Ideal Gas Law Calculator</h3>
      <div className="mb-2">
        <label className="block mb-1">Pressure (atm)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={pressure}
          onChange={(e) => setPressure(Number(e.target.value))}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Volume (L)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Temperature (K)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
        />
      </div>
      <div className="mt-2 font-medium">
        Moles (n): <span className="text-primary">{moles.toFixed(2)} mol</span>
      </div>
    </div>
  );
}
