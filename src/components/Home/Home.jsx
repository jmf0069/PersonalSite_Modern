import React from "react";
import bg from "../../images/bg__home7.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./Home.css";

const Home = () => {
  return (
    <div className="justify-center align-center text-center min-w-screen min-h-screen w-full h-full">
      <img
        className="absolute min-w-screen min-h-screen w-full h-full object-cover"
        src={bg}
        alt="Mountain"
      />

      <div className="pt-80 p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-center flex-1 flex items-center justify-center align-center flex-col">
        <div className="">
          <h1 className="mb-1 text-4xl xl:text-5xl fade-in">Hello,</h1>

          <h2 className="mb-6 text-2xl xl:text-3xl tracking-tight fade-in-2">
            my name is jake.
          </h2>
        </div>
        <div className="pt-60">
          <div className="justify-center align-center flex flex-row inset-x-0 bottom-32 fade-in-3">
            <GitHubIcon
              className="mx-2 xl:scale-125 xl:mx-4 icon"
              onClick={() =>
                window.open("https://github.com/jmf0069", "_blank")
              }
            />
            <LinkedInIcon
              className="mx-2 xl:scale-125 xl:mx-4 icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jacobmfarley/",
                  "_blank"
                )
              }
            />
            <InstagramIcon
              className="mx-2 xl:scale-125 xl:mx-4 icon"
              onClick={() =>
                window.open("https://www.instagram.com/jakemfarley", "_blank")
              }
            />
          </div>

          <KeyboardDoubleArrowDownIcon className="mt-10 flex justify-center align-center scale-110 xl:scale-125 fade-in-3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
