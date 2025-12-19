import React from "react";
import AnimatedTitles from "./utils/AnimatedTitles";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import HeroImg from "../assets/suba.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20 bg-gradient-to-r from-[#0F172A] to-[#020617]
"
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-light capitalize tracking-wide text-teal-500">
              I'm Suba Dharshini
            </h3>
            <AnimatedTitles />
            <p className="mt-4 text-gray-300 max-w-xl">
              Building scalable and interactive websites and applications with a
              focus on quality and performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                Web Design
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                Frontend Development
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                Web Development
              </span>
            </div>

            <div className="flex gap-5 mt-8 justify-center md:justify-start text-gray-400">
              <a
                href="https://www.linkedin.com/in/suba-dharshini/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors"
              >
                <LiaLinkedinIn />
              </a>
              <a
                href="#contact"
                className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors"
              >
                <MdEmail />
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="px-6 py-2 cursor-pointer rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 transition-opacity"
              >
                View my Works
              </a>
              <a
                href="/Resume_Suba_Dharshini_Balasubramanian.pdf"
                download
                className="px-6 py-2 cursor-pointer rounded-full bg-white/10 backdrop-blur-md font-light text-white hover:opacity-70 transition-opacity"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src={HeroImg} // replace with your image path
              alt="Suba Dharshini"
              className="w-full max-w-lg h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
