import React, { useState } from "react";
import {
  Division,
  HomeContainer,
  Left,
  LogoContainer,
  LogoImage,
  LogoImageMobile,
  MobileContainer,
  Right,
  SuperContainer,
  TwentyImage,
} from "./home.styles";

import {
  ButtonContainerTwo,
  GlobalNextButton,
  Typography,
} from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import twentyTwo from "../../../public/assets/PNGS/Outros/22.png";
import { useNavigate } from "react-router-dom";
import {
  HamburgerButton,
  HamburguerImage,
  HeaderContainer,
} from "../../components/header/header.styles";
import menu from "../../../public/assets/PNGS/Outros/Menu.png";
import { SidebarMenu } from "../../components/header/components/dropdown";
import logo from "../../../public/assets/logo-vertical-new.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const isMobile = useMediaQuery(breakpoints.lowerThan("desktop"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNext = () => {
    navigate("/abertura");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SuperContainer>
        <HeaderContainer>
          <div>
            {!isOpen && (
              <HamburgerButton onClick={toggleMenu}>
                <HamburguerImage src={menu} alt="Menu" />
              </HamburgerButton>
            )}
            <SidebarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </HeaderContainer>
        <HomeContainer>
          <LogoContainer>
            <Division>
              <Left>
                {!isDesktop ? (
                  <MobileContainer>
                    <LogoImageMobile src={logo} />
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.White}
                      fontSize={24}
                      style={{ width: isDesktop ? "450px" : "250px" }}
                    >
                      Balanço anual - 2022
                    </Typography>
                  </MobileContainer>
                ) : (
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={48}
                    style={{ width: isDesktop ? "450px" : "250px" }}
                  >
                    Balanço anual - 2022
                  </Typography>
                )}

                <TwentyImage src={twentyTwo} />
              </Left>
              {isDesktop && (
                <Right>
                  <LogoImage src={logo} />
                </Right>
              )}
            </Division>
          </LogoContainer>
        </HomeContainer>
      </SuperContainer>
      <ButtonContainerTwo>
        <GlobalNextButton onClick={handleNext}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainerTwo>
    </>
  );
};
