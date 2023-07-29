import React from "react";
import { useTranslation } from "react-i18next";
import { RetrospectiveContainer } from "./retrospective.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const Retrospective: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <RetrospectiveContainer>
      <h1>Retrospectiva 2022</h1>
      <GlobalNextButton onClick={() => navigate('/doutores-da-alegria-na-midia')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </RetrospectiveContainer>
  )
}