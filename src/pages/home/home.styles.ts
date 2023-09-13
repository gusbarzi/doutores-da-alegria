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

export const TwentyImage = styled.img`
  width: 350px;

  ${breakpoints.higherThan('desktop')} {
    width: 500px;
  }
`;

export const Division = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 40%;
  gap: 32px;
  flex-direction: column;
`;

export const Right = styled.div`
  margin-left: -100px;
`;

export const LogoImage = styled.img`
  width: 100px;
`;
