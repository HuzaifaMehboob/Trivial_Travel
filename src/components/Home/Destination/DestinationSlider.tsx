"use client";

import { destinationData } from '@/data/data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  largedesktop: {
    breakpoint: { max: 3000, min: 1624 },
    items: 5,
    slidesToSlide: 1,
  },
  smalldesktop:{
    breakpoint: { max: 1620, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const DestinationSlider = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setKey(prev => prev + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      key={key} // Forces a re-render when resized
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {destinationData?.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            <Image 
              src={data.image} 
              alt={data.country} 
              width={500} 
              height={500} 
              className="h-full w-full object-cover rounded-lg" 
            />
          </div>
          <h1 className="text-xl font-semibold mt-4">{data.country}</h1>
          <p className="text-sm text-gray-600">{data.travelers} travelers</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;
