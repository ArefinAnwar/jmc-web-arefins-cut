"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { Audiowide, Oxanium } from "next/font/google";
import { cn } from "@/lib/utils";
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const oxanium = Oxanium({ weight: "400", subsets: ["latin"], display: "swap" });


function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Calculating dt...";
  const typingSpeed = 100;
  useEffect(() => {

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(onComplete, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={cn("fixed inset-0 flex items-center justify-center bg-[#070014] z-50", oxanium.className)}>
      <div className={cn("flex items-center text-white text-4xl ", oxanium.className)}>
        <span className="text-[3rem] px-5 md:text-[6rem] -mt-4 mr-3 animate-pulse duration-75 text-blue-500">∫</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

const quiz = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-950 justify-center py-10 px-4">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar notHomePage={true} />
          <motion.h1
            className="text-5xl px-5 md:text-5xl uppercase mt-8 font-bold text-center text-blue-500 z-40"
            style={{
              textShadow: "3px 0px 1px #fff",
              willChange: "transform, opacity",
            }}
          >
            Quiz Section
          </motion.h1>
          <p className="text-lg text-slate-300 mb-4 text-center max-w-2xl italic">
            Welcome to the quiz section! Test your knowledge by participating in our quiz. Click below to start.
          </p>
          <div className="w-full md:max-w-3xl bg-blue-600/5 p-6 shadow-md rounded-lg">
            <QuizCard
              title="Pie Day Quiz"
              link="/quiz-1"
              time="14-03-2025 0:12"
            />
            <QuizCard
              title="Test Quiz"
              link="/quiz-1"
              time="04-03-2025 19:12"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default quiz;

function QuizCard({ title, link, time }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  const parseBDTTime = (timeString) => {
    const [datePart, timePart] = timeString.split(" ");
    const [day, month, year] = datePart.split("-").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);
    return new Date(Date.UTC(year, month - 1, day, hours - 6, minutes));
  };

  const quizStartTime = parseBDTTime(time);
  const isQuizStarted = currentTime >= quizStartTime;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getRemainingTime = () => {
    const diff = quizStartTime - currentTime;
    if (diff <= 0) return "Starting now!";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s remaining`;
  };

  return (
    <div className="bg-blue-400 bg-opacity-30 mb-6 rounded-lg p-5 flex flex-col md:flex-row md:justify-between items-center justify-center">
      <div>
        <h1 className="text-white text-2xl">{title}</h1>
        <h2 className="text-rose-400 text-md">{isQuizStarted ? 'Happening now' : 'Upcoming'}</h2>
        {!isQuizStarted && (
          <h2 className="text-yellow-300 text-md">{getRemainingTime()}</h2>
        )}
      </div>

      {isQuizStarted ? (
        <Link
          href={{
            pathname: link,
            query: {
              quizName: btoa(title),
              formLink: btoa("https://docs.google.com/forms/d/e/1FAIpQLSeQC4O45g0lMG9-fyJvTIsG49mzXJL2VQCkbnlKtqjdmgDFBA/viewform?embedded=true"),
            },
          }}
        >
          <button className="uppercase relative rounded-xl bg-blue-300 bg-opacity-40 p-3 px-8 text-white">
            Enter
            <BorderBeam size={50} duration={5} borderWidth="3" />
          </button>
        </Link>
      ) : (
        <button
          className="uppercase relative rounded-xl bg-gray-500 bg-opacity-40 p-3 px-8 text-gray-300 cursor-not-allowed"
          disabled
        >
          Not Started
        </button>
      )}
    </div>
  );
}
