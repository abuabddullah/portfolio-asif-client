import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./App.css";
import AboutMe from "./Component/AboutMe";
import Banner from "./Component/Banner";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import StarryBackground from "./Component/StarryBackground";
import Complements from "./Component/Complements";
import Blogs from "./Component/Blogs";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      {" "}
      <ReactLenis root>
        <div className="bg-black text-white">
          <div className=" container mx-auto  sticky top-0 z-[999] ">
            <Nav />
            <Banner />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Blogs />
            <Complements />
            <Education />
            <Footer />
          </div>
          <div className="z-[-999]">
            <StarryBackground />
          </div>
        </div>

        {/* content */}
      </ReactLenis>
    </>
  );
}

export default App;
