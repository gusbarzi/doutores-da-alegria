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
import { TextDirectorPresidentDesktop } from "./Desktop";
import { TextDirectorPresidentMobile } from "./Mobile";

export const TextDirectorPresident: React.FC = () => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <TextDirectorPresidentDesktop />
      ) : (
        <TextDirectorPresidentMobile />
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/impacto-social")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/texto-diretoria")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
