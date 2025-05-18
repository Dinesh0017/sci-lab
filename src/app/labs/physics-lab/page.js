// app/games/physics-game/page.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const components = [
  { name: "Battery", voltage: 1.5 },
  { name: "Wire", resistance: 1 },
  { name: "Bulb", requiredVoltage: 1.5 },
];

export default function PhysicsGame() {
  const [circuit, setCircuit] = useState([]);
  const [result, setResult] = useState(null);

  const onDrop = (e) => {
    const comp = e.dataTransfer.getData("text");
    setCircuit((prev) => [...prev, comp]);
  };

  const buildCircuit = () => {
    const hasBattery = circuit.includes("Battery");
    const hasBulb = circuit.includes("Bulb");
    const hasWire = circuit.includes("Wire");
    if (hasBattery && hasBulb && hasWire) {
      setResult("💡 Bulb Lights Up! Circuit is Complete");
    } else {
      setResult("⚠️ Incomplete Circuit. Try Again.");
    }
  };

  return (
    <main className="min-h-screen bg-muted text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Build a Simple Circuit</h1>
      <p className="mb-6 text-center max-w-xl">
        Drag and drop components to the circuit board. Try to light the bulb by
        completing the circuit!
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {components.map((comp, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text", comp.name)}
            className="bg-white text-black px-4 py-2 rounded shadow cursor-grab hover:shadow-xl"
          >
            {comp.name}
          </div>
        ))}
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="w-full max-w-lg min-h-[200px] bg-white text-black border-4 border-dashed border-yellow-400 rounded-xl flex flex-wrap gap-4 p-4 justify-center items-center"
      >
        {circuit.length === 0
          ? "Drop components here"
          : circuit.map((c, i) => (
              <motion.div
                key={c + i}
                className="bg-yellow-100 text-black px-3 py-2 rounded shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {c}
              </motion.div>
            ))}
      </div>

      <button
        onClick={buildCircuit}
        className="mt-6 bg-primary text-white px-6 py-2 rounded hover:bg-yellow-700"
      >
        Test Circuit
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-2xl"
        >
          {result}
        </motion.div>
      )}
    </main>
  );
}