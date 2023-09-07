import React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountabilityContainer,
  AccountabilityContainerDesktop,
  BackgroundBlue,
  BackgroundPink,
  BackgroundYellow,
  BarContainerHorizon,
  BarHorizon,
  BarImageHorizon,
  BarWrapperHorizon,
  GridContainer,
  NumberLabelHorizon,
  RectangleBlue,
  RectangleContainer,
  RectanglePink,
  SquareContainer,
} from "../../../accountability.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../../public/assets/setinha-direita.svg";
import { AccountabilityHeader } from "../../AccountabilityHeader";
import { DalegriaFontesEnum } from "../../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../../utils/colors";
import { PercentSquare } from "../../../../../components/PercentSquare";
import useMediaQuery from "../../../../../hooks/useMediaQuery";
import breakpoints from "../../../../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../../../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import graficOne from "../../../../../../public/assets/PNGS/Logos e grafismos/35.png";
import graficTwo from "../../../../../../public/assets/PNGS/Logos e grafismos/5.png";
import graficTree from "../../../../../../public/assets/PNGS/Logos e grafismos/3.png";
import graficFour from "../../../../../../public/assets/PNGS/Logos e grafismos/1.png";
import graficFive from "../../../../../../public/assets/PNGS/Logos e grafismos/030.png";

import grafic1 from "../../../../../../public/assets/PNGS/Logos e grafismos/30.png";
import grafic2 from "../../../../../../public/assets/PNGS/Logos e grafismos/7.png";
import grafic3 from "../../../../../../public/assets/PNGS/Logos e grafismos/4.png";
import grafic4 from "../../../../../../public/assets/PNGS/Logos e grafismos/3-1.png";
import grafic5 from "../../../../../../public/assets/PNGS/Logos e grafismos/2-5.png";
import grafic6 from "../../../../../../public/assets/PNGS/Logos e grafismos/2.png";
import grafic7 from "../../../../../../public/assets/PNGS/Logos e grafismos/1-4.png";
import grafic8 from "../../../../../../public/assets/PNGS/Logos e grafismos/1--4.png";
import grafic9 from "../../../../../../public/assets/PNGS/Logos e grafismos/1---4.png";

import { PercentSquareDesktop } from "../../../../../components/PercentSquareDesktop";

export const AccountabilityTree: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const data = [
    {
      size: 50,
      number: 35,
      image: graficOne,
      backgroundColor: DalegriaColorsEnum.Yellow,
      textColor: DalegriaColorsEnum.Black,
      width: "47%",
    },
    {
      size: 50,
      number: 5.8,
      image: graficTwo,
      backgroundColor: DalegriaColorsEnum.Purple,
      textColor: DalegriaColorsEnum.Black,
      width: "8%",
    },
    {
      size: 50,
      number: 3.6,
      image: graficTree,
      backgroundColor: DalegriaColorsEnum.Green,
      textColor: DalegriaColorsEnum.Black,
      width: "5%",
    },
    {
      size: 50,
      number: 1.3,
      image: graficFour,
      backgroundColor: DalegriaColorsEnum.Pink,
      textColor: DalegriaColorsEnum.White,
      width: "2%",
    },
    {
      size: 50,
      number: 0.3,
      image: graficFive,
      backgroundColor: DalegriaColorsEnum.DarkBlue,
      textColor: DalegriaColorsEnum.White,
      width: "1%",
    },
  ];

  const data_two = [
    {
      size: 50,
      number: 30.4,
      image: grafic1,
      backgroundColor: DalegriaColorsEnum.LightBlue,
      textColor: DalegriaColorsEnum.Black,
      width: "38%",
    },
    {
      size: 50,
      number: 7.6,
      image: grafic2,
      backgroundColor: DalegriaColorsEnum.Red,
      textColor: DalegriaColorsEnum.White,
      width: "10%",
    },
    {
      size: 50,
      number: 4.1,
      image: grafic3,
      backgroundColor: DalegriaColorsEnum.Green,
      textColor: DalegriaColorsEnum.White,
      width: "5%",
    },
    {
      size: 50,
      number: 3.1,
      image: grafic4,
      backgroundColor: DalegriaColorsEnum.Purple,
      textColor: DalegriaColorsEnum.White,
      width: "4%",
    },
    {
      size: 50,
      number: 2.5,
      image: grafic5,
      backgroundColor: DalegriaColorsEnum.Yellow,
      textColor: DalegriaColorsEnum.Black,
      width: "3%",
    },
    {
      size: 50,
      number: 2,
      image: grafic6,
      backgroundColor: DalegriaColorsEnum.Salmon,
      textColor: DalegriaColorsEnum.White,
      width: "3%",
    },
    {
      size: 50,
      number: 1.4,
      image: grafic7,
      backgroundColor: DalegriaColorsEnum.Gray,
      textColor: DalegriaColorsEnum.White,
      width: "2%",
    },
    {
      size: 50,
      number: 1.4,
      image: grafic8,
      backgroundColor: DalegriaColorsEnum.Gray,
      textColor: DalegriaColorsEnum.Black,
      width: "2%",
    },
    {
      size: 50,
      number: 1.4,
      image: grafic9,
      backgroundColor: DalegriaColorsEnum.Black,
      textColor: DalegriaColorsEnum.White,
      width: "2%",
    },
  ];

  return (
    <>
      {isDesktop ? (
        <AccountabilityContainerDesktop style={{ padding: "16px 60px" }}>
          <TextContainer
            textAlign="center"
            align="center"
            justifyContent="center"
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasicS}
              textColor={DalegriaColorsEnum.LightBlue}
              fontSize={100}
            >
              Prestação de contas
            </Typography>
          </TextContainer>
          <TextDivision style={{ display: "flex", width: "800px" }}>
            <TextSideDivision>
              <TextContainer
                textAlign="left"
                align="center"
                justifyContent="center"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Pink}
                  fontSize={16}
                >
                  Nossas contas são auditadas anualmente por auditorias
                  independentes. Em 2022, a Singolare Consultoria e Auditoria
                  realizou este trabalho.
                </Typography>
              </TextContainer>
            </TextSideDivision>
            <TextSideDivision>
              <TextContainer
                textAlign="left"
                align="center"
                justifyContent="center"
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={12}
                >
                  * Em 2016, o evento Gala Doutores da Alegria mobilizou
                  empresas e pessoas, gerando recursos pela venda de convites,
                  cotas de patrocínio e leilão. Os recursos foram utilizados na
                  produção do próprio evento e seu superávit foi integralmente
                  aplicado nos projetos da associação.
                </Typography>
              </TextContainer>
            </TextSideDivision>
          </TextDivision>

          <TextDivision>
            <TextSideDivision style={{ width: "1000px" }}>
              <SquareContainer>
                <GridContainer>
                  <BackgroundYellow>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.LightBlue}
                        lineHeight={1}
                        fontSize={28}
                      >
                        {t("retrospective.accountability.title_03")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                      chooseWidth={100}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.LightBlue}
                        lineHeight={1.25}
                        fontSize={16}
                      >
                        {t("retrospective.accountability.subtitle_03")}
                      </Typography>
                    </TextContainer>
                  </BackgroundYellow>
                  <BackgroundBlue>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={28}
                      >
                        {t("retrospective.accountability.title_04")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquare
                        chooseWidth={34}
                        chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        text="35%"
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={14}
                      >
                        {t("retrospective.accountability.projects.item_01")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquare
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.Purple}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        text="5,80%"
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={14}
                      >
                        {t("retrospective.accountability.projects.item_02")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquare
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.Green}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        text="3,60%"
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={14}
                      >
                        {t("retrospective.accountability.projects.item_03")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquare
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.Pink}
                        chooseTextColor={DalegriaColorsEnum.White}
                        text="1,30%"
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={14}
                      >
                        {t("retrospective.accountability.projects.item_04")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={48}
                      chooseWidth={100}
                    >
                      <PercentSquare
                        chooseWidth={42}
                        chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                        chooseTextColor={DalegriaColorsEnum.White}
                        text="0,30%"
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        lineHeight={1}
                        fontSize={14}
                      >
                        {t("retrospective.accountability.projects.item_05")}
                      </Typography>
                    </TextContainer>
                  </BackgroundBlue>
                </GridContainer>
                <BackgroundPink>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={24}
                    >
                      {t("retrospective.accountability.title_05")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={110}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Green}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="4,10%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_01")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={34}
                      chooseBackgroundColor={DalegriaColorsEnum.Purple}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="3,1%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_02")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      text="2,50%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_03")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={24}
                      chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="2%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_04")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="1,40%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_05")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="1,40%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_06")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Black}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="1,40%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_07")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={48}
                      chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      text="30,40%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_08")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={27}
                    chooseWidth={130}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Red}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="7,60%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.operational.item_09")}
                    </Typography>
                  </TextContainer>
                </BackgroundPink>
              </SquareContainer>
            </TextSideDivision>
            <TextSideDivision
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <TextDivision chooseGap={16}>
                <TextSideDivision style={{ width: "10px" }}>
                  <RectangleBlue />
                </TextSideDivision>
                <TextSideDivision>
                  <BarContainerHorizon style={{ gap: "16px" }}>
                    {data.map((bar, index) => (
                      <BarWrapperHorizon key={index}>
                        <BarHorizon style={{ width: bar.width }}>
                          <BarImageHorizon
                            src={bar.image}
                            alt={`Bar for ${bar.size}`}
                          />
                          <NumberLabelHorizon>
                            <PercentSquareDesktop
                              chooseWidth={bar.size}
                              chooseBackgroundColor={bar.backgroundColor}
                              chooseTextColor={bar.textColor}
                              number={bar.number}
                            />
                          </NumberLabelHorizon>
                        </BarHorizon>
                      </BarWrapperHorizon>
                    ))}
                  </BarContainerHorizon>
                </TextSideDivision>
              </TextDivision>

              <TextDivision chooseGap={16}>
                <TextSideDivision style={{ width: "10px" }}>
                  <RectanglePink />
                </TextSideDivision>
                <TextSideDivision>
                  <BarContainerHorizon>
                    {data_two.map((bar, index) => (
                      <BarWrapperHorizon key={index}>
                        <BarHorizon style={{ width: bar.width }}>
                          <BarImageHorizon
                            src={bar.image}
                            alt={`Bar for ${bar.size}`}
                          />
                          <NumberLabelHorizon>
                            <PercentSquareDesktop
                              chooseWidth={bar.size}
                              chooseBackgroundColor={bar.backgroundColor}
                              chooseTextColor={bar.textColor}
                              number={bar.number}
                            />
                          </NumberLabelHorizon>
                        </BarHorizon>
                      </BarWrapperHorizon>
                    ))}
                  </BarContainerHorizon>
                </TextSideDivision>
              </TextDivision>
            </TextSideDivision>
          </TextDivision>
        </AccountabilityContainerDesktop>
      ) : (
        <>
          <AccountabilityHeader />
          <AccountabilityContainer>
            <SquareContainer>
              <GridContainer>
                <BackgroundYellow>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      lineHeight={1}
                      fontSize={28}
                    >
                      {t("retrospective.accountability.title_03")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                    chooseWidth={100}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.LightBlue}
                      lineHeight={1.25}
                      fontSize={16}
                    >
                      {t("retrospective.accountability.subtitle_03")}
                    </Typography>
                  </TextContainer>
                </BackgroundYellow>
                <BackgroundBlue>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={28}
                    >
                      {t("retrospective.accountability.title_04")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquare
                      chooseWidth={34}
                      chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      text="35%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_01")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Purple}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      text="5,80%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_02")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Green}
                      chooseTextColor={DalegriaColorsEnum.Black}
                      text="3,60%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_03")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.Pink}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="1,30%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_04")}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={48}
                    chooseWidth={100}
                  >
                    <PercentSquare
                      chooseWidth={42}
                      chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                      chooseTextColor={DalegriaColorsEnum.White}
                      text="0,30%"
                    />
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      lineHeight={1}
                      fontSize={14}
                    >
                      {t("retrospective.accountability.projects.item_05")}
                    </Typography>
                  </TextContainer>
                </BackgroundBlue>
              </GridContainer>
              <BackgroundPink>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={24}
                  >
                    {t("retrospective.accountability.title_05")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={110}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.Green}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="4,10%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_01")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={34}
                    chooseBackgroundColor={DalegriaColorsEnum.Purple}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="3,1%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_02")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                    chooseTextColor={DalegriaColorsEnum.Black}
                    text="2,50%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_03")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={24}
                    chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="2%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_04")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="1,40%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_05")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="1,40%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_06")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.Black}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="1,40%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_07")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={48}
                    chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                    chooseTextColor={DalegriaColorsEnum.Black}
                    text="30,40%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_08")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={27}
                  chooseWidth={130}
                >
                  <PercentSquare
                    chooseWidth={42}
                    chooseBackgroundColor={DalegriaColorsEnum.Red}
                    chooseTextColor={DalegriaColorsEnum.White}
                    text="7,60%"
                  />
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={14}
                  >
                    {t("retrospective.accountability.operational.item_09")}
                  </Typography>
                </TextContainer>
              </BackgroundPink>
            </SquareContainer>

            <TextDivision>
              <TextSideDivision>
                <RectangleBlue />
              </TextSideDivision>
              <TextSideDivision></TextSideDivision>
            </TextDivision>

            <RectangleContainer>
              <RectanglePink />
            </RectangleContainer>
          </AccountabilityContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/prestacao-de-contas-02")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/equipe")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
