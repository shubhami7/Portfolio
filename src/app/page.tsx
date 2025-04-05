import Certificates from "./sections/Certificates";
import Experiences from "./sections/Experiences";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Start() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Certificates />
    </div>
  );
}
