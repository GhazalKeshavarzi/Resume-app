import React, { useEffect, useRef } from "react";
import Video from "../../Videos/Hobbies.mp4";
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
  PartOne,
  PartTwo,
} from "./HobbiesHeaderElements";
const HeaderHobbies = () => {
  useEffect(() => {
    window.addEventListener("scroll1", GoToSkate);
    window.addEventListener("scroll1", GoToGuitar);
    window.addEventListener("scroll1", GoToBiliard);
    window.addEventListener("scroll1", GoToSwim);
    window.addEventListener("scroll1", GoToReading);
    window.addEventListener("scroll1", GoToJugging);
    window.addEventListener("scroll1", GoToDancing);
  }, []);
  const GoToSkate = () => {
    scroll.scrollTo(750);
  };
  const GoToGuitar = () => {
    scroll.scrollTo(1450);
  };
  const GoToBiliard = () => {
    scroll.scrollTo(2150);
  };
  const GoToSwim = () => {
    scroll.scrollTo(2850);
  };
  const GoToReading = () => {
    scroll.scrollTo(3550);
  };
  const GoToJugging = () => {
    scroll.scrollTo(4250);
  };
  const GoToDancing = () => {
    scroll.scrollTo(4950);
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
            <HeaderTitle>my hobbies</HeaderTitle>
          </TitleWrapper>
          <BtnWrapper>
            <PartOne>
              <BtnLink
                to="Skate"
                onClick={GoToSkate}
                smooth={true}
                duration={20}
              >
                <Button>Roller Skating</Button>
              </BtnLink>
              <BtnLink
                to="Guitar"
                onClick={GoToGuitar}
                smooth={true}
                duration={25}
              >
                <Button>Playing Guitar</Button>
              </BtnLink>
              <BtnLink
                to="Biliard"
                onClick={GoToBiliard}
                smooth={true}
                duration={30}
              >
                <Button>Biliard & Bowling</Button>
              </BtnLink>
            </PartOne>
            <PartTwo>
              <BtnLink
                to="Swimming"
                onClick={GoToSwim}
                smooth={true}
                duration={35}
              >
                <Button>Swimming</Button>
              </BtnLink>
              <BtnLink
                to="Reading"
                onClick={GoToReading}
                smooth={true}
                duration={40}
              >
                <Button>Reading Books & Poets</Button>
              </BtnLink>
              <BtnLink
                to="Jugging"
                onClick={GoToJugging}
                smooth={true}
                duration={45}
              >
                <Button>Jugging</Button>
              </BtnLink>
              <BtnLink
                to="Dancing"
                onClick={GoToDancing}
                smooth={true}
                duration={50}
              >
                <Button>Dancing</Button>
              </BtnLink>
            </PartTwo>
          </BtnWrapper>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderHobbies;
