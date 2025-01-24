"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Calculating dt...";
  const typingSpeed = 150; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Proper slicing to avoid undefined
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(onComplete, 1000); // Delay before hiding the loading screen
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#070014] z-50">
      <div className="flex items-center text-white text-4xl font-mono">
        <span className="text-[3rem] px-5 md:text-[6rem]  -mt-4 mr-3 animate-pulse duration-75 text-blue-500">∫</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
const quiz = () => {
  const [loading, setLoading] = useState(true);

  return (

    <div className="min-h-screen flex flex-col items-center bg-slate-950 justify-center  py-10 px-4">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar notHomePage={true} />
          <motion.h1
            className="text-5xl px-5 md:text-5xl uppercase mt-8 md:mt-8 font-bold text-center text-blue-500 z-40"
            style={{
              textShadow: "3px 0px 1px #fff",
              willChange: "transform, opacity",
            }}
          >
            Quiz Section
          </motion.h1>
          <p className="text-lg text-slate-300 mb-4 text-center max-w-2xl italic">
            Welcome to the quiz section! Test your knowledge by participating in our
            quiz. Click below to start.
          </p>
          <div className="w-full md:max-w-3xl bg-blue-600/5 p-6 shadow-md rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeQC4O45g0lMG9-fyJvTIsG49mzXJL2VQCkbnlKtqjdmgDFBA/viewform?embedded=true"
              width="100%"
              height="382"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div></>)}
    </div>
  );
};

export default quiz;
