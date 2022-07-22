import React from "react";

const About = () => {
  return (
    <section className={"flex flex-col bg-white py-20 text-3xl md:text-4xl"}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>
            I'm a Computer Science student at{" "}
            <span className="text-orange-400">Auburn</span>{" "}
            <span className="text-blue-400">University</span>.
          </strong>{" "}
          I have many passions in life outside of coding, so I've included a few
          below for you to get to know me better.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>what i enjoy:</h2>
        {/* <div>lorem ipsum</div> */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-20">
          <div>Shotgun</div>
          <div>Video Games</div>
          <div>Cinema??</div>
          <div>Music??</div>
        </div>
      </div>
    </section>
  );
};

export default About;
