import Image from "next/image";

export default function AboutPage() {
  return (
    <section className=" text-foreground px-6 py-16 min-h-screen  m-5">
      <div className="max-w-6xl mx-auto space-y-20  ">
        {/* Header */}
        <div className="text-center space-y-4 bg-blue-200/80 p-10 rounded-2xl">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-textprimary mb-6"
            style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}
          >
            About SciLab360
          </h1>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            SciLab360 is a cutting-edge virtual science lab platform designed to
            revolutionize the way students experience practical science
            education.
          </p>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-blue-200/80 p-10 rounded-2xl">
          <div>
            <h2 className="text-6xl font-bold text-primary mb-4 -mt-8">
              Our Mission
            </h2>
            <p className="text-muted text-lg">
              To provide accessible, engaging, and interactive science
              simulations that empower students, support teachers, and spark
              curiosity across all educational levels.
            </p>
          </div>
          <Image
            src="/assets/images/lab1.jpeg"
            alt="Our Mission"
            className="rounded-2xl shadow-lg  object-cover ml-32"
            width={300}
            height={300}
          />
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-blue-200/80 p-10 rounded-2xl">
          <Image
            src="/assets/images/lab2.jpeg"
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover"
            width={300}
            height={300}
          />
          <div>
            <h2 className="text-6xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-muted text-lg">
              We&apos;re a team of passionate educators, developers, and scientists
              based in Sri Lanka dedicated to transforming the way science is
              taught. Our goal is to make learning science more hands-on,
              accessible, and fun for everyone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Innovation",
              desc: "We bring science to life with cutting-edge virtual labs and technology.",
            },
            {
              title: "Inclusivity",
              desc: "Education should be for all — regardless of location or resources.",
            },
            {
              title: "Empowerment",
              desc: "Our tools help students learn independently and confidently.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-primary mb-2">
                {value.title}
              </h4>
              <p className="text-muted text-sm">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-200/80 to-accent text-primary rounded-2xl shadow-2xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-bold">Join the SciLab360 Movement</h3>
          <p className="text-primary max-w-2xl mx-auto text-lg">
            Whether you&apos;re a student, teacher, or parent — together we can make
            science education better for the next generation.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
