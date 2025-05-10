"use client";

import { useState } from "react";

const units = ["bps", "Kbps", "Mbps", "Gbps"];
const conversionFactor = {
  bps: 1,
  Kbps: 1_000,
  Mbps: 1_000_000,
  Gbps: 1_000_000_000,
};

export default function DataRateConverter() {
  const [inputValue, setInputValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("Mbps");
  const [toUnit, setToUnit] = useState("Kbps");

  const convert = (value, from, to) => {
    return (value * conversionFactor[from]) / conversionFactor[to];
  };

  const convertedValue = convert(inputValue, fromUnit, toUnit);

  return (
    <div className="p-6 max-w-xl mx-auto bg-background text-foreground rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-primary">Data Rate Converter</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Enter Value:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="w-full p-2 border rounded bg-white text-black"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium">From:</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium">To:</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-lg font-semibold">
        Result: <span className="text-primary">{convertedValue.toFixed(3)} {toUnit}</span>
      </div>
    </div>
  );
}
