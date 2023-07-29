import React from "react";
import { useTranslation } from "react-i18next";
import { DoctorsJoyMediaContainer } from "./doctorsJoyMedia.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const DoctorsJoyMedia: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <DoctorsJoyMediaContainer>
      <h1>Doutores da alegria na mídia</h1>
      <GlobalNextButton onClick={() => navigate('/abrace-a-causa')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </DoctorsJoyMediaContainer>
  )
}