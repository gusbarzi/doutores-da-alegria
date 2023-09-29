import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundContainer,
  LeftText,
  NewsContainer,
  OriginalArtOne,
  RetroLeftSide,
  RetroRightSide,
  RetrospectiveContainerDesktop,
  RetrospectiveHiperContainerDesktop,
  RightText,
  TextDirection,
} from "./retrospectiveTwo.styles";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import BlueHeartPng from "../../../../../public/assets/PNGS/Outros/coração-azul.png";
import OriginalArt1 from "../../../../../public/assets/photos/originalart-1.png";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";

export const RetrospectiveTwo: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const newsFontSize = isDesktop ? 60 : 44;

  const handleNext = () => {
    navigate("/restrospectiva-03");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/restrospectiva-01");
    window.scrollTo(0, 0);
  };

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
                    {t("retrospective.march_april")}
                  </Typography>
                </TextContainer>
                <OriginalArtOne src={OriginalArt1} />
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
                        fontSize={28}
                      >
                        {t("retrospective.joker_music")}
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
                        fontSize={20}
                      >
                        {t("retrospective.doctors_band")}
                      </Typography>
                    </TextContainer>
                  </RetroLeftSide>
                  <RetroRightSide>
                    <Link to="https://www.instagram.com/p/Cb4wQ5hj6ZQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ textDecoration: 'none'}}>
                      <SquareColored
                        type="outlined"
                        borderColor={DalegriaColorsEnum.LightBlue}
                      >
                        <TextContainer
                          textAlign="left"
                          justifyContent="flex-start"
                          align="flex-start"
                          marginBottom={4}
                        >
                          <Typography
                            fontFamily={DalegriaFontesEnum.StdBold}
                            textColor={DalegriaColorsEnum.Black}
                            fontSize={18}
                          >
                            {t("retrospective.season")}
                          </Typography>
                        </TextContainer>
                        <TextContainer
                          textAlign="left"
                          justifyContent="flex-start"
                          align="flex-start"
                          marginBottom={20}
                        >
                          <Typography
                            fontFamily={DalegriaFontesEnum.StdLight}
                            textColor={DalegriaColorsEnum.Gray}
                            fontSize={14}
                          >
                            {t("retrospective.date_01")}
                          </Typography>
                        </TextContainer>

                        <TextDirection>
                          <TextContainer
                            textAlign="left"
                            justifyContent="flex-start"
                            align="flex-start"
                            chooseWidth={250}
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.LightBlue}
                              fontSize={28}
                            >
                              {t("retrospective.many_people")}
                            </Typography>
                          </TextContainer>
                          <TextContainer
                            textAlign="left"
                            justifyContent="flex-start"
                            align="flex-start"
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.StdBold}
                              textColor={DalegriaColorsEnum.LightBlue}
                              fontSize={16}
                            >
                              {t("retrospective.see_show")}
                            </Typography>
                          </TextContainer>
                        </TextDirection>
                      </SquareColored>
                    </Link>
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
                chooseGap={8}
                marginBottom={12}
                flexDirection="row"
              >
                <BlueHeart width={70} height={50} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={14}
                  textTransform="uppercase"
                >
                  {t("retrospective.march_april")}
                </Typography>
              </TextContainer>
              <img src={OriginalArt1} width="100%" height="100%" />
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={24}
                >
                  {t("retrospective.joker_music")}
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
                  {t("retrospective.doctors_band")}
                </Typography>
              </TextContainer>
              <SquareColored
                type="outlined"
                borderColor={DalegriaColorsEnum.LightBlue}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={13}
                  >
                    {t("retrospective.season")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={12}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    {t("retrospective.date_01")}
                  </Typography>
                </TextContainer>

                <TextDirection>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginRight={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      height={24}
                      width={130}
                      fontSize={24}
                    >
                      {t("retrospective.many_people")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-end"
                    align="flex-end"
                    chooseWidth={400}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdBold}
                      textColor={DalegriaColorsEnum.LightBlue}
                      height={14}
                      fontSize={14}
                      style={{ width: "160px" }}
                    >
                      {t("retrospective.see_show")}
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
