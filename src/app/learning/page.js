
"use client";

import Link from "next/link";

const subjects = [
  {
    title: "Physics",
    description: "Learn the core principles: motion, energy, forces, electricity, and waves.",
    href: "/labs/physics-lab",
    color: "bg-blue-200",
  },
  {
    title: "Chemistry",
    description: "Explore atoms, reactions, bonding, and the periodic table.",
    href: "/labs/chemistry-lab",
    color: "bg-pink-200",
  },
  {
    title: "ICT",
    description: "Master binary, networks, data flow, and digital systems.",
    href: "/labs/ict-lab",
    color: "bg-green-200",
  },
];

export default function StartLearningPage() {
  return (
    <main className="min-h-screen bg-primary text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">📘 Start Learning</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {subjects.map(({ title, description, href, color }) => (
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
