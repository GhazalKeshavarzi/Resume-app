import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const InfoContainer = styled.div`
  background-color: ${({ BgLight }) => (BgLight ? "#eeeeee" : "#1d1d1d")};
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InfoRow = styled.div`
  color: ${({ BgLight }) => (BgLight ? "#000000" : "#ffffff")};
  background-color: ${({ BgLight }) => (BgLight ? "#eeeeee" : "#1d1d1d")};
  display: grid;
  width: 100%;
  height: 700px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding: 60px 0;
  z-index: 100;
  grid-template-areas: ${({ ImgStart }) =>
    ImgStart ? `'col1 col2'` : `'col2 col1'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ ImgStart }) =>
      ImgStart ? `'col1''col2'` : `'col2''col1'`};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const Column1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Column2 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.h1`
  font-size: 35px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;
export const PText = styled.p`
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 500px;
  margin: 45px 0;
`;
export const Img = styled.img`
  width: 100%;
`;

export const BtnLink = styled(LinkS)`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
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
    background-color: #fa89c2;
  }
`;

export const PercentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const ChartWrapperTop = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const ChartWrapperBottom = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PercentHTML = styled.div`
  display: flex;
  margin: 5px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-90deg, #ff006a 50%, #393939 50%);
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  } ;
`;
export const PercentCSS = styled.div`
  display: flex;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-70deg, #ff006a 50%, #393939 50%);
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const PercentBootstrap = styled.div`
  display: flex;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-70deg, #ff006a 50%, #393939 50%);
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const PercentJavaScript = styled.div`
  display: flex;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-40deg, #ff006a 50%, #393939 50%);
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const PercentReact = styled.div`
  display: flex;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, #393939 50%);
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const Circle = styled.div`
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  margin: auto;
  background: #222;
  text-align: center;
`;
export const Number = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adadad;
  font-weight: 700;
  font-size: 20px;
`;
export const BoxCertificate = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Image = styled.a`
  text-decoration: none;
  margin: 15px;
  padding: 15px;
  background-color: #f9007d;
  border-radius: 50px;
  outline: 0;
  &:link {
    color: #ffffff;
  }
  &:visited {
    color: #1d1d1d;
  }
  &:hover {
    color: #1d1d1d;
    background-color: #fa89c2;
    box-shadow: 0 0 10px #ffffff;
  }
`;
