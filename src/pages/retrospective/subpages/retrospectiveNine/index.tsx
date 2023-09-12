import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackgroundBlueContainer,
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
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";

export const RetrospectiveNine: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveHeader />
          <GlobalContainer>
            <TextContainer
              textAlign="center"
              justifyContent="center"
              align="center"
              marginBottom={16}
              chooseGap={4}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={52}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={18}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month_description")}
              </Typography>
            </TextContainer>
            <RetrospectiveContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="center"
                flexDirection="row"
              >
                <BlueHeart width={60} height={50} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={20}
                  textTransform="uppercase"
                >
                  {t("retrospective.january_to_abril")}
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={24}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={40}
                    textTransform="uppercase"
                  >
                    Palhaços estão sempre em formação!
                  </Typography>
                </TextContainer>
                <TextDivision>
                  <TextSideDivision>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseGap={8}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={28}
                      >
                        O curso Formação Básica de Palhaço foi prorrogado para o
                        primeiro quadrimestre, encerrando assim o processo
                        formativo, iniciado em 2021. No ano anterior, as aulas
                        aconteceram em modelo híbrido - online e presencial - e,
                        em 2022, 16 encontros presenciais foram realizados com
                        os alunos para aprofundar a arte do palhaço. O curso
                        gratuito
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                  <TextSideDivision>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={12}
                      chooseGap={8}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={28}
                      >
                        oferece formação especializada para artistas e
                        estudantes de arte, tendo o palhaço como território e
                        expressão. Ao longo desse processo, formadores e alunos
                        puderam experimentar e realizar trocas a partir de um
                        olhar comum sobre a linguagem do palhaço, entendendo que
                        a formação é uma prática cumulativa e ininterrupta.
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                </TextDivision>
              </BackgroundBlueContainer>
            </RetrospectiveContainer>
          </GlobalContainer>
        </>
      ) : (
        <>
          <RetrospectiveHeader />
          <DalegriaContainer choosePadding={16}>
            <TextContainer
              textAlign="center"
              justifyContent="center"
              align="center"
              marginBottom={12}
              chooseGap={4}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                fontSize={28}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={10}
                textTransform="uppercase"
              >
                {t("retrospective.month_to_month_description")}
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="center"
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
                {t("retrospective.january_to_abril")}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={20}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.retrospective_nine.background_container.doctors_school.title"
                  )}
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
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  {t(
                    "retrospective.retrospective_nine.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
            </BackgroundBlueContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-08")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-10")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
