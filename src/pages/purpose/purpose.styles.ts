import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const PurposeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  text-align: right;
  position: relative;
  flex-direction: column;
  padding: 0 16px 0 0;
  background-color: ${DalegriaColorsEnum.Yellow};
`;

export const PurposeLightBlueTitle = styled.span`
  font-family: ${DalegriaFontesEnum.ManualBasicS};
  color: ${DalegriaColorsEnum.LightBlue};
  font-size: 48px;
`;

export const PurposePinkTitle = styled.span`
  font-family: ${DalegriaFontesEnum.ManualBasicS};
  color: ${DalegriaColorsEnum.Pink};
  font-size: 48px;
`;

export const PurposePurpleTitle = styled.span`
  font-family: ${DalegriaFontesEnum.ManualBasicS};
  color: ${DalegriaColorsEnum.Purple};
  font-size: 48px;
`;

export const JokersImageContainer = styled.div`
  display: flex;
  position: absolute;
  left: -70px;
  top: -70px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 16px 32px;
  flex-direction: column;
  text-align: left;
`;

export const DescriptionTitle = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesBasic};
  color: ${DalegriaColorsEnum.Red};
  font-size: 24px;
`;

export const ValuesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 16px 32px;
  flex-direction: column;
  text-align: left;
`;

export const PurposeContainerDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px 0;
`;

export const BackgroundYellowDesktop = styled.div`
  background-color: ${DalegriaColorsEnum.LightYellow};
  width: 900px;
  padding: 24px 60px;
  display: flex;
  flex-direction: column;
`;

export const JokerImage = styled.img`
  width: 600px;
`;