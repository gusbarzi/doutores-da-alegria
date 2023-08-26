import { styled } from "styled-components";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const ColorideBackground = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 32px 16px;
  margin-bottom: 16px;
  gap: 16px;
`;

