
// 1. Use official white logo of JMC (current one is cropped by the edges).

// 2. Header/title font e.g. Josephite Math Mania, What is JMC?, Our objectives, etc. font that is used: Change that font for something better, maybe use some 3d like textured (normal) fonts.

// 3. Optimize the code for popups under "What is JMC?" and "Our Objectives" for more efficiency as it kind of lags.

// 4. Fix alignment for "Our Objectives" and "Memories"as it overlaps with the popups- these things changes their relative position upon ratio of we window, so make it such that they dont change their positions among themselves.

// 5. Make the glow ring around popups under "Our Objectives" blue & white intead of orange-purple.

// 6. Make the "Upcoming Event" page swipe one event at a time with sliding animation instead of altering 3 at once.

// 7. Make portaits of people under "people about JMC" cover the full height of the box, and text to the side.

// 8. Under "Articles" start with trending/recent articles in full version just beneath the thumbnail article section upon scrolling down.
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import OurObjectives from "@/components/OurObjectives";
import UpcomingEvents from "@/components/UpcomingEvents";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Testimonials from "@/components/Testimonials";
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
  const typingSpeed = 0; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    console.log("H")

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

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <ClerkProvider >

      <div className="relative h-screen items-center justify-center overflow-y-scroll bg-[#070014]">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        {!loading && (
          <>
            <Navbar />
            <section id="hero_section">
              <HeroSection />
            </section>

            <section id="about_section" className="bg-slat-400 h-screen overflow-hidden">
              <AboutUs />
            </section>

            <section id="objective_section">
              <OurObjectives />
            </section>

            <section id="gallery_section">
              <Gallery />
            </section>

            <section id="events_section">
              <UpcomingEvents />
            </section>
            <section id="testimonial_section">
              <Testimonials />
            </section>
            <section id="contacts_section">
              <ContactUs />
            </section>


            <Footer />
          </>
        )}
      </div>
    </ClerkProvider >

  );
}
