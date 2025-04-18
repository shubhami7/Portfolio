import React from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Image from "next/image";
import CardHeader from "../components/CardHeader";
import Meme from "@/assets/semicolon2.jpg";
import Me from "@/assets/IMG_2999.jpg";

const myDescription =
  "Hey I'm Shubham Inavolu, a computer science enthusiast with a passion for coding and building innovative solutions. I enjoy working on projects that challenge me to think outside the box, whether it's creating a fun game with AI or developing useful apps to help people. When I'm not coding, you can find me exploring my hobbies, learning new things, or just enjoying a cup of coffee! I'm always excited to connect with others who share the same drive for tech and innovation!";

const calculatedDecisionMaker =
  "I am a calculated decision maker. This is best shown on the felt when I play poker: I analyze the situation, trying to understand the strength of my opponent based on his bet sizing and body language. I compare that with my strength: am I strong and want to extract value, or am I bluffing? I compare many factors that ultimately determine my action. This extends to my professional life as well where I consider many factors that play a role in my decisions, and am not afraid to take risks when the potential rewards are justified. In software engineering, this mindset helps me break down complex problems, analyze trade-offs, and make data-driven decisions. Whether debugging an issue, optimizing an algorithm, or choosing a system architecture, I assess multiple variables before taking action. Just like in poker, I balance risk and reward, knowing when to push boundaries and when to take a more conservative approach. This ability to adapt, think strategically, and recognize patterns makes me an effective problem solver in professional environments.";

const classes = [
  { title: "Data Structures", left: "10%", top: "5%" },
  { title: "Algorithms", left: "25%", top: "30%" },
  { title: "Web Development", left: "10%", top: "50%" },
  { title: "Artificial Intelligence", left: "60%", top: "9%" },
  { title: "Machine Learning", left: "25%", top: "75%" },
  { title: "Programming Methodologies", left: "50%", top: "65%" },
  { title: "Computer Networks", left: "50%", top: "35%" },
];

const hobbies = [
  { title: "💪 Working Out", left: "15%", top: "5%" },
  { title: "🥘 Cooking", left: "50%", top: "5%" },
  { title: "🎮 Video Games", left: "10%", top: "35%" },
  { title: "🎥 Movies", left: "35%", top: "45%" },
  { title: "🃏 Poker", left: "70%", top: "45%" },
  { title: "🛩️ Traveling", left: "5%", top: "65%" },
  { title: "🎵 Music", left: "45%", top: "70%" },
  { title: "🏎️ Cars", left: "65%", top: "30%" },
];

function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex flex-col justify-center">
        <SectionHeader title="About Me" description="Learn more about me!" />
        <div className="flex justify-center items-center mb-10">
          <div className="w-75 h-75 rounded-full overflow-hidden">
            <Image
              src={Me}
              alt="me"
              className="object-cover w-full h-full"
              width={300}
              height={300}
            />
          </div>
        </div>
        <p className="text-center text-lg font-medium text-white/80 mt-4 mb-10">
          {myDescription}
        </p>
        <Card>
          <CardHeader title="More Than Just Code" description="" />
          <p className="text-center text-white/80 mt-4">
            {calculatedDecisionMaker}
          </p>
        </Card>
        <div className="md:grid md:grid-cols-5 md:gap-8">
          <Card className="h-[320px] md:col-span-2">
            <div>
              <CardHeader
                title="Education"
                description="My current formal education and future plans."
              />
              <div className="mt-2 font-serif">
                <div className="bg-gradient-to-r from-red-900 to-red-900 inline-flex font-bold text-2xl text-transparent bg-clip-text">
                  <h3>UMass Amherst</h3>
                </div>
                <h3 className="text-xl">Computer Science</h3>
                <p className="text-sm text-white/80 mt-6 font-serif">
                  Expected Graduation Dates
                </p>
                <div className="flex justify-between w-full mt-2">
                  <span>Undergraduate:</span>
                  <span>December 2025</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Masters:</span>
                  <span>May 2027</span>
                </div>
              </div>
            </div>
          </Card>
          <Card className="h-[320px] p-0 flex-col md:col-span-3">
            <div className="px-6 py-6">
              <CardHeader
                title="Courses"
                description="View some of the fundamental Computer Science courses I have taken."
              />
            </div>
            <div className="relative flex-1 h-[210px]">
              {classes.map((course) => (
                <div
                  key={course.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: course.left,
                    top: course.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {course.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-8">
          <Card className="h-[320px] p-0 flex-col md:col-span-3">
            <div className="px-6 py-6">
              <CardHeader
                title="Beyond the Code"
                description="My interests and hobbies beyond Computer Science!"
              />
            </div>
            <div className="relative flex-1 h-[210px]">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-2">
            <div>
              <CardHeader
                title="Meme"
                description="My favorite programming meme :)"
              />
              <div>
                <Image src={Meme} alt="Meme" className="mt-3" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
