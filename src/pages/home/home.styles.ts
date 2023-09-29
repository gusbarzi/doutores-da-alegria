import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const SuperContainer = styled.div`
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
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
  padding: 0 16px;

  ${breakpoints.higherThan("desktop")} {
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
  width: 35%;
  gap: 32px;
  flex-direction: column;
`;

export const Right = styled.div`
`;

export const LogoImage = styled.img`
  width: 100px;
`;

export const MobileContainer = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`;

export const LogoImageMobile = styled.img`
  width: 80px;
`;