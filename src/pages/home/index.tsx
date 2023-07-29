import React from "react";
import { useTranslation } from "react-i18next";
import { HomeContainer } from "./home.styles";
import { useNavigate } from "react-router-dom";
import { Notion } from "../../utils/notion";
import { GlobalNextButton } from "../../styles/global.styles";
import { ReactComponent as NextButton } from '../../../public/assets/setinha-direita.svg'

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <HomeContainer>
      <h1>Abertura</h1>
      <GlobalNextButton onClick={() => navigate('/proposito')}>
        <NextButton width={50} height={50}/>
      </GlobalNextButton>
      {/* <Notion /> */}
    </HomeContainer>
  )
}