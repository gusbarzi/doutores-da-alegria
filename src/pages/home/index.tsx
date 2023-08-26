import React from "react";
import { HomeContainer, LogoContainer } from "./home.styles";
import { ReactComponent as TwentTwo } from "../../../public/assets/twenttwo.svg";
import {
  ButtonContainerTwo,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>
        <LogoContainer>
          <TwentTwo width={250} height={250} />
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
