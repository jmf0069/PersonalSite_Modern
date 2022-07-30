import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Resume from "../Resume/Resume";
import Panel from "../Panel/Panel";

const About = () => {
  return (
    <ParallaxBanner
      speed={20}
      className={
        "absolute mx-0 w-full flex flex-col bg-white py-10 text-3xl md:text-4xl overflow-hidden pb-20"
      }
    >
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
      <div className="container mx-auto px-11 text-center mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <Panel
            id="1"
            head="Auburn University Clay Shooting Team"
            desc="I've been shooting shotguns competitively since 2018. As a member and Range Safety Officer of the Auburn University Clay Shooting Team, we participate in collegiate-level competitions (ACUI, SCTP) all across the Southeast. It's a great way to spend the weekends!"
          />
          <Panel
            id="2"
            head="Building Computers"
            desc="Building computers has been a passion of mine since I was 14 years old when I got some components for my birthday. Over the course of many computer builds both for myself and for others, I have learned more than I could have imagined when I started all those years ago"
          />
          <Panel
            id="1"
            head="Auburn University Clay Shooting Team"
            desc="I've been shooting shotguns competitively since 2018. As a member and Range Safety Officer of the Auburn University Clay Shooting Team, we participate in collegiate-level competitions (ACUI, SCTP) all across the Southeast. It's a great way to spend the weekends!"
          />
          <Panel
            id="1"
            head="Auburn University Clay Shooting Team"
            desc="I've been shooting shotguns competitively since 2018. As a member and Range Safety Officer of the Auburn University Clay Shooting Team, we participate in collegiate-level competitions (ACUI, SCTP) all across the Southeast. It's a great way to spend the weekends!"
          />
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default About;
