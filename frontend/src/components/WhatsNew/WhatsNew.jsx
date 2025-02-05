import { useEffect } from "react";
import AnimatedName from "../AnimatedName/AnimatedName";
import data from "./data"; // import your data

import "./WhatsNew.css";

function WhatsNew() {
  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll(".feature");
      features.forEach((feature) => {
        const rect = feature.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          feature.classList.add("translate-y-0", "opacity-100");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatedName title={"What's New"} subHeading={"Explore The Carnival"}/>
      <div className="min-h-screen relative overflow-hidden p-4 md:p-8 bg-gradient-to-br from-[#1a0f3c] via-[#2c1654] to-[#3d1d6b]">
        {/* Carnival Lights Effect */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,214,0,0.3),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,128,0.3),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.2),transparent_70%)] blur-[40px] animate-[lightShow_10s_infinite] pointer-events-none"></div>

        {/* Ferris Wheel */}
        <div className="fixed top-1/2 -right-[150px] w-[300px] h-[300px] border-4 border-dotted border-white/20 rounded-full -translate-y-1/2 animate-[wheelRotate_20s_linear_infinite] z-0 pointer-events-none before:content-[''] before:absolute before:inset-[-4px] before:border-4 before:border-dotted before:border-white/10 before:rounded-full before:animate-[wheelPulse_4s_ease-in-out_infinite] md:-right-[300px] md:w-[600px] md:h-[600px]"></div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto mb-20 relative z-10 space-y-24 content-fade-in">
          {data.map((feature, index) => (
            <div
              key={index}
              className={`feature flex ${
                index % 2 === 0 ? "flex-col" : "flex-col-reverse"
              } lg:flex-row items-stretch opacity-0 translate-y-24 transition-all duration-1000 ease-out`}
            >
              <div className="flex-1 p-6 md:p-12 bg-white/[0.03] rounded-2xl backdrop-blur-lg relative overflow-hidden border border-white/10 group">
                <div className="relative overflow-hidden rounded-2xl mb-8 lg:mb-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
