"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

import { Audiowide, Oxanium } from "next/font/google";
const text = `The Josephite Math Club is dedicated to cultivating a passion for mathematics. Our mission is to provide a supportive environment for students to explore mathematical concepts, participate in competitions, and engage in math-related events. Join us to experience the world of mathematics in a whole new way!`;
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oxanium = Oxanium({ weight: "400", subsets: ["latin"], display: "swap" });

const activities = [
  { title: "7", desc: "BDMO" },
  { title: "100+", desc: "Workshops" },
  { title: "4", desc: "Inter" },
  { title: "3k+", desc: "Members" },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const floatingSymbols = ["\u03C0", "\u222B", "d/dx", "\u2211"];
  const [isMobile, setIsMobile] = useState(false);
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Each line fades in separately
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };
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
      className="flex relative flex-col w-full min-h-[130vh] md:min-h-screen md:justify-center items-center"
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
        className={cn(
          "text-3xl px-5 md:text-5xl uppercase absolute top-0 mt-14 md:mt-20 font-bold text-center text-blue-500 z-40",
          audiowide.className
        )}
        style={{
          // textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        What is JMC?
      </motion.h1>
      <div className="flex flex-col md:flex-row w-full justify-center items-center px-10 md:h-[20rem] h-[40rem] md:mt-10">
        <div className="flex  flex-col w-full md:w-4/5 h-full bg-slate-5 items-start">
          <motion.div
            ref={sectionRef}
            variants={sentenceVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={cn(
              "text-slate-200 text-lg md:mt-0 mt-32 z-30 h-[42rem] text-center space-y-1",
              oxanium.className
            )}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={lineVariants}
                className="inline-block whitespace-pre-wrap" // Ensures words wrap naturally
              >
                {word + " "}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-3 md:h-auto g-amber-200  w-full mt-10 md:mt-6 auto-rows-min z-40">
            {activities.map((activity, index) => (
              <ActivitiesBlock
                key={index}
                title={activity.title}
                desc={activity.desc}
                delay={index == 0 ? 5 : 5 + 0.8 * index}
                // delay={0.5 * index}
                rref={sectionRef}
              />
            ))}
          </motion.div>
        </div>
        {!isMobile ? (
          <div
            className={cn(
              "relative md:absolute  flex flex-col w-full md:w-1/2 justify-center items-center h-[24rem]  z-10",
              oxanium.className
            )}
          >
            <OrbitingCircles
              iconSize={40}
              radius={isMobile ? 50 : 90}
              path="true"
            >
              <h1 className="text-blue-500/50 text-2xl">{"\u03C0"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u222B"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"d/dx"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u2211"}</h1>
            </OrbitingCircles>
            <OrbitingCircles
              iconSize={40}
              radius={isMobile ? 110 : 180}
              path="true"
              reverse
              speed={1.5}
            >
              <h1 className="text-blue-500/50 text-2xl">{"\u2211"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u221A"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u03B1"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u03B2"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u03B3"}</h1>
              <h1 className="text-blue-500/50 text-2xl">{"\u2248"}</h1>
            </OrbitingCircles>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
function ActivitiesBlock({ title, desc, delay, rref }) {
  const ref = rref;

  const inView = useInView(ref, { once: true, margin: "90% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "p-5 px-6  w-full bg-[#181434] bgopacity-30 text-white rounded-2xl shadow-sm shadow-indigo-500 items-center justify-center",
        oxanium.className
      )}
    >
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-2">
        {title}
      </h1>
      <h1 className=" text-lg md:text-md lg:text-xl text-center">{desc} </h1>
    </motion.div>
  );
}
