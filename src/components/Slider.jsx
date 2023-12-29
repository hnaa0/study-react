import styled, { keyframes } from "styled-components";

const slideImages = [
  {
    title: "dog",
    img: "src/images/3dogs.jpg",
  },
  {
    title: "beach",
    img: "src/images/beach.jpg",
  },
  {
    title: "breads",
    img: "src/images/breads.jpg",
  },
  {
    title: "fireworks",
    img: "src/images/fireworks.jpg",
  },
  {
    title: "fruits",
    img: "src/images/fruits.jpg",
  },
  {
    title: "mountain",
    img: "src/images/mountain.jpg",
  },
  {
    title: "street",
    img: "src/images/street.jpg",
  },
  {
    title: "airplane",
    img: "src/images/airplane.jpg",
  },
];

export default function Slider() {
  return (
    <>
      <SlideTitle>Infinite rolling slide</SlideTitle>
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
    </>
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

const SlideTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const SlideContainer = styled.div`
  width: 1000px;
  height: 300px;
  overflow: hidden;
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
