import React from "react";
import { Header } from "../sections/Header";
import About from "../sections/About";

function page() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="pt-32">
        <About />
      </div>
    </div>
  );
}

export default page;
