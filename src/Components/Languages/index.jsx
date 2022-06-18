import React from "react";
import Video from "../../Videos/language.mp4";
import {
  ChartWrapper,
  ColorBg,
  HeaderBg,
  HeaderContainer,
  HeaderTextContainer,
  HeaderTitle,
  Number,
  Persian,
  English,
  Circle,
  TitleWrapper,
  VideoBg,
} from "./LanguageElements";
const Language = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderBg>
          <VideoBg loop muted autoPlay src={Video} />
        </HeaderBg>
        <ColorBg></ColorBg>
        <HeaderTextContainer>
          <TitleWrapper>
            <HeaderTitle>Language Skills</HeaderTitle>
          </TitleWrapper>

          <ChartWrapper>
            <Persian>
              <Circle>
                <Number>
                  Persian
                  <br />
                  100%
                </Number>
              </Circle>
            </Persian>

            <English>
              <Circle>
                <Number>
                  English
                  <br />
                  90%
                </Number>
              </Circle>
            </English>
          </ChartWrapper>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};
export default Language;
