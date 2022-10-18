import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Panel from "../Panel/Panel";
import "./AboutCarousel.css";
import { SystemSecurityUpdate } from "@mui/icons-material";

const AboutCarousel = () => {
  const [width, setWidth] = useState(0);
  const [rightBoundary, setRightBoundary] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const carouselRef = useRef();
  const panelRef = useRef();

  useEffect(() => {
    setWidth(
      carouselRef.current.scrollWidth - 0.41 * carouselRef.current.scrollWidth
    );
  }, []);

  // useEffect(() => {
  //   setRightBoundary(
  //     carouselRef.current.scrollWidth / 2 -
  //       panelRef.current.scrollWidth +
  //       panelRef.current.scrollWidth / 12
  //   );
  // }, []);

  // useEffect(() => {
  //   const prevWidth = window.innerWidth;
  //   function handleResize() {
  //     if (prevWidth !== window.innerWidth) {
  //       setViewportWidth(window.innerWidth);
  //       console.log(viewportWidth);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  // });

  // function setRightBoundary() {
  //   return carouselRef.current.scrollWidth / 2;
  // }

  return (
    <div classname="about-carousel">
      <div className="carousel">
        <div ref={carouselRef} className="inner-carousel">
          <div ref={panelRef} className="item">
            <Panel
              id="1"
              head="Clay Shooting"
              desc="I've been shooting shotguns competitively since 2018. As a member and Range Safety Officer of the Auburn University Clay Shooting Team, we participate in collegiate-level competitions (ACUI, SCTP) all across the Southeast. It's a great way to spend the weekends!"
            />
          </div>
          <div className="item">
            <Panel
              id="2"
              head="Building Computers"
              desc="Building computers has been a passion of mine since I was 14 years old when I got some components for my birthday. Over the course of many computer builds both for myself and for others, I have learned more than I could have imagined when I started all those years ago."
            />
          </div>
          <div className="item">
            <Panel
              id="5"
              head="Golf"
              desc="I've played team sports since I was a child so I never really expected to enjoy golf as much as I do now. While it's a very different pace compared to soccer and lacrosse, playing a round on Sunday with some good friends is something I look forward to every week."
            />
          </div>
          <div className="item">
            <Panel
              id="6"
              head="Gaming"
              desc="I've played video games since I was 6 years old with a Gameboy Advance and a PlayStation 2. While I don't have as much free-time to enjoy games like I used to, I try to stay up-to-date with the newest titles and enjoy them when I can."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
