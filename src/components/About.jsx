import React from "react";
import { aboutExperiences } from "../data/data";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-[#111827] to-[#020617]
"
    >
      <div className="continer mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          About Me
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Get to know more about my background and experience
        </p>
        <div className="bg-[#020617] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-slate-300">
              Innovative, task-driven Full Stack Software Engineer with over 4
              years of experience in Web design and development. I will adapt to
              both self-starting and collaborative environments while staying
              focused on achieving high-quality results under strict deadlines.
              Proficient in developing databases, creating user interfaces,
              writing, and testing the codes, troubleshooting simple/complex
              issues, and implementing new features based on product owner
              requirements/ user feedback
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p>Name:</p>
                <p className="font-medium text-white">
                  Suba Dharshini Balasubramanian
                </p>
              </div>
              <div>
                <p>Email:</p>
                <p className="font-medium text-white">writetosubab@gmail.com</p>
              </div>
              <div>
                <p>Phone No:</p>
                <p className="font-medium text-white">0422713107</p>
              </div>
              <div>
                <p>Availability:</p>
                <p className="font-medium text-white">Full Time</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white"> My Experience</h3>
            <div className="space-y-6">
              {aboutExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white">{exp.title}</h4>
                      <p className="text-teal-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
