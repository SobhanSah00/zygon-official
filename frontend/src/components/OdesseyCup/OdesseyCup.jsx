import { useEffect } from "react";
import AnimatedName from "../AnimatedName/AnimatedName";
import "./OdesseyCup.css"
import CarouselWeb from "../CarouselWeb/CarouselWeb";
import { countries } from "../CarouselWeb/Data";

function OdesseyCup() {
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
      <AnimatedName
        title={"Odessey Cup"}
        subHeading={"Let the Carnival Begin!"}
      />

      <div><CarouselWeb images={countries} /></div>
    </>
  );
}

export default OdesseyCup;
