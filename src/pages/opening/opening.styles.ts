import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const OpeningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px;
  gap: 16px;
`;

export const OpeningContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  gap: 16px;
`;

export const FlexRightSide = styled.div`
  width: 1200px;
  height: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FlexLeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const OpeningTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;

  ${breakpoints.higherThan("desktop")} {
    height: 700px;
  }
`;

export const OpeningDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  ${breakpoints.higherThan("desktop")} {
    width: 700px;
  }
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
  font-family: ${DalegriaFontesEnum.StdBold};
  color: ${DalegriaColorsEnum.Gray};
  font-size: 22px;
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
`;

export const ArtboardImage = styled.img`
  width: 100%;
`;