import { Button } from "@/components/ui/button";
import ThreeBackground from "../ThreeBackground";

export default function Hero() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />

    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm text-muted-foreground">Software Engineer • IEEE WIE</p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m Imasha Kumarasinghe
      </h1>

      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
        I build modern full-stack web apps and AI-powered projects. Currently focusing on
        Next.js, Supabase, and real-world products for internships.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>

        <Button variant="outline" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>

        <Button variant="secondary" asChild>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </Button>
      </div>
    </section>
    </main>
  );
}
