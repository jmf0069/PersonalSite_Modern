import React from "react";
import WorkIcon from "@mui/icons-material/Work";

const Resume = () => {
  return (
    <div>
      {/* <img
          className="relative min-w-screen min-h-screen w-full h-full"
          src={bg}
          alt="Mountain"
        /> */}
      <div className="bg-zinc-800 min-w-screen min-h-screen w-full h-full flex flex-col">
        <div className="flex flex-col mx-auto text-3xl md:text-4xl text-center justify-center items-center mt-10 text-white">
          <WorkIcon className="scale-150 md:scale-175" />
          <strong className="mt-2 md:mt-3">Work Experience</strong>
        </div>
      </div>
    </div>
  );
};

export default Resume;
