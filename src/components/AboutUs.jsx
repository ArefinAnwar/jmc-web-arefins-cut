"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const activities = [
  { title: "7", desc: "BDMO" },
  { title: "100+", desc: "Workshops" },
  { title: "4", desc: "Inter" },
  { title: "3k+", desc: "Members" },
];

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
      className="flex relative flex-col w-full h-[150vh] md:h-auto md:min-h-screen md:justify-center items-center"
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
        className="text-5xl px-5 md:text-5xl uppercase absolute top-0 mt-14 md:mt-20 font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        What is JMC?
      </motion.h1>
      <div className="flex flex-col md:flex-row w-full justify-center items-center px-10 md:h-[20rem] h-[40rem] md:mt-10">
        <div className="flex  flex-col w-full md:w-1/2 h-full bg-slate-5 items-start">
          <TypingAnimation
            duration={20}
            delay={4000}
            className="text-slate-200 text-lg md:mt-0 mt-32 z-30 h-[42rem]"
          >
            The Josephite Math Club is dedicated to cultivating a passion for
            mathematics. Our mission is to provide a supportive environment for
            students to explore mathematical concepts, participate in
            competitions, and engage in math-related events. Join us to
            experience the world of mathematics in a whole new way!
          </TypingAnimation>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3  w-full mt-10 md:mt-6   z-40">
            {activities.map((activity, index) => (
              <ActivitiesBlock
                key={index}
                title={activity.title}
                desc={activity.desc}
                delay={1.25 * index}
              />
            ))}
          </motion.div>
        </div>
        {!isMobile ? (
          <div className="relative flex flex-col w-full md:w-1/2 justify-center items-center h-[24rem]  z-40">
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
function ActivitiesBlock({ title, desc, delay }) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay }}
      className="p-5 px-6  w-full bg-blue-900 bg-opacity-30 text-white rounded-2xl shadow-sm shadow-indigo-500 items-center justify-center"
    >
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-2">
        {title}
      </h1>
      <h1 className=" text-lg md:text-md lg:text-xl text-center">{desc} </h1>
    </motion.div>
  );
}
