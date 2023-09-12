import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const TextBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const BoardDescriptionText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${breakpoints.higherThan("desktop")} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    text-align: left;
    width: 100%;
  }
`;

export const BoardText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 20px;

  ${breakpoints.higherThan("desktop")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74%;
  }
`;

export const JokerImage = styled.img`
  width: 600px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  position: relative;
  flex-direction: column;
`;

export const BlueFlag = styled.div`
  display: flex;
  margin-bottom: -20px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 160px;
  height: 25px;
  background-color: ${DalegriaColorsEnum.LightBlue};
  z-index: 10;
`;

export const Division = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  width: 100%;

  margin-top: -180px;
`;
