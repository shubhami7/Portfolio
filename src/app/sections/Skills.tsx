import React from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const skillsList = [
  {
    title: "Programming Languages",
    skills: [
      { skill: "Java" },
      { skill: "Python" },
      { skill: "JavaScript" },
      { skill: "TypeScript" },
      { skill: "C" },
      { skill: "C++" },
      { skill: "Golang" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { skill: "React" },
      { skill: "Next.js" },
      { skill: "Node.js" },
      { skill: "Express.js" },
      { skill: "TailwindCSS" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { skill: "PostgresSQL" },
      { skill: "MongoDB" },
      { skill: "Firebase" },
      { skill: "AWS" },
      { skill: "Spring Boot" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { skill: "Pandas" },
      { skill: "NumPy" },
      { skill: "Scikit-learn" },
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      { skill: "JUnit" },
      { skill: "Jest" },
      { skill: "AWS Lambda" },
      { skill: "PM2" },
    ],
  },
];

function Skills() {
  return (
    <div className="flex flex-col items-center pt-48">
      <div className="container">
        <SectionHeader
          title="Skills"
          description="View the technical skills I am experienced in!"
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {skillsList.map((skillItem) => (
            <Card key={skillItem.title}>
              <div className="-my-3">
                <h1 className="font-serif text-2xl">{skillItem.title}</h1>
                <hr className="border-t-2 border-white/20 mt-3 mb-3" />
                <div className="flex">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold text-md lg:text-md gap-3 text-transparent bg-clip-text">
                    {skillItem.skills.map((skill) => (
                      <p key={skill.skill}>{skill.skill}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
