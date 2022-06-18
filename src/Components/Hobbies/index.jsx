import React, { useEffect, myRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TitleText,
  PText,
  ImgWrapper,
  Img,
  BtnLink,
  Button,
} from "./HobbiesElements";

const HobbiesSection = ({
  id,
  BgLight,
  ImgStart,
  Title,
  description,
  ImgURL,
  alt,
}) => {
  useEffect(() => {
    window.addEventListener("scroll1", GoToHeader);
  }, []);
  const GoToHeader = () => {
    scroll.scrollTo(0);
  };
  return (
    <>
      <InfoContainer>
        <InfoRow id={id} BgLight={BgLight} ImgStart={ImgStart} ref={myRef}>
          <Column1>
            <TextWrapper>
              <TitleText>{Title}</TitleText>
              <PText>{description}</PText>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={ImgURL} alt={alt} />
            </ImgWrapper>
            <BtnLink
              to="Header"
              onClick={GoToHeader}
              smooth={true}
              duration={20}
            >
              <Button>Got to Top</Button>
            </BtnLink>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default HobbiesSection;
