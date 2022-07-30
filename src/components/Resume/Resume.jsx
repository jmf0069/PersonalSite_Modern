import React from "react";
import { Parallax } from "react-scroll-parallax";
import bg from "../../images/bg__home7.jpg";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="relative">
      <Parallax speed={0}>
        {/* <img
          className="relative min-w-screen min-h-screen w-full h-full"
          src={bg}
          alt="Mountain"
        /> */}
        <div className="bg-stone-800 min-w-screen min-h-screen w-full h-full flex flex-col">
          <div className="flex flex-col mx-auto text-4xl text-center justify-center items-center mt-10 text-white">
            <strong>Resume</strong>
          </div>
          <Skills />
        </div>
      </Parallax>
    </div>
  );
};

export default Resume;
