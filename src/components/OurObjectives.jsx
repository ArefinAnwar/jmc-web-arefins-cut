"use client";
import { useRef, useState } from "react";
import { Calculator, HandHeart, Lightbulb, Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/aurora-text";
import { GridPattern } from "@/components/ui/grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
const objectives = [
  {
    title: "Problem Solving",
    icon: <Calculator size={60} color="#fff" />,
    description:
      "Develop your math skills through challenging problems and real-world applications. Build critical thinking and problem-solving abilities.",
  },
  {
    title: "Olympiad Preparation",
    icon: <Trophy size={60} color="#fff" />,
    description:
      "Preparing for math Olympiads helps you think outside the box and tackle advanced problems with confidence.",
  },
  {
    title: "Creativity",
    icon: <Lightbulb size={60} color="#fff" />,
    description:
      "Learn how creativity fuels problem-solving. Apply mathematical thinking in innovative ways.",
  },
  {
    title: "Love for Math",
    icon: <HandHeart size={60} color="#fff" />,
    description:
      "Embrace your passion for mathematics and explore its beauty in a supportive environment.",
  },
];
export default function OurObjectives() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col w-full min-h-screen justify-center items-center md:pb-0 pb-20"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
          // "mask-image:radial-gradient(500px_circle_at_center, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
        )}
      />
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-3xl uppercase px-5 md:text-5xl absolute top-0 mb-5 md:mb-14 mt-6 md:mt-20 font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        Our Objectives
      </motion.h1>
      <div className="flex flex-row w-full justify-center items-center px-10">
        <div className="flex mt-[6rem] md:mt-0 flex-col md:flex-row gap-4 w-full items-center ">
          {objectives.map((objective, index) => (
            <ObjectiveCard
              title={objective.title}
              icon={objective.icon}
              description={objective.description}
              delay={1 * index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ObjectiveCard({ title, description, icon, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: delay }}
      className="flex overflow-hidden relative flex-col max-w-[20rem] rounded-xl h-[20rem] border-[0px] border-purple-400 bg-blue-900/30  p-5  justify-cen items-center ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sky-700"
    >
      <BorderBeam size={160} duration={6} delay={9} />
      {icon}
      <span className="text-2xl mt-6 font-bold  mb-3 text-slate-100 italic">
        <motion.div
          className="relative "
          style={{
            display: "inline-block",
            willChange: "transform, opacity, scale",
          }}
        >
          {title}
          <motion.div
            style={{ willChange: "transform, opacity, scale" }}
            className="absolute bottom-0 left-0 h-[2px] bg-indigo-400"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{
              delay: 2.3,
              duration: 1,
            }}
          />
        </motion.div>
      </span>
      <h1 className="text-2xl mt-2 font-bold text-center text-white mb-3"></h1>
      <p className="text-slate-400 text-center">{description}</p>
    </motion.div>
  );
}
