import React from 'react';
import styled, { keyframes } from 'styled-components';

const CircleAnimation = keyframes`
  0% {
    border-top-left-radius: 40%;
    border-top-right-radius: 70%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
  }

  65% {
    border-top-left-radius: 60%;
    border-top-right-radius: 30%;
    border-bottom-top-radius: 50%;
    border-bottom-bottom-radius: 10%;
  }


  100% {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 70%;
    border-top-left-radius: 30%;
    border-top-right-radius: 40%;
  }
`;

const Layer = styled.div`
  width: 20rem;
  height: 20rem;
  position: absolute;
  opacity: 0.6;
  left: 0;
  top: 0;
  animation: ${CircleAnimation} 10s alternate infinite;
`;

const Container = styled.div`
  width: 25rem;
  height: 25rem;
  position: relative;

  ${Layer} {
    &:nth-child(1) {
      transform: rotate(90deg) scale(1.1) translateY(2rem);
      background-color: ${(props) => props.theme.color.secondary}70;
      animation-duration: 6s;
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme.color.secondary}90;
      transform: rotate(60deg) translateY(6rem);
      animation-duration: 8s;
    }

    &:nth-child(3) {
      background-color: ${(props) => props.theme.color.secondary};
      transform: rotate(200deg) scale(0.9) translateY(-10rem);
      opacity: 0.7;
    }
  }
`;

interface Props {
  layerStyle?: React.CSSProperties;

  className?: string;
}

const LayerCircleArt = ({ className, layerStyle }: Props) => {
  return (
    <Container className={className}>
      <Layer style={layerStyle} />
      <Layer />
      <Layer />
    </Container>
  );
};

export default LayerCircleArt;
