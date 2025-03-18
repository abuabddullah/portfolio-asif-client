import React, { useEffect, useState } from "react";

import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp";
import bikebaazar from "../assets/websiteThumbnail/bikebaazar.png";
import medimart from "../assets/websiteThumbnail/medimart.png";
import topicTrove from "../assets/websiteThumbnail/topic-trove.webp";
import weddingHut from "../assets/websiteThumbnail/wedding-hut.webp";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const Data = [
    {
      title: "Medimart",
      description:
        "MediMart💊 is a next-gen online pharmacy that lets users search, order, and track medicines seamlessly. Built with Next.js, TypeScript, and MongoDB, it offers secure JWT authentication, bcrypt password protection, and role-based access. With intelligent search, real-time order tracking, and SSLCOMMERZ payments, it ensures efficiency, security, and scalability. The admin dashboard simplifies medicine, order, and user management, making it a powerful healthcare eCommerce solution.",
      thumbnailImage: medimart,
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/medimart-client",
      serverLink: "https://github.com/abuabddullah/medimart-server",
      LiveLInk: "https://medimart-client.vercel.app/",
    },
    {
      title: "BikeBaazar",
      description:
        "BikeBaazaar🚴‍♂️ is a full-stack e-commerce platform for cycling enthusiasts, built with React, Node.js, Express, and MongoDB. It offers secure JWT authentication, real-time shopping cart, and SSLCommerz-powered checkout. Admins can manage products with CRUD operations, while advanced security (CORS, Helmet, rate limiting) ensures data protection. Scalable and efficient, it delivers a seamless shopping experience for users.",
      thumbnailImage: bikebaazar,
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/l2a4-bikeBazaar-client",
      serverLink: "https://github.com/abuabddullah/l2a4-bikeBazaar-server",
      LiveLInk: "https://bikebazaar-client.vercel.app/",
    },
    {
      title: "Loyal Auto Parts",
      description: "This is the project description for Loyal Auto Parts.",
      thumbnailImage:
        "https://i.ibb.co/jTrn6Jz/Screenshot-2024-07-07-031334.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/loyalAutoParts-client.git",
      serverLink: "https://github.com/abuabddullah/loyalAutoParts-server.git",
      LiveLInk: "https://loyalautoparts.netlify.app/",
    },
    {
      title: "Thirsty Drinks",
      description: "This is the project description for Thirsty Drinks.",
      thumbnailImage:
        "https://i.ibb.co/61YdY9v/Screenshot-2024-07-07-031502.png",
      category: "FullStack",
      clintLink:
        "https://github.com/abuabddullah/thirstDyrinksWareHouseManagement",
      serverLink: "https://github.com/abuabddullah/thirstyDrinks-server.git",
      LiveLInk: "https://thirstydrinks.netlify.app/",
    },
    {
      title: "Kormo kando",
      description: "This is the project description for Kormo Kando.",
      thumbnailImage: "https://i.ibb.co/YpPWQ14/image.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/kormoKandoFrontend.git",
      serverLink: "https://github.com/abuabddullah/kormoKandoServer.git",
      LiveLInk: "https://kormokando.netlify.app/",
    },
    {
      title: "BooKeVents",
      description: "This is the project description for BooKeVents.",
      thumbnailImage:
        "https://i.ibb.co/pR9Lw4B/Screenshot-2024-07-07-031721.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/booKeVents-client.git",
      serverLink: "https://github.com/abuabddullah/booKeVents-server.git",
      LiveLInk: "https://boo-ke-vents.netlify.app/",
    },
    {
      title: "Burger's Hub 1",
      description: "This is the project description for Burger's Hub 1.",
      thumbnailImage: "https://i.ibb.co/jztQMjQ/8.png",
      category: "FullStack",
      clintLink:
        "https://github.com/abuabddullah/assignment8-burgerHub1-chooseRandomBurger-",
      serverLink:
        "https://github.com/abuabddullah/assignment8-burgerHub1-server.git",
      LiveLInk: "https://myassignment8.netlify.app/",
    },
    {
      title: "Insta-Sohor",
      description: "This is the project description for Insta-Sohor.",
      thumbnailImage:
        "https://i.ibb.co/QdpwwyV/screencapture-instashohorassignment7-netlify-app-2022-06-02-20-04-27.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/assignment7-instaShohor",
      serverLink:
        "https://github.com/abuabddullah/assignment7-instaShohor-server.git",
      LiveLInk: "https://instashohorassignment7.netlify.app/",
    },
    {
      title: "Phone Hub",
      description: "This is the project description for Phone Hub.",
      thumbnailImage:
        "https://i.ibb.co/xFHKtyN/screencapture-myassignments6-netlify-app-2022-06-02-20-09-11.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/assignment6-phoneHunter",
      serverLink:
        "https://github.com/abuabddullah/assignment6-phoneHunter-server.git",
      LiveLInk: "https://myassignments6.netlify.app/",
    },
    {
      title: "Bismillah Savings",
      description: "This is the project description for Bismillah Savings.",
      thumbnailImage:
        "https://i.ibb.co/K2PgCWf/screencapture-bismillahmoneymaster-netlify-app-2022-06-02-20-11-21.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/assignmetn5-moneyMaster",
      serverLink:
        "https://github.com/abuabddullah/assignmetn5-moneyMaster-server.git",
      LiveLInk: "https://bismillahmoneymaster.netlify.app/",
    },
    {
      title: "Party Convention",
      description: "This is the project description for Party Convention.",
      thumbnailImage:
        "https://i.ibb.co/88LS3Mf/screencapture-myprogrammingheroassignment3-netlify-app-2022-06-02-20-13-10.png",
      category: "FullStack",
      clintLink: "https://github.com/abuabddullah/assignment3-partyConvention",
      serverLink:
        "https://github.com/abuabddullah/assignment3-partyConvention-server.git",
      LiveLInk: "https://myprogrammingheroassignment3.netlify.app/",
    },
    {
      title: "Burger's Hub 2",
      description: "This is the project description for Burger's Hub 2.",
      thumbnailImage: "https://i.ibb.co/nR951C2/9.png",
      category: "FrontEnd",
      clintLink:
        "https://github.com/abuabddullah/assignment9-burgerHub2-reactChart",
      serverLink:null,
      LiveLInk: "https://myassignment9.netlify.app/home",
    },
    {
      title: "Service Provider Asif",
      description: "This is the project description for Service Provider Asif.",
      thumbnailImage: "https://i.ibb.co/ZW0Y0PL/10.png",
      category: "FrontEnd",
      clintLink: "https://github.com/abuabddullah/assignment10-doctorAsif",
      serverLink:null,
      LiveLInk: "https://myassignment-10.web.app/",
    },
  ];

  const [activeButton, setActiveButton] = useState("all Project");

  const filteredData = Data.filter((item) => {
    if (activeButton === "all Project") return true;
    if (activeButton === "FrontEnd") return item.category === "FrontEnd";
    if (activeButton === "Full Stack") return item.category === "FullStack";
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
            }     btn lg:px-8 rounded-md  hover:bg-[#FACC15] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            All Projects
          </button>
          <button
            onClick={() => setActiveButton("FrontEnd")}
            className={` ${
              activeButton == "FrontEnd" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#FACC15] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            Frontend Projects
          </button>
          <button
            onClick={() => setActiveButton("Full Stack")}
            className={` ${
              activeButton == "Full Stack" ? "bg-[#FACC15] text-black" : ""
            }     btn lg:px-8 rounded-md  hover:bg-[#FACC15] hover:text-black btn-outline  hover:border-none text-[#FACC15]`}
          >
            {" "}
            Full Stack Projects
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
            <div className="lg:w-[700px]">
              <img src={item?.thumbnailImage} alt={item?.title} />
            </div>

            <div className="lg:w-[450px] h-full">
              <div className="min-h-[340px] bg-[#FACC15]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
                <h1 className="text-4xl">{item?.title}</h1>
                <p className="text-lg mt-5">{item?.description}</p>
              </div>
              <div className="flex justify-between">
                <Link
                  to={item?.clintLink}
                  className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#FACC15]"
                >
                  <FaGithub /> Client side
                </Link>

                {/* Conditionally render the Server side button */}
                {item?.serverLink && (
                  <Link
                    to={item?.serverLink}
                    className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#FACC15]"
                  >
                    <FaGithub /> Server side
                  </Link>
                )}

                <Link
                  to={item?.LiveLInk}
                  className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#FACC15]"
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
