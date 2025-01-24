"use client";
import { useRef, useState } from "react";
import { Calculator, HandHeart, Lightbulb, Trophy } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Meteors } from "@/components/ui/meteors";
import { motion, useInView } from "framer-motion";
export default function UpcomingEvents() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:mt-20 w-full min-h-screen justify-center items-center overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute text-3xl  px-5 uppercase md:text-5xl mb-5 md:mb-6 md:mt-14 mt-8 top-0  font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        Upcoming Events
      </motion.h1>
      <Meteors number={30} />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 w-11/12 md:mt-0 mt-24">
        <EventCard
          title="Josephite Math Mania Inter"
          date="3 February, 2025"
          location="Online"
          description="Short description of the event. Short description of the event. Short description of the event."
        />
        <EventCard
          date="6 April, 2025"
          location="St. Joseph School"
          title="Josephite Math Mania Inter"
          description="Short description of the event. Short description of the event. Short description of the event."
        />
      </div>
    </div>
  );
}

function EventCard({ title, date, location, description, regLink }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col max-w-[20rem] rounded-lg h-[22rem] border-[2px] border-indigo-900 bg-blue-950/50  p-5  justify-cen items-center"
    >
      <h1 className="text-2xl font-bold text-center text-white mb-3">
        {title}
      </h1>
      <p className="text-sm text-sky-600 italic font-medium my-2">{date}</p>
      <p className="text-sm text-sky-200 font-bold mb-2">@{location}</p>
      <p className="text-slate-400 text-center">{description}</p>
      <PulsatingButton
        className="mt-8"
        onClick={() => window.open("https://www.facebook.com/", "_blank")}
      >
        Register
      </PulsatingButton>
      ;
    </motion.div>
  );
}
