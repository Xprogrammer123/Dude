
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Benefits } from "../components/Benefits";
import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
export function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
