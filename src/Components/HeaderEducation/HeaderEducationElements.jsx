import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0 30px;
  height: 800px;
  z-index: 1;
`;
export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  opacity: 0.2px;
`;
export const VideoBg = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    background-color: #1d1d1d;
  }
`;
export const ColorBg = styled.div`
  position: absolute;
  background-color: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeaderTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const TitleWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: normal;
`;
export const HeaderTitle = styled.h2`
  font-size: 30px;
  justify-content: center;
  text-align: center;
  color: #fff;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;
export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const BtnLink = styled(LinkS)`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 15px;
  background-color: #f12365;
  font-size: 18px;
  border-radius: 50px;
  border: none;
  outline: none;
  &:hover {
    box-shadow: 0 0 15px #b0b0b0;
  }
`;
