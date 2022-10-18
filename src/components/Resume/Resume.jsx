import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import WorkExperience from "./WorkExperience";

const Resume = () => {
  return (
    <div>
      {/* <img
          className="relative min-w-screen min-h-screen w-full h-full"
          src={bg}
          alt="Mountain"
        /> */}
      <div className="bg-neutral-800 min-w-screen min-h-screen w-full h-full flex flex-col">
        <div className="flex flex-col mx-auto text-3xl md:text-4xl text-center justify-center items-center mt-10 text-white">
          <WorkIcon className="scale-150 md:scale-175" />
          <strong className="mt-2 md:mt-3">Work Experience</strong>
        </div>
        <div className="container mx-auto px-10 text-center mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pb-20">
            <WorkExperience
              id="1"
              startDate="9/9/9"
              endDate="10/10/10"
              company="CoachComm"
              desc="Lorem ipsum dolor set."
            />
            <WorkExperience
              id="2"
              startDate="9/9/9"
              endDate="10/10/10"
              company="CoachComm"
              desc="Lorem ipsum dolor set."
            />
            <WorkExperience
              id="3"
              startDate="9/9/9"
              endDate="10/10/10"
              company="CoachComm"
              desc="Lorem ipsum dolor set."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
