import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContainer,
  Logo,
} from "./header.styles";
import { ReactComponent as TwentTwo } from "../../../public/assets/twenttwo.svg";
import LogoVertical from "../../../public/assets/logo-vertical-b.png";
import styled from "styled-components";
import { SidebarMenu } from "./components/dropdown";
import menu from "../../../public/assets/PNGS/Outros/Menu.png";
import breakpoints from "../../utils/breakpoints";

const HamburgerButton = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 36px;
  cursor: pointer;
  z-index: 3;
`;

const HamburguerImage = styled.img`
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

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <div>
        <TwentTwo width={80} />
      </div>
      <HeaderTitleContainer>
        <HeaderTitle>Balanço anual</HeaderTitle>
        <Logo>
          <img src={LogoVertical} width={60} />
        </Logo>
      </HeaderTitleContainer>
      <div>
        {!isOpen && (
          <HamburgerButton onClick={toggleMenu}>
            <HamburguerImage src={menu} alt="Menu" />
          </HamburgerButton>
        )}
        <SidebarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </HeaderContainer>
  );
};
