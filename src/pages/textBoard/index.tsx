import React from "react";
import { useTranslation } from "react-i18next";
import { BoardDescriptionText, BoardText, TextBoardContainer } from "./textBoard.styles";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, GlobalBackButton, GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";

export const TextBoard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <TextBoardContainer>
      <h1>Texto Diretoria</h1>
      <BoardDescriptionText>
        <BoardText>{t("text_board_text")}</BoardText>
      </BoardDescriptionText>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/de-dentro-para-fora")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </TextBoardContainer>
  );
};
