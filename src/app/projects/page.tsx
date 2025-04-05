import React from "react";
import { Header } from "../sections/Header";
import Projects from "../sections/Projects";

function page() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="pt-32">
        <Projects />
      </div>
    </div>
  );
}

export default page;
