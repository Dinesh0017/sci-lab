"use client";

import { useState } from "react";

export default function DilutionCalculator() {
  const [c1, setC1] = useState(0);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);

  const c2 = v2 > 0 ? (c1 * v1) / v2 : 0;

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h3 className="text-xl font-semibold mb-2 text-primary">Dilution Calculator</h3>
      <div className="mb-2">
        <label className="block mb-1">Initial Concentration (C1 in mol/L)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={c1}
          onChange={(e) => setC1(Number(e.target.value))}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Initial Volume (V1 in L)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={v1}
          onChange={(e) => setV1(Number(e.target.value))}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Final Volume (V2 in L)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={v2}
          onChange={(e) => setV2(Number(e.target.value))}
        />
      </div>
      <div className="mt-2 font-medium">
        Final Concentration (C2): <span className="text-primary">{c2.toFixed(2)} mol/L</span>
      </div>
    </div>
  );
}