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
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";

export const RetrospectiveTwenty: React.FC = () => {
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
              marginBottom={32}
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
                marginTop={28}
                flexDirection="row"
              >
                <BlueHeart width={50} height={40} />
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
                  marginBottom={24}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={40}
                    textTransform="uppercase"
                  >
                    Oficina para profissionais de assistência social
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
                        No dia 6 de dezembro de 2022, os artistas-formadores da
                        Escola Doutores da Alegria, Raul Figueiredo e Roberta
                        Calza, fizeram uma oficina para funcionários do Centro
                        de Referência Especializado da Assistência Social
                        (CREAS), em São Paulo,
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
                        dentro da programação da IV Semana de Direitos Humanos.
                        20 profissionais, entre assistentes sociais, psicólogos
                        e recepcionistas, participaram da atividade, que propôs
                        o brincar como base para a construção de relações
                        saudáveis.
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
                {t(
                  "retrospective.retrospective_nineteen.background_container.doctors_school.date"
                )}
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
                    "retrospective.retrospective_twenty.background_container.doctors_school.title"
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
                    "retrospective.retrospective_twenty.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
            </BackgroundBlueContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-19")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton
          onClick={() => navigate("/doutores-da-alegria-na-midia")}
        >
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
