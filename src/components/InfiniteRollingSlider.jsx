import styled, { keyframes } from "styled-components";
import slideImages from "../slideImages";

export default function InfiniteRollingSlider() {
  return (
    <Container>
      <SlideTitle>Infinite rolling Slide</SlideTitle>
      <SlideContainer>
        <SlideGroup>
          <SlideBox1>
            {slideImages.map((slideImage) => {
              return (
                <SlideImg
                  key={slideImage.title}
                  src={slideImage.img}
                  alt={slideImage.title}
                ></SlideImg>
              );
            })}
          </SlideBox1>
          <SlideBox2>
            {slideImages.map((slideImage) => {
              return (
                <SlideImg
                  key={slideImage.title + `copy`}
                  src={slideImage.img}
                  alt={slideImage.title}
                ></SlideImg>
              );
            })}
          </SlideBox2>
        </SlideGroup>
      </SlideContainer>
    </Container>
  );
}

const infiniteAnimation1 = keyframes`
  0% {
    transform: translateX(0%)
  }
  50% {
    transform: translateX(-100%);
  }
  50.1% {
      transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const infiniteAnimation2 = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-200%);
  }
`;

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const SlideTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 28px;
  }
`;

const SlideContainer = styled.div`
  width: 1000px;
  height: 300px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
    height: 200px;
  }
`;

const SlideGroup = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4px 0;

  &:hover > div {
    animation-play-state: paused;
  }
`;

const SlideBox = styled.div`
  display: flex;
  height: 100%;
`;

const SlideBox1 = styled(SlideBox)`
  animation: ${infiniteAnimation1} 60s linear infinite forwards;
`;

const SlideBox2 = styled(SlideBox)`
  animation: ${infiniteAnimation2} 60s linear infinite normal;
`;

const SlideImg = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  margin-right: 16px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.025);
    cursor: pointer;
  }
`;
