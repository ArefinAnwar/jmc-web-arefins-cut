"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bungee_Shade } from "next/font/google";
import { cn } from "@/lib/utils";
import { Audiowide, Oxanium } from "next/font/google";
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oxanium = Oxanium({ weight: "400", subsets: ["latin"], display: "swap" });

const bungeeShade = Bungee_Shade({ weight: "400", subsets: ["latin"] });

import { motion, useInView } from "framer-motion";
import { RetroGrid } from "@/components/ui/retro-grid";
import { BorderBeam } from "@/components/ui/border-beam";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("November 5, 2025 20:01:0").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    // console.log("Time difference in milliseconds:", difference);
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return (
    <div ref={sectionRef} className="flex flex-col w-full min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={cn(
          "text-6xl px-5 md:text-[5rem] uppercase  mt-32 md:mt-60 font-bold text-center text-[#51affc] z-40",
          bungeeShade.className
        )}
        style={{
          // textShadow: "3px 0px 1px #d7ecfc",
          willChange: "transform, opacity",
        }}
      >
        JMC MATH MANIA
      </motion.h1>
      <div
        className={cn(
          "mt-20 md:mt-10 flex flex-row w-full bg-slate- justify-center items-center",
          oxanium.className
        )}
      >
        <div className="text-slate-400 bg-blue-950/50  py-4 w-[7rem] ml-3 md:mx-3 rounded-2xl border-[0.5px] border-slate-700 text-center text-sm">
          <h2 className="text-xl md:text-3xl font-bold text-indigo-500">
            {timeLeft.days}
          </h2>
          <p>Days</p>
        </div>
        <div className="text-slate-400 bg-blue-950/50  py-4 w-[7rem] mx-2 md:mx-3 rounded-2xl border-[0.5px] border-slate-700 text-center text-sm">
          <h2 className="text-xl md:text-3xl font-bold text-indigo-500">
            {timeLeft.hours}
          </h2>
          <p>Hours</p>
        </div>
        <div className="text-slate-400 bg-blue-950/50  py-4 w-[7rem] mr-2 md:mx-3 rounded-2xl border-[0.5px] border-slate-700 text-center text-sm">
          <h2 className="text-xl md:text-3xl font-bold text-indigo-500">
            {timeLeft.minutes}
          </h2>
          <p>Minutes</p>
        </div>
        <div className="text-slate-400 bg-blue-950/50  py-4 w-[7rem] mr-3 md:mx-3 rounded-2xl border-[0.5px] border-slate-700 text-center text-sm">
          <h2 className="text-xl md:text-3xl font-bold text-indigo-500">
            {timeLeft.seconds}
          </h2>
          <p>Seconds</p>
        </div>
      </div>
      <button
        className={cn(
          "uppercase bg-gradient-to-r from-indigo-500 to-violet-600 via-blue-600  relative rounded-lg z-40 mt-20 md:mt-10 block mx-auto bg-slate-600 py-3 px-10 text-white text-2xl font-semibold hover:-translate-y-2 ease-in-out duration-200 hover:scale-110 hover:font-thin",
          oxanium.className
        )}
        onClick={() => window.open("https://facebook.com", "_blank")}
      >
        Register
        <BorderBeam
          size={60}
          colorFrom="#d5d5d5"
          colorTo="#d5d5d5"
          duration={4.5}
          borderWidth="2"
        />
      </button>
      <RetroGrid className="bg-transparent" />
    </div>
  );
}
