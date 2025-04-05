"use client";

import Image from "next/image";
import memojiImage from "@/assets/memoji.png";
import grainImage from "@/assets/grain.jpg";
import { HeroOrbit } from "../components/HeroOrbit";
import { SparkleIcon } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-32 md:py-48 lg:py-60">
      <div className="absolute flex flex-col items-center justify-center pointer-events-none">
        {/* [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <SparkleIcon
            className="size-28 text-emerald-300"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <SparkleIcon
            className="size-12 text-emerald-300"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <SparkleIcon
            className="size-8 text-emerald-300"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon
            className="size-8 text-emerald-300/20"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <SparkleIcon
            className="size-5 text-emerald-300/20"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon
            className="size-10 text-emerald-300/20"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145}>
          <SparkleIcon
            className="size-14 text-emerald-300/20"
            strokeWidth={0.001}
            fill="currentColor"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 bg-emerald-200/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-55}>
          <div className="size-2 bg-emerald-200/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-emerald-200/20 rounded-full" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Memoji Image"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Probably awake coding</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Shubham Inavolu
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Welcome! My name is Shubham and I'm an avid programmer. I am
            currently looking for internship opportunities to learn and excel my
            career as a Software Engineer. Please scroll down to see my work and
            explore my portfolio!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            href="/Internship_Res.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl bg-gray-600 cursor-pointer">
              <span className="font-semibold">View My Resume 📃</span>
            </button>
          </Link>

          <Link href="/contact">
            <button
              onClick={() => console.log("click")}
              className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl font-semibold cursor-pointer"
            >
              Let's Connect <span>👋</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
