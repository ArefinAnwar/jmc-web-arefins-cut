"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";



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

const articles = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null)
    // const articles = await fetchArticles();
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch("/api/articles"); // Calls our Next.js API route
                if (!response.ok) throw new Error("Failed to fetch articles");
                const data = await response.json();
                console.log('Server response below')
                setArticles(data);
                console.log(data)
                console.log(articles)
                setLoading(false);


            } catch (err) {
                setError("Failed to load articles.");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-slate-950 justify-center py-10 px-4 relative">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className={cn(
                    // "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
                    // "mask-image:radial-gradient(500px_circle_at_center, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                    // ""
                )}
            />
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
                        Articles
                    </motion.h1>
                    <p className="text-lg text-slate-300 mb-4 text-center max-w-2xl italic z-40">
                        Welcome to the Article section!
                    </p>

                    <div className="w-full md:max-w-11/12 bg-blue-60/5 p-6 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-4 h-auto justify-items-center justify-center z-40">
                        {articles.map((article) => (
                            <QuizCard key={article.slug}
                                title={article.articleTitle}
                                link={article.slug}
                                imagee={article.articleImage.url}
                                image="/five.jpg"

                            />
                        ))}




                    </div>
                </>
            )}
        </div>
    );
};
export default articles;


function QuizCard({ title, link, time, image, imagee }) {

    return (

        <div className=" bg-blue-950/80 bg-opacity-90 mb-6 rounded-lg p-5 flex flex-col   items-center  md:mx-4  min-h-[20rem] w-[18rem]">
            <Link href={`/articles/${link}`} >
                <Image
                    src={imagee}
                    alt={title}
                    width={800}
                    height={400}
                    className="w-full h-auto shadow-md "
                    priority
                />
                {/* {imagee} */}
                <h1 className="text-xl text-white mt-3 w-full italic">{title}</h1>


            </Link>
        </div>
    );
}
