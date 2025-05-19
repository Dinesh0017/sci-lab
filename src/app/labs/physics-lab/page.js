"use client";

import React from "react";

const physicsTopics = [
  {
    term: "Newton's Laws of Motion",
    desc: "Three fundamental laws that describe the relationship between a body and the forces acting upon it.",
    details: (
      <>
        <ul className="list-disc list-inside">
          <li>
            <strong>1st Law (Inertia):</strong> A body remains at rest or in
            uniform motion unless acted upon by a force.
          </li>
          <li>
            <strong>2nd Law:</strong> Force = Mass × Acceleration (F = ma).
          </li>
          <li>
            <strong>3rd Law:</strong> For every action, there is an equal and
            opposite reaction.
          </li>
        </ul>
      </>
    ),
  },
  {
    term: "Work, Energy & Power",
    desc: "Core concepts that describe how force causes movement and how energy is transferred.",
    details: (
      <>
        <p>
          <strong>Work:</strong> Force × Distance (in direction of force). Unit:
          Joule (J)
        </p>
        <p>
          <strong>Kinetic Energy:</strong> (1/2)mv² &nbsp;&nbsp;{" "}
          <strong>Potential Energy:</strong> mgh
        </p>
        <p>
          <strong>Power:</strong> Work / Time. Unit: Watt (W)
        </p>
      </>
    ),
  },
  {
    term: "Electricity Basics",
    desc: "Fundamentals of electric charge, current, voltage, resistance, and power.",
    details: (
      <>
        <ul className="list-disc list-inside">
          <li>
            <strong>Current (I):</strong> Flow of electrons. Unit: Ampere (A)
          </li>
          <li>
            <strong>Voltage (V):</strong> Electrical potential difference
          </li>
          <li>
            <strong>Resistance (R):</strong> Opposition to current. Ohm’s Law: V
            = IR
          </li>
          <li>
            <strong>Power (P):</strong> P = VI
          </li>
        </ul>
      </>
    ),
  },
  {
    term: "Waves & Sound",
    desc: "Study of periodic oscillations that transport energy through space or matter.",
    details: (
      <>
        <p>
          <strong>Wave Types:</strong> Transverse (light), Longitudinal (sound)
        </p>
        <p>
          <strong>Speed:</strong> v = f × λ (velocity = frequency × wavelength)
        </p>
        <p>
          <strong>Sound:</strong> Mechanical wave that requires a medium to
          travel.
        </p>
      </>
    ),
  },
  {
    term: "Units & Measurement",
    desc: "SI Units used for accurate scientific calculations and experiments.",
    details: (
      <>
        <ul className="list-disc list-inside">
          <li>
            <strong>Length:</strong> meter (m)
          </li>
          <li>
            <strong>Mass:</strong> kilogram (kg)
          </li>
          <li>
            <strong>Time:</strong> second (s)
          </li>
          <li>
            <strong>Temperature:</strong> kelvin (K)
          </li>
        </ul>
        <p>
          Always use SI units when solving physics problems unless specified
          otherwise.
        </p>
      </>
    ),
  },
];

export default function PhysicsLabPage() {
  return (
    <main className="min-h-screen bg-primary text-white p-6 mx-5">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          🔬{" "}
          <span
            className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
            style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
          >
            Physics Lab Essentials
          </span>
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Understand the key building blocks of physics! Here are simplified
          explanations of some of the most important topics you’ll study.
        </p>

        <ul className="space-y-6">
          {physicsTopics.map(({ term, desc, details }) => (
            <li
              key={term}
              className="bg-white text-black p-6 rounded-lg shadow-lg transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-2">{term}</h2>
              <p className="mb-3 text-gray-700">{desc}</p>
              <div className="text-gray-700 prose prose-sm max-w-none">
                {details}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
