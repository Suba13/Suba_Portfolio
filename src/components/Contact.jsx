import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-[#0F172A] to-[#020617]
"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-300">Get In Touch</h2>
        <p className="text-gray-500 mb-12">
          If you want to discuss more in detail, please contact me
        </p>

        {/* Contact details in single horizontal line */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Location */}
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-white text-xl" />
            <span className="text-slate-300 text-lg">Sydney, Australia</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <MdEmail className="text-white text-xl" />
            <a
              href="mailto:writetosubab@gmail.com"
              className="text-slate-300 text-lg hover:text-teal-400 transition"
            >
              writetosubab@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <PiPhone className="text-white text-xl" />
            <a
              href="tel:+61422713107"
              className="text-slate-300 text-lg hover:text-teal-400 transition"
            >
              +61 422 713 107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
