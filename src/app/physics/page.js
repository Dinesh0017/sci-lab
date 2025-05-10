"use client";
import SpeedDistanceTimeCalculator from "@/components/physics-calculators/SpeedDistanceTimeCalculator";
import ForceCalculator from "@/components/physics-calculators/ForceCalculator";

export default function PhysicsPage() {
  return (
      <section className="p-6 ml-0 md:ml-16">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
        style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
      >
        Physics Calculators
      </h1>
      <div className="mb-10">
        <div className="bg-blue-200/80 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-secondary">
            Speed · Distance · Time Calculator
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-secondary">
            Calculate speed, distance, or time using the formula: speed = distance/time.
          </p>
          <SpeedDistanceTimeCalculator />
        </div>
      </div>

      <div className="mb-10">
        <div className="bg-blue-200/80 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-secondary">
            Force Calculator (F = m × a)
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-secondary">
            Calculate force using the formula: F = m × a.
          </p>
          <ForceCalculator />
        </div>
      </div>
        
      </section>
  );
}
