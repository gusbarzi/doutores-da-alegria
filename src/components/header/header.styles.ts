import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";
import textura from "../../../public/assets/textura.svg";
import breakpoints from "../../utils/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${DalegriaColorsEnum.LightBlue};
  padding: 32px 16px;
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

    ${breakpoints.higherThan('desktop')} {
      background-size: contain;
      background-position: center;
      background-repeat: repeat;
    }
  }
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
`;

export const Logo = styled.div`
  display: flex;
`;

export const HamburgerButton = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 36px;
  cursor: pointer;
  z-index: 3;
`;

export const HamburguerImage = styled.img`
  width: 40px;
  transition: 0.3s;

  &:hover {
    width: 45px;
  }

  ${breakpoints.higherThan("desktop")} {
    width: 50px;

    &:hover {
      width: 55px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;