"use client";
import { motion } from "framer-motion";
import { Lightbulb, FlaskConical, Cpu } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Lightbulb size={32} className="text-textprimary" />,
      title: "Interactive Learning",
      desc: "Hands-on simulations that make science exciting and memorable.",
    },
    {
      icon: <FlaskConical size={32} className="text-textprimary" />,
      title: "Real Lab Experience",
      desc: "Virtual labs that closely mimic real-world experiments.",
    },
    {
      icon: <Cpu size={32} className="text-textprimary" />,
      title: "Smart Simulations",
      desc: "Powered by modern tech to support Physics, Chemistry, and ICT.",
    },
  ];

  return (
    <section className=" text-foreground mt-16 px-6 ">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-textprimary"
          style={{ textShadow: "2px 2px 6px  rgba(147, 197, 253, 0.7)" }}
        >
          Why Choose SciLab360?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-secondary p-6 rounded-xl shadow-lg text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-2 border-gray-300" />
    </section>
  );
}
