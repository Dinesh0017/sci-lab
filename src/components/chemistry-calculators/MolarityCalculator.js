// components/calculators/MolarityCalculator.jsx
"use client";
import { useState } from "react";

export default function MolarityCalculator() {
  const [mass, setMass] = useState("");
  const [molarMass, setMolarMass] = useState("");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState(null);

  const calculateMolarity = () => {
    const mol = parseFloat(mass) / parseFloat(molarMass);
    const molarity = mol / parseFloat(volume);
    setResult(molarity.toFixed(3));
  };

  return (
    <div className="bg-background text-foreground max-w-xl mx-auto p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-primary mb-4">Molarity Calculator</h2>
      <div className="space-y-4">
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          placeholder="Mass of solute (g)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={molarMass}
          onChange={(e) => setMolarMass(e.target.value)}
          placeholder="Molar mass (g/mol)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="Volume of solution (L)"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={calculateMolarity}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
        {result && (
          <p className="text-lg text-textprimary mt-2">
            Molarity = <strong>{result} mol/L</strong>
          </p>
        )}
      </div>
    </div>
  );
}
