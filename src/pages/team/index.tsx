import React from "react";
import { useTranslation } from "react-i18next";
import { TeamContainer } from "./team.styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GlobalBackButton, GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const Team: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <TeamContainer>
      <h1>Equipe</h1>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/prestacao-de-contas-03")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/parceiros")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </TeamContainer>
  )
}