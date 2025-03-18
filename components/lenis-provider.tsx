"use client";

import {  useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => { // 🔥 Używamy `useLayoutEffect` zamiast `useEffect`, aby działało od razu
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.1,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
