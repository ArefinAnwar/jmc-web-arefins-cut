"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
                  href="/articles"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Articles
                </Link>
                <SignedIn>
                  <Link
                    href="/submit_article"
                    className="py-2 lg:py-0 cursor-pointer"
                    onClick={toggleNavbar}
                  >
                    Submit Article
                  </Link>
                  <Link
                    href="/resources"
                    className="py-2 lg:py-0 cursor-pointer"
                    onClick={toggleNavbar}
                  >
                    Resources
                  </Link>
                </SignedIn>
                <SignedOut>
                  <SignInButton className="py-2 lg:py-0 cursor-pointer" />
                </SignedOut>
                <SignedIn>
                  <div className="inline-flex my-1 justify-center items-center bglate-300">
                    <UserButton />
                  </div>
                </SignedIn>
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
            <div className="mr-10 text-white h-auto items-center justify-center flex">
              <Link
                href="./#hero_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Home
              </Link>
              |
              <Link
                href="./#about_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                About
              </Link>
              |
              <Link
                href="./#gallery_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300"
              >
                Gallery
              </Link>
              |
              <Link
                href="./#events_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Events
              </Link>
              |
              <Link
                href="/quiz"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Quizes
              </Link>
              |
              <Link
                href="/articles"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300"
              >
                Articles
              </Link>
              |
              <Link
                href="#contacts_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Contact
              </Link>
              |
              <SignedIn>
                <Link
                  href="/submit_article"
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
                >
                  Submit article
                </Link>
                |
                <Link
                  href="/resources"
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300"
                >
                  Resources
                </Link>
                |
              </SignedIn>
              <SignedOut>
                <SignInButton
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out
                duration-300 "
                />
              </SignedOut>
              <SignedIn>
                <div className="inline-flex ml-3 justify-center items-center bglate-300">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <ClerkProvider>
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
                  href="/articles"
                  className="py-2 lg:py-0 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Articles
                </Link>
                <SignedIn>
                  <Link
                    href="/submit_article"
                    className="py-2 lg:py-0 cursor-pointer"
                    onClick={toggleNavbar}
                  >
                    Submit Article
                  </Link>
                  <Link
                    href="/resources"
                    className="py-2 lg:py-0 cursor-pointer"
                    onClick={toggleNavbar}
                  >
                    Resources
                  </Link>
                </SignedIn>
                <SignedOut>
                  <SignInButton className="py-2 lg:py-0 cursor-pointer" />
                </SignedOut>
                <SignedIn>
                  <div className="inline-flex my-1 justify-center items-center bglate-300">
                    <UserButton />
                  </div>
                </SignedIn>
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
            <div className="mr-10 text-white  h-auto items-center justify-center flex">
              <Link
                href="#hero_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Home
              </Link>
              |
              <Link
                href="#about_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                About
              </Link>
              |
              <Link
                href="#gallery_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Gallery
              </Link>
              |
              <Link
                href="#events_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Events
              </Link>
              |
              <Link
                href="/quiz"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Quizes
              </Link>
              |
              <Link
                href="/articles"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Articles
              </Link>
              |
              <Link
                href="#contacts_section"
                className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
              >
                Contact
              </Link>
              |
              <SignedIn>
                <Link
                  href="/submit_article"
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300 "
                >
                  Submit article
                </Link>
                |
                <Link
                  href="/resources"
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out duration-300"
                >
                  Resources
                </Link>
                |
              </SignedIn>
              <SignedOut>
                <SignInButton
                  className="px-3 cursor-pointer hover:text-blue-400 ease-in-out
                duration-300 "
                />
              </SignedOut>
              <SignedIn>
                <div className="inline-flex ml-3 justify-center items-center bglate-300">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </ClerkProvider>
    );
  }
}
