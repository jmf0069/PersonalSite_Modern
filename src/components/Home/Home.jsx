import React, { useContext, useRef } from "react";
import bg from "../../images/bg__home7.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img
        className="absolute min-w-screen min-h-screen w-full h-full object-cover"
        src={bg}
        alt="Mountain"
      />
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-1 text-4xl xl:text-5xl">Hello,</h1>
        <h2 className="mb-6 text-2xl xl:text-3xl tracking-tight">
          my name is jake.
        </h2>
        <div className="absolute justify-center align-center inset-x-0 bottom-32">
          <GitHubIcon className="mx-2 xl:scale-125 xl:mx-4" />
          <LinkedInIcon className="mx-2 xl:scale-125 xl:mx-4" />
          <FacebookIcon className="mx-2 xl:scale-125 xl:mx-4" />
        </div>
        <KeyboardDoubleArrowDownIcon className="absolute bottom-20 justify-center align-center scale-110 xl:scale-125" />
      </div>
    </div>
  );
};

export default Home;
