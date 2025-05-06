
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <main className="flex">
      <NavBar />
      <section className="flex-1 pt-6  ml-0 md:ml-54">
        <h2 className="text-3xl font-semibold text-blue-900">Welcome to SciLab360</h2>
        <Footer />
      </section>
      
    </main>
  );
}
