import React from "react";
import { Parallax } from "react-scroll-parallax";
import bg from "../../images/bg__home7.jpg";

const Contact = () => {
  return (
    <Parallax
      speed={10}
      className="text-black absolute min-w-screen min-h-screen w-full h-full flex justify-center align-center mt-20"
    >
      <img
        className="absolute min-w-screen min-h-screen w-full h-full"
        src={bg}
        alt="Mountain"
      />
    </Parallax>
  );
};

export default Contact;
