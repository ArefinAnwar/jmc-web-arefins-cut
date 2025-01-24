"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  const floatingSymbols = ["\u03C0", "\u222B", "d/dx", "\u2211"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex relative flex-col w-full min-h-screen justify-center items-center"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-5xl px-5 md:text-5xl uppercase mt-6 md:mt-20 font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        About Us
      </motion.h1>
      <div className="flex flex-col md:flex-row w-full justify-center items-center px-10">
        <div className="flex  md:flex-col w-full md:w-1/2">
          <TypingAnimation
            duration={75}
            delay={4000}
            // startOnView={true}
            className="text-slate-200 text-lg md:mt-0 mt-4"
          >
            The Josephite Math Club is dedicated to cultivating a passion for
            mathematics. Our mission is to provide a supportive environment for
            students to explore mathematical concepts, participate in
            competitions, and engage in math-related events. Join us to
            experience the world of mathematics in a whole new way!
          </TypingAnimation>
          {/* <motion.p>
            The Josephite Math Club is dedicated to cultivating a passion for
            mathematics. Our mission is to provide a supportive environment for
            students to explore mathematical concepts, participate in
            competitions, and engage in math-related events. Join us to
            experience the world of mathematics in a whole new way!
          </motion.p> */}
        </div>
        <div className="relative flex flex-col w-full md:w-1/2 justify-center items-center h-96">
          <OrbitingCircles
            iconSize={40}
            radius={isMobile ? 50 : 90}
            path="true"
          >
            <h1 className="text-blue-500 text-2xl">{"\u03C0"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u222B"}</h1>
            <h1 className="text-blue-500 text-2xl">{"d/dx"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u2211"}</h1>
          </OrbitingCircles>
          <OrbitingCircles
            iconSize={40}
            radius={isMobile ? 110 : 170}
            path="true"
            reverse
            speed={1.5}
          >
            <h1 className="text-blue-500 text-2xl">{"\u2211"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u221A"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u03B1"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u03B2"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u03B3"}</h1>
            <h1 className="text-blue-500 text-2xl">{"\u2248"}</h1>
          </OrbitingCircles>
          {/* {floatingSymbols.map((symbol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [0, -20, 0] }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 2 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute text-6xl text-blue-400"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
            >
              {symbol}
            </motion.div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
