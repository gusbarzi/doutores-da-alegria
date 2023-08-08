import React from "react";
import { useTranslation } from "react-i18next";
import {
  DirectorDescriptionText,
  DirectorText,
  TextDirectorPresidentContainer,
} from "./textDirectorPresident.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";

export const TextDirectorPresident: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <TextDirectorPresidentContainer>
      <h1>Texto Diretor presidente</h1>
      <DirectorDescriptionText>
        <DirectorText>{t("director_text")}</DirectorText>
      </DirectorDescriptionText>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/texto-diretoria")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </TextDirectorPresidentContainer>
  );
};
