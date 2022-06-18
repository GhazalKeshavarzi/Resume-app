import React, { useEffect } from "react";
import University from "../../images/university.svg";
import react from "../../images/react.svg";
import HTML from "../../images/HTML.jpg";
import CSS from "../../images/CSS.jpg";
import Responsive from "../../images/responsive web.jpg";
import JavaScript from "../../images/JavaScript.png";
import Coursera from "../../images/Coursera.jpg";
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
  ChartWrapperTop,
  PercentWrapper,
  Number,
  Circle,
  BoxCertificate,
  PercentHTML,
  PercentCSS,
  PercentBootstrap,
  PercentJavaScript,
  PercentReact,
  Image,
  ChartWrapperBottom,
  BtnLink,
  Button,
} from "./InfoElements";

const InfoSection = () => {
  useEffect(() => {
    window.addEventListener("scroll1", GoToHeader);
  }, []);
  const GoToHeader = () => {
    scroll.scrollTo(0);
  };
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
        <InfoRow id={"skills"} BgLight={true} ImgStart={false}>
          <Column1>
            <PercentWrapper>
              <ChartWrapperTop>
                <PercentHTML>
                  <Circle>
                    <Number>
                      HTML
                      <br />
                      100%
                    </Number>
                  </Circle>
                </PercentHTML>

                <PercentCSS>
                  <Circle>
                    <Number>
                      CSS
                      <br />
                      90%
                    </Number>
                  </Circle>
                </PercentCSS>

                <PercentBootstrap>
                  <Circle>
                    <Number>
                      Bootstrap
                      <br />
                      90%
                    </Number>
                  </Circle>
                </PercentBootstrap>
              </ChartWrapperTop>
              <ChartWrapperBottom>
                <PercentJavaScript>
                  <Circle>
                    <Number>
                      JavaScript
                      <br />
                      80%
                    </Number>
                  </Circle>
                </PercentJavaScript>
                <PercentReact>
                  <Circle>
                    <Number>
                      React.js
                      <br />
                      50%
                    </Number>
                  </Circle>
                </PercentReact>
              </ChartWrapperBottom>
            </PercentWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={react} />
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

export default InfoSection;
