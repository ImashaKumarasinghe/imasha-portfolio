import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThreeBackground from "../ThreeBackground";

export default function Hero() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />

   <section
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "40px",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE - TEXT */}
        <div style={{ maxWidth: "500px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold" }}> Hello, I'm <br/> </h3>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" ,color: "#2a35a5"}}>
            
            Imasha Kumarasinghe
          </h1>
          <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
            Software Engineering Undergraduate passionate about
            AI, Full-Stack Development, and building impactful systems.
          </p>
        </div>

        {/* RIGHT SIDE - PHOTO */}
       <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >

          <Image
            src="/images/ima-removebg-preview.png"
            alt="Imasha Kumarasinghe"
            width={350}
            height={450}
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </main>
  );
}
