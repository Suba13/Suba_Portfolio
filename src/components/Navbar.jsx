import React, { Fragment, useEffect, useState } from "react";
import { navItems } from "../data/data";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <nav className="fixed bg-transparent top-0 w-full py-2 z-50 backdrop-blur-sm border-b border-white/20 px-3 transition-all bg-[#020617]">
        <div className="container mx-auto relative flex items-center px-6 py-3">
          <div className="text-2xl text-outline font-bold"> Developer </div>
          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 text-white text-sm font-light uppercase">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-teal-500 cursor-pointer transition-colors text-lg
                   ${activeSection === item.id ? "text-teal-400" : ""}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="ml-auto md:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#01191d]/95 backdrop-blur-md border-t border-white/20">
            <ul className="flex flex-col items-center space-y-6 py-6 text-white uppercase">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg cursor-pointer transition-colors hover:text-teal-400
                    ${activeSection === item.id ? "text-teal-400" : ""}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
