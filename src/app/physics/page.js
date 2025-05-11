"use client";
import SpeedDistanceTimeCalculator from "@/components/physics-calculators/SpeedDistanceTimeCalculator";
import ForceCalculator from "@/components/physics-calculators/ForceCalculator";
import KineticEnergyCalculator from "@/components/physics-calculators/KineticEnergyCalculator";
import PotentialEnergyCalculator from "@/components/physics-calculators/PotentialEnergyCalculator";
import WorkCalculator from "@/components/physics-calculators/WorkCalculator";
import OhmsLawCalculator from "@/components/physics-calculators/OhmsLawCalculator";
import MomentumCalculator from "@/components/physics-calculators/MomentumCalculator";
import React from "react";

export default function PhysicsPage() {
  return (
    <section className="p-6 ml-0 md:ml-16">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
        style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
      >
        Physics Calculators
      </h1>

      {/* -- Potential Energy Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Speed · Distance · Time Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate speed, distance, or time using the formula:{" "}
          <span className="text-black font-semibold">
            speed = distance/time
          </span>
          .
        </p>
        <SpeedDistanceTimeCalculator />
      </div>

      {/* -- Force Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Force Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate force using the formula:
          <span className="text-black font-semibold">F = m × a</span> .
        </p>
        <ForceCalculator />
      </div>

      {/* -- Kinetic Energy Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Kinetic Energy Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate kinetic energy using the formula:{" "}
          <span className="text-black font-semibold">KE = 1/2 mv²</span>.
        </p>
        <KineticEnergyCalculator />
      </div>

      {/* -- Potential Energy Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Potential Energy Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate potential energy using the formula:{" "}
          <span className="text-black font-semibold">PE = mgh</span>.
        </p>
        <PotentialEnergyCalculator />
      </div>

      {/* -- Work Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Work Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate work using the formula:{" "}
          <span className="text-black font-semibold">W = F × d</span>.
        </p>
        <WorkCalculator />
      </div>

      {/* --Ohms Law Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Ohm's Law Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate voltage, current, or resistance using the formula:{" "}
          <span className="text-black font-semibold">V = I × R</span>.
        </p>
        <OhmsLawCalculator />
      </div>

      {/* --Momentum Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Momentum Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate momentum using the formula:{" "}
          <span className="text-black font-semibold">p = m × v</span>.
        </p>
        <MomentumCalculator />
      </div>
    </section>
  );
}
