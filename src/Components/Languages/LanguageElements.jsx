import styled from "styled-components";

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
  height: 100%;
  white-space: normal;
`;
export const HeaderTitle = styled.h2`
  font-size: 60px;
  justify-content: center;
  text-align: center;
  color: #fff;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding-top: 200px;
`;
export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Persian = styled.div`
  display: flex;
  margin: 5px;
  width: 250px;
  height: 250px;
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
export const English = styled.div`
  display: flex;
  margin: 15px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ff006a 50%, transparent 50%),
    linear-gradient(-70deg, #ff006a 50%, #393939 50%);
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
