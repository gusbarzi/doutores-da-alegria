import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundYellowDesktop,
  BannerContainer,
  DescriptionContainer,
  DescriptionTitle,
  PurposeContainer,
  PurposeContainerDesktop,
  ValuesContainer,
} from "./purpose.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import artCut01 from "../../../public/assets/PNGS/artcut-01.png";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { IList } from "../../components/CustomList/customList.types";
import { CustomList } from "../../components/CustomList";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const Purpose: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const selectLosangoColor = isDesktop
    ? DalegriaColorsEnum.White
    : DalegriaColorsEnum.Yellow;
  const selectFontsizeList = isDesktop ? 24 : 16;

  const taskInstList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_text_01"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("purpose_text_02"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
  ];

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_values.art_culture"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("purpose_values.liberty_expression"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 3,
      text: t("purpose_values.transparent"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 4,
      text: t("purpose_values.art_education"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 5,
      text: t("purpose_values.search-simplicity"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 6,
      text: t("purpose_values.happy_state"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 7,
      text: t("purpose_values.search_multscadule"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
  ];

  return (
    <>
      {isDesktop ? (
        <PurposeContainerDesktop>
          <div>
            {/* <img src={artCut01} width={600} height={1200} /> */}
          </div>
          <BackgroundYellowDesktop>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={24}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={80}
              >
                Qual o nosso
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                fontSize={80}
              >
                propósito
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Purple}
                fontSize={80}
              >
                ?
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={24}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Red}
                fontSize={32}
              >
                Tarefa Institucional
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={24}
            >
              <CustomList list={taskInstList} />
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={24}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Red}
                fontSize={32}
              >
                Valores
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={24}
            >
              <CustomList list={valuesItemList} />
            </TextContainer>
          </BackgroundYellowDesktop>
        </PurposeContainerDesktop>
      ) : (
        <PurposeContainer>
          <BannerContainer></BannerContainer>
          <DescriptionContainer>
            <DescriptionTitle>Tarefa Institucional</DescriptionTitle>
            <CustomList list={taskInstList} />
          </DescriptionContainer>
          <ValuesContainer>
            <DescriptionTitle>Valores</DescriptionTitle>
            <CustomList list={valuesItemList} />
          </ValuesContainer>
        </PurposeContainer>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/abertura")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/impacto-social")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
