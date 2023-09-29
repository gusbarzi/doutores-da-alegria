import React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountabilityContainerDesktop,
  AccountabilityContainerTwo,
  BackgroundPink,
  Bar,
  BarContainer,
  BarImage,
  Division,
  InformationsContainer,
  JokerImage,
  Left,
  LeftSide,
  NumbersContainer,
  PinkBox,
  PinkBoxContainer,
  PinkTwo,
  Right,
  RightSide,
  YearLabel,
} from "../../../accountability.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../../public/assets/setinha-direita.svg";
import { AccountabilityHeader } from "../../AccountabilityHeader";
import { DalegriaFontesEnum } from "../../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../../utils/colors";
import useMediaQuery from "../../../../../hooks/useMediaQuery";
import breakpoints from "../../../../../utils/breakpoints";
import {
  TextDivision,
  TextSideDivision,
} from "../../../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";

import graficOne from "../../../../../../public/assets/PNGS/Logos e grafismos/2015.png";
import graficTwo from "../../../../../../public/assets/PNGS/Logos e grafismos/2016.png";
import graficTree from "../../../../../../public/assets/PNGS/Logos e grafismos/2017.png";
import graficFour from "../../../../../../public/assets/PNGS/Logos e grafismos/2018.png";
import graficFive from "../../../../../../public/assets/PNGS/Logos e grafismos/2019.png";
import graficSix from "../../../../../../public/assets/PNGS/Logos e grafismos/2020.png";
import graficSeven from "../../../../../../public/assets/PNGS/Logos e grafismos/2021.png";
import graficEight from "../../../../../../public/assets/PNGS/Logos e grafismos/2022.png";
import CountUp from "react-countup";
import { PercentSquareDesktop } from "../../../../../components/PercentSquareDesktop";
import joker from "../../../../../../public/assets/jokersPng/mobile-recortes18.png";

export const AccountabilityTwo: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const pathNext = isDesktop ? "/abrace-a-causa" : "/prestacao-de-contas-01";

  const data = [
    {
      year: "2015",
      number: 5839,
      image: graficOne,
      backgroundColor: DalegriaColorsEnum.Yellow,
      textColor: DalegriaColorsEnum.Black,
    },
    {
      year: "2016",
      number: 8855,
      image: graficTwo,
      backgroundColor: DalegriaColorsEnum.LightBlue,
      textColor: DalegriaColorsEnum.White,
    },
    {
      year: "2017",
      number: 7681,
      image: graficTree,
      backgroundColor: DalegriaColorsEnum.Green,
      textColor: DalegriaColorsEnum.Black,
    },
    {
      year: "2018",
      number: 8894,
      image: graficFour,
      backgroundColor: DalegriaColorsEnum.Purple,
      textColor: DalegriaColorsEnum.White,
    },
    {
      year: "2019",
      number: 8483,
      image: graficFive,
      backgroundColor: DalegriaColorsEnum.Yellow,
      textColor: DalegriaColorsEnum.Black,
    },
    {
      year: "2020",
      number: 7964,
      image: graficSix,
      backgroundColor: DalegriaColorsEnum.LightBlue,
      textColor: DalegriaColorsEnum.White,
    },
    {
      year: "2021",
      number: 11259,
      image: graficSeven,
      backgroundColor: DalegriaColorsEnum.Green,
      textColor: DalegriaColorsEnum.Black,
    },
    {
      year: "2022",
      number: 9613,
      image: graficEight,
      backgroundColor: DalegriaColorsEnum.Purple,
      textColor: DalegriaColorsEnum.White,
    },
  ];

  const handleNext = () => {
    navigate("/prestacao-de-contas-03");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate(pathNext);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isDesktop ? (
        <GlobalContainer>
          <AccountabilityContainerDesktop>
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
                    fontSize={20}
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
                    fontSize={14}
                  >
                    * Em 2016, o evento Gala Doutores da Alegria mobilizou
                    empresas e pessoas, gerando recursos pela venda de convites,
                    cotas de patrocínio e leilão. Os recursos foram utilizados
                    na produção do próprio evento e seu superávit foi
                    integralmente aplicado nos projetos da associação.
                  </Typography>
                </TextContainer>
              </TextSideDivision>
            </TextDivision>

            <PinkBoxContainer>
              <PinkBox>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                  marginLeft={32}
                  marginTop={32}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    lineHeight={1}
                    fontSize={52}
                  >
                    {t("retrospective.accountability.title_02")}
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginLeft={32}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Yellow}
                    lineHeight={1}
                    fontSize={18}
                  >
                    {t("retrospective.accountability.period")}
                  </Typography>
                </TextContainer>
                <BarContainer>
                  {data.map((bar, index) => (
                    <Bar key={index}>
                      <NumbersContainer>
                        <YearLabel>{bar.year}</YearLabel>
                        <CountUp
                          end={bar.number}
                          duration={1}
                          style={{
                            backgroundColor: bar.backgroundColor,
                            fontFamily: DalegriaFontesEnum.ManualBasic,
                            color: bar.textColor,
                            fontSize: "20px",
                            padding: "1px 1px",
                          }}
                        />
                      </NumbersContainer>
                      <BarImage
                        src={bar.image}
                        alt={`gráfico do ano ${bar.year}`}
                      />
                    </Bar>
                  ))}
                </BarContainer>
              </PinkBox>
            </PinkBoxContainer>

            <PinkBoxContainer style={{ marginTop: "60px" }}>
              <PinkTwo>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  chooseGap={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Purple}
                    fontSize={48}
                  >
                    Origem dos recursos
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Purple}
                    fontSize={20}
                  >
                    Janeiro a Dezembro 2022
                  </Typography>
                </TextContainer>
              </PinkTwo>
            </PinkBoxContainer>
            <Division>
              <Right>
                <InformationsContainer>
                  <LeftSide>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseWidth={120}
                    >
                      <PercentSquareDesktop
                        chooseWidth={52}
                        chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                        chooseTextColor={DalegriaColorsEnum.Black}
                        number={68.6}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={16}
                      >
                        {t("retrospective.accountability.percents.item_01")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseWidth={120}
                    >
                      <PercentSquareDesktop
                        chooseWidth={50}
                        chooseBackgroundColor={DalegriaColorsEnum.Purple}
                        chooseTextColor={DalegriaColorsEnum.White}
                        number={18.2}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={16}
                      >
                        {t("retrospective.accountability.percents.item_02")}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={12}
                      >
                        {t("retrospective.accountability.percents.sub_item_02")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseWidth={120}
                    >
                      <PercentSquareDesktop
                        chooseWidth={44}
                        chooseBackgroundColor={DalegriaColorsEnum.Pink}
                        chooseTextColor={DalegriaColorsEnum.White}
                        number={3.5}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={16}
                      >
                        {t("retrospective.accountability.percents.item_03")}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={12}
                      >
                        {t("retrospective.accountability.percents.sub_item_03")}
                      </Typography>
                    </TextContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseWidth={120}
                    >
                      <PercentSquareDesktop
                        chooseWidth={44}
                        chooseBackgroundColor={DalegriaColorsEnum.Red}
                        chooseTextColor={DalegriaColorsEnum.White}
                        number={3.2}
                      />
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        lineHeight={1}
                        fontSize={16}
                      >
                        {t("retrospective.accountability.percents.item_04")}
                      </Typography>
                    </TextContainer>
                    <RightSide>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={32}
                        chooseWidth={130}
                      >
                        <PercentSquareDesktop
                          chooseWidth={44}
                          chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                          chooseTextColor={DalegriaColorsEnum.Black}
                          number={2.5}
                        />
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={16}
                        >
                          {t("retrospective.accountability.percents.item_05")}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={32}
                        chooseWidth={150}
                      >
                        <PercentSquareDesktop
                          chooseWidth={42}
                          chooseBackgroundColor={DalegriaColorsEnum.Green}
                          chooseTextColor={DalegriaColorsEnum.White}
                          number={1.8}
                        />
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={16}
                        >
                          {t("retrospective.accountability.percents.item_07")}
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={12}
                        >
                          {t(
                            "retrospective.accountability.percents.sub_item_07"
                          )}
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={32}
                        chooseWidth={130}
                      >
                        <PercentSquareDesktop
                          chooseWidth={48}
                          chooseBackgroundColor={DalegriaColorsEnum.Salmon}
                          chooseTextColor={DalegriaColorsEnum.Black}
                          number={2.10}
                        />
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={16}
                        >
                          DOADORES PESSOAS FÍSICAS COM LEI DE INCENTIVO
                        </Typography>
                      </TextContainer>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={32}
                        chooseWidth={130}
                      >
                        <PercentSquareDesktop
                          chooseWidth={44}
                          chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                          chooseTextColor={DalegriaColorsEnum.White}
                          number={0.2}
                        />
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={16}
                        >
                          {t("retrospective.accountability.percents.item_08")}
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          lineHeight={1}
                          fontSize={12}
                        >
                          {t(
                            "retrospective.accountability.percents.sub_item_08"
                          )}
                        </Typography>
                      </TextContainer>
                    </RightSide>
                  </LeftSide>
                </InformationsContainer>
              </Right>
              <Left>
                <JokerImage src={joker} />
              </Left>
            </Division>
          </AccountabilityContainerDesktop>
        </GlobalContainer>
      ) : (
        <>
          <AccountabilityHeader />
          <AccountabilityContainerTwo>
            <BackgroundPink>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={16}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Purple}
                  lineHeight={1}
                  fontSize={28}
                >
                  {t("retrospective.accountability.subtitle_02")}
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
                  textColor={DalegriaColorsEnum.Purple}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.january_to_december")}
                </Typography>
              </TextContainer>
            </BackgroundPink>
          </AccountabilityContainerTwo>
          <InformationsContainer>
            <RightSide>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={100}
              >
                <PercentSquareDesktop
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  number={68.6}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_01")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={100}
              >
                <PercentSquareDesktop
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Purple}
                  chooseTextColor={DalegriaColorsEnum.White}
                  number={18.2}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_02")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={10}
                >
                  {t("retrospective.accountability.percents.sub_item_02")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={100}
              >
                <PercentSquareDesktop
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Pink}
                  chooseTextColor={DalegriaColorsEnum.White}
                  number={3.5}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_03")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={10}
                >
                  {t("retrospective.accountability.percents.sub_item_03")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={100}
              >
                <PercentSquareDesktop
                  chooseWidth={40}
                  chooseBackgroundColor={DalegriaColorsEnum.Red}
                  chooseTextColor={DalegriaColorsEnum.White}
                  number={3.2}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_04")}
                </Typography>
              </TextContainer>

              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={130}
              >
                <PercentSquareDesktop
                  chooseWidth={40}
                  chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  number={2.5}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_05")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={150}
              >
                <PercentSquareDesktop
                  chooseWidth={38}
                  chooseBackgroundColor={DalegriaColorsEnum.Green}
                  chooseTextColor={DalegriaColorsEnum.White}
                  number={1.8}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_07")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={10}
                >
                  {t("retrospective.accountability.percents.sub_item_07")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={130}
              >
                <PercentSquareDesktop
                  chooseWidth={44}
                  chooseBackgroundColor={DalegriaColorsEnum.Salmon}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  number={2.1}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  DOADORES PESSOAS FÍSICAS COM LEI DE INCENTIVO
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={32}
                chooseWidth={130}
              >
                <PercentSquareDesktop
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                  chooseTextColor={DalegriaColorsEnum.White}
                  number={0.2}
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.percents.item_08")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  lineHeight={1}
                  fontSize={10}
                >
                  {t("retrospective.accountability.percents.sub_item_08")}
                </Typography>
              </TextContainer>
            </RightSide>
            <Left>
              <JokerImage src={joker} />
            </Left>
          </InformationsContainer>
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
