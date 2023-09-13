import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { InsideOutDesktop } from "./Desktop";
import { InsideOutMobile } from "./Mobile";

export const InsideOut: React.FC = () => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/raio-x-01")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/texto-diretoria")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <InsideOutDesktop />
      ) : (
        <InsideOutMobile />
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={handleBack}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={handleNext}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
