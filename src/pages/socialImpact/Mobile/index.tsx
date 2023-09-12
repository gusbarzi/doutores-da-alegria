import React from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../../hooks/useMediaQuery";
import breakpoints from "../../../utils/breakpoints";
import { IList } from "../../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import {
  ArtboardImage,
  BannerContainer,
  DescriptionContainer,
  SocialImpactContainer,
  StanzaText,
  SubTitle,
} from "../socialImpact.styles";
import { CustomList } from "../../../components/CustomList";
import artImage from "../../../../public/assets/PNGS/Outros/Artboard 2.png";


export const SocialImpactMobile: React.FC = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const selectFontsizeList = isDesktop ? 20 : 16;

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("social_impacts_values.item1"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("social_impacts_values.item2"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 3,
      text: t("social_impacts_values.item3"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 4,
      text: t("social_impacts_values.item4"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 5,
      text: t("social_impacts_values.item5"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
  ];

  return (
    <>
      <BannerContainer>
        <ArtboardImage src={artImage} />
      </BannerContainer>
      <SocialImpactContainer>
        <DescriptionContainer>
          <StanzaText>{t("social_impact_text_01.first_stanza")}</StanzaText>
          <StanzaText>{t("social_impact_text_01.second_stanza")}</StanzaText>
        </DescriptionContainer>
        <DescriptionContainer>
          <SubTitle>Qual o impacto do nosso</SubTitle>
          <SubTitle>trabalho nos hospitais?</SubTitle>
        </DescriptionContainer>
        <DescriptionContainer>
          <StanzaText>{t("social_impact_text_02")}</StanzaText>
        </DescriptionContainer>
        <DescriptionContainer>
          <StanzaText>{t("social_impact_text_03")}</StanzaText>
        </DescriptionContainer>

        <CustomList list={valuesItemList} />
      </SocialImpactContainer>
    </>
  );
};
