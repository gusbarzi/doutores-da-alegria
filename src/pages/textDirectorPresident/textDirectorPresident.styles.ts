import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const TextDirectorPresidentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8px;
  gap: 16px;
`;

export const DirectorDescriptionText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${breakpoints.higherThan('desktop')} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 100px;
    margin-bottom: 32px;
  }
`;

export const DirectorText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 20px;

  ${breakpoints.higherThan('desktop')} {
    text-align: left;
    width: 800px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
`;

export const BannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const BannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 330px;

  background-color: ${DalegriaColorsEnum.Pink};
`;

export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 16px 32px;
`;
