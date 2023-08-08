import React from "react";
import { useTranslation } from "react-i18next";
import {
  BannerContainer,
  DescriptionContainer,
  DescriptionTitle,
  JokersImageContainer,
  PurposeContainer,
  PurposeLightBlueTitle,
  PurposePinkTitle,
  PurposePurpleTitle,
  ValuesContainer,
} from "./purpose.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import jokerImage from "../../../public/assets/Links/mobile-recortes2.png";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { IList } from "../../components/CustomList/customList.types";
import { CustomList } from "../../components/CustomList";

export const Purpose: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const taskInstList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_text_01"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("purpose_text_02"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_values.art_culture"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("purpose_values.liberty_expression"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("purpose_values.transparent"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("purpose_values.art_education"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("purpose_values.search-simplicity"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("purpose_values.happy_state"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 7,
      text: t("purpose_values.search_multscadule"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  return (
    <PurposeContainer>
      <BannerContainer>
        <PurposeLightBlueTitle>Qual</PurposeLightBlueTitle>
        <PurposeLightBlueTitle>o nosso</PurposeLightBlueTitle>
        <PurposePinkTitle>propósito</PurposePinkTitle>
        <PurposePurpleTitle>?</PurposePurpleTitle>
      </BannerContainer>
      <JokersImageContainer>
        <img src={jokerImage} width={350} height={800} />
      </JokersImageContainer>
      <DescriptionContainer>
        <DescriptionTitle>Tarefa Institucional</DescriptionTitle>
        <CustomList list={taskInstList} />
      </DescriptionContainer>
      <ValuesContainer>
        <DescriptionTitle>Valores</DescriptionTitle>
        <CustomList list={valuesItemList} />
      </ValuesContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/impacto-social")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </PurposeContainer>
  );
};
