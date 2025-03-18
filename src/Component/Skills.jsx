import { useEffect, useState } from "react";
import { useGetAllSkillsQuery } from "../../store/api";
import css from "../assets/icons/css.svg";
import expressjs from "../assets/icons/expressjs.svg";
import firebase from "../assets/icons/firebase.svg";
import html from "../assets/icons/html.svg";
import js from "../assets/icons/js.svg";
import mongoDB from "../assets/icons/mongoDB.svg";
import nextjs from "../assets/icons/nextjs.webp";
import nodeJs from "../assets/icons/nodeJS.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import tailwind from "../assets/icons/tailwind.svg";
import typeScript from "../assets/icons/TypeScript.svg";

const skillsData = [
  { name: "HTML", logo: html, padding: "p-6" },
  { name: "CSS", logo: css, padding: "p-8" },
  { name: "Tailwind", logo: tailwind, padding: "p-5" },
  { name: "Javascript", logo: js, padding: "p-8" },
  { name: "React JS", logo: react, padding: "p-8" },
  { name: "Next.Js", logo: nextjs, padding: "p-8" },
  { name: "Redux", logo: redux, padding: "p-8" },
  { name: "Firebase", logo: firebase, padding: "p-8" },
  { name: "Node JS", logo: nodeJs, padding: "p-8" },
  { name: "Express.js", logo: expressjs, padding: "p-8" },
  { name: "TypeScript", logo: typeScript, padding: "p-5" },
  { name: "MongoDB", logo: mongoDB, padding: "p-5" },
];

const Skills = () => {
  const { data: skills, isLoading } = useGetAllSkillsQuery();
    const [localSkills, setLocalSkills] = useState(skillsData);
  
    useEffect(() => {
      if (skills) {
        setLocalSkills(skills);
      }
    }, [skills]);
  return (
    <div id="Skills" className="p-10">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My skills</h1>
        <p className="text-2xl md:text-3xl lg:text-5xl text-[#FACC15]">
          -----what I know ------
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pt-10 gap-10 my-10">
          {localSkills.map((skill, index) => (
            <div key={index} className="">
              <div className="w-36 h-36 border-2 border-[#FACC15]">
                <img
                  src={skill.logo}
                  className={`h-full animateSkillImage mx-auto p-6`}
                  alt={skill.name}
                />
              </div>
              <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
