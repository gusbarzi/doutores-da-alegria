import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundPink,
  BackgroundYellow,
  EmbranceCauseContainer,
} from "./embranceCause.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { CustomList } from "../../components/CustomList";
import { IList } from "../../components/CustomList/customList.types";

export const EmbranceCause: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const hospitalsList: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.embrance_cause.embrance_cause_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("retrospective.embrance_cause.embrance_cause_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("retrospective.embrance_cause.embrance_cause_list.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("retrospective.embrance_cause.embrance_cause_list.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("retrospective.embrance_cause.embrance_cause_list.fiveth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: 16,
    },
  ];

  const hospitalsList2: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.first"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.second"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.third"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.fourth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.fiveth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.sixth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
  ];

  return (
    <EmbranceCauseContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={12}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasicS}
          textColor={DalegriaColorsEnum.Purple}
          fontSize={48}
        >
          {t("retrospective.embrance_cause.title_01")}
        </Typography>
      </TextContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={12}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.StdBold}
          textColor={DalegriaColorsEnum.Black}
          fontSize={16}
        >
          {t("retrospective.embrance_cause.text_02")}
        </Typography>
      </TextContainer>
      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
        marginBottom={12}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.StdBold}
          textColor={DalegriaColorsEnum.Black}
          fontSize={16}
        >
          {t("retrospective.embrance_cause.text_03")}
        </Typography>
      </TextContainer>
      <BackgroundYellow>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginBottom={12}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.Pink}
            lineHeight={1}
            fontSize={32}
          >
            {t("retrospective.embrance_cause.title_02")}
          </Typography>
          <CustomList list={hospitalsList} />
        </TextContainer>
      </BackgroundYellow>
      <BackgroundPink>
      <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginBottom={12}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasic}
            textColor={DalegriaColorsEnum.Yellow}
            lineHeight={1}
            fontSize={32}
          >
            {t("retrospective.embrance_cause.title_03")}
          </Typography>
          <CustomList list={hospitalsList2} />
        </TextContainer>
      </BackgroundPink>

      <ButtonContainer>
        <GlobalBackButton
          onClick={() => navigate("/doutores-da-alegria-na-midia")}
        >
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/prestacao-de-contas-01")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </EmbranceCauseContainer>
  );
};
