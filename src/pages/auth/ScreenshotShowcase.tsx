import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import heroImg from '../../../asset/images/home-phones.png';
import screenshot1 from '../../../asset/images/screenshot1.jpg';
import screenshot2 from '../../../asset/images/screenshot2.jpg';
import screenshot3 from '../../../asset/images/screenshot3.jpg';
import screenshot4 from '../../../asset/images/screenshot4.jpg';
import screenshot5 from '../../../asset/images/screenshot5.jpg';

const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
];

export const ScreenshotShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev === screenshots.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledScreenshotShowcase>
      {screenshots.map((screenshot, index) => (
        <CSSTransition
          timeout={2000}
          mountOnEnter
          in={currentImageIndex === index}
          key={index}
          classNames="fade"
        >
          <img src={screenshot} alt="Instagram screenshot" />
        </CSSTransition>
      ))}
    </StyledScreenshotShowcase>
  );
};

const StyledScreenshotShowcase = styled.div`
  background-image: url(${heroImg});
  width: 374px;
  height: 617px;
  position: relative;
  margin-right: 2.5rem;

  img {
    position: absolute;
    top: 99px;
    left: 111px;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 2s ease;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 2s ease;
  }
  .fade-exit-done {
    opacity: 0;
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;
