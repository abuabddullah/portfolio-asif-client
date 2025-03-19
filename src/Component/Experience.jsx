import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import ExperienceSection from "./ExperienceSection";

const Experience = () => {
  return (
    <div className="p-10 " id="experience">
      <div className="text-center ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
          My Experience
        </h1>

        <div className="">
          <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
        <ExperienceSection />
      </div>
      <ul className="list-disc  lg:hidden  space-y-3  md:pl-5">
        <li className="flex items-center gap-3 leading-relaxed">
          <div className="w-5 h-5 flex-shrink-0">
            <FiCheckCircle className="text-primaryColor" />
          </div>
          <span className="flex-grow">
            Collaborated on 5 major projects, primarily converting Figma designs
            into web pages using Next.js and Tailwind CSS.
          </span>
        </li>
        <li className="flex items-center gap-3 leading-relaxed">
          <div className="w-5 h-5 flex-shrink-0">
            <FiCheckCircle className="text-primaryColor" />
          </div>
          <span className="flex-grow">
            Delivered high-quality, responsive web pages for multiple projects,
            adhering to deadlines.
          </span>
        </li>

        <li className="flex items-center gap-3 leading-relaxed">
          <div className="w-5 h-5 flex-shrink-0">
            <FiCheckCircle className="text-primaryColor" />
          </div>
          <span className="flex-grow">
            Integrated APIs for fetching and updating data on specific pages.
          </span>
        </li>
        <li className="flex items-center gap-3 leading-relaxed">
          <div className="w-5 h-5 flex-shrink-0">
            <FiCheckCircle className="text-primaryColor" />
          </div>
          <span className="flex-grow">
            Received positive feedback for creating pixel-perfect and clean code
            that aligned with the design team’s expectations.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
