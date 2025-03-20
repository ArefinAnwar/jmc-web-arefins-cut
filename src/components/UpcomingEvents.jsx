"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Meteors } from "@/components/ui/meteors";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Audiowide, Oxanium } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oxanium = Oxanium({ weight: "400", subsets: ["latin"], display: "swap" });

const events = [
  {
    title: "4th Josephite Math Mania Intra",
    date: "3 February, 2025",
    location: "Online",
    image: "/five.jpg",
  },
  {
    title: "6th National Josephite Math Mania Inter",
    date: "6 April, 2025",
    location: "St. Joseph School",
    image: "/four.jpg",
  },
  {
    title: "Science Fair 2025",
    date: "15 May, 2025",
    location: "St. Joseph School",
    image: "/one.jpg",
  },
  {
    title: "Annual Sports Day",
    date: "20 June, 2025",
    location: "St. Joseph School",
    image: "/two.jpg",
  },
  {
    title: "Tech Carnival 2025",
    date: "10 July, 2025",
    location: "Online",
    image: "/five.jpg",
  },
  {
    title: "Debate Competition 2025",
    date: "5 August, 2025",
    location: "St. Joseph School",
  },
];

export default function UpcomingEvents() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 3 < events.length ? prev + 3 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 3 >= 0 ? prev - 3 : events.length - 3));
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:mt-20 w-full min-h-screen justify-center items-center overflow-hidden bg-ambe-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={cn(
          "absolute text-[1.7rem] px-5 uppercase md:text-5xl mb-5 md:mb-6 md:mt-14 mt-8 top-0 font-bold text-center text-blue-500 z-40 w-full",
          audiowide.className
        )}
        style={{
          // textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        Upcoming Events
      </motion.h1>
      <Meteors number={30} />
      <div className="flex items-center space-x-4 mt-24">
        <ChevronLeft
          size={40}
          className="cursor-pointer text-white"
          onClick={prevSlide}
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-11/12">
          {events.slice(index, index + 3).map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
        <ChevronRight
          size={40}
          className="cursor-pointer text-white"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}

function EventCard({ title, date, location, image }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex relative flex-col max-w-[20rem] z-40 rounded-lg h-[26rem] border-[2px] border-indigo-900 bg-blue-950/50 p-5 items-center"
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full h-auto shadow-md shadow-sky-400"
        priority
      />
      <h1
        className={cn(
          "text-lg font-bold text-center text-white absolute mx-auto top-56",
          oxanium.className
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "text-sm text-sky-600 italic font-medium absolute mx-auto top-[18rem]",
          oxanium.className
        )}
      >
        {date}
      </p>
      <p
        className={cn(
          "text-sm text-sky-200 font-bold absolute mx-auto top-[19.5rem]",
          oxanium.className
        )}
      >
        @{location}
      </p>
      <PulsatingButton
        className={cn(" absolute mx-auto bottom-6", oxanium.className)}
      >
        Register
      </PulsatingButton>
    </motion.div>
  );
}
