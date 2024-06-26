import { NavBar } from "../components/navBar";
import "./About.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/insta2.json";
import animationData2 from "../assets/Linkedin.json";
import animationData3 from "../assets/mail.json";
import animationData4 from "../assets/top.json";
import animationData5 from "../assets/star.json";
import cubes1 from "../assets/cubes1.json";
import cubes2 from "../assets/cubes2.json";
import cubes3 from "../assets/cubes3.json";
import cubes4 from "../assets/cubes4.json";
import cubes5 from "../assets/cubes5.json";
import cubes6 from "../assets/cubes6.json";
import cubes7 from "../assets/cubes7.json";
import cubes8 from "../assets/cubes8.json";

import { useRef } from "react";
import ParticleBackground from "./ParticleBackground";

export const About = () => {
  const fadeInAimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };
  // const instaRef = useRef<LottieRefCurrentProps>(null);
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
    );
  });
  document.addEventListener("click", () => {
    cursor.classList.add("expand");
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  return (
    <div className="all" id="all">
      <ParticleBackground />
      <div className="brief">
        <div className="cursor"></div>
        <div className="portfolio">Portfolio</div>
        {/* <div className="bg">
          <Lottie animationData={animationData6} />
        </div> */}
        <div className="con">
          <div className="name">Akshat Ajmera</div>
          <div className="college">CSE UnderGrad at BITS PILANI</div>
          {/* <div className="cubes">
            <Lottie animationData={cubes1} />
            <Lottie animationData={cubes2} />
            <Lottie animationData={cubes3} />
            <Lottie animationData={cubes4} />
            <Lottie animationData={cubes5} />
            <Lottie animationData={cubes6} />
            <Lottie animationData={cubes7} />
            <Lottie animationData={cubes8} />
          </div> */}
        </div>

        <div className="box">
          <div className="starbit">
            <div className="bit">A Bit About Me</div>
            <div className="star">
              <Lottie animationData={animationData5} />
            </div>
          </div>
        </div>
        <div className="intro"></div>
        <div className="text-wrapper">
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
        </div>
        <div className="projects">
          <div className="pro">Some of my Projects:</div>
          <motion.div
            className="current"
            variants={fadeInAimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="container">
              <div className="project1">
                <button onClick={() => setShow(!show)} className="projecttop">
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project 1
                </button>
                {show && <button className="p1">project 1</button>}
              </div>
              <br />
              <div className="project2">
                <button className="projecttop" onClick={() => setShow1(!show1)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project2
                </button>
                {show1 && <button className="p2">project 2</button>}
              </div>
              <br />
              <div className="project3">
                <button className="projecttop" onClick={() => setShow2(!show2)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project3
                </button>
                {show2 && <button className="p3">project 3</button>}
              </div>
              <br />
              <div className="project4">
                <button className="projecttop" onClick={() => setShow3(!show3)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project4
                </button>
                {show3 && <button className="p4">project 4</button>}
              </div>
              <br />
              <div className="project5">
                <button className="projecttop" onClick={() => setShow4(!show4)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project5
                </button>
                {show4 && <button className="p5">project 5</button>}
              </div>
              <br />
              <div className="project6">
                <button className="projecttop" onClick={() => setShow5(!show5)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project6
                </button>
                {show5 && <button className="p6">project 6</button>}
              </div>
              <br />
              <div className="project7">
                <button className="projecttop" onClick={() => setShow6(!show6)}>
                  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  project7
                </button>
                {show6 && <button className="p7">project 7</button>}
              </div>
              <br />
            </div>
          </motion.div>
        </div>
        <div className="text-wrapper2">
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
          <h1>Akshat Ajmera</h1>
        </div>
        <div className="bottom">
          <div className="social">
            <div className="insta">
              <a href="https://instagram.com/akshatajmera07/" target="_blank">
                {" "}
                <Lottie
                  // onComplete={()=>{instaRef.current?.goToAndPlay(20, true)}}
                  // lottieRef={instaRef}
                  // loop={false}
                  animationData={animationData}
                />
              </a>
            </div>
            <div className="mail">
              <a href="mailto:akshatajmera777@gmail.com" target="_blank">
                <Lottie animationData={animationData3} />
                ..
              </a>
            </div>
            <div className="x"></div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/akshat-ajmera-b07459282/"
                target="_blank"
              >
                <Lottie animationData={animationData2} />
              </a>
            </div>
          </div>
          <div className="top">
            <a href="#all">
              <Lottie animationData={animationData4} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
