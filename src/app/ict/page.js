import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function ICTPage() {
  return (
    <main className="flex">
      <NavBar />
      <section className="flex-1 pt-6  ml-0 md:ml-54">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-purple-800">
            ICT Experiments
          </h1>
          <p className="text-gray-700">
            Welcome to the ICT Lab! Engage with simulations in networking, data
            communication, and software systems.
          </p>
        </div>
        <Footer />
      </section>
    </main>
  );
}
