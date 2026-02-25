import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";    

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
       <About />
        <TechStack />
    </main>
  );
}
