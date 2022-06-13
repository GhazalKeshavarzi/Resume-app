import React from "react";
import University from "../../images/university.svg";
import react from "../../images/react.svg";
import HTML from "../../images/HTML.jpg";
import CSS from "../../images/CSS.jpg";
import Responsive from "../../images/responsive web.jpg";
import JavaScript from "../../images/JavaScript.png";
import Coursera from "../../images/Coursera.jpg";
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
  ChartWrapperTop,
  PercentWrapper,
  CircleWrapper,
  Number,
  Circle,
  BoxCertificate,
  PercentHTML,
  PercentCSS,
  PercentBootstrap,
  PercentJavaScript,
  PercentReact,
  Image,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoRow id={"university"} BgLight={false} ImgStart={true}>
          <Column1>
            <TextWrapper>
              <TitleText>Software Engineering</TitleText>
              <PText>I have graduated from Shiraz university</PText>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={University} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
        <InfoRow id={"skills"} BgLight={true} ImgStart={false}>
          <Column1>
            <PercentWrapper>
              <ChartWrapperTop>
                <CircleWrapper>
                  <PercentHTML>
                    <Circle>
                      <Number>
                        HTML
                        <br />
                        100%
                      </Number>
                    </Circle>
                  </PercentHTML>
                </CircleWrapper>
                <CircleWrapper>
                  <PercentCSS>
                    <Circle>
                      <Number>
                        CSS
                        <br />
                        90%
                      </Number>
                    </Circle>
                  </PercentCSS>
                </CircleWrapper>
                <CircleWrapper>
                  <PercentBootstrap>
                    <Circle>
                      <Number>
                        Bootstrap
                        <br />
                        90%
                      </Number>
                    </Circle>
                  </PercentBootstrap>
                </CircleWrapper>
              </ChartWrapperTop>
              <ChartWrapperTop>
                <CircleWrapper>
                  <PercentJavaScript>
                    <Circle>
                      <Number>
                        JavaScript
                        <br />
                        80%
                      </Number>
                    </Circle>
                  </PercentJavaScript>
                </CircleWrapper>
                <CircleWrapper>
                  <PercentReact>
                    <Circle>
                      <Number>
                        React.js
                        <br />
                        50%
                      </Number>
                    </Circle>
                  </PercentReact>
                </CircleWrapper>
              </ChartWrapperTop>
            </PercentWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={react} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
        <InfoRow id={"certificate"} BgLight={false} ImgStart={true}>
          <Column1>
            <TextWrapper>
              <TitleText>Other Certificates</TitleText>
              <BoxCertificate>
                <Image href={HTML} target="_blank">
                  HTML5
                </Image>
                <Image href={CSS} target="_blank">
                  CSS3
                </Image>
                <Image href={Responsive} target="_blank">
                  Responsive Website
                </Image>
              </BoxCertificate>
              <BoxCertificate>
                <Image href={JavaScript} target="_blank">
                  JavaScript
                </Image>
                <Image href={Coursera} target="_blank">
                  Front-end
                </Image>
              </BoxCertificate>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={University} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
