import React from "react";
import { HomeContainer, LogoContainer } from "./home.styles";

import {
  ButtonContainerTwo,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import twentyTwo from "../../../public/assets/PNGS/Outros/22.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan('desktop'));
  const imageWidth = isDesktop ? 600 : 250;
  const imageHeight = isDesktop ? 400 : 250

  return (
    <>
      <HomeContainer>
        <LogoContainer>
          <img src={twentyTwo} width={imageWidth} height={imageHeight} />
          <TextContainer justifyContent="flex-start" textAlign="flex-start">
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.White}
              fontSize={24}
            >
              Balanço anual - 2022
            </Typography>
          </TextContainer>
        </LogoContainer>
      </HomeContainer>
      <ButtonContainerTwo>
        <GlobalNextButton onClick={() => navigate("/abertura")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainerTwo>
    </>
  );
};
