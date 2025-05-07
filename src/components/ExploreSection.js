import Image from "next/image";

export default function ExploreSection() {
  return (
    <section className=" text-foreground px-6 -mt-16">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-textprimary"
          style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
        >
         Explore Our Simulations
        </h2>

        <p className="text-secondary max-w-2xl mx-auto">
          Dive into interactive experiments across physics, chemistry, and ICT.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Physics Lab",
              image: "/assets/images/physics-lab.jpeg",
              desc: "Conduct motion, optics, and electricity experiments virtually.",
            },
            {
              title: "Chemistry Lab",
              image: "/assets/images/chemistry-lab.jpeg",
              desc: "Mix chemicals, observe reactions, and understand compounds safely.",
            },
            {
              title: "ICT Lab",
              image: "/assets/images/ict-lab.jpeg",
              desc: "Learn coding, simulations, and digital logic with drag-and-drop tools.",
            },
          ].map((sim, i) => (
            <div
              key={i}
              className="rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <Image
                src={sim.image}
                alt={sim.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-primary">
                  {sim.title}
                </h3>
                <p className="text-secondary text-sm mt-2">{sim.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-2 border-gray-300" />
    </section>
  );
}
