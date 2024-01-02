import styled from "styled-components";
import slideImages from "../slideImages";
import { useState } from "react";

export default function ButtonSlider() {
  const [slideMove, setSlideMove] = useState(0);
  const toNext = () => {
    slideMove > -2128 && setSlideMove((prev) => prev - 1064);
  };
  const toPrev = () => {
    slideMove < 0 && setSlideMove((prev) => prev + 1064);
  };

  return (
    <Container>
      <SlideTitle>Slide with Button</SlideTitle>
      <SlideContainer>
        <SlideBox>
          {slideImages.map((slideImage) => {
            return (
              <SlideImg
                $slidemove={slideMove}
                key={slideImage.title}
                src={slideImage.img}
                alt={slideImage.title}
              ></SlideImg>
            );
          })}
        </SlideBox>
        {slideMove !== 0 && (
          <PrevBtn onClick={toPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </PrevBtn>
        )}
        {slideMove !== -1064 && (
          <NextBtn onClick={toNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </NextBtn>
        )}
      </SlideContainer>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const SlideTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const SlideContainer = styled.div`
  width: 1064px;
  height: 300px;
  overflow: hidden;
`;

const SlideBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 4px 0;
`;

const SlideImg = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  margin: 0 8px;
  border-radius: 8px;
  transition: 0.2s;
  transform: translateX(${(props) => `${props.$slidemove}px`});

  &:hover {
    opacity: 0.9;
    transform: translateX(${(props) => `${props.$slidemove}px`}) scale(1.025);
    cursor: pointer;
  }
`;

const Btn = styled.button`
  position: absolute;
  bottom: 110px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #afc8ad;
  cursor: pointer;

  &:hover {
    background-color: #afc8ad;
    color: #ffffff;
  }
`;

const PrevBtn = styled(Btn)`
  left: -20px;
`;
const NextBtn = styled(Btn)`
  right: -20px;
`;
