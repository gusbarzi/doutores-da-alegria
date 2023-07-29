import React from "react";
import { useTranslation } from "react-i18next";
import { FilesContainer } from "./files.styles";
import { useNavigate } from "react-router-dom";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const Files: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <FilesContainer>
      <h1>Expediêntes</h1>
      <GlobalNextButton onClick={() => navigate('/')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
    </FilesContainer>
  )
}