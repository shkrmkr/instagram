import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import logoImg from '../../asset/images/logo.png';
import screenshot1 from '../../asset/images/screenshot1.jpg';
import screenshot2 from '../../asset/images/screenshot2.jpg';
import screenshot3 from '../../asset/images/screenshot3.jpg';
import screenshot4 from '../../asset/images/screenshot4.jpg';
import screenshot5 from '../../asset/images/screenshot5.jpg';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { TextField } from '../components/TextField';
import { ErrorMessage, HeroLeft, HeroRight } from './login/Login.style';

const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = 'Login • Instagram';

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
    <Container>
      <HeroLeft>
        <TransitionGroup>
          <CSSTransition
            timeout={2000}
            key={currentImageIndex}
            classNames="fade"
          >
            <img
              src={screenshots[currentImageIndex]}
              alt="Instagram screenshot"
            />
          </CSSTransition>
        </TransitionGroup>
      </HeroLeft>

      <HeroRight>
        <h1>
          <img src={logoImg} alt="Instagram" />
        </h1>

        <form>
          <TextField label="Email Address" name="email" />
          <TextField label="Password" name="password" type="password" />
          <Button disabled type="submit">
            Log In
          </Button>
        </form>
        {true && (
          <ErrorMessage>
            <p>
              Sorry, your password was incorrect. Please double-check your
              password.
            </p>
          </ErrorMessage>
        )}
      </HeroRight>
    </Container>
  );
};

export default Login;
