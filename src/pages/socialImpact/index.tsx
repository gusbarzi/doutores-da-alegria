import React from "react";
import { useTranslation } from "react-i18next";
import { SocialImpactContainer } from "./socialImpact.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const SocialImpact: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <SocialImpactContainer>
      <h1>Impacto social</h1>
      <GlobalNextButton onClick={() => navigate('/texto-diretor-presidente')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </SocialImpactContainer>
  )
}