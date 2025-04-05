import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { StarIcon } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const portfolioProjects = [
  {
    title: "NavAIgate",
    technologies: [
      { tech: "React" },
      { tech: "Node.js" },
      { tech: "Express.sj" },
      { tech: "Firebase" },
      { tech: "Gemini API" },
      { tech: "Vercel" },
      { tech: "Tailwind CSS" },
    ],
    description:
      "NavAIgate is a smart travel planning web app that helps users create personalized trip itineraries effortlessly. By considering factors like destination, budget, travel time, and group size, it generates optimized plans with recommended attractions, dining options, and activities. The app integrates real-time data to ensure up-to-date suggestions and streamlines the planning process, making travel both stress-free and enjoyable. Whether you're exploring a new city or planning a weekend getaway, NavAIgate provides tailored recommendations to maximize your experience.",
    results: [
      {
        title:
          "Built a microservices-based full-stack AI-powered trip planner using Gemini AI to generate personalized itineraries based on user preferences",
      },
      {
        title:
          "Integrated Google Places API and Firebase Authentication, scaling to 35+ users and 150+ AI-generated itineraries.",
      },
      {
        title:
          "Reduced API response times by 30% using Axios caching and deployed on Vercel and Firebase Functions for scalability.",
      },
    ],
    link: "https://github.com/shubhami7/NavAIgate",
  },
  {
    title: "Project Manager",
    technologies: [
      { tech: "Next.js" },
      { tech: "Node.js" },
      { tech: "PostgresSQL" },
      { tech: "AWS" },
      { tech: "Tailwind CSS" },
      { tech: "Cognito" },
    ],
    description:
      "Project Manager is a web-based dashboard designed to help teams efficiently organize and track their projects. It provides intuitive tools for creating, prioritizing, and managing tasks while offering a clear visual timeline with Gantt charts. The platform ensures seamless collaboration by enabling real-time updates, secure user authentication, and optimized performance for smooth task management. Built for scalability and reliability, Project Manager simplifies workflow coordination, making it easy to stay on top of deadlines and project progress.",
    results: [
      {
        title:
          "Developed a scalable project management tool with CRUD operations, task prioritization, and Gantt chart visualization.",
      },
      {
        title:
          "Engineered horizontal scalability with PM2 clustering, AWS Auto Scaling, and distributed databases, ensuring high availability.",
      },
      {
        title:
          "Reduced API latency by 40% with caching and rate limiting while integrating AWS Cognito for secure authentication.",
      },
    ],
    link: "https://github.com/shubhami7/Project-Manager-",
  },
  {
    title: "Chess With AI Opponent",
    technologies: [{ tech: "Java" }, { tech: "Swing" }, { tech: "JUnit" }],
    description:
      "Chess with AI Opponent is an interactive chess game that lets players compete against a computer-powered opponent. Featuring a user-friendly Java Swing interface, it allows for smooth gameplay with options to save and load matches using standard chess notation. The AI opponent provides a challenging experience by analyzing moves and adapting strategies, making each game engaging and dynamic. Whether you're a beginner looking to practice or an experienced player seeking a tough match, Chess with AI Opponent offers an immersive way to sharpen your skills.",
    results: [
      {
        title:
          "Built a Java-based chess engine with an interactive Swing GUI and FEN support for saving/loading games.",
      },
      {
        title:
          "Implemented AI opponent using minimax with alpha-beta pruning, evaluating 200+ board states per turn in under 500ms.",
      },
      {
        title:
          "Optimized search efficiency with Zobrist hashing, reducing redundant computations by 40%, and achieved 100% test coverage with JUnit.",
      },
    ],
    link: "https://github.com/shubhami7/Chess-With-AI-Opponent",
  },
  {
    title: "Connect-4 AI",
    technologies: [{ tech: "Python" }, { tech: "NumPy" }],
    description:
      "Connect-4 AI is an intelligent, Python-based version of the classic Connect-4 game, where players compete against a strategic AI opponent. The AI analyzes potential moves in real-time, predicting the best plays to create a competitive and engaging experience. With optimized game logic and efficient move evaluation, it reacts quickly to player strategies, making each match dynamic and challenging.",
    results: [
      {
        title:
          "Developed a Connect-4 AI using minimax with alpha-beta pruning, reducing evaluated states by 50%.",
      },
      {
        title:
          "Optimized game state evaluations using vectorized NumPy operations, making AI computations 3x faster.",
      },
      {
        title:
          "Implemented heuristics-based move prediction, achieving 70% accuracy in anticipating player strategies.",
      },
    ],
    link: "https://github.com/shubhami7/Connect-4-AI",
  },
  {
    title: "HireMap",
    technologies: [
      { tech: "JavaScript" },
      { tech: "HTML" },
      { tech: "CSS" },
      { tech: "SQL" },
    ],
    description:
      "HireMap is a web-based application designed to help job seekers, especially college students, recent graduates, professionals, and freelancers, manage their job applications efficiently. With features to track the application process, record interview notes, compare company benefits, and more, HireMap simplifies the often overwhelming task of applying to multiple jobs. It provides a centralized platform to keep users organized and prepared throughout the job search journey.",
    results: [
      {
        title:
          "Built with JavaScript, HTML, and CSS for smooth frontend and backend integration.",
      },
      {
        title:
          "Implemented drag-and-drop sorting and deadline reminders for real-time updates.",
      },
      {
        title:
          "Created an interview tips page to share valuable insights for job seekers.",
      },
    ],
    link: "https://github.com/shubhami7/HireMap",
  },
  {
    title: "Poker",
    technologies: [{ tech: "Java" }, { tech: "JUnit" }],
    description:
      "Poker Game is a Java-based Texas Hold’em simulation with card shuffling, betting mechanics, and hand evaluation. Players progress through betting rounds while managing their chips and strategizing. The game automates key poker logic, making it a solid foundation for future AI or multiplayer features.",
    results: [
      {
        title:
          "Implemented efficient hand evaluation algorithms using a ranking system to accurately determine winning hands.",
      },
      {
        title:
          "Automated game mechanics with structured classes to manage betting logic, community card dealing, and blind rotations.",
      },
      {
        title:
          "Designed a modular, object-oriented architecture to enable AI integration and scalable multiplayer support.",
      },
    ],
    link: "https://github.com/shubhami7/Poker-Game",
  },
  {
    title: "Blackjack",
    technologies: [{ tech: "Java" }, { tech: "JUnit" }],
    description:
      "This Java-based Blackjack game simulates a real casino experience with a structured, modular design. Players can compete against the dealer, making strategic decisions like hitting, standing, or doubling down. The game manages rounds, tracks wins, and ensures smooth gameplay with efficient memory handling.",
    results: [
      {
        title:
          "Implemented a modular architecture with separate classes for the player, dealer, cards, and game state.",
      },
      {
        title:
          "Optimized memory usage by clearing game state data after each round for efficient performance.",
      },
      {
        title:
          "Used ArrayLists to dynamically manage player and dealer hands for seamless hand evaluation.",
      },
    ],
    link: "https://github.com/shubhami7/Blackjack-Game",
  },
];

function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mb-24">
        <SectionHeader
          title="Featured Projects"
          description="View the projects I created either by myself or with a team!"
        />
        <div className="mt-10">
          {portfolioProjects.map((project) => (
            <Card key={project.title}>
              <div className="lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mb-2 md:text-4xl md:mb-2">
                    {project.title}
                  </h3>
                  <div className="flex">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold text-md gap-3 text-transparent bg-clip-text">
                      {project.technologies.map((tech) => (
                        <p key={tech.tech}>{tech.tech}</p>
                      ))}
                    </div>
                  </div>
                  <hr className="border-t-2 border-white/20 mt-4" />
                  <p className="mt-4 text-white/80">{project.description}</p>
                  <ul className="flex flex-col gap-2 mt-4">
                    {project.results.map((result) => (
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
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer md:w-auto px-6">
                      <GitHubLogoIcon className="size-6" />
                      <span>View GitHub</span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {/* <Image src={project.image} alt={project.tile} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
