import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContainer,
  Logo,
} from "./header.styles";
import { NavigationDropdown } from "./components/dropdown";
import { ReactComponent as TwentTwo } from "../../../public/assets/twenttwo.svg";
import LogoVertical from "../../../public/assets/logo-vertical-b.png";

export const Header: React.FC = () => {
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
        <NavigationDropdown hamburgerWidth={40} hamburgerheight={40} />
      </div>
    </HeaderContainer>
  );
};
