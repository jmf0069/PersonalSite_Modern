import React from "react";
import Resume from "../Resume/Resume";
import Panel from "../Panel/Panel";

const About = () => {
  return (
    <div className="bg-white min-w-screen w-full h-full">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight pt-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pb-20">
          <Panel
            id="1"
            head="Clay Shooting"
            desc="I've been shooting shotguns competitively since 2018. As a member and Range Safety Officer of the Auburn University Clay Shooting Team, we participate in collegiate-level competitions (ACUI, SCTP) all across the Southeast. It's a great way to spend the weekends!"
          />
          <Panel
            id="2"
            head="Building Computers"
            desc="Building computers has been a passion of mine since I was 14 years old when I got some components for my birthday. Over the course of many computer builds both for myself and for others, I have learned more than I could have imagined when I started all those years ago."
          />
          <Panel
            id="5"
            head="Golf"
            desc="I've played team sports since I was a child so I never really expected to enjoy golf as much as I do now. While it's a very different pace compared to soccer and lacrosse, playing a round on Sunday with some good friends is something I look forward to every week."
          />
          <Panel
            id="6"
            head="Gaming"
            desc="I've played video games since I was 6 years old with a Gameboy Advance and a PlayStation 2. While I don't have as much free-time to enjoy games like I used to, I try to stay up-to-date with the newest titles and enjoy them when I can."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
