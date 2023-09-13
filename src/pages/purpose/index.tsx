import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { PurposeDesktop } from "./Desktop";
import { PurposeMobile } from "./Mobile";

export const Purpose: React.FC = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/impacto-social")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/abertura")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <PurposeDesktop />
      ) : (
        <PurposeMobile />
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
