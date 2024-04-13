import React from "react";
import { NavLinks } from "./Navbar";
import { FaInstagram } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="dark:bg-black dark:text-white pt-10 text-white">
      <nav className="container">
        <ul className="flex items-center justify-center gap-5">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                className="inline-block text-lg font-medium py-3 hover:text-primary  transition-all duration-400"
                href={link}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* footer icons  */}
      <section className="bg-dark container ">
        <div className="mt-10 p-6 flex items-center justify-between gap-5">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <FaInstagram className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <FaThreads className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <a href="https://www.linkedin.com/in/prayag-jadav-75222b246/">
              <FaLinkedinIn className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </a>
          </div>
          <div className="hidden sm:block">
            {" "}
            <FaHeart className="inline text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />{" "}
            by @pforprayag
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
