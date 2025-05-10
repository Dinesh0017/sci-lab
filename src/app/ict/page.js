import BitwiseCalculator from "@/components/ict-calculators/BitwiseCalculator";
import DataRateConverter from "@/components/ict-calculators/DataRateConverter";
import NumberSystemConverter from "@/components/ict-calculators/NumberSystemConverter";
import SubnetCalculator from "@/components/ict-calculators/SubnetCalculator";
import PingTimeCalculator from "@/components/ict-calculators/PingTimeCalculator";

export default function ICTPage() {
  return (
    <section className="p-6 ml-0 md:ml-16">
  <h1
    className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
    style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
  >
    ICT Calculators
  </h1>

  <div className="mb-10">
    <div className="bg-blue-200/80 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Number System Converter
      </h2>
      <p className="text-lg text-muted-foreground mb-4 text-secondary">
        Convert between binary, decimal, and hexadecimal number systems.
      </p>
      <NumberSystemConverter />
    </div>
  </div>

  <div className="mb-10">
    <div className="bg-blue-200/80 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Bitwise Calculator
      </h2>
      <p className="text-lg text-muted-foreground mb-4 text-secondary">
        Perform bitwise operations like AND, OR, XOR, NOT, and shifts.
      </p>
      <BitwiseCalculator />
    </div>
  </div>

  <div className="mb-10">
    <div className="bg-blue-200/80 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Subnet Calculator
      </h2>
      <p className="text-lg text-muted-foreground mb-4 text-secondary">
        Calculate subnets and IP addresses.
      </p>
      <SubnetCalculator />
    </div>
  </div>

  <div className="mb-10">
    <div className="bg-blue-200/80 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Data Rate Converter
      </h2>
      <p className="text-lg text-muted-foreground mb-4 text-secondary">
        Convert between different data rates (bps, Kbps, Mbps, Gbps).
      </p>
      <DataRateConverter />
    </div>
  </div>

  <div className="mb-10">
    <div className="bg-blue-200/80 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Ping Time Calculator
      </h2>
      <p className="text-lg text-muted-foreground mb-4 text-secondary">
        Estimate ping time based on packet size and bandwidth.
      </p>
      <PingTimeCalculator />
    </div>
  </div>

</section>

  );
}
