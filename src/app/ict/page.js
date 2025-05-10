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
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Number System Converter
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-secondary">
            Convert between{" "}
            <span className="text-black font-semibold">binary</span>,{" "}
            <sapn className="text-black font-semibold">decimal</sapn>,{" "}
            <sapn className="text-black font-semibold">octal</sapn> and{" "}
            <span className="text-black font-semibold">hexadecimal</span> number
            systems.
          </p>
          <NumberSystemConverter />
        </div>
      </div>

      <div className="mb-10">
        <div className="bg-blue-200/80 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Bitwise Calculator
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-secondary">
            Perform bitwise operations like{" "}
            <span className="text-black font-semibold">AND</span>,{" "}
            <span className="text-black font-semibold">OR</span>,{" "}
            <span className="text-black font-semibold">XOR</span>,{" "}
            <span className="text-black font-semibold">NOT</span>, and{" "}
            <span className="text-black font-semibold">Shifts</span>.
          </p>
          <BitwiseCalculator />
        </div>
      </div>

      <div className="mb-10">
        <div className="bg-blue-200/80 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
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
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Data Rate Converter
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-secondary">
            Convert between different data rates <span className="text-black font-semibold">(bps, Kbps, Mbps, Gbps)</span>.
          </p>
          <DataRateConverter />
        </div>
      </div>

      <div className="mb-10">
        <div className="bg-blue-200/80 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
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
