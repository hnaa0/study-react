import styled from "styled-components";
import slideImages from "../slideImages";
import { useEffect, useState } from "react";

export default function InfiniteSlider() {
  const [imgNum, setImgNum] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 1.5s ease-in-out"
  );
  const slideImgCarouselArr = [
    slideImages[slideImages.length - 1],
    ...slideImages,
    slideImages[0],
  ];

  const handleBtn = (direc) => {
    if (direc == "prev") {
      setImgNum((prev) => prev - 1);
    } else {
      setImgNum((prev) => prev + 1);
    }
    setCarouselTransition("transform 1.5s ease-in-out");
  };

  const handleSlide = (num) => {
    setTimeout(() => {
      setImgNum(num);
      setCarouselTransition("");
    }, 1500);
  };

  useEffect(() => {
    if (imgNum == slideImgCarouselArr.length - 1) handleSlide(1);
    else if (imgNum == 0) handleSlide(slideImgCarouselArr.length - 2);
  }, [slideImgCarouselArr.length, imgNum]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgNum((prev) => prev + 1);
      setCarouselTransition("transform 1.5s ease-in-out");
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <SlideTitle>Infinite Carousel</SlideTitle>
      <SlideContainer>
        <SlideBox
          $imgTransform={imgNum}
          $carouselTransition={carouselTransition}
        >
          {slideImgCarouselArr.map((slideImage, idx) => {
            return (
              <SlideImg
                key={idx + slideImage.title}
                src={slideImage.img}
                alt={slideImage.title}
              ></SlideImg>
            );
          })}
        </SlideBox>
        <PrevBtn
          onClick={() => {
            handleBtn("prev");
          }}
        >
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
        <NextBtn
          onClick={() => {
            handleBtn("next");
          }}
        >
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
      </SlideContainer>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 90vw;
  }
`;

const SlideTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 28px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
    height: 200px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 90vw;
  }
`;

const SlideBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  transition: ${(props) => props.$carouselTransition};
  transform: translateX(${(props) => `-${props.$imgTransform}00%`});
`;

const SlideImg = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Btn = styled.button`
  position: absolute;
  bottom: 160px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #afc8ad;

  &:hover {
    background-color: #afc8ad;
    color: #ffffff;
  }

  @media ${({ theme }) => theme.device.mobile} {
    bottom: 70px;
    width: 30px;
    height: 30px;
  }
`;

const PrevBtn = styled(Btn)`
  left: 10px;
`;
const NextBtn = styled(Btn)`
  right: 10px;
`;
