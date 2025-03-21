"use client";

import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Audiowide, Oxanium } from "next/font/google";
const audiowide = Audiowide({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});
const oxanium = Oxanium({ weight: "400", subsets: ["latin"], display: "swap" });

import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";



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

function SubmitArticle() {
    const [loading, setLoading] = useState(true);



    return (
        <ClerkProvider>

            <Suspense fallback={<div>Loading Quiz...</div>}>
                <div className="min-h-screen flex flex-col items-center bg-slate-950 justify-center py-10 px-4">
                    {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

                    {!loading && (
                        <>
                            <Navbar notHomePage={true} />
                            <SignedIn>

                                <motion.h1
                                    className="text-5xl px-5 md:text-5xl uppercase mt-8 font-bold text-center text-blue-500"
                                    style={{ textShadow: "3px 0px 1px #fff", willChange: "transform, opacity" }}
                                >
                                    {/* {quizName} */}
                                </motion.h1>

                                <div className="w-full md:max-w-3xl bg-blue-600/5 p-6 shadow-md rounded-lg">

                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEp-nVVDBcn-_W9xp20UeJuYJs0NYg2pYlaMXo8y-5nm7aMA/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                </div>
                            </SignedIn>
                        </>
                    )}
                    <SignedOut><motion.h1
                        className="text-5xl px-5 md:text-5xl uppercase mt-8 font-bold text-center text-blue-500"
                        style={{ textShadow: "3px 0px 1px #fff", willChange: "transform, opacity" }}
                    >
                        Login first!
                    </motion.h1></SignedOut>
                </div></Suspense></ClerkProvider>
    );
}

export default SubmitArticle;
