import React from "react";
import { useTranslation } from "react-i18next";
import { TextBoardContainer } from "./textBoard.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const TextBoard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <TextBoardContainer>
      <h1>Texto Diretoria</h1>
      <GlobalNextButton onClick={() => navigate('/de-dentro-para-fora')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </TextBoardContainer>
  )
}