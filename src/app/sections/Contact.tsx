import React from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="container mb-24">
          <SectionHeader
            title="Contact"
            description="Please feel free to contact me on any platform!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="-my-3">
                <h3 className="font-serif text-2xl">Email</h3>
                <hr className="border-t-2 border-white/20 mt-3 mb-3" />
                <a
                  href="mailto:shubham.inavolu@gmail.com"
                  className="hover:underline font-serif"
                >
                  shubham.inavolu@gmail.com
                </a>
              </div>
            </Card>
            <Card>
              <div className="-my-3">
                <h3 className="font-serif text-2xl">Mobile</h3>
                <hr className="border-t-2 border-white/20 mt-3 mb-3" />
                <a
                  href="tel:+15087628291"
                  className="hover:underline font-serif"
                >
                  (508) 762-8291
                </a>
              </div>
            </Card>
            <Card className="w-full">
              <div className="-my-3 w-full">
                <h3 className="font-serif text-2xl">LinkedIn</h3>
                <hr className="border-t-2 border-white/20 mt-3 mb-3" />
                <a
                  href="https://www.linkedin.com/in/shubham-inavolu-a15320230/"
                  className="block w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer">
                    <LinkedInLogoIcon className="size-6" />
                    <span>Open</span>
                  </button>
                </a>
              </div>
            </Card>
            <Card className="w-full">
              <div className="-my-3 w-full">
                <h3 className="font-serif text-2xl">Git Hub</h3>
                <hr className="border-t-2 border-white/20 mt-3 mb-3" />
                <a
                  href="https://github.com/shubhami7"
                  className="block w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer">
                    <GitHubLogoIcon className="size-6" />
                    <span>Open</span>
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
