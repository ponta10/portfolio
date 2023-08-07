import React, { useState } from "react";
import { styled } from "styled-components";
import { Caption } from "../Caption";
import Slider from "react-slick";
import { Art } from "../atoms/Art";

interface Project {
  title: string;
  image: string;
  color: string;
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Work = () => {
  const artworks: Project[] = [
    {
      title: "Project1",
      image: "/",
      color: "#fff",
    },
    {
      title: "Project2",
      image: "/",
      color: "#aaa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % artworks.length);
    console.log('aaa');
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + artworks.length) % artworks.length);
  };

  return (
    <Container>
      <Caption title="WORK" subTitle="showcase of creations" direction="left" />
      <div>
      {artworks.map((artwork, index) => (
        <Art
          key={index}
          image={artwork.image}
          rotation={(index - currentIndex) * (360 / artworks.length)}
        />
      ))}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
    </Container>
  );
};
