// app/chemistry/page.jsx
import MolarityCalculator from "@/components/calculators/MolarityCalculator";
import PHCalculator from "@/components/calculators/PHCalculator";
import DilutionCalculator from "@/components/calculators/DilutionCalculator";
import EmpiricalFormulaCalculator from "@/components/calculators/EmpiricalFormulaCalculator";
import LimitingReactantCalculator from "@/components/calculators/LimitingReactantCalculator";
import PercentCompositionCalculator from "@/components/calculators/PercentCompositionCalculator";
import IdealGasCalculator from "@/components/calculators/IdealGasCalculator";
import React from "react";
// import other calculators similarly...

export default function ChemistryPage() {
  return (
    <section className="p-6 ml-0 md:ml-54">
      <h1  className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
          style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}>
        Chemistry Experiments & Calculators
      </h1>

      {/* -- Molarity Calculator -- */}
      <div className="mb-10">
        <MolarityCalculator />
      </div>

      {/* -- PH Calculator -- */}
      <div className="mb-10">
        < PHCalculator />
      </div>

      {/* -- Dilution Calculator -- */}
      <div className="mb-10">
        <DilutionCalculator />
      </div>

      {/* -- EmpiricalFormulaCalculator -- */}
      <div className="mb-10">
        <EmpiricalFormulaCalculator />
      </div>

      {/* -- LimitingReactantCalculator -- */}
      <div className="mb-10">
        <LimitingReactantCalculator />
      </div>

      {/* -- PercentCompositionCalculator -- */}
      <div className="mb-10">
        <PercentCompositionCalculator />
      </div>
      
      {/*-- Ideal Gas Calculator -- */}
      <div className="mb-10">
        <IdealGasCalculator />
      </div>
        
      
    </section>
  );
}
