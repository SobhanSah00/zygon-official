import React from "react";
import StickyHeader from "../StickyHeader/StickyHeader";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "animate.css";
import "./Home.css";
import HamburgerMenu from "../Menu/HamburgerMenu";
import Footer from "../Footer/Footer";

const Hero = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Ensures the container spans the full height of the viewport
          overflow: "hidden",
        }}
      >
        {/* Background Section */}
        <div
          style={{
            background: "rgba(0,0,0,1)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            display: "flex",
            justifyContent: "center", // Centers the image horizontally
            alignItems: "center", // Centers the image vertically
          }}
        >
          <img
            src="/bg5.jpg"
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image fully covers the container without distortion
              opacity: "0.5",
            }}
          />
        </div>

        {/* <StickyHeader /> */}

        {/* Foreground Section */}
        <div className="relative z-10">
          <div className="flex justify-between px-2 pt-2">
            <div
              className="animate__animated animate__fadeInLeft wow"
              data-wow-delay="2.5s"
            >
              {/* <img src="./siliconLogo.png" alt="Logo" className="w-[5rem]" /> */}
            </div>
            <div
              className="mt-[-57px] text-4xl text-white animate__animated animate__fadeInRight wow"
              data-wow-delay="2.5s"
            >
              {/* <HamburgerMenu></HamburgerMenu> */}
            </div>
          </div>
          <div className="relative z-10 flex justify-between text-amber-400 font-serif w-screen px-1 text-lg items-center h-[90vh] ">
            <div
              className="mt-[-0px] animate__animated animate__fadeInUp wow"
              style={{ writingMode: "vertical-rl" }}
              data-wow-delay="2s"
            >
              <div
                className="hero-silicon-text animate__animated animate__fadeInUp wow almendra-regular"
                style={{ writingMode: "vertical-rl" }}
                data-wow-delay="2s"
              >
                SILICON UNIVERSITY
              </div>
            </div>
            <div>
              <img
                src="/test3.gif"
                alt="Logo"
                className="w-[16rem] md:w-[30rem] animate__animated animate__zoomIn wow"
                data-wow-delay="1s"
              />
            </div>
            <div
              className="hero-follow-us-text animate__animated animate__fadeInDown wow flex items-center almendra-regular"
              style={{
                writingMode: "vertical-lr",
              }}
              data-wow-delay="2s"
            >
              FOLLOW US ON &ensp;
              <FaInstagram />
              &ensp;
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
