import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${DalegriaColorsEnum.LightYellow};
  padding: 12px 0;
  gap: 12px;
  flex-shrink: 0;
  z-index: 9;
`;