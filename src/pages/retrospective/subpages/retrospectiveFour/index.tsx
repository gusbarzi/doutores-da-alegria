import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import OriginalArt2 from "../../../../../public/assets/photos/originalart-2.png";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import BlueHeartPng from "../../../../../public/assets/PNGS/Outros/coração-azul.png";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import {
  BackgroundContainer,
  LeftText,
  NewsContainer,
  RetrospectiveContainerDesktop,
  RightText,
  TextDirection,
} from "../retrospectiveTwo/retrospectiveTwo.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import {
  OriginalArtTwo,
  RetroLeftSide,
  RetroRightSide,
  RetrospectiveHiperContainerDesktop,
} from "./retrospectiveFour.styles";

export const RetrospectiveFour: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const newsFontSize = isDesktop ? 60 : 44;

  const handleNext = () => {
    navigate("/restrospectiva-05")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/restrospectiva-03")
    window.scrollTo(0, 0);
  }

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveHeader />
          <GlobalContainer>
            <NewsContainer>
              <LeftText>
                <Typography
                  fontFamily={DalegriaFontesEnum.SimplesInlineS}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={newsFontSize}
                >
                  {t("retrospective.news")}
                </Typography>
              </LeftText>
              <RightText>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={14}
                >
                  {t("retrospective.get_knew")}
                </Typography>
              </RightText>
            </NewsContainer>
            <RetrospectiveContainerDesktop>
              <BackgroundContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="center"
                  chooseGap={8}
                  marginBottom={12}
                  flexDirection="row"
                >
                  <img src={BlueHeartPng} width={20} height={20} />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={14}
                    textTransform="uppercase"
                  >
                    {t("retrospective.november")}
                  </Typography>
                </TextContainer>
                <OriginalArtTwo src={OriginalArt2} />
                <RetrospectiveHiperContainerDesktop>
                  <RetroLeftSide>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={12}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.LightBlue}
                        fontSize={32}
                      >
                        {t("retrospective.hospital_for_theater")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={24}
                      >
                        {t("retrospective.two_shows")}
                      </Typography>
                    </TextContainer>
                  </RetroLeftSide>
                  <RetroRightSide>
                    <SquareColored
                      type="outlined"
                      borderColor={DalegriaColorsEnum.LightBlue}
                    >
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.ManualBasic}
                          textColor={DalegriaColorsEnum.LightBlue}
                          fontSize={32}
                        >
                          {t("retrospective.one_hundred")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="right"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.LightBlue}
                          fontSize={24}
                        >
                          assistiram ao
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.LightBlue}
                          fontSize={24}
                        >
                          Plateias no Palco
                        </Typography>
                      </TextContainer>
                    </SquareColored>
                  </RetroRightSide>
                </RetrospectiveHiperContainerDesktop>
              </BackgroundContainer>
            </RetrospectiveContainerDesktop>
          </GlobalContainer>
        </>
      ) : (
        <>
          <RetrospectiveHeader />
          <DalegriaContainer choosePadding={16}>
            <NewsContainer>
              <LeftText>
                <Typography
                  fontFamily={DalegriaFontesEnum.SimplesInlineS}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={44}
                >
                  {t("retrospective.news")}
                </Typography>
              </LeftText>
              <RightText>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={14}
                >
                  {t("retrospective.get_knew")}
                </Typography>
              </RightText>
            </NewsContainer>

            <BackgroundContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="center"
                chooseGap={4}
                marginBottom={12}
                flexDirection="row"
              >
                <BlueHeart width={40} height={30} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={14}
                  textTransform="uppercase"
                >
                  {t("retrospective.november")}
                </Typography>
              </TextContainer>
              <img src={OriginalArt2} width={325} height={200} />

              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={22}
                >
                  {t("retrospective.hospital_for_theater")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={16}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={16}
                >
                  {t("retrospective.two_shows")}
                </Typography>
              </TextContainer>
              <SquareColored
                type="outlined"
                borderColor={DalegriaColorsEnum.LightBlue}
              >
                <TextDirection>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      height={24}
                      width={100}
                      fontSize={20}
                    >
                      {t("retrospective.one_hundred")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-end"
                    align="flex-end"
                    chooseWidth={600}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdBold}
                      textColor={DalegriaColorsEnum.LightBlue}
                      height={16}
                      fontSize={14}
                    >
                      {t("retrospective.watch_place")}
                    </Typography>
                  </TextContainer>
                </TextDirection>
              </SquareColored>
            </BackgroundContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={handleBack}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={handleNext}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
