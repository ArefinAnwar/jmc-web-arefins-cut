"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ArticlePage() {
    const { slug } = useParams(); // Get the slug from the URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await fetch(`/api/articles`);
                if (!response.ok) throw new Error("Failed to fetch article");
                const data = await response.json();
                setArticle(data);
                // console.log(data)
                const filteredArticles = data.filter((data) => data.slug === slug);
                // console.log(filteredArticles)
                setArticle(filteredArticles[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchArticle();
    }, [slug]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="relative min-h-screen h-auto flex flex-col items-center justify-center bg-gray-950 text-white p-6">
            <div className="flex  flex-col md:w-10/12 w-[97%] py-7 px-10  bg-slate-800 rounded-lg h-auto top-12">
                <div className="flex flex-col w-full items-center justify-center">
                    <Image
                        src={article.articleImage.url}
                        alt={article.articleTitle}
                        width={400}
                        height={200}
                        className="w-full h-auto shadow-md "
                        priority
                    />
                </div>

                <h1 className="text-4xl font-bold text-blue-500 mt-5">{article.articleTitle}</h1>
                <div className="flex flex-col w-full text-right mt-3">Wriitten by - Omuk ||  28 February, 2025</div>
                <p className="mt-4 text-lg max-w-3xl ">{article.articleBody}</p>
            </div>
        </div>
    );
}
