
"use client";

import Link from "next/link";

const simulationLinks = [
  {
    title: "Physics Simulations",
    description: "Try hands-on experiments like motion, gravity, and waves.",
    href: "/simulations/physics",
    color: "bg-yellow-200",
  },
  {
    title: "Chemistry Simulations",
    description: "Perform virtual labs like titration, salt prep, and reaction rates.",
    href: "/simulations/chemistry",
    color: "bg-red-200",
  },
  {
    title: "ICT Simulations",
    description: "Interactive tools like subnetting, binary converters, and networks.",
    href: "/simulations/ict",
    color: "bg-indigo-200",
  },
];

export default function ExploreSimulationsPage() {
  return (
    <main className="min-h-screen bg-primary text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">🧪 Explore Simulations</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {simulationLinks.map(({ title, description, href, color }) => (
            <Link key={title} href={href}>
              <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl cursor-pointer transition ${color}`}>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-black">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
