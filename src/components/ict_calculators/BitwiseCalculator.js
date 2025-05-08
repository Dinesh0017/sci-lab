"use client";

import { useState } from "react";

export default function BitwiseCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("AND");

  const compute = () => {
    switch (operation) {
      case "AND": return num1 & num2;
      case "OR": return num1 | num2;
      case "XOR": return num1 ^ num2;
      case "NOT1": return ~num1;
      case "NOT2": return ~num2;
      case "LEFT": return num1 << num2;
      case "RIGHT": return num1 >> num2;
      default: return 0;
    }
  };

  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-bold text-primary mb-4">Bitwise Calculator</h3>
      <div className="mb-2">
        <label>Number 1:</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
        />
      </div>
      <div className="mb-2">
        <label>Number 2:</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
        />
      </div>
      <div className="mb-2">
        <label>Operation:</label>
        <select
          className="w-full p-2 border rounded"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOT1">NOT (Num1)</option>
          <option value="NOT2">NOT (Num2)</option>
          <option value="LEFT">LEFT SHIFT</option>
          <option value="RIGHT">RIGHT SHIFT</option>
        </select>
      </div>
      <div className="mt-4 font-semibold">
        Result: <span className="text-primary">{compute()}</span>
      </div>
    </div>
  );
}
