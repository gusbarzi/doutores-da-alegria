import React from "react";
import { useTranslation } from "react-i18next";
import {
  DescriptionContainer,
  StanzaText,
  SocialImpactContainer,
  SubTitle,
  ItemsListContainer,
  BannerContainer,
} from "./socialImpact.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { CustomList } from "../../components/CustomList";
import { IList } from "../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";

export const SocialImpact: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("social_impacts_values.item1"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("social_impacts_values.item2"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("social_impacts_values.item3"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("social_impacts_values.item4"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("social_impacts_values.item5"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
  ];

  return (
    <>
      <BannerContainer>
        <TextContainer
          align="center"
          textAlign="center"
          justifyContent="flex-end"
          chooseHeight={280}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.LightBlue}
            lineHeight={1}
            fontSize={68}
          >
            impacto
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.Pink}
            lineHeight={1}
            fontSize={68}
          >
            Social
          </Typography>
        </TextContainer>
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

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate('/proposito')}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton
            onClick={() => navigate("/texto-diretor-presidente")}
          >
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </SocialImpactContainer>
    </>
  );
};
