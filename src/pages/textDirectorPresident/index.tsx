import React from "react";
import { useTranslation } from "react-i18next";
import { TextDirectorPresidentContainer } from "./textDirectorPresident.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const TextDirectorPresident: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <TextDirectorPresidentContainer>
      <h1>Texto Diretor presidente</h1>
      <GlobalNextButton onClick={() => navigate('/texto-diretoria')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </TextDirectorPresidentContainer>
  )
}