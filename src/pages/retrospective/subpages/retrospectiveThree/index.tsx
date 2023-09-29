import React from "react";
import { useTranslation } from "react-i18next";
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
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import BlueHeartPng from "../../../../../public/assets/PNGS/Outros/coração-azul.png";
import jokerNine from "../../../../../public/assets/jokersPng/mobile-recortes9.png";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import {
  BackgroundContainer,
  LeftText,
  NewsContainer,
  RetrospectiveContainerDesktop,
  RightText,
} from "../retrospectiveTwo/retrospectiveTwo.styles";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import {
  JokerImage,
  RetroLeftSide,
  RetroRightSide,
  RetrospectiveHiperContainerDesktop,
} from "./retrospectiveThree.styles";
import { TextSideDivision } from "../retrospectiveFive/retrospectiveFive.styles";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveThree: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const newsFontSize = isDesktop ? 60 : 44;

  const handleNext = () => {
    navigate("/restrospectiva-04");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/restrospectiva-02");
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
              <BackgroundContainer style={{ marginBottom: "20px" }}>
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
                    {t("retrospective.agoust")}
                  </Typography>
                </TextContainer>
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
                        {t("retrospective.joker_writer")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                      chooseGap={4}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={22}
                      >
                        Os palhaços do elenco do Recife escreveram um livro! A
                        publicação <i>Coletânea Conta Causos – Volume 1</i> foi
                        lançada no dia 11 de agosto numa live especial e nas
                        unidades de saúde atendidas na cidade.
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={22}
                      >
                        {t("retrospective.joker_writer_stanza.stanza_02")}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={22}
                      >
                        {t("retrospective.joker_writer_stanza.stanza_03")}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={22}
                      >
                        {t("retrospective.joker_writer_stanza.stanza_04")}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Gray}
                        fontSize={22}
                      >
                        {t("retrospective.joker_writer_stanza.stanza_05")}
                      </Typography>
                    </TextContainer>
                  </RetroLeftSide>
                  <RetroRightSide>
                    <TextSideDivision
                      style={{
                        display: "flex",
                        width: "600px",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginTop: "-100px",
                        marginRight: "-210px",
                        marginBottom: "-30px",
                      }}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={16}
                        textTransform="uppercase"
                        style={{
                          writingMode: "vertical-lr",
                          marginBottom: "16px",
                          marginRight: "4px",
                          transform: "rotate(180deg)",
                        }}
                      >
                        foto lana pinho
                      </Typography>
                      <JokerImage src={jokerNine} />
                    </TextSideDivision>
                  </RetroRightSide>
                </RetrospectiveHiperContainerDesktop>
                <Link
                  to="https://contacausos.doutoresdaalegria.org.br/"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    zIndex: "9",
                  }}
                >
                  <SquareColored
                    type="primary"
                    backgroundColor={DalegriaColorsEnum.LightBlue}
                    style={{
                      width: "600px",
                      marginTop: "-40px",
                    }}
                  >
                    <TextContainer
                      textAlign="center"
                      justifyContent="center"
                      flexDirection="row"
                      align="center"
                      chooseGap={4}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={20}
                      >
                        LEIA O LIVRO COLETÂNEA CONTA CAUSOS - Volume 01
                      </Typography>
                    </TextContainer>
                  </SquareColored>
                </Link>
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
                  {t("retrospective.agoust")}
                </Typography>
              </TextContainer>
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
                  {t("retrospective.joker_writer")}
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
                  Os palhaços do elenco do Recife escreveram um livro! A
                  publicação <i>Coletânea Conta Causos – Volume 1</i> foi
                  lançada no dia 11 de agosto numa live especial e nas unidades
                  de saúde atendidas na cidade.
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={16}
                >
                  {t("retrospective.joker_writer_stanza.stanza_02")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={16}
                >
                  {t("retrospective.joker_writer_stanza.stanza_03")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={16}
                >
                  {t("retrospective.joker_writer_stanza.stanza_04")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Gray}
                  fontSize={16}
                >
                  {t("retrospective.joker_writer_stanza.stanza_05")}
                </Typography>
              </TextContainer>
              <TextSideDivision
                style={{
                  display: "flex",
                  marginBottom: "-15px",
                }}
              >
                <JokerImage src={jokerNine} />
              </TextSideDivision>
              <Link
                to="https://contacausos.doutoresdaalegria.org.br/"
                style={{ textDecoration: "none", display: "flex", zIndex: "9" }}
              >
                <SquareColored
                  type="primary"
                  backgroundColor={DalegriaColorsEnum.LightBlue}
                  style={{
                    width: "290px",
                    height: "38px",
                    marginBottom: "-30px",
                    marginTop: "10px",
                  }}
                >
                  <TextContainer
                    textAlign="center"
                    justifyContent="flex-start"
                    flexDirection="row"
                    align="center"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdBold}
                      textColor={DalegriaColorsEnum.White}
                      width={330}
                      fontSize={11}
                    >
                      LEIA O LIVRO COLETÂNEA CONTA CAUSOS - Vol. 01
                    </Typography>
                  </TextContainer>
                </SquareColored>
              </Link>
            </BackgroundContainer>
            <div
              style={{
                height: "20px",
              }}
            />
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
