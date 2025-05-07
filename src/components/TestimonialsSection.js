"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

// Autoplay plugin
function AutoPlayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000); // 3 seconds delay
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const testimonials = [
  {
    name: "Anjali Silva",
    role: "A/L Student",
    quote:
      "SciLab360 made science easier to understand. The simulations are just like being in a real lab!",
    image: "/assets/images/girl.jpeg",
  },
  {
    name: "Mr. Perera",
    role: "Science Teacher",
    quote:
      "My students are more engaged and perform better in practicals thanks to SciLab360.",
    image: "/assets/images/girl.jpeg",
  },
  {
    name: "Nadeesha Kumarasinghe",
    role: "Lab Instructor",
    quote:
      "This platform is a game-changer for practical science education in Sri Lanka.",
    image: "/assets/images/girl.jpeg",
  },
  {
    name: "Ruwan Fernando",
    role: "Parent",
    quote:
      "My daughter loves using SciLab360. She’s learning with excitement and ease!",
    image: "/assets/images/girl.jpeg",
  },
];

export default function TestimonialsSection() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 1,
        spacing: 24,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 24 },
        },
      },
    },
    [AutoPlayPlugin] // 👈 Add autoplay plugin
  );

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold">What Our Users Say</h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="keen-slider__slide bg-background text-foreground p-6 rounded-lg shadow-lg text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
              <p className="text-sm italic">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
