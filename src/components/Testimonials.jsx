"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:mt-20 w-full min-h-screen justify-center items-center overflow-hidden mb:pb-0 pb-10 "
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute text-3xl px-5 uppercase md:text-5xl mb-5 md:mb-6 md:mt-14 mt-8 top-0 font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        People about JMC
      </motion.h1>
      <div className="grid md:grid-cols-2 w-11/12 justify-center grid-cols-1 items-center gap-x-16 gap-y-10 mt-10">
        <TestimonialCard
          name="Prince Sir"
          designation="Club Moderator"
          talk="Our club represents the entire math department and is the largest at St
        Joseph Higher Secondary School. It's a vibrant and inclusive community
        where students explore the branches of mathematics. Join us for an
        exciting journey in the world of mathematics!"
        />
        <TestimonialCard
          name="Ziayd Mohammad"
          designation="Club President"
          talk="Our club represents the entire math department and is the largest at St
        Joseph Higher Secondary School. It's a vibrant and inclusive community
        where students explore the branches of mathematics. Join us for an
        exciting journey in the world of mathematics!"
        />

        {/* <TestimonialCard /> */}
      </div>
    </div>
  );
}
function TestimonialCard({ name, designation, image, talk }) {
  return (
    <div className="relative flex flex-col  w-full px-6  md:py-4 py-8 bg-blue-400 bg-opacity-20 rounded-lg md:h-[13rem] shadow-md shadow-indigo-400">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={
          cn()
          // "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        }
      />
      <div className="flex flex-row z-40 w-full justify-between mb-3 ">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col w-[5rem] h-auto  overflow-hidden rounded-full">
            <Image
              src="/five.jpg"
              alt={name}
              width={100}
              height={100}
              className="w-full h-auto rounded-full"
              priority
            />
          </div>

          <div className="ml-5">
            <h1 className="text-white text-2xl">{name}</h1>
            <h1 className="text-blue-400 font-semibold">{designation}</h1>
          </div>
        </div>

        <MessageSquareQuote color="#fff" className="" size={50} />
      </div>
      <p className="w-full text-slate-200 text-base z-40">{talk}</p>
    </div>
  );
}
