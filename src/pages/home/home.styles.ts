import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;  
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const LogoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;