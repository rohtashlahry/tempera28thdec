import React, { useState, useEffect } from "react";
import "./testimonials.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [animationDirection, setAnimationDirection] = useState<
    "right-to-left" | "left-to-right"
  >("right-to-left");
  const texts = [
    "Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.",

    "Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life",

    "The motion graphics added an extra layer of polish and really brought the video to life",
  ];

  const handleSliderNext = () => {
    setAnimationDirection("right-to-left");
    setCurrentIndex(currentIndex == texts.length - 1 ? 0 : currentIndex + 1);
  };

  const handleSliderBack = () => {
    setAnimationDirection("left-to-right");
    setCurrentIndex(currentIndex == 0 ? texts.length - 1 : currentIndex - 1);
  };
  return (
    <>
      <div className="testimonials_container">
        <div className="testimonials_img">
          <img
            src="./testimonial_thumb.jpeg"
            alt="testimonials"  
            width="600px"
            height="auto"          
          />
        </div>
        <div className="testimonials_slider">
          <div className="testimonials_slider_items" key={currentIndex}>
            <div className={`${animationDirection} testimonials_fix_div`}>
              <FormatQuoteIcon style={{ color: "#fd6219", fontSize: 100, marginLeft: "-15px" }} />
              <h1 className="testimonials_text">{texts[currentIndex]}</h1>
              <div className="title_job_div">
                <p className="title_name">Ansari Anusher</p>
                <p className="job_title_name">CEO of Jobsearch</p>
              </div>
            </div>
            <div className="btns">
              <button value="subs" className="btn_sliders" onClick={handleSliderBack} >
                <TrendingFlatIcon className="slider_btn_icons" style={{marginLeft: "-5px", transform: "rotate(180deg)"}}/>{" "}
              </button>
              <button value="add" className="btn_sliders" onClick={handleSliderNext}>
                <TrendingFlatIcon className="slider_btn_icons"/>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
