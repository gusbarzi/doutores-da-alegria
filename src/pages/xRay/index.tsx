import React from "react";
import { useTranslation } from "react-i18next";
import { XRayContainer } from "./xRay.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const XRay: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <XRayContainer>
      <h1>Raio-x</h1>
      <GlobalNextButton onClick={() => navigate('/restrospectiva-2022')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </XRayContainer>
  )
}