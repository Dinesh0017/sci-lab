import NumberSystemConverter from "@/components/ict_calculators/NumberSystemConverter";

export default function ICTPage() {
  return (
       <section className="p-6 ml-0 md:ml-54">
            <h1  className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
                style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}>
              ICT Calculators
            </h1>
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Number System Converter</h2>
              <p className="text-lg text-muted-foreground mb-4 text-secondary">
                Convert between binary, decimal, and hexadecimal number systems.
              </p>
              <NumberSystemConverter />
            </div>
              
            
          </section>
  );
}
