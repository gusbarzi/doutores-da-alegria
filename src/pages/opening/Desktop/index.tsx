import React from "react";
import {
  FlexLeftSide,
  FlexRightSide,
  GoodReadingContainer,
  GoodReadingText,
  OpeningContainerDesktop,
  OpeningDescription,
  OpeningText,
  OpeningTitle,
} from "../opening.styles";
import {
  GlobalContainer,
  TextContainer,
  Typography,
} from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { useTranslation } from "react-i18next";

export const OpeningDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GlobalContainer>
      <OpeningContainerDesktop>
        <FlexRightSide>
          <OpeningTitle>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginLeft={150}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightYellow}
                fontSize={70}
              >
                o show tem que
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginLeft={150}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                fontSize={70}
              >
                continuar!
              </Typography>
            </TextContainer>
          </OpeningTitle>
        </FlexRightSide>

        <FlexLeftSide>
          <OpeningDescription>
            <OpeningText>{t("home_text")}</OpeningText>
          </OpeningDescription>
          <GoodReadingContainer>
            <GoodReadingText>{t("good_reading")}</GoodReadingText>
          </GoodReadingContainer>
        </FlexLeftSide>
      </OpeningContainerDesktop>
    </GlobalContainer>
  );
};
