import React, { useEffect } from "react";
import Video from "../../Videos/education.mp4";
import { animateScroll as scroll } from "react-scroll";
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
  useEffect(() => {
    window.addEventListener("Scroll", ToUniversity);
    window.addEventListener("Scroll", ToSkills);
    window.addEventListener("Scroll", ToCertificate);
  }, []);
  const ToUniversity = () => {
    scroll.scrollTo(850);
  };
  const ToSkills = () => {
    scroll.scrollTo(1600);
  };
  const ToCertificate = () => {
    scroll.scrollTo(2400);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderBg id={"Header"}>
          <VideoBg loop muted autoPlay src={Video} />
        </HeaderBg>
        <ColorBg></ColorBg>
        <HeaderTextContainer>
          <TitleWrapper>
            <HeaderTitle>University education</HeaderTitle>
          </TitleWrapper>
          <BtnWrapper>
            <BtnLink
              to="university"
              onClick={ToUniversity}
              smooth={true}
              duration={20}
            >
              <Button>University Info</Button>
            </BtnLink>
            <BtnLink to="skills" onClick={ToSkills} smooth={true} duration={20}>
              <Button>Programming Skills</Button>
            </BtnLink>
            <BtnLink
              to="certificate"
              onClick={ToCertificate}
              smooth={true}
              duration={20}
            >
              <Button>Other Certifications</Button>
            </BtnLink>
          </BtnWrapper>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderEducation;
