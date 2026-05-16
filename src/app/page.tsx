import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIDoNow from "@/components/WhatIDoNow";
import TechFidesSpotlight from "@/components/TechFidesSpotlight";
import LevoilaSpotlight from "@/components/LevoilaSpotlight";
import Story from "@/components/Story";
import Perspectives from "@/components/Perspectives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <WhatIDoNow />
      <TechFidesSpotlight />
      <LevoilaSpotlight />
      <Story />
      <Perspectives />
      <Contact />
      <Footer />
    </main>
  );
}
