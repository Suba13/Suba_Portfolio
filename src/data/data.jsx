import React, { useState, useEffect } from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import {
  MdEmail,
  MdOutlineSettingsApplications,
  MdApi,
  MdAutorenew,
} from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
  SiElementor,
  SiRedis,
  SiBabel,
  SiWebpack,
  SiJenkins,
  SiJest,
  SiMocha,
  SiChai,
  SiBitbucket,
  SiJira,
  SiConfluence,
  SiScrumalliance,
  SiSwagger,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
  GiTestTubes,
} from "react-icons/gi";
import { VscJson } from "react-icons/vsc";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "WordPress", icon: <FaWordpress className="text-white" /> },
      { name: "Elementor", icon: <SiElementor className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
      { name: "Redis", icon: <SiRedis className="text-green-500" /> },
      { name: "REST APIs", icon: <MdApi className="text-teal-400" /> },
      { name: "JSON", icon: <VscJson className="text-yellow-400" /> },
    ],
  },
  {
    title: "Build, Bundling & Automation",
    skills: [
      { name: "Babel", icon: <SiBabel className="text-yellow-400" /> },
      { name: "Webpack", icon: <SiWebpack className="text-sky-400" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
    ],
  },
  {
    title: "Testing Tools",
    skills: [
      { name: "Jest", icon: <SiJest className="text-red-500" /> },
      { name: "Mocha", icon: <SiMocha className="text-amber-700" /> },
      { name: "Chai", icon: <SiChai className="text-yellow-600" /> },
      { name: "Enzyme", icon: <GiTestTubes className="text-purple-400" /> },
    ],
  },
  {
    title: "Version Control / Collaboration",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Bitbucket", icon: <SiBitbucket className="text-blue-500" /> },
    ],
  },
  {
    title: "Project Management & Agile",
    skills: [
      { name: "Agile", icon: <MdAutorenew className="text-green-400" /> },
      { name: "Scrum", icon: <SiScrumalliance className="text-yellow-400" /> },
      { name: "JIRA", icon: <SiJira className="text-blue-500" /> },
      { name: "Confluence", icon: <SiConfluence className="text-sky-400" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Swagger", icon: <SiSwagger className="text-green-400" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      '"Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    content:
      '"Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "David Wilson",
    position: "Founder, StartupHub",
    content:
      '"Imam\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "Tic Tac Toe",
    category: "Game Web Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link:"https://github.com/Suba13/TicTacToe"
  },
  {
    title: "Fitness App UI",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link:"https://github.com/Suba13/react-node-app"
  },
  {
    title: "Analytics Dashboard",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      link:"https://github.com/Suba13/react-node-app"
  },
];
export const experiences = [
  {
    id: 1,
    company: "Audience Hearing, Australia ",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Freelance Web Developer",
    period: "April 2024 - Sep-2024",
    description:
      "Developed a responsive and SEO-optimized WordPress website with custom themes and plugins tailored to client requirements.Provided ongoing maintenance and updates, ensuring a user-friendly experience and incorporating client feedback.",
    skills: ["WordPress", "Elementor"],
  },
  {
    id: 2,
    company: "Zeitifi, Australia",
    client: "",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Software Engineer",
    period: "Mar 2023 - May 2023",
    description:
      "Built reusable front-end libraries and responsive UI pages using React Native Paper, developing cross-platform mobile applications for iOS, Android, and web with consistent user experience.Implemented secure authentication with AWS Amplify, conducted code reviews, followed best practices, and delivered high-quality features under minimal supervision.",
    skills: ["React Native", "GIT", "GitHub"],
  },
  {
    id: 3,
    company: "Incedo Inc, India",
    client: "Verizon India(Airwave Sp)",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Senior Software Engineer",
    period: "Sep 2020 – May 2022",
    description:
      "Proficient in React JS, HTML, CSS, Bootstrap, Node JS, Express, PostgreSQL, MySQL, Redis, JSON, REST APIs, Swagger, Jenkins, and version control tools GIT, GitHub.Experienced with Agile project management tools JIRA, Confluence and building robust, scalable web applications.",
    skills: [
      "React JS",
      "HTML",
      "CSS",
      "JIRA",
      "Confluence",
      "Node JS",
      "Express",
      "PostgreSQL",
      "GIT",
      "GitHub",
      "Bootstrap",
      "JSON",
      "REST APIs",
      "Jenkins",
      "MySQL",
      "Swagger",
      "Redis",
    ],
  },
  {
    id: 4,
    company: "Incedo Inc, India",
    client: "Verizon India(Janus)",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Senior Software Engineer",
    period: "Jan 2020 - Aug 2020",
    description:
      "Developed reusable modules for the S2IM wireless network portal and integrated a Tour Guide feature for new users, following UI/UX canvas standards.Implemented Node.js REST APIs, scheduled tasks, and collaborated in Agile sprints to deliver error-free components and prioritize features with the product owner.",
    skills: [
      "React JS",
      "HTML",
      "CSS",
      "JIRA",
      "Confluence",
      "Node JS",
      "Express",
      "GIT",
      "GitHub",
      "JSON",
      "REST APIs",
    ],
  },
  {
    id: 5,
    company: "Photon Interactive P/L, India",
    client: "Medimpact HealthCare Systems, U.S.A.",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Software Engineer",
    period: "Aug 2018 – Dec 2019",
    description:
      "Designed interactive web pages and components based on client requirements and business models, implementing drug price management, drug benefit modules, cart checkout, payment operations, and medical information features in ReactJS.Improved application quality by reducing user-reported defects by 70% through root cause analysis and timely bug fixes.",
    skills: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Mocha",
      "Chai",
      "Bitbucket",
    ],
  },
  {
    id: 6,
    company: "Photon Interactive P/L, India",
    client: "JC Penny Company Inc, U.S.A.",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Software Engineer",
    period: "June 2017 - July 2018",
    description:
      "Built responsive user interfaces using HTML, CSS, JavaScript, and ReactJS, developing reusable components such as gift cards, checkout flows, and star ratings.Ensured high-quality, error-free code through unit testing with Jest and Enzyme, daily debugging, and post-deployment hotfix support.",
    skills: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Enzyme",
      "Jest",
      "Bootstrap",
      "GIT",
      "GITHub",
    ],
  },
];

export const aboutExperiences = [
  {
    id: 1,
    company: "Photon Interactive P/L, India",
    title: "Software Engineer",
    period: "2017-2019",
  },
  {
    id: 2,
    company: "Incedo Inc, India(Client : Verizon)",
    title: "Senior Software Engineer",
    period: "2020-2022",
  },
  {
    id: 3,
    company: "Zeitifi, Australia",
    title: "Software Engineer",
    period: "Mar 2023 - May 2023",
  },
  {
    id: 4,
    company: "Audience Hearing, Australia ",
    title: "Freelance Web Developer",
    period: "April 2024 - Sep-2024",
  },
];
          {/* <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Send me a message
            </h3>
            <form
              action="mailto:writetosubab@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label className="mb-2 text-sm text-slate-300">Your name</label>
                <input
                  type="text"
                  name="Name"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="Email"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 text-sm text-slate-300">Subject</label>
                <input
                  type="text"
                  name="Subject"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 text-sm text-slate-300">Message</label>
                <textarea
                  name="Message"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-700">
                Send Message
              </button>
            </form>
          </div> */}