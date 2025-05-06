import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main className="flex">
      <NavBar />
      <section className="flex-1 pt-6  ml-0 md:ml-54">
        <HeroSection />
        <Footer />
      </section>
    </main>
  );
}
