import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundPurple,
  BackgroundYellow,
  EmbranceCauseContainer,
  EmbranceCauseContainerDesktop,
  ImagemDiv,
  JokerImage,
  JokerImageTwo,
} from "./embranceCause.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";
import { CustomList } from "../../components/CustomList";
import { IList } from "../../components/CustomList/customList.types";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import { FilteredList } from "../../components/FilteredList";
import { data } from "../../components/FilteredList/constants";
import jokerEleven from "../../../public/assets/jokersPng/mobile-recortes11.png";

export const EmbranceCause: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const pathNext = isDesktop
    ? "/prestacao-de-contas-02"
    : "/prestacao-de-contas-01";

  const hospitalsList: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.embrance_cause.embrance_cause_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: isDesktop ? 18 : 16,
    },
    {
      itemId: 2,
      text: t("retrospective.embrance_cause.embrance_cause_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: isDesktop ? 18 : 16,
    },
    {
      itemId: 3,
      text: t("retrospective.embrance_cause.embrance_cause_list.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: isDesktop ? 18 : 16,
    },
    {
      itemId: 4,
      text: t("retrospective.embrance_cause.embrance_cause_list.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: isDesktop ? 18 : 16,
    },
    {
      itemId: 5,
      text: t("retrospective.embrance_cause.embrance_cause_list.fiveth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: isDesktop ? 18 : 16,
    },
  ];

  const hospitalsList2: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.first"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
    {
      itemId: 2,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.second"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
    {
      itemId: 3,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.third"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
    {
      itemId: 4,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.fourth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
    {
      itemId: 5,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.fiveth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
    {
      itemId: 6,
      text: t("retrospective.embrance_cause.embrance_cause_list_02.sixth"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.White,
      fontSize: isDesktop ? 20 : 16,
    },
  ];

  return (
    <>
      {isDesktop ? (
        <GlobalContainer>
          <EmbranceCauseContainerDesktop>
            <TextDivision>
              <TextSideDivision style={{ width: "650px" }}>
                <TextContainer
                  align="flex-start"
                  justifyContent="flex-start"
                  marginBottom={40}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Purple}
                    lineHeight={1}
                    fontSize={80}
                  >
                    Abrace
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Purple}
                    lineHeight={1}
                    fontSize={80}
                  >
                    a causa
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  align="flex-start"
                  justifyContent="flex-start"
                  chooseGap={32}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.25}
                    fontSize={16}
                  >
                    Doutores da Alegria conta com a doação de empresas e de
                    pessoas para manter seus projetos nas áreas de saúde,
                    cultura e assistência social. Nossas ações são destinadas a
                    públicos em situação de vulnerabilidade e risco social.
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.25}
                    fontSize={16}
                  >
                    Como uma organização da sociedade civil sem fins lucrativos,
                    atuamos com transparência na prestação de contas, cumprindo
                    com a legislação brasileira e priorizando o bom uso dos
                    recursos públicos e privados. Recebemos auditoria externa de
                    todas as contas anualmente.
                  </Typography>
                </TextContainer>
                <div style={{ height: "25px" }} />
              </TextSideDivision>
              <TextSideDivision
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "-50px",
                }}
              >
                <JokerImage src={jokerEleven} />
              </TextSideDivision>
            </TextDivision>

            <TextDivision style={{ display: "flex", gap: 0 }}>
              <TextSideDivision>
                <BackgroundYellow>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    chooseGap={12}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Pink}
                      lineHeight={1}
                      fontSize={44}
                    >
                      {t("retrospective.embrance_cause.title_02")}
                    </Typography>
                    <CustomList list={hospitalsList} />
                  </TextContainer>
                </BackgroundYellow>
              </TextSideDivision>
              <TextSideDivision>
                <BackgroundPurple>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    chooseGap={12}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Yellow}
                      lineHeight={1}
                      fontSize={40}
                    >
                      {t("retrospective.embrance_cause.title_03")}
                    </Typography>
                    <CustomList list={hospitalsList2} />
                  </TextContainer>
                </BackgroundPurple>
              </TextSideDivision>
            </TextDivision>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginTop={16}
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                lineHeight={1}
                fontSize={20}
              >
                Entre em contato para informações sobre doações e parcerias:{" "}
                <span style={{ color: DalegriaColorsEnum.Purple }}>
                  empresas@doutoresdaalegria.org.br
                </span>
              </Typography>
            </TextContainer>

            <FilteredList data={data} />
          </EmbranceCauseContainerDesktop>
        </GlobalContainer>
      ) : (
        <>
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
            <ImagemDiv>
              <JokerImageTwo src={jokerEleven} />
            </ImagemDiv>
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
            <BackgroundPurple>
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
            </BackgroundPurple>

            <FilteredList data={data} />
          </EmbranceCauseContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton
          onClick={() => navigate("/doutores-da-alegria-na-midia")}
        >
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate(pathNext)}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
