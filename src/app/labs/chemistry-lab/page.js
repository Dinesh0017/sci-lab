"use client";

import React from "react";
import periodicElements from "./data/elements.json";

const groups = [
  { name: "Alkali Metals", elements: ["Li", "Na", "K", "Rb", "Cs", "Fr"], color: "bg-red-200 text-red-800" },
  { name: "Alkaline Earth Metals", elements: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"], color: "bg-yellow-200 text-yellow-800" },
  { name: "Transition Metals", elements: ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"], color: "bg-green-200 text-green-800" },
  { name: "Halogens", elements: ["F", "Cl", "Br", "I", "At", "Ts"], color: "bg-purple-200 text-purple-800" },
  { name: "Noble Gases", elements: ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"], color: "bg-blue-200 text-blue-800" },
];

const bonds = [
  { type: "Ionic Bond", description: "Transfer of electrons between atoms, typically metal and non-metal." },
  { type: "Covalent Bond", description: "Sharing of electrons between atoms, usually non-metals." },
  { type: "Metallic Bond", description: "Pooling of electrons among metal atoms." },
];

// Helper to get color for an element symbol from groups
function getGroupColor(symbol) {
  for (const group of groups) {
    if (group.elements.includes(symbol)) return group.color;
  }
  return "bg-gray-200 text-gray-700";
}

export default function ChemistryLab() {
  return (
    <main className="min-h-screen bg-primary text-white p-4 sm:p-6 md:p-10 mx-5">
      <h1
        className="text-center text-3xl sm:text-4xl font-bold mb-4 text-textprimary drop-shadow-md"
      >
        Periodic Table & Basics
      </h1>

      {/* Periodic Table Section */}
      <section className="mb-12 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-300">Periodic Table (Elements 1-103)</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
          <div
            className="inline-grid grid-rows-7 grid-cols-18 gap-1 bg-white p-2 min-w-[700px] sm:min-w-[1205px]"
            aria-label="Periodic Table"
          >
            {/* 7 rows x 18 cols */}
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 18 }).map((_, col) => {
                const element = periodicElements.find(el => el.x === col + 1 && el.y === row + 1);
                const colorClasses = element ? getGroupColor(element.symbol) : "";
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`w-12 sm:w-14 h-16 sm:h-20 rounded-md border border-gray-300 flex flex-col items-center justify-center text-xs sm:text-sm select-none
                    ${element ? `cursor-pointer ${colorClasses} hover:brightness-105` : "bg-transparent"}`}
                    title={element ? `${element.name} (${element.symbol}), Atomic Number: ${element.number}` : ""}
                    role={element ? "button" : undefined}
                    tabIndex={element ? 0 : undefined}
                  >
                    {element ? (
                      <>
                        <span className="font-bold">{element.symbol}</span>
                        <span className="text-gray-800 text-[9px] sm:text-xs">{element.number}</span>
                      </>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Atomic Structure */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Atomic Structure Basics</h2>
        <p className="mb-3 text-base sm:text-lg">
          Atoms consist of a nucleus containing protons and neutrons, with electrons orbiting in shells around it.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
          <li><b>Protons:</b> Positively charged particles in the nucleus.</li>
          <li><b>Neutrons:</b> Neutral particles in the nucleus.</li>
          <li><b>Electrons:</b> Negatively charged particles orbiting the nucleus.</li>
          <li><b>Atomic Number:</b> Number of protons, defines the element.</li>
          <li><b>Mass Number:</b> Sum of protons and neutrons.</li>
        </ul>
      </section>

      {/* Groups and Families */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Common Groups / Families</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(group => (
            <div
              key={group.name}
              className={`border ${group.color.replace("bg-", "border-")} p-4 rounded-md shadow-sm hover:shadow-md transition cursor-default`}
            >
              <h3 className={`font-semibold mb-2 ${group.color.replace("bg-", "text-")}`}>{group.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base">Typical Elements: {group.elements.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chemical Bonds */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Basic Chemical Bonds</h2>
        <ul className="space-y-4">
          {bonds.map(({ type, description }) => (
            <li
              key={type}
              className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-md shadow-sm"
              title={description}
            >
              <h3 className="font-semibold text-indigo-700">{type}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Facts */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Quick Chemistry Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Water (H<sub className="align-super">2</sub>O) is the universal solvent.</li>
          <li>The pH scale measures acidity or basicity (0 acidic - 14 basic).</li>
          <li>Chemical reactions involve rearrangement of atoms, not creation/destruction.</li>
          <li>Carbon is the basis for organic chemistry.</li>
          <li>Periodic trends include electronegativity, atomic radius, and ionization energy.</li>
        </ul>
      </section>
    </main>
  );
}
