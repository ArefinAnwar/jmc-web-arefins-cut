"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
export default function Navbar({ className, notHomePage = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (notHomePage) {
    return (
      <>
        {isMobile ? (
          <nav
            className={cn(
              "fixed visible md:invisible top-0 z-50 right-0 w-full bg-gray-900 bg-opacity-50 text-white",
              className
            )}
          >
            <div className="absolute top-0 right-0 flex items-center justify-between px-4 py-3">
              <div className="text-lg font-bold"></div>
              {/* Hamburger Icon */}
              <button
                onClick={toggleNavbar}
                className="block lg:hidden focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Links */}
            <div
              className={`lg:flex ${
                isOpen ? "block" : "hidden"
              } bg-[#070014] bg-opacity-80 z-50 lg:bg-transparent`}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4 p-4 lg:p-0">
                <Link
                  href="./#hero_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
                <Link
                  href="./#about_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
                <Link
                  href="./#gallery_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Gallery
                </Link>
                <Link
                  href="./#objective_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Objectives
                </Link>
                <Link
                  href="./#events_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Upcoming Events
                </Link>
                <Link
                  href="./quiz"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Quizes
                </Link>
                <Link
                  href="./#contacts_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        ) : (
          <div className="flex flex-row w-full md:w-[99%] fixed top-0 h-[3.5rem] bg-sky-950- bg-[#070014] z-50 justify-between bg-opacity-[92%] items-center">
            <Image
              className="z-40 border-[0px] ml-8  border-emerald-400 rounded-full mr-1"
              src="/jmc_logo.png"
              alt="JMC logo"
              sizes="100vw"
              width={75}
              height={75}
              priority
            />
            <div className="mr-10 text-white">
              <Link
                href="./#hero_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Home
              </Link>
              |
              <Link
                href="./#about_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                About
              </Link>
              |
              <Link
                href="./#gallery_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Gallery
              </Link>
              |
              <Link
                href="./#objective_section"
                className="px-3  cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Objectives
              </Link>
              |
              <Link
                href="./#events_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Events
              </Link>
              |
              <Link
                href="./quiz"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Quizes
              </Link>
              |
              <Link
                href="./#contacts_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {isMobile ? (
          <nav
            className={cn(
              "fixed visible md:invisible top-0 z-50 right-0 w-full bg-gray-900 bg-opacity-50 text-white",
              className
            )}
          >
            <div className="absolute top-0 right-0 flex items-center justify-between px-4 py-3">
              <div className="text-lg font-bold"></div>
              {/* Hamburger Icon */}
              <button
                onClick={toggleNavbar}
                className="block lg:hidden focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Links */}
            <div
              className={`lg:flex ${
                isOpen ? "block" : "hidden"
              } bg-[#070014] bg-opacity-80 z-50 lg:bg-transparent`}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4 p-4 lg:p-0">
                <Link
                  href="#hero_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
                <Link
                  href="#about_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
                <Link
                  href="#gallery_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Gallery
                </Link>
                <Link
                  href="#objective_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Objectives
                </Link>
                <Link
                  href="#events_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Upcoming Events
                </Link>
                <Link
                  href="/quiz"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Quizes
                </Link>
                <Link
                  href="#contacts_section"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        ) : (
          <div className="flex flex-row w-full md:w-[99%] fixed top-0 h-[3.5rem] bg-sky-950- bg-[#070014] z-50 justify-between bg-opacity-[92%] items-center">
            <Image
              className="z-40 border-[0px] ml-8  border-emerald-400 rounded-full mr-1"
              src="/jmc_logo.png"
              alt="JMC logo"
              sizes="100vw"
              width={75}
              height={75}
              priority
            />
            <div className="mr-10 text-white">
              <Link
                href="#hero_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Home
              </Link>
              |
              <Link
                href="#about_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                About
              </Link>
              |
              <Link
                href="#gallery_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Gallery
              </Link>
              |
              <Link
                href="#objective_section"
                className="px-3  cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Objectives
              </Link>
              |
              <Link
                href="#events_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Events
              </Link>
              |
              <Link
                href="/quiz"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Quizes
              </Link>
              |
              <Link
                href="#contacts_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}
