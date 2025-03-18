import React, { useEffect, useState } from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../store/api";

const Projects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();
  

  const [activeButton, setActiveButton] = useState("all Project");

  const filteredData = projects?.filter((item) => {
    if (activeButton === "all Project") return true;
    if (activeButton === "frontend") return item.category === "frontend";
    if (activeButton === "fullstack") return item.category === "fullstack";
    if (activeButton === "backend") return item.category === "backend";
    return false;
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="Projects" className="bg-transparent py-10 ">
      <div className="sticky -top-5 z-[999] py-5  bg-black backdrop-blur-2xl">
        <h1 className="text-4xl md:text-5xl text-center pb-10 ">
          Latest projects
        </h1>

        <div className="flex flex-wrap bg-black justify-center gap-5">
          <button
            onClick={() => setActiveButton("all Project")}
            className={` ${
              activeButton == "all Project" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#fccc0b] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            All Projects
          </button>
          <button
            onClick={() => setActiveButton("frontend")}
            className={` ${
              activeButton == "frontend" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#fccc0b] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            Frontend Projects
          </button>
          <button
            onClick={() => setActiveButton("fullstack")}
            className={` ${
              activeButton == "fullstack" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#fccc0b] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            Full Stack Projects
          </button>
          <button
            onClick={() => setActiveButton("backend")}
            className={` ${
              activeButton == "backend" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#fccc0b] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            Backend Projects
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
        {filteredData?.map((item, inx) => (
          <div
            className={`${
              inx % 2 == 0 ? "lg:flex-row-reverse" : ""
            } flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
            key={inx}
          >
            <div className="lg:w-[700px] relative">
              <div className="absolute flex flex-wrap gap-2 bottom-2 left-2 max-w-full">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="rounded-full px-2 bg-[#FACC15]">
                    {tech.toUpperCase() || "Tech"}
                  </span>
                ))}
              </div>
              <span className="absolute rounded-full px-2 top-2 right-2 bg-[#facc1573] text-black">
                {item.category.toUpperCase() || "Category"}
              </span>
              <Link to={`/projects/${item?._id}`}><img src={item?.image} alt={item?.title} className="w-full h-full" /></Link>
            </div>

            <div className="lg:w-[450px] h-full">
              <div className="min-h-[340px] bg-[#FACC15]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
                <h1 className="text-4xl">{item?.title}</h1>
                <p className="text-lg mt-5">{item?.description}</p>
              </div>
              <div className="flex justify-between">
                <Link
                  to={item?.githubUrlClient}
                  className="btn hover:bg-[#fccc0b] flex-1 rounded-none text-black bg-[#FACC15]"
                >
                  <FaGithub /> Client side
                </Link>

                {/* Conditionally render the Server side button */}
                {item?.githubUrlServer && (
                  <Link
                    to={item?.githubUrlServer}
                    className="btn hover:bg-[#fccc0b] flex-1 rounded-none text-black bg-[#FACC15]"
                  >
                    <FaGithub /> Server side
                  </Link>
                )}

                <Link
                  to={item?.liveUrl}
                  className="btn hover:bg-[#fccc0b] flex-1 rounded-none text-black bg-[#FACC15]"
                >
                  <FaExternalLinkAlt /> Visit website
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
