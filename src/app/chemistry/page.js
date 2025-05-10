// app/chemistry/page.jsx
import MolarityCalculator from "@/components/chemistry-calculators/MolarityCalculator";
import PHCalculator from "@/components/chemistry-calculators/PHCalculator";
import DilutionCalculator from "@/components/chemistry-calculators/DilutionCalculator";
import EmpiricalFormulaCalculator from "@/components/chemistry-calculators/EmpiricalFormulaCalculator";
import LimitingReactantCalculator from "@/components/chemistry-calculators/LimitingReactantCalculator";
import PercentCompositionCalculator from "@/components/chemistry-calculators/PercentCompositionCalculator";
import IdealGasCalculator from "@/components/chemistry-calculators/IdealGasCalculator";
import React from "react";
// import other calculators similarly...

export default function ChemistryPage() {
  return (
    <section className="p-6 ml-0 md:ml-16">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
        style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
      >
        Chemistry Experiments & Calculators
      </h1>

      {/* -- Molarity Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Molarity Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate the concentration of a solution in moles per liter (mol/L) using the amount of solute and volume of solution.
        </p>
        <MolarityCalculator />
      </div>

      {/* -- pH Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          pH Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate the pH of a solution based on its concentration of hydrogen ions (H+).
        </p>
        <PHCalculator />
      </div>

      {/* -- Dilution Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Dilution Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate the final concentration of a solution after dilution using the initial concentration and volume.
        </p>
        <DilutionCalculator />
      </div>

      {/* -- Empirical Formula Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Empirical Formula Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Determine the empirical formula of a compound based on the mass or percentage composition of its elements.
        </p>
        <EmpiricalFormulaCalculator />
      </div>

      {/* -- Limiting Reactant Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Limiting Reactant Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Identify the limiting reactant in a chemical reaction based on the amounts of reactants used.
        </p>
        <LimitingReactantCalculator />
      </div>

      {/* -- Percent Composition Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Percent Composition Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate the percent composition of each element in a compound based on its molecular formula.
        </p>
        <PercentCompositionCalculator />
      </div>

      {/* -- Ideal Gas Calculator -- */}
      <div className="bg-blue-200/80 p-10 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary">
          Ideal Gas Calculator
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-secondary">
          Calculate the properties of an ideal gas using the ideal gas law (PV = nRT).
        </p>
        <IdealGasCalculator />
      </div>
      
    </section>
  );
}
