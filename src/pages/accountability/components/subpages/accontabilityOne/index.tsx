import React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountabilityContainer,
  BackgroundPink,
  Bar,
  BarContainer,
  BarImage,
  NumbersContainer,
  YearLabel,
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
import graficOne from "../../../../../../public/assets/PNGS/Logos e grafismos/2015.png";
import graficTwo from "../../../../../../public/assets/PNGS/Logos e grafismos/2016.png";
import graficTree from "../../../../../../public/assets/PNGS/Logos e grafismos/2017.png";
import graficFour from "../../../../../../public/assets/PNGS/Logos e grafismos/2018.png";
import graficFive from "../../../../../../public/assets/PNGS/Logos e grafismos/2019.png";
import graficSix from "../../../../../../public/assets/PNGS/Logos e grafismos/2020.png";
import graficSeven from "../../../../../../public/assets/PNGS/Logos e grafismos/2021.png";
import graficEight from "../../../../../../public/assets/PNGS/Logos e grafismos/2022.png";
import CountUp from "react-countup";

export const AccountabilityOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    navigate("/prestacao-de-contas-02")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/abrace-a-causa")
    window.scrollTo(0, 0);
  }

  return (
    <>
      <AccountabilityHeader />
      <AccountabilityContainer>
        <BackgroundPink>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={16}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Yellow}
              lineHeight={1}
              fontSize={28}
            >
              {t("retrospective.accountability.title_02")}
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
              textColor={DalegriaColorsEnum.Yellow}
              lineHeight={1}
              fontSize={16}
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
                      fontSize: "14px",
                      padding: "1px 1px",
                    }}
                  />
                </NumbersContainer>
                <BarImage src={bar.image} alt={`gráfico do ano ${bar.year}`} />
              </Bar>
            ))}
          </BarContainer>
        </BackgroundPink>
        <ButtonContainer>
          <GlobalBackButton onClick={handleBack}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>

          <GlobalNextButton onClick={handleNext}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </AccountabilityContainer>
    </>
  );
};
