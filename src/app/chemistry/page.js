import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function ChemistryPage() {
  return (
    <main className="flex">
      <NavBar />
      <section className="flex-1 pt-6 ml-0 md:ml-54">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-green-800">
            Chemistry Experiments
          </h1>
          <p className="text-gray-700">
            Welcome to the Chemistry Lab! Simulate chemical reactions, learn
            about periodic elements, acids, and bases.
          </p>
        </div>
        <Footer />
      </section>
    </main>
  );
}
