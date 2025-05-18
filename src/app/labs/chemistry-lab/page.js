// app/lab/chemistry/page.js
"use client";

import React from "react";

import periodicElements from "./data/elements.json";

const groups = [
  { name: "Alkali Metals", elements: ["Li", "Na", "K", "Rb", "Cs", "Fr"] },
  { name: "Alkaline Earth Metals", elements: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"] },
  { name: "Transition Metals", elements: ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"] },
  { name: "Halogens", elements: ["F", "Cl", "Br", "I", "At", "Ts"] },
  { name: "Noble Gases", elements: ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"] },
];

const bonds = [
  { type: "Ionic Bond", description: "Transfer of electrons between atoms, typically metal and non-metal." },
  { type: "Covalent Bond", description: "Sharing of electrons between atoms, usually non-metals." },
  { type: "Metallic Bond", description: "Pooling of electrons among metal atoms." },
];

export default function ChemistryLab() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
        Chemistry Lab: Periodic Table & Basics
      </h1>

      {/* Periodic Table Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Periodic Table (Elements 1-103)</h2>
        <div className="grid grid-cols-18 gap-1 bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          {/* Create a 7 row, 18 column grid*/}
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 18 }).map((_, col) => {
              const element = periodicElements.find(
                (el) => el.x === col + 1 && el.y === row + 1
              );

              return (
                <div
                  key={`${row}-${col}`}
                  className={`w-14 h-16 border border-gray-300 rounded flex flex-col items-center justify-center text-xs select-none
                    ${element ? "bg-indigo-100 hover:bg-indigo-200 cursor-pointer" : "bg-transparent"}
                  `}
                  title={element ? `${element.name} (${element.symbol}), Atomic Number: ${element.number}` : ""}
                >
                  {element ? (
                    <>
                      <span className="font-bold text-indigo-800">{element.symbol}</span>
                      <span className="text-gray-600 text-[10px]">{element.number}</span>
                    </>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Atomic Structure */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Atomic Structure Basics</h2>
        <p className="mb-2">
          Atoms consist of a nucleus containing protons and neutrons, with electrons orbiting in shells around it.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li><b>Protons:</b> Positively charged particles in the nucleus.</li>
          <li><b>Neutrons:</b> Neutral particles in the nucleus.</li>
          <li><b>Electrons:</b> Negatively charged particles orbiting the nucleus.</li>
          <li><b>Atomic Number:</b> Number of protons, defines the element.</li>
          <li><b>Mass Number:</b> Sum of protons and neutrons.</li>
        </ul>
      </section>

      {/* Groups and Families */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Common Groups / Families</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.name} className="border border-indigo-200 p-4 rounded-md shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-indigo-800 mb-2">{group.name}</h3>
              <p className="mb-2 text-gray-700">Typical Elements: {group.elements.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chemical Bonds */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Basic Chemical Bonds</h2>
        <ul className="space-y-3">
          {bonds.map(({ type, description }) => (
            <li
              key={type}
              className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-md shadow-sm"
              title={description}
            >
              <h3 className="font-semibold text-indigo-700">{type}</h3>
              <p className="text-gray-700">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Facts */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Quick Chemistry Facts</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Water (H<sub>2</sub>O) is the universal solvent.</li>
          <li>The pH scale measures acidity or basicity (0 acidic - 14 basic).</li>
          <li>Chemical reactions involve rearrangement of atoms, not creation/destruction.</li>
          <li>Carbon is the basis for organic chemistry.</li>
          <li>Periodic trends include electronegativity, atomic radius, and ionization energy.</li>
        </ul>
      </section>
    </main>
  );
}
