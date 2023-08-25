import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const OpeningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px;
  gap: 16px;
`;

export const OpeningTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpeningDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const OpeningText = styled.span`
  &::first-letter {
    float: left;
    font-size: 80px;
    line-height: 0.6;
    padding-bottom: 16px;
    padding-right: 8px;
    padding-left: 3px;
    color: ${DalegriaColorsEnum.LightBlue};
    font-family: ${DalegriaFontesEnum.StdLight};
  }
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 20px;  
`;

export const GoodReadingContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GoodReadingText = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesBasic};
  color: ${DalegriaColorsEnum.LightBlue};
  font-size: 32px;
  text-transform: uppercase;
`