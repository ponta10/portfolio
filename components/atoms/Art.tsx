import React from 'react'
import { styled } from 'styled-components';

interface ArtworkProps {
    image: string;
    rotation: number;
  }  

const Artwork = styled.div<ArtworkProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transform: rotateY(${props => props.rotation}deg);
  backface-visibility: hidden;
`;

export const Art: React.FC<ArtworkProps> = ({ image, rotation }) => {
  return (
    <Artwork image={image} rotation={rotation} />
  )
}
