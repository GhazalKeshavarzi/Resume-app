import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: ${({ BgLight }) => (BgLight ? "#eeeeee" : "#1d1d1d")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 50px;
  overflow: hidden;
`;
export const InfoRow = styled.div`
  color: ${({ BgLight }) => (BgLight ? "#000000" : "#ffffff")};
  background-color: ${({ BgLight }) => (BgLight ? "#eeeeee" : "#1d1d1d")};
  display: grid;
  width: 100%;
  height: auto;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
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
  margin: 50px 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Column2 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-area: col2;
  margin: 50px 0;
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
  height: 100%;
  max-height: 500px;
  margin: 45px 0;
`;
export const Img = styled.img`
  width: 100%;
`;
export const PercentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;
export const ChartWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  z-index: 1000;
  -webkit-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
  margin: 15px;
`;
export const PercentHTML = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-90deg, #ff006a 50%, #393939 50%);
`;
export const PercentCSS = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-70deg, #ff006a 50%, #393939 50%);
`;
export const PercentBootstrap = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-70deg, #ff006a 50%, #393939 50%);
`;
export const PercentJavaScript = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-40deg, #ff006a 50%, #393939 50%);
`;
export const PercentReact = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, #393939 50%);
`;
export const Circle = styled.div`
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  margin: auto;
  background: #222;
  text-align: center;
  padding-top: 30%;
  margin: auto;
`;
export const Number = styled.h2`
  color: #adadad;
  font-weight: 700;
  font-size: 20px;
  transition: 0.5s;
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
