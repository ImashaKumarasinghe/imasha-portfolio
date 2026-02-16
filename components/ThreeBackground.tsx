"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let renderer: any, scene: any, camera: any, points: any;
    let raf = 0;

    async function init() {
      const THREE = await import("three");

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        4000
      );
      camera.position.z = 900;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (!mountRef.current) return;
      mountRef.current.appendChild(renderer.domElement);

      // ✅ Create a soft circular texture (no PNG needed)
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
      g.addColorStop(0, "rgba(255,255,255,0.9)");
      g.addColorStop(0.4, "rgba(255,255,255,0.35)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);

      // ✅ Geometry (fast)
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 2500 : 6000;

      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 0] = (Math.random() - 0.5) * 2200;
        positions[i3 + 1] = (Math.random() - 0.5) * 2200;
        positions[i3 + 2] = (Math.random() - 0.5) * 2200;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 18,
        map: texture,
        transparent: true,
        depthWrite: false,
        opacity: 0.9,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // Animate
      const animate = () => {
        points.rotation.y += 0.0006;
        points.rotation.x += 0.0002;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      // Cleanup
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);

        texture.dispose();
        material.dispose();
        geometry.dispose();
        renderer.dispose();

        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }

    let cleanup: any;
    init().then((c) => (cleanup = c));
    return () => cleanup?.();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background: "#000", // ensures visible
      }}
    />
  );
}
