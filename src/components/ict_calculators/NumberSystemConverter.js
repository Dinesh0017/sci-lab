"use client";

import { useState } from "react";

const bases = [
  { label: "Binary", value: 2 },
  { label: "Octal", value: 8 },
  { label: "Decimal", value: 10 },
  { label: "Hexadecimal", value: 16 },
];

function convertBase(input, fromBase, toBase) {
  if (!input) return "";
  try {
    const parsed = parseInt(input, fromBase);
    if (isNaN(parsed)) return "Invalid Input";
    return parsed.toString(toBase).toUpperCase();
  } catch {
    return "Invalid Input";
  }
}

export default function ICTConverter() {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  const result = convertBase(inputValue, fromBase, toBase);

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary">Number System Converter</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block mb-1 font-medium">From</label>
          <select
            className="w-full p-2 border rounded text-primary"
            value={fromBase}
            onChange={(e) => setFromBase(Number(e.target.value))}
          >
            {bases.map((base) => (
              <option key={base.value} value={base.value}>
                {base.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">To</label>
          <select
            className="w-full p-2 border rounded text-primary"
            value={toBase}
            onChange={(e) => setToBase(Number(e.target.value))}
          >
            {bases.map((base) => (
              <option key={base.value} value={base.value}>
                {base.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Input Value</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="text-lg font-semibold text-center">
        Result: <span className="text-primary">{result}</span>
      </div>
    </div>
  );
}
