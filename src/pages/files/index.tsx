import React from "react";
import { useTranslation } from "react-i18next";
import {
  FilesContainer,
  FilesContainerDesktop,
  FilesContentDesktop,
  GridContainer,
  GridItemOne,
  GridItemTwo,
  HeartRed,
  JokerImage,
} from "./files.styles";
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
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import jokerFourteen from "../../../public/assets/jokersPng/mobile-recortes14.png";
import heart from "../../../public/assets/PNGS/Outros/coração-vermelho-e-azul.png";

export const Files: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/fim");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/parceiros");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isDesktop ? (
        <GlobalContainer>
          <FilesContainerDesktop>
            <FilesContentDesktop>
              <TextDivision>
                <TextSideDivision>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasicS}
                      textColor={DalegriaColorsEnum.Pink}
                      lineHeight={1}
                      fontSize={80}
                    >
                      {t("retrospective.file.titles.one")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    justifyContent="flex-end"
                    align="flex-end"
                    flexDirection="row"
                    marginBottom={16}
                    chooseGap={40}
                    style={{
                      marginBottom: "-80px",
                    }}
                  >
                    <HeartRed src={heart} />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={16}
                      textTransform="uppercase"
                      style={{
                        writingMode: "vertical-lr",
                        marginBottom: "80px",
                        marginRight: "-32px",
                        transform: "rotate(180deg)",
                      }}
                    >
                      foto lana pinho
                    </Typography>
                    <JokerImage src={jokerFourteen} />
                  </TextContainer>
                </TextSideDivision>
                <TextSideDivision>
                  <GridContainer>
                    <GridItemOne>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.two")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          Cristina Cardoso
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.tree")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          pollyanna diniz
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          {t("retrospective.file.titles.four")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          pat cividanes
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          {t("retrospective.file.titles.five")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          gustavo barzi
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.six")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          ligia souza
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.seven")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          Elyon Gráfica
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.eight")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                          lineHeight={1.25}
                          style={{ width: "240px" }}
                        >
                          ARILSON LOPES, CAROLINA KINOSHITA, DANILO LIMA, DAIANE
                          CARINA, EDILENE SILVA, LUIS VIEIRA DA ROCHA, MARCELLA
                          CASTILHO, NICE VASCONCELOS, ODETE PEIXOTO, PIETRA
                          FERRÃO, RONALDO AGUIAR, SILVIA CONTAR E SIMONE
                          PIMENTEL
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          {t("retrospective.file.titles.nine")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={24}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          {t("retrospective.file.titles.thirteen")}
                        </Typography>
                      </TextContainer>
                    </GridItemOne>
                    <GridItemTwo>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          {t("retrospective.file.titles.ten")}
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
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          Rua Alves Guimarães, 73
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          Pinheiros – 05410-000
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          São Paulo – SP
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          (11) 3061-5523
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          {t("retrospective.file.titles.eleven")}
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
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          Rua Dona Maria César, 170
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          Edifício Luciano Costa
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          Sala 201B – 2o. Andar
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          Bairro do Recife – 50030-160
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          Recife – PE
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          (81) 3466-2373 | 3463-0866
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          99112-4676
                        </Typography>
                      </TextContainer>

                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.Black}
                          textTransform="uppercase"
                          fontSize={14}
                        >
                          {t("retrospective.file.titles.twelve")}
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
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          style={{ width: "300px" }}
                        >
                          Rua Sebastião de Lacerda, 47
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          Laranjeiras – 22240-110
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          Rio de Janeiro – RJ
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                        >
                          (21) 2297-4176
                        </Typography>
                      </TextContainer>
                    </GridItemTwo>
                  </GridContainer>
                </TextSideDivision>
              </TextDivision>
            </FilesContentDesktop>
          </FilesContainerDesktop>
        </GlobalContainer>
      ) : (
        <>
          <FilesContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                lineHeight={1}
                fontSize={48}
              >
                {t("retrospective.file.titles.one")}
              </Typography>
            </TextContainer>

            <GridContainer>
              <GridItemOne>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.two")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    Cristina Cardoso
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.tree")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    pollyanna diniz
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={13}
                  >
                    {t("retrospective.file.titles.four")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    pat cividanes
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.five")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    gustavo barzi
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.six")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    ligia souza
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.seven")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    Elyon Gráfica
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.eight")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    ARILSON LOPES, CAROLINA KINOSHITA, DANILO LIMA, DAIANE
                    CARINA, EDILENE SILVA, LUIS VIEIRA DA ROCHA, MARCELLA
                    CASTILHO, NICE VASCONCELOS, ODETE PEIXOTO, PIETRA FERRÃO,
                    RONALDO AGUIAR, SILVIA CONTAR E SIMONE PIMENTEL
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    {t("retrospective.file.titles.nine")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    {t("retrospective.file.titles.thirteen")}
                  </Typography>
                </TextContainer>
              </GridItemOne>
              <GridItemTwo>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    {t("retrospective.file.titles.ten")}
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
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Rua Alves Guimarães, 73
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Pinheiros – 05410-000
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    São Paulo – SP
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    (11) 3061-5523
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    {t("retrospective.file.titles.eleven")}
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
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Rua Dona Maria César, 170
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Edifício Luciano Costa
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Sala 201B – 2o. Andar
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Bairro do Recife – 50030-140
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Recife – PE
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    (81) 3466-2373 | 3463-0866
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    99112-4676
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    {t("retrospective.file.titles.twelve")}
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
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Rua Sebastião de Lacerda, 47
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Laranjeiras – 22240-110
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Rio de Janeiro – RJ
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    (21) 2297-4176
                  </Typography>
                </TextContainer>
              </GridItemTwo>
            </GridContainer>
          </FilesContainer>
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
