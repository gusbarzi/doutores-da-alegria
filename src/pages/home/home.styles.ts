import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;  
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const LogoContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const LogoImage = styled.img`
  width: 350px;

  ${breakpoints.higherThan('desktop')} {
    width: 800px;
  }
`;
