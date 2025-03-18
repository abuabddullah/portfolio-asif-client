import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Acme AI Ltd",
    role: "Alert Validator",
    duration: "Dec 2024 – Ongoing",
    shortDuration: "Dec 25 - Ongoing",
    image: "/src/assets/acmeai.png",
    tasks: [
      "Validated alert accuracy for AI systems",
      `Collaborated with teams to
    resolve alert issues`,
      "Ensured high-quality standards in validation.",
      `Contributed to system
    performance improvements.
    `,
    ],
  },
  {
    id: 2,
    company: "JMC Technology Ltd.",
    role: "Fullstack Developer Intern",
    duration: "August 2024 – October 2024 (2 months)",
    shortDuration: "Aug 24 - Oct 24",
    image: "/src/assets/jmc.png",
    tasks: [
      "Build dynamic UI components with React, ensuring responsiveness and seamless API integration.",
      "Create efficient RESTful or GraphQL APIs using Node.js, Express, and MongoDB.",
      "Work with teams using Git/GitHub, contributing to code reviews and maintaining project standards.",
    ],
  },
  {
    id: 3,
    company: "Victory City Int. Holdings Ltd",
    role: "Management Trainee Officer",
    duration: "July 2019 – January 2020 (6 months)",
    shortDuration: "Jul 19 - Jan 20",
    image: "/src/assets/vc.png",
    tasks: [
      "Analyze and optimize dyeing processes to improve efficiency, reduce waste, and enhance color consistency.",
      "Monitor and ensure the quality of dyed fabrics by conducting tests on color fastness, shade matching, and fabric integrity.",
      "Identify and resolve issues related to dyeing defects, such as uneven dyeing or color bleeding, ensuring smooth production flow.",
      "Maintain detailed records of dyeing processes, materials used, and production outcomes for compliance and continuous improvement.",
    ],
  },
];

export const ExperienceCard = ({ exp, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotateX(y * 10);
    setRotateY(x * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } justify-center gap-5 lg:gap-10`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center p-10 md:p-5 lg:p-10">
        <img
          src={exp.image}
          className="rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300"
          alt={`${exp.company} Logo`}
        />
      </div>

      {/* Job Details Section with 3D hover effect */}
      <motion.div
        className="w-full md:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg bg-[#1f2937ce] text-white p-6"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        }}
      >
        <h1 className="text-2xl md:text-3xl font-extrabold">{exp.role}</h1>
        <h2 className="text-lg hidden md:block my-3 font-medium text-gray-300">
          {exp.company} | {exp.duration}
        </h2>
        <h2 className="my-2 lg:hidden text-lg">
          {exp.company} | {exp.shortDuration}
        </h2>

        {/* Responsibilities List */}
        <ul className="list-disc hidden lg:block mt-5 md:ml-5 space-y-3 md:pl-5">
          {exp.tasks.map((task, taskIndex) => (
            <li
              key={taskIndex}
              className="flex items-start gap-3 leading-relaxed"
            >
              <div className="w-5 h-5 mt-2 flex-shrink-0">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primaryColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="flex-grow">{task}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-10 my-10">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.id} exp={exp} index={index} />
      ))}
    </div>
  );
};

export default ExperienceSection;
