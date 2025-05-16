// app/games/chemistry-game/page.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChemistryGame() {
  const [molecule, setMolecule] = useState([]);
  const [isH2OFormed, setIsH2OFormed] = useState(false);

  const dropAtom = (e) => {
    const atom = e.dataTransfer.getData("text");
    setMolecule((prev) => [...prev, atom]);
  };

  const checkMolecule = () => {
    const hCount = molecule.filter((a) => a === "Hydrogen").length;
    const oCount = molecule.filter((a) => a === "Oxygen").length;
    if (hCount === 2 && oCount === 1) setIsH2OFormed(true);
  };

  return (
    <main className="min-h-screen bg-primary text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Create a Water Molecule</h1>
      <p className="mb-6 text-center max-w-xl">
        Drag atoms onto the reaction board to build H₂O. You need 2 Hydrogen and
        1 Oxygen atom.
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {["Hydrogen", "Oxygen", "Carbon", "Nitrogen"].map((atom, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text", atom)}
            className="bg-white text-black px-4 py-2 rounded shadow cursor-grab hover:shadow-xl"
          >
            {atom}
          </div>
        ))}
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={dropAtom}
        className="w-full max-w-lg min-h-[200px] bg-white text-black border-4 border-dashed border-green-300 rounded-xl flex flex-wrap gap-4 p-4 justify-center items-center"
      >
        {molecule.length === 0
          ? "Drop atoms here"
          : molecule.map((a, i) => (
              <motion.div
                key={a + i}
                className="bg-green-200 text-black px-3 py-2 rounded shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {a}
              </motion.div>
            ))}
      </div>

      <button
        onClick={checkMolecule}
        className="mt-6 bg-primary text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Check Molecule
      </button>

      {isH2OFormed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-2xl text-green-400"
        >
          💧 H₂O Formed Successfully!
        </motion.div>
      )}
    </main>
  );
}
