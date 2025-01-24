"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";

const images = [
  "/four.jpg",
  "/five.jpg",
  "/one.webp",
  "/three.jpg",
  "/two.jpg",
  "/one.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-10% 0px" });

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Start auto sliding
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handle touch gestures (swiping)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="flex relative flex-col w-full min-h-screen justify-center items-center"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        // color={color}
        refresh
      />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-5xl absolute top-0 px-5 md:text-5xl uppercase mt-16 md:mt-10 mb-4 md:mb-10 font-bold text-center text-blue-500 z-40"
        style={{
          textShadow: "3px 0px 1px #fff",
          willChange: "transform, opacity",
        }}
      >
        Gallery
      </motion.h1>
      <div className="mt-0 md:mt-20 relative w-[90%] max-w-3xl mx-auto overflow-hidden  shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 border-2 border-sky-800 shadow-lg shadow-sky-500"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
        >
          &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
        >
          &#9654;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
