import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import textura from "../../../public/assets/textura.svg";

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;  
  background-color: ${DalegriaColorsEnum.LightBlue};
`;

export const HomeHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 150px;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 16px 0 0;
  position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${textura});
        background-size: cover;
        background-position: center;
        background-repeat: repeat;
        opacity: 0.3;
        z-index: 1;
    }
`;

export const LogoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-right: 60px;
  
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 240px;
  right: 100px;
`;

export const ImageContainer = styled.img`
  display: flex;
  position: absolute;
  top: 250px;
  right: 20px;
`;
