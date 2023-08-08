import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const InsideOut: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <DalegriaContainer>
      <h1>De dentro para fora</h1>
      <TextContainer textAlign="justify">
        <Typography
          fontFamily={DalegriaFontesEnum.StdBold}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.main_description")}
        </Typography>
      </TextContainer>

      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
      >
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasic}
          textColor={DalegriaColorsEnum.LightBlue}
          fontSize={28}
        >
          {t("inside_out.titles.title_01")}
        </Typography>
      </TextContainer>

      <TextContainer textAlign="left" chooseGap={16}>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.way_being.first_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.way_being.second_stanza")}
        </Typography>
      </TextContainer>

      <TextContainer
        textAlign="left"
        justifyContent="flex-start"
        align="flex-start"
      >
        <Typography
          fontFamily={DalegriaFontesEnum.ManualBasic}
          textColor={DalegriaColorsEnum.LightBlue}
          fontSize={28}
        >
          {t("inside_out.titles.title_02")}
        </Typography>
      </TextContainer>

      <TextContainer textAlign="left" chooseGap={16}>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.first_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.second_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.third_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.fourth_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.fifth_stanza")}
        </Typography>
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={20}
        >
          {t("inside_out.integraty_code.sixth_stanza")}
        </Typography>
      </TextContainer>

      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate(-1)}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/raio-x")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </DalegriaContainer>
  );
};
