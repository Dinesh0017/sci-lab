// components/HeroSection.js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-foreground px-6 lg:py-32 -mt-14 ml-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <p
            className="text-textprimary text-xl sm:text-2xl font-semibold tracking-wide"
            style={{ textShadow: "2px 2px 6px  rgba(147, 197, 253, 0.7)" }}
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
            <button className="bg-buttonprimary hover:bg-buttonhover text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
              Start Learning
            </button>
            <button className="bg-background text-buttontext border border-buttontext hover:bg-buttonhover hover:text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
              Explore Simulations
            </button>
          </div>
        </div>

        {/* 2x2 Image Grid Section */}
        <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
          {/* Top-left image */}
          <div className="w-40 h-40 overflow-hidden rounded-tl-[4rem] shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/images/hero1.jpg"
              alt="Person 1"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-right image */}
          <div className="w-40 h-40 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/images/hero2.jpg"
              alt="Person 2"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left image */}
          <div className="w-40 h-40 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/images/hero3.jpg"
              alt="Person 3"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-right image */}
          <div className="w-40 h-40 overflow-hidden rounded-br-[4rem] shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/images/hero4.jpg"
              alt="Person 4"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="mt-16 border-2 border-gray-300" />
    </section>
  );
}
