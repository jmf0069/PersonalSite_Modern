import React from "react";
import Panel from "../Panel/Panel";

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
      <div className="container mx-auto px-11 text-center mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
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
    </section>
  );
};

export default About;
