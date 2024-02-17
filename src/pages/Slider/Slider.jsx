import React from 'react'
import "./Slider.css"
import { useState } from "react";
import { motion } from "framer-motion";

const img1 = "https://img.freepik.com/premium-photo/abstract-space-landscape_476363-6909.jpg "
const img2 = "https://img.freepik.com/premium-photo/universe-is-universe_169333-970.jpg"
const img3 = "https://img.freepik.com/premium-photo/astronaut-cosmonaut-discovery-new-worlds-galaxies-panorama-fantasy-portal-far-universe-astronaut-space-exploration-gateway-another-universe-3d-render_91497-9061.jpg"
const img4 = "https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg"
const img5 = "https://img.freepik.com/free-photo/glowing-satellite-orbits-planet-star-filled-galaxy-generated-by-ai_188544-9664.jpg"


const Slider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };
  
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [img1, img2, img3, img4, img5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };


  return (
    <div id='slider'>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="button">
        <button onClick={handleBack}>
          Back
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Slider
