import React, { useEffect } from "react";
import Video from "../../Videos/graphics.mp4";
import { animateScroll as scroll } from "react-scroll";
import {
  AfterEffects,
  BtnLink,
  BtnWrapper,
  Button,
  ChartWrapperBottom,
  ChartWrapperTop,
  Circle,
  ColorBg,
  Column1,
  Column2,
  HeaderBg,
  HeaderContainer,
  HeaderTextContainer,
  HeaderTitle,
  Illustrator,
  InfoContainer,
  InfoRow,
  Number,
  PercentWrapper,
  PhotoShop,
  Premier,
  PText,
  TextWrapper,
  TitleText,
  TitleWrapper,
  VideoBg,
  XD,
} from "./GraphicElements";
const GraphicSkills = () => {
  useEffect(() => {
    window.addEventListener("scroll1", ToSkills);
    window.addEventListener("scroll1", ToHeader);
  }, []);
  const ToSkills = () => {
    scroll.scrollTo(850);
  };
  const ToHeader = () => {
    scroll.scrollTo(0);
  };

  return (
    <>
      <HeaderContainer id={"Header"}>
        <HeaderBg>
          <VideoBg loop muted autoPlay src={Video} />
        </HeaderBg>
        <ColorBg></ColorBg>
        <HeaderTextContainer>
          <TitleWrapper>
            <HeaderTitle>Graphical Skills</HeaderTitle>
          </TitleWrapper>
          <BtnWrapper>
            <BtnLink
              to="graphicalSkills"
              onClick={ToSkills}
              smooth={true}
              duration={20}
            >
              <Button>Graphical Skills</Button>
            </BtnLink>
          </BtnWrapper>
        </HeaderTextContainer>
      </HeaderContainer>
      <InfoContainer>
        <InfoRow id={"graphicalSkills"} BgLight={false} ImgStart={true}>
          <Column1>
            <TextWrapper>
              <TitleText>Graphical Programs</TitleText>
              <PText>
                I have been working as a graphic designer and editor for aout 8
                or 7 years and here you can my skills.
              </PText>
              <BtnLink
                to="Header"
                onClick={ToHeader}
                duration={30}
                smooth={true}
              >
                <Button>Got to Top</Button>
              </BtnLink>
            </TextWrapper>
          </Column1>
          <Column2>
            <PercentWrapper>
              <ChartWrapperTop>
                <PhotoShop>
                  <Circle>
                    <Number>
                      Photoshop
                      <br />
                      80%
                    </Number>
                  </Circle>
                </PhotoShop>

                <Illustrator>
                  <Circle>
                    <Number>
                      Illustraitor
                      <br />
                      60%
                    </Number>
                  </Circle>
                </Illustrator>

                <XD>
                  <Circle>
                    <Number>
                      XD
                      <br />
                      70%
                    </Number>
                  </Circle>
                </XD>
              </ChartWrapperTop>
              <ChartWrapperBottom>
                <Premier>
                  <Circle>
                    <Number>
                      Premier
                      <br />
                      80%
                    </Number>
                  </Circle>
                </Premier>
                <AfterEffects>
                  <Circle>
                    <Number>
                      AfterEffects
                      <br />
                      50%
                    </Number>
                  </Circle>
                </AfterEffects>
              </ChartWrapperBottom>
            </PercentWrapper>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default GraphicSkills;
