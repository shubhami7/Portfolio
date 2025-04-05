import React from "react";
import { Header } from "../sections/Header";
import Contact from "../sections/Contact";

function page() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="pt-32">
        <Contact />
      </div>
    </div>
  );
}

export default page;
