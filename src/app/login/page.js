"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("");
    const fullText = "Calculating dt...";
    const typingSpeed = 0;

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
        <div className="fixed inset-0 flex items-center justify-center bg-[#070014] z-50">
            <div className="flex items-center text-white text-4xl font-mono">
                <span className="text-[3rem] px-5 md:text-[6rem] -mt-4 mr-3 animate-pulse duration-75 text-blue-500">∫</span>
                <span>{text}</span>
            </div>
        </div>
    );
}

const LoginPage = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null)
    // const articles = await fetchArticles();


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
                        Login
                    </motion.h1>
                    <p className="text-lg text-slate-300 mb-4 text-center max-w-2xl italic">
                        Welcome to the Login section!
                    </p>
                    <ClerkProvider >

                        <div className="w-full md:max-w-11/12 bg-blue-600/5 p-6 shadow-md rounded-lg flex flex-col h-auto">

                            <SignedOut >
                                <SignInButton className="flex flex-col bg-sky-600 p-5 w-[7rem] h-[4rem] justify-center items-center text-white rounded-lg" />
                                {/* <SignUpButton /> */}
                            </SignedOut>




                            <SignedIn>
                                <UserButton />
                            </SignedIn>

                        </div>
                    </ClerkProvider>
                </>
            )}
        </div>
    );
};
export default LoginPage;

