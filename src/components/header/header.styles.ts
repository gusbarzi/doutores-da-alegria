import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${DalegriaColorsEnum.LightBlue};
  padding: 32px 16px;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.span`
  font-family: ${DalegriaFontesEnum.SimplesBasic};
  color: ${DalegriaColorsEnum.White};
  font-size: 24px;
`

export const Logo = styled.div`
  display: flex;
`;