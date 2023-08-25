import React from "react";
import {
  HomeContainer,
  HomeHeader,
  ImageContainer,
  LogoContainer,
  TextContainer,
} from "./home.styles";
import { NavigationDropdown } from "../../components/header/components/dropdown";
import { ReactComponent as TwentTwo } from "../../../public/assets/twenttwo.svg";
import {
  ButtonContainerTwo,
  GlobalNextButton,
  Typography,
} from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import LogoVertical from "../../../public/assets/logo-vertical-b.png";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>
        <HomeHeader>
          <NavigationDropdown hamburgerheight={65} hamburgerWidth={70} />
        </HomeHeader>
        <TextContainer>
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.White}
          >
            Balanço anual - 2022
          </Typography>
        </TextContainer>
        <LogoContainer>
          <TwentTwo width={250} height={250} />
        </LogoContainer>
        <ImageContainer src={LogoVertical} width={100} />
      </HomeContainer>
      <ButtonContainerTwo>
        <GlobalNextButton onClick={() => navigate("/abertura")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainerTwo>
    </>
  );
};
