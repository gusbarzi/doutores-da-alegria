import React from "react";
import { useTranslation } from "react-i18next";
import {
  FlexLeftSide,
  FlexRightSide,
  GoodReadingContainer,
  GoodReadingText,
  OpeningContainer,
  OpeningContainerDesktop,
  OpeningDescription,
  OpeningText,
  OpeningTitle,
} from "./opening.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const Opening: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <OpeningContainerDesktop>
          <FlexRightSide>
            <OpeningTitle>
              <TextContainer textAlign="left" justifyContent="flex-start" align="flex-end">
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasicS}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={60}
                >
                  o show tem que
                </Typography>
                
              </TextContainer>
              <TextContainer textAlign="left" justifyContent="flex-start" align="flex-start" marginLeft={60}>
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasicS}
                  textColor={DalegriaColorsEnum.Pink}
                  fontSize={60}
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
      ) : (
        <OpeningContainer>
          <OpeningTitle></OpeningTitle>
          <OpeningDescription>
            <OpeningText>{t("home_text")}</OpeningText>
          </OpeningDescription>
          <GoodReadingContainer>
            <GoodReadingText>{t("good_reading")}</GoodReadingText>
          </GoodReadingContainer>
        </OpeningContainer>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/proposito")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
