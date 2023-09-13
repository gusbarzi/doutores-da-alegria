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
import { SocialImpactDesktop } from "./Desktop";
import { SocialImpactMobile } from "./Mobile";

export const SocialImpact: React.FC = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/texto-diretor-presidente")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/proposito")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <SocialImpactDesktop />
      ) : (
        <SocialImpactMobile />
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
