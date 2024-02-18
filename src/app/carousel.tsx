"use client"
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IMAGES = [
  "/images/carousel/1.png",
  "/images/carousel/2.png",
  "/images/carousel/3.png",
];

export const ImageCarousel = () => (
  <Carousel infiniteLoop autoPlay showStatus={false}>
    {
      IMAGES.map(image => (
        <Image
          alt="carouselImage"
          key={image}
          src={image}
          height="275px"
        />
      ))
    }
  </Carousel>
);
