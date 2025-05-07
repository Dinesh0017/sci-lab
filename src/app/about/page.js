import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function AboutPage() {
  return (
      <section>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            About SciLab360
          </h1>
          <p className="text-gray-700 mb-2">
            SciLab360 is a modern educational platform offering interactive
            simulations in Physics, Chemistry, and ICT.
          </p>
          <p className="text-gray-700 mb-2">
            Our goal is to make science engaging and accessible to students
            worldwide through virtual experimentation.
          </p>
          <p className="text-gray-700">
            Built with Next.js and Tailwind CSS, our platform is designed for
            speed, responsiveness, and rich interactivity.
          </p>
        </div>
      </section>

  );
}
