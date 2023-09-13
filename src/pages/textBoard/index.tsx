import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { TextBoardDesktop } from "./Desktop";
import { TextBoardMobile } from "./Mobile";

export const TextBoard: React.FC = () => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/de-dentro-para-fora")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/texto-diretor-presidente")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <TextBoardDesktop />
      ) : (
        <TextBoardMobile />
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
