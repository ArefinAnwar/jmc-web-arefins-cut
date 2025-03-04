"use client";

import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const STATIC_PASSWORD = "quiz2025";

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("");
    const fullText = "Calculating dt...";
    const typingSpeed = 150;

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

function QuizPage() {
    const [loading, setLoading] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [quizName, setQuizName] = useState("");
    const [formLink, setFormLink] = useState("")
    const router = useRouter();
    // const searchParams = useSearchParams();

    // const quizName = atob(searchParams.get("quizName")) || "Default Quiz";
    // const formLink = atob(searchParams.get("formLink")) || "";
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setQuizName(atob(params.get("quizName")) || "Default Quiz");
        setFormLink(atob(params.get("formLink")) || "");
    }, []);

    const handlePasswordSubmit = () => {
        if (password === STATIC_PASSWORD) {
            setShowQuiz(true);
        } else {
            setError("Incorrect password. Try again.");
        }
    };

    return (
        <Suspense fallback={<div>Loading Quiz...</div>}>
            <div className="min-h-screen flex flex-col items-center bg-slate-950 justify-center py-10 px-4">
                {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
                {!loading && !showQuiz && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                        <div className="bg-blue-400 bg-opacity-20 p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
                            <h2 className="text-4xl font-bold text-blue-200 mb-4">Enter Passkey</h2>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-full mb-3 text-center"
                                placeholder="Enter Quiz Passkey"
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <button
                                onClick={handlePasswordSubmit}
                                className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
                {!loading && showQuiz && (
                    <>
                        <Navbar notHomePage={true} />
                        <motion.h1
                            className="text-5xl px-5 md:text-5xl uppercase mt-8 font-bold text-center text-blue-500"
                            style={{ textShadow: "3px 0px 1px #fff", willChange: "transform, opacity" }}
                        >
                            {quizName}
                        </motion.h1>
                        {/* <p className="text-lg text-slate-300 mb-4 text-center max-w-2xl italic">
                        Welcome to the {quizName}! Test your knowledge by participating in our quiz.
                    </p> */}
                        <div className="w-full md:max-w-3xl bg-blue-600/5 p-6 shadow-md rounded-lg">
                            <iframe src={formLink} width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
                                Loading…
                            </iframe>
                        </div>
                    </>
                )}
            </div></Suspense>
    );
}

export default QuizPage;
