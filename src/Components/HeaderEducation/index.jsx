import React from "react";
import Video from "../../Videos/education.mp4";
import {
  ColorBg,
  HeaderBg,
  HeaderContainer,
  HeaderTextContainer,
  HeaderTitle,
  TitleWrapper,
  VideoBg,
  BtnWrapper,
  BtnLink,
  Button,
} from "./HeaderEducationElements";

const HeaderEducation = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderBg>
          <VideoBg loop muted autoPlay src={Video} />
        </HeaderBg>
        <ColorBg></ColorBg>
        <HeaderTextContainer>
          <TitleWrapper>
            <HeaderTitle>University education</HeaderTitle>
          </TitleWrapper>
          <BtnWrapper>
            <BtnLink to="university">
              <Button>University Info</Button>
            </BtnLink>
            <BtnLink to="skills">
              <Button>Programming Skills</Button>
            </BtnLink>
            <BtnLink to="certificate">
              <Button>Other Certifications</Button>
            </BtnLink>
          </BtnWrapper>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderEducation;
