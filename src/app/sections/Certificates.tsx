import React from "react";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const certificates = [
  {
    title: "Software Engineer Intern",
    company: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/a0c2f427a0a9",
  },
  {
    title: "Problem Solving",
    company: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/9c2bcfeb8de5",
  },
  {
    title: "Java",
    company: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/81b0d25461c2",
  },
  {
    title: "JavaScript",
    company: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/789d209c7a9c",
  },
  {
    title: "Python",
    company: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/4c5892cfc650",
  },
];

function Certificates() {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="container">
        <SectionHeader
          title="Certificates"
          description="View my professional certificates."
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card key={certificate.link}>
              <h3 className="text-2xl font-serif">{certificate.title}</h3>
              <h2 className="text-lg font-serif -mb-5">
                {certificate.company}
              </h2>
              <a href={certificate.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer md:w-auto px-6">
                  <span>View</span>
                  <ArrowTopRightIcon />
                </button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
