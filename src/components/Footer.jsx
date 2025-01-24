"use client";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-auto py-4  md:py-0 md:h-40 bg-slate-800/30 items-center justify-center">
      <div className="h-full flex flex-row w-11/12 md:w-1/6 justify-center items-center ml-2">
        <Image
          className="z-40 md:w-[75%] h-[50%] w-[20%] mr-3 rounded-2xl "
          src="/jmc_logo.png"
          alt="SAGE-cap"
          sizes="100vw"
          width={3}
          height={3}
        />
        <h1 className="text-white text-xl py-4 uppercase">
          Josephite <br /> Math <br /> Club
        </h1>
      </div>
      <div className="flex flex-row w-11/12  justify-center items-center md:w-auto md:mb-0 mb-4">
        <div className="text-xs h-full w-11/12 md:w-auto md:ml-40 m-4 md:mr-8 gap-2 flex flex-col justify-center text-white">
          <Link className="hover:underline" href="#hero_section">
            Home
          </Link>
          <Link className="hover:underline" href="#about_section">
            About
          </Link>
          <Link className="hover:underline" href="#gallery_section">
            Gallery
          </Link>
          <Link className="hover:underline" href="#objective_section">
            Objectives
          </Link>
        </div>
        {/* <div className="h-full text-xs flex w-11/12  md:w-auto gap-2 flex-col justify-center text-white">
          <Link className="hover:underline" href="#darkness">
            Our mission
          </Link>
          <Link className="hover:underline" href="#faq-section">
            FAQ
          </Link>
          <Link className="hover:underline" href="#journey-of-sage">
            Our Journey
          </Link>
          <Link className="hover:underline" href="#meet-the-team">
            Meet the team
          </Link>
        </div> */}
        <div className="h-full text-xs flex w-11/12  bg-sate-300 md:w-56 gap-2 flex-col justify-center text-white">
          <h1 className="text-sm text-blue-300">
            Subscribe to our newsletter!
          </h1>
          <input
            className="text-sm w-2xl py-2  px-3 rounded-xl bg-white/10"
            type="email"
            placeholder="Your email"
          ></input>
          <button className="uppercase w-full bg-blue-500/80 rounded-lg py-1 text-base font-medium mb-3">
            Subscribe
          </button>
        </div>
      </div>
      <span className="text-sm absolute bottom-2 text-slate-300 mx-auto">
        © JMC | Made with ❤️ by{" "}
        <Link
          target="_blank"
          className="text-blue-500"
          href="https://www.linkedin.com/in/arefin-anwar-03518a330/"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/arefin-anwar-03518a330/",
              "_blank"
            )
          }
        >
          Arefin Anwar
        </Link>
      </span>
    </div>
  );
}
