import React from "react";
import bg from "../../images/bg__home7.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./Home.css";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <Parallax
      speed={-40}
      className="min-w-screen min-h-screen w-full h-full flex flex-col z-10 m-0 items-center justify-center"
    >
      <img
        className="absolute min-w-screen min-h-screen w-full h-full"
        src={bg}
        alt="Mountain"
      />

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-1 text-4xl xl:text-5xl fade-in">Hello,</h1>

        <h2 className="mb-6 text-2xl xl:text-3xl tracking-tight fade-in-2">
          my name is jake.
        </h2>

        <div className="absolute justify-center align-center inset-x-0 bottom-32 fade-in-3">
          <GitHubIcon
            className="mx-2 xl:scale-125 xl:mx-4 icon"
            onClick={() => window.open("https://github.com/jmf0069", "_blank")}
          />
          <LinkedInIcon
            className="mx-2 xl:scale-125 xl:mx-4 icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jacobmfarley/", "_blank")
            }
          />
          <InstagramIcon
            className="mx-2 xl:scale-125 xl:mx-4 icon"
            onClick={() =>
              window.open("https://www.instagram.com/jakemfarley", "_blank")
            }
          />
        </div>

        <KeyboardDoubleArrowDownIcon className="absolute bottom-20 justify-center align-center scale-110 xl:scale-125 fade-in-3" />
      </div>
    </Parallax>
  );
};

export default Home;
