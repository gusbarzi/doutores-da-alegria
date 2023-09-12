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

  return (
    <>
      {isDesktop ? (
        <TextBoardDesktop />
      ) : (
        <TextBoardMobile />
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/texto-diretor-presidente")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/de-dentro-para-fora")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
