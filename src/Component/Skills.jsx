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
const Skills = () => {
  return (
    <div id="Skills" className=" p-10">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My skills</h1>
        <p className="text-2xl  md:text-3xl lg:text-5xl text-[#FACC15]">
          -----what I know ------
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className=" grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4   pt-10 gap-10 my-10">
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={html}
                className="h-full animateSkillImage  p-6 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              HTML
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={css}
                className=" animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              CSS
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={tailwind}
                className=" animateSkillImage  p-5 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Tailwind
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={js}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Javascript
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={react}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              React JS
            </h1>
          </div>

          {/* <div className="">
            <div className="w-36 h-36 border-2 border-[#FACC15] ">
              <Lottie
                animationData={react}
                loop={true}
                autoplay={true}
                style={{ width: "full", height: "full" }}
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              React
            </h1>
          </div> */}
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={nextjs}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Next.Js
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={redux}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Redux
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={firebase}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Firebase
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={nodeJs}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Node JS
            </h1>
          </div>
          {/* <div className="">
            <div className="w-36 h-36 border-2 border-[#FACC15] ">
              <Lottie
                animationData={nodeJs}
                loop={true}
                autoplay={true}
                style={{ width: "full", height: "full" }}
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              Node Js
            </h1>
          </div> */}
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={expressjs}
                className="h-full animateSkillImage  p-8 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              expressjs
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={typeScript}
                className="h-full animateSkillImage  p-5 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              TypeScript
            </h1>
          </div>
          <div className="">
            <div className="w-36 h-36  border-2 border-[#FACC15] ">
              <img
                src={mongoDB}
                className="h-full animateSkillImage  p-5 mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-[#1a1a1a] font-bold p-2 text-center w-36 bg-[#FACC15]">
              MongoDB
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
