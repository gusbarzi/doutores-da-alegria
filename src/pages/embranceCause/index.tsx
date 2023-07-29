import React from "react";
import { useTranslation } from "react-i18next";
import { EmbranceCauseContainer } from "./embranceCause.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const EmbranceCause: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <EmbranceCauseContainer>
      <h1>Doutores da alegria na mídia</h1>
      <GlobalNextButton onClick={() => navigate('/prestacao-de-contas')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </EmbranceCauseContainer>
  )
}