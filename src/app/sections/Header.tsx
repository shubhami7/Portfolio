"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activePage, setActivePage] = useState<string>(""); // Track the active page

  useEffect(() => {
    // Get the current page from the window location and set the active page
    const path = window.location.pathname;
    setActivePage(path);
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="bg-white/10 p-2 rounded-full backdrop-blur">
        {/* Wrapping the Links with a div to apply background on the whole container */}
        <Link
          href="/"
          className={`${
            activePage === "/"
              ? "bg-white/10 backdrop-blur"
              : "text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          } px-4 py-1.5 rounded-full`}
          onClick={() => setActivePage("/")}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            activePage === "/projects"
              ? "bg-white/10 backdrop-blur"
              : "text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          } px-4 py-1.5 rounded-full`}
          onClick={() => setActivePage("/projects")}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`${
            activePage === "/about"
              ? "bg-white/10 backdrop-blur"
              : "text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          } px-4 py-1.5 rounded-full`}
          onClick={() => setActivePage("/about")}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${
            activePage === "/contact"
              ? "bg-white/10 backdrop-blur"
              : "text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          } px-4 py-1.5 rounded-full`}
          onClick={() => setActivePage("/contact")}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
