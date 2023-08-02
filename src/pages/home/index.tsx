import React from "react";
import { useTranslation } from "react-i18next";
import {
  GoodReadingContainer,
  GoodReadingText,
  HomeContainer,
  HomeDescription,
  HomeText,
  HomeTitle,
} from "./home.styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GlobalBackButton, GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { ReactComponent as HomeTitleSvg } from "../../../public/assets/show-tem-que-continuar.svg";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeTitle>
        <HomeTitleSvg width={350} height={150} />
      </HomeTitle>
      <HomeDescription>
        <HomeText>{t("home_text")}</HomeText>
      </HomeDescription>
      <GoodReadingContainer>
        <GoodReadingText>{t("good_reading")}</GoodReadingText>
      </GoodReadingContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/proposito")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </HomeContainer>
  );
};
