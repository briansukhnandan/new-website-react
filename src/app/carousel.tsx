"use client"
import { useState } from "react";

const imageIdxToImagePath = (idx: number) => `/images/carousel/${idx+1}.png`;
export const ImageCarousel = () => {
  const [imageIdx, setImageIdx] = useState(0);
  return (
    <div>
      <img 
        src={imageIdxToImagePath(imageIdx)} 
        width="350" 
        height="300"
      />
    </div>
  )
}
