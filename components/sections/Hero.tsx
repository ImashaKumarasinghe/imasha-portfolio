import Image from "next/image";
import ThreeBackground from "../ThreeBackground";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ThreeBackground />

      <section className="relative z-10 flex min-h-screen items-center justify-between px-12">

        {/* LEFT SIDE - TEXT */}
        <div className="max-w-xl -mt-12 -ml-8">
          <h3 className="text-2xl font-semibold">
            Hello, I'm
          </h3>

          <h1 className="mt-2 text-5xl font-bold text-blue-700 leading-tight">
            Imasha Kumarasinghe
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Software Engineering Undergraduate passionate about
            AI, Full-Stack Development, and building impactful systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
  
  {/* Get in Touch */}
  <a
    href="#contact"
    className="rounded-lg bg-blue-700 px-6 py-3 text-white font-medium shadow-md transition hover:bg-blue-800 hover:scale-105"
  >
    Get in Touch
  </a>

  {/* Projects */}
  <a
    href="#projects"
    className="rounded-lg border border-blue-700 px-6 py-3 text-blue-700 font-medium transition hover:bg-blue-50 hover:scale-105"
  >
    Projects
  </a>

  {/* Download CV */}
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-gray-900 px-6 py-3 text-white font-medium shadow-md transition hover:bg-black hover:scale-105"
  >
    Download CV
  </a>

</div>
          
        </div>
        

        {/* RIGHT SIDE - PHOTO */}
        <div className="-mt-16 mr-6 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/ima-removebg-preview.png"
            alt="Imasha Kumarasinghe"
            width={380}
            height={480}
            priority
            className="object-cover"
          />
        </div>
        

      </section>
    </main>
  );
}