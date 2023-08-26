import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

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
`;

export const DirectorText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 20px;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Pink};
`;
