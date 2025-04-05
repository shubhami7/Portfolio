import React from "react";
import { StarIcon } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const experiences = [
  {
    title: "Software Engineer",
    company: "Hack UMass",
    time: "November 2024 - November 2024",
    technologies: [
      { tech: "Java" },
      { tech: "Spring Boot" },
      { tech: "MongoDV" },
      { tech: "Redis" },
      { tech: "AWS Lambda" },
      { tech: "JUnit" },
    ],
    description:
      "Smart Scheduler is an intelligent scheduling tool designed to simplify time management. Built during Hack UMass, it helps users effortlessly organize their tasks, meetings, and deadlines by automatically generating optimized schedules based on priorities and availability. Our team focused on creating a seamless experience, ensuring users could easily manage their time without the hassle of manual planning. Whether balancing work, school, or personal commitments, Smart Scheduler adapts to individual needs, making productivity feel effortless.",
    results: [
      {
        title:
          "Reduced API response times by 21% with Redis caching and optimized data retrieval, improving system responsiveness.",
      },
      {
        title:
          "Optimized MongoDB queries to enhance performance and efficiently handle large-scale scheduling requests.",
      },
      {
        title:
          "Maintained 95%+ test coverage with JUnit, ensuring reliability and preventing regressions.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Formula SAE",
    time: "September 2022 - March 2023",
    technologies: [{ tech: "Python" }, { tech: "NumPy" }, { tech: "PyGUI" }],
    description:
      "Formula SAE is a collegiate competition where students design, build, and race Formula-style cars, focusing on innovation and performance. As part of my university’s Formula SAE team, I built a real-time dashboard that helped engineers analyze performance data, leading to data-driven adjustments that improved efficiency and reduced lap times.",
    results: [
      {
        title:
          "Built a real-time telemetry dashboard with PyGUI for live performance analysis.",
      },
      {
        title:
          "Optimized data pipelines with NumPy, cutting processing time by 30%.",
      },
      {
        title:
          "Mapped telemetry data to track sectors, contributing to a 15% lap time reduction.",
      },
    ],
  },
  {
    title: "Coding Mentor",
    company: "Code Ninjas",
    time: "May 2022 - September 2023",
    technologies: [{ tech: "JavaScript" }, { tech: "Python" }],
    description:
      "Code Ninjas is a coding education program that teaches kids how to code through fun, hands-on projects. Using a game-based learning approach, it helps students develop problem-solving skills, creativity, and confidence in programming. The program focuses on making coding engaging and accessible for young learners, fostering a supportive environment where they can build real-world skills.",
    results: [
      {
        title:
          "Mentored 30+ students in JavaScript through hands-on game development.",
      },
      {
        title:
          "Led Python summer camps, creating interactive lessons for 7th and 8th graders.",
      },
      {
        title:
          "Fostered problem-solving and collaboration in a supportive learning environment.",
      },
    ],
  },
];

function Experiences() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mt-24">
        <SectionHeader
          title="Experiences"
          description="View my technical experiences!"
        />
        <div className="mt-10">
          {experiences.map((experience, index) => (
            <Card key={`${experience.company}-${index}`}>
              <div className="lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl">
                    {experience.title}
                  </h3>
                  <div className="flex justify-between w-full text-lg font-serif">
                    <span>{experience.company}</span>
                    <span>{experience.time}</span>
                  </div>
                  <div className="flex">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold text-md gap-3 text-transparent bg-clip-text mt-2">
                      {experience.technologies.map((tech) => (
                        <p key={tech.tech}>{tech.tech}</p>
                      ))}
                    </div>
                  </div>
                  <hr className="border-t-2 border-white/20 mt-4" />
                  <p className="mt-4 text-white/80">{experience.description}</p>
                  <ul className="flex flex-col gap-2 mt-4">
                    {experience.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/80"
                      >
                        <div className="inline-flex gap-2 text-md">
                          <StarIcon className="size-6" />
                          {result.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
