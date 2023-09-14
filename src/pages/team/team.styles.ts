import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const TeamContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
`;

export const TeamContentDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
`;

export const BackgroundLightBue = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 16px;
  background-color: ${DalegriaColorsEnum.LightBlue};

  ${breakpoints.higherThan('desktop')} {
    width: 1000px;
  }
`;