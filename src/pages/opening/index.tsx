import React from "react";
import { useTranslation } from "react-i18next";
import {
  GoodReadingContainer,
  GoodReadingText,
  OpeningContainer,
  OpeningDescription,
  OpeningText,
  OpeningTitle,
} from "./opening.styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GlobalBackButton, GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { ReactComponent as OpeningTitleSvg } from "../../../public/assets/show-tem-que-continuar.svg";

export const Opening: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <OpeningContainer>
      <OpeningTitle>
        <OpeningTitleSvg width={350} height={150} />
      </OpeningTitle>
      <OpeningDescription>
        <OpeningText>{t("home_text")}</OpeningText>
      </OpeningDescription>
      <GoodReadingContainer>
        <GoodReadingText>{t("good_reading")}</GoodReadingText>
      </GoodReadingContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/proposito")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </OpeningContainer>
  );
};
