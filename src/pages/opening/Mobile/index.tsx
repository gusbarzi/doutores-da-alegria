import React from "react";
import {
  GoodReadingContainer,
  GoodReadingText,
  OpeningContainer,
  OpeningDescription,
  OpeningText,
  OpeningTitle,
} from "../opening.styles";
import { TextContainer, Typography } from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { useTranslation } from "react-i18next";

export const OpeningMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <OpeningContainer>
      <OpeningTitle>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.LightYellow}
            fontSize={44}
          >
            o show tem que
          </Typography>
        </TextContainer>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.Pink}
            fontSize={48}
          >
            continuar!
          </Typography>
        </TextContainer>
      </OpeningTitle>
      <OpeningDescription>
        <OpeningText>{t("home_text")}</OpeningText>
      </OpeningDescription>
      <GoodReadingContainer>
        <GoodReadingText>{t("good_reading")}</GoodReadingText>
      </GoodReadingContainer>
    </OpeningContainer>
  );
};
