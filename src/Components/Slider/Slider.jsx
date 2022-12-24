import React, { useEffect, useState } from "react";
import { MdEast, MdWest } from "react-icons/md";
const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const preSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  let intervalTime = 5000;
  let slideInterval;
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    auto();
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval]);
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((src) => (
          <img key={src.substring(35, 40)} src={src} alt="slider_image" />
        ))}
      </div>
      <div className="icons">
        <div className="icon">
          <MdWest size={30} onClick={preSlide} />
        </div>
        <div className="icon">
          <MdEast size={30} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
