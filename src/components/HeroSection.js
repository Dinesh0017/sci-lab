'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="text-foreground mb-5 px-6 bg-blue-200/80 py-10 mx-5">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <p
            className="text-textprimary text-xl sm:text-2xl font-semibold tracking-wide"
            style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
          >
            Interactive Science Education
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary">
            Explore. Experiment. Understand.
          </h1>

          <p className="text-secondary text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Welcome to SciLab360 — where physics, chemistry, and ICT come alive
            through hands-on simulations and dynamic learning experiences.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <button
              onClick={() => router.push("/learning")}
              className="bg-buttonprimary hover:bg-buttonhover text-white px-6 py-3 rounded-lg transition duration-300 shadow-md"
            >
              Start Learning
            </button>
            <button
              onClick={() => router.push("/simulations")}
              className="bg-background text-buttontext border border-buttontext hover:bg-buttonhover hover:text-white px-6 py-3 rounded-lg transition duration-300 shadow-md"
            >
              Explore Simulations
            </button>
          </div>
        </div>

        {/* 2x2 Image Grid Section */}
        <div className="hidden lg:grid grid-cols-2 gap-6 w-fit">
          {/* Images (same as before) */}
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={index}
              className={`w-60 h-60 overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300 ${
                num === 1 ? "rounded-tl-[5rem]" : num === 4 ? "rounded-br-[5rem]" : ""
              }`}
            >
              <Image
                src={`/assets/images/hero${num}.jpg`}
                alt={`Person ${num}`}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-2 border-gray-400" />
    </section>
  );
}
