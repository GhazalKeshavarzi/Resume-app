import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import pic from "../../images/personal.jpg";
import { SiGmail } from "react-icons/si";
import {
  MainContainer,
  MainWrapper,
  ImgWrapper,
  TextWrapper,
  BtnWrapper,
  ThemeBtn,
  ChartWrapper,
  PartOne,
  PartTwo,
  UniBox,
  CardContent,
  CardTitle,
  CardText,
  Graphic,
  Hobbies,
  Language,
  Picture,
  SocialWrapper,
  PictureWrapper,
  SocialLink,
  Signup,
} from "./MainPageElements";
const MainPage = ({ Gradient, changeTheme }) => {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <ImgWrapper Gradient={Gradient}>
            <PictureWrapper>
              <Picture src={pic}></Picture>
            </PictureWrapper>
            <SocialWrapper>
              <SocialLink
                href="https://www.instagram.com/frontend.js_"
                target="_blank"
              >
                <AiFillInstagram />
              </SocialLink>
              <SocialLink
                href="https://www.github.com/GhazalKeshavarzi"
                target="_blank"
              >
                <AiFillGithub />
              </SocialLink>
              <SocialLink
                href="mailto:ghazal.keshavarzi7@gmail.com"
                target="_blank"
              >
                <SiGmail />
              </SocialLink>
            </SocialWrapper>
          </ImgWrapper>
          <TextWrapper Gradient={Gradient}>
            <BtnWrapper>
              <ThemeBtn Gradient={Gradient} onClick={changeTheme}>
                Theme
              </ThemeBtn>
              <Signup to="/Signup" target="-blank" Gradient={Gradient}>
                Sign up
              </Signup>
            </BtnWrapper>
            <ChartWrapper>
              <PartOne>
                <UniBox to="/Education" target="-blank">
                  <CardContent IsHover={true}>
                    <CardTitle>Education & Certificates</CardTitle>
                    <CardText>
                      here is a short description of my certifications and
                      educational skills
                    </CardText>
                  </CardContent>
                </UniBox>
                <Hobbies to="/Hobbies" target="_blank">
                  <CardContent IsHover={true}>
                    <CardTitle>Hobbies</CardTitle>
                    <CardText>
                      in this section I speak about my hobbies and whatever I do
                      in my pleasure time
                    </CardText>
                  </CardContent>
                </Hobbies>
              </PartOne>
              <PartTwo>
                <Graphic to="/Graphic" target="_blank">
                  <CardContent IsHover={true}>
                    <CardTitle>Graphical Skills</CardTitle>
                    <CardText>
                      in this section you can see my graphical skills
                    </CardText>
                  </CardContent>
                </Graphic>
                <Language to="/Language" target="_blank">
                  <CardContent IsHover={true}>
                    <CardTitle>Languages</CardTitle>
                    <CardText>
                      here are the languages that I can speak and understand
                    </CardText>
                  </CardContent>
                </Language>
              </PartTwo>
            </ChartWrapper>
          </TextWrapper>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default MainPage;
