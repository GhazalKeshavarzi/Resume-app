import styled from "styled-components";
import education from "../../images/education.svg";
import hobbies from "../../images/skateboarding.svg";
import graphicSkills from "../../images/art.svg";
import language from "../../images/language.svg";
import { Link as LinkR } from "react-router-dom";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  @media screen and (max-width: 768px) {
    position: static;
  }
`;
export const MainWrapper = styled.div`
  display: grid;
  overflow: hidden;
  height: 100%;
  grid-template-columns: minmax(1fr 1fr auto);
  align-items: center;
  grid-template-areas: "col1 col1 col2 col2 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas:
      "col1"
      "col1"
      "col2"
      "col2"
      "col2";
  }
`;
export const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-area: col1;
  background: ${({ Gradient }) =>
    Gradient
      ? "linear-gradient(to bottom , #621437 0%, #FF512F 50% ,#bd2167 100%)"
      : "#f12365"};
  @media screen and (max-width: 768px) {
    background: ${({ Gradient }) =>
      Gradient
        ? "linear-gradient(to bottom , #621437 0%, #FF512F 50% ,#bd2167 100%)"
        : "#f12365"};
  }
`;
export const PictureWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Picture = styled.img`
  position: absolute;
  width: 300px;
  height: 450px;
  border-radius: 2rem;
`;
export const SocialWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const SocialLink = styled.a`
  font-size: 30px;
  color: #1d1d1d;
  padding: 8px;
  border-radius: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    transform: scale(1.5);
    box-shadow: 0 0 10px #1d1d1d;
  }
`;
export const TextWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background-size: ${({ Gradient }) =>
    Gradient ? "" : " 6px 6px !important;"};
  background-image: ${({ Gradient }) =>
    Gradient
      ? "linear-gradient(to bottom, #300130 0%, #C04848 200%)"
      : " linear-gradient(-45deg,#101010 46%,#060606 49%,#060606 51%,#101010 55%)"};

  grid-area: col2;
  @media screen and (max-width: 768px) {
    background: ${({ Gradient }) =>
      Gradient
        ? "linear-gradient(to bottom, #300130 0%, #C04848 200%)"
        : " linear-gradient(-45deg,#101010 46%,#060606 49%,#060606 51%,#101010 55%)"};
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  margin-top: 30px;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 50px;
    margin-right: 0;
  }
`;
export const ThemeBtn = styled.button`
  border-radius: 2rem;
  padding: 10px 16px;
  background-color: #1d1d1d;
  color: #fff;
  border: none;
  outline: none;
  &:hover {
    background-color: #767676;
    box-shadow: 0px 0px 60px #ff0099;
  }
`;
export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const PartOne = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export const PartTwo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const UniBox = styled(LinkR)`
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 200px;
  color: #191819;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  place-content: center;
  background-image: url(${education});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(60% + 35px);

    transition: transform 0.5s 0.15s ease-in;
    z-index: -1;
  }
  &::before {
    top: 0;
    background: linear-gradient(to bottom right, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0% 100%);
    transform: translateY(-100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top left, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(100%);
  }

  &:hover::before,
  &:hover::after {
    transform: translateY(0);
  }
  &:hover {
    transition: 0.5s ease-in-out;
    box-shadow: 5px 6px 10px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Hobbies = styled(LinkR)`
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 200px;
  color: #191819;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  place-content: center;
  background-image: url(${hobbies});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(60% + 35px);

    transition: transform 0.5s 0.15s ease-in;
    z-index: -1;
  }
  &::before {
    top: 0;
    background: linear-gradient(to bottom right, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0% 100%);
    transform: translateY(-100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top left, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(100%);
  }

  &:hover::before,
  &:hover::after {
    transform: translateY(0);
  }
  &:hover {
    transition: 0.5s ease-in-out;
    box-shadow: 5px 6px 10px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Graphic = styled(LinkR)`
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 200px;
  color: #191819;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  place-content: center;
  background-image: url(${graphicSkills});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(60% + 35px);

    transition: transform 0.5s 0.15s ease-in;
    z-index: -1;
  }
  &::before {
    top: 0;
    background: linear-gradient(to bottom right, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0% 100%);
    transform: translateY(-100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top left, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(100%);
  }

  &:hover::before,
  &:hover::after {
    transform: translateY(0);
  }
  &:hover {
    transition: 0.5s ease-in-out;
    box-shadow: 5px 6px 10px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Language = styled(LinkR)`
  position: relative;
  text-decoration: none;
  width: 200px;
  height: 200px;
  color: #191819;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  place-content: center;
  background-image: url(${language});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(60% + 35px);

    transition: transform 0.5s 0.15s ease-in;
    z-index: -1;
  }
  &::before {
    top: 0;
    background: linear-gradient(to bottom right, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0% 100%);
    transform: translateY(-100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top left, #e1eec3 0%, #f05053 100%);
    clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(100%);
  }

  &:hover::before,
  &:hover::after {
    transform: translateY(0);
  }
  &:hover {
    transition: 0.5s ease-in-out;
    box-shadow: 5px 6px 10px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const CardContent = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  transition: opacity 0.25s;

  &:hover {
    opacity: 1;
    transition-delay: 0.75s;
  }
`;
export const CardTitle = styled.h3`
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const CardText = styled.p`
  justify-content: center;
  font-size: 18px;
  padding: 5px;
  white-space: normal;
`;
