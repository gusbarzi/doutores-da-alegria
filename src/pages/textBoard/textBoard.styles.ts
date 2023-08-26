import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

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
`;

export const BoardText = styled.span`
  font-family: ${DalegriaFontesEnum.StdLight};
  color: ${DalegriaColorsEnum.Black};
  font-size: 16px;
`;