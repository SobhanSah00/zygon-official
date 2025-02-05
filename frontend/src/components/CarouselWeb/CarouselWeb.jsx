import { useEffect, useState } from "react";
import "./Carousel.css";

function CarouselWeb({ images = [] }) {
  // Defaulting `images` to an empty array
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3500);

    return () => clearTimeout(timeOut); // Clean up timeout when autoPlay or current changes
  }, [autoPlay, current]); // Dependency array ensures effect runs on autoPlay or current change

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available.</div>; // Show a fallback UI if images is not an array or empty
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <img className="card_image" src={image.image} alt={image.title} />
            <div className="card_overlay">
              <h2 className="card_title">{image.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselWeb;
