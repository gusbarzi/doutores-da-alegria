import React from "react";
import { useTranslation } from "react-i18next";
import { HomeContainer, ManualBasic, ManualBasicS, ManualInline, ManualSombra, SimplesBasic, SimplesCirco, SimplesInlineS, StdBlack, StdBold, StdLight, StdThin } from "./notion.styles";

export const Notion: React.FC = () => {
  const { t } = useTranslation();

  /* const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
        .catch(error => console.error('Failed to change language: ', error));
  }; */


  return (
    <HomeContainer>
      <ManualBasic>{t('hello')}</ManualBasic>
      <ManualBasicS>{t('hello')}</ManualBasicS>
      <ManualInline>{t('hello')}</ManualInline>
      <ManualSombra>{t('hello')}</ManualSombra>
      <SimplesBasic>{t('hello')}</SimplesBasic>
      <SimplesCirco>{t('hello')}</SimplesCirco>
      <SimplesInlineS>{t('hello')}</SimplesInlineS>
      <StdBlack>{t('hello')}</StdBlack>
      <StdBold>{t('hello')}</StdBold>
      <StdLight>{t('hello')}</StdLight>
      <StdThin>{t('hello')}</StdThin>
    </HomeContainer>
  )
}