// components/HeroSection.js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-foreground px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-textprimary text-2xl font-semibold">Marketing</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
            Solutions that help <br /> businesses grow
          </h1>
          <p className="text-secondary max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            faucibus convallis semper condimentum.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <button className="bg-buttonprimary hover:bg-buttonhover text-white px-6 py-3 rounded-lg transition">
              Contact
            </button>
            <button className="bg-background text-buttontext border border-buttontext hover:bg-buttonhover hover:text-white px-6 py-3 rounded-lg transition">
              Services
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
    </section>
  );
}
