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
import OriginalArt15 from "../../../../../public/assets/photos/originalart-15.png";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import { OriginalArtTwelve } from "../retrospectiveFourteen/retrospectiveFourteen.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";

export const RetrospectiveSeventeen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-18")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/restrospectiva-16")
    window.scrollTo(0, 0);
  }

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
                <BlueHeart width={50} height={40} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={18}
                  textTransform="uppercase"
                >
                  NOVEMBRO
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer
                style={{
                  position: "relative",
                }}
              >
                <TextDivision
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <TextSideDivision
                    style={{
                      position: "absolute",
                      width: "600px",
                      height: "700px",
                      left: "15px",
                    }}
                  >
                    <OriginalArtTwelve src={OriginalArt15} />
                  </TextSideDivision>
                  <TextSideDivision
                    style={{
                      width: "530px",
                    }}
                  >
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={32}
                      chooseGap={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.Yellow}
                        fontSize={24}
                        textTransform="uppercase"
                      >
                        {t(
                          "retrospective.retrospective_seventeen.background_container.doctors_school.title"
                        )}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={18}
                      >
                        A 9a turma do Programa de Formação de Palhaços para
                        Jovens (PFPJ) encerrou o período de formação na Escola
                        Doutores da Alegria apresentando o experimento cênico
                        “Corre-Ria: Águas que Vêm de Nós”. Os jovens artistas
                        levaram ao palco cenas de palhaçaria que traçavam
                        metáforas entre a força dos rios e dos mares e as
                        relações com as suas raízes e ancestralidades. Os alunos
                        da 9a turma passaram por uma formação com 1.600
                        horas-aula, treinamentos e experimentos cênicos até
                        conquistarem
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                </TextDivision>
              </BackgroundBlueContainer>
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <SquareColored
                  type="primary"
                  backgroundColor={DalegriaColorsEnum.Yellow}
                  style={{
                    height: "200px",
                    width: "400px",
                    marginRight: "150px",
                  }}
                >
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    flexDirection="row"
                    align="flex-end"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={28}
                    >
                      21 ALUNOS
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={16}
                    >
                      se formaram na 9a turma do PFPJ
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    flexDirection="row"
                    align="flex-end"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={16}
                    >
                      O experimento “Corre-Ria: Águas que Vêm de Nós” foi
                      apresentado em{" "}
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.LightBlue}
                        fontSize={28}
                      >
                        16 sessões
                      </Typography>
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    flexDirection="row"
                    align="flex-end"
                    marginBottom={12}
                    chooseGap={4}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={32}
                    >
                      1.502 PESSOAS
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={16}
                    >
                      assistiram ao experimento
                    </Typography>
                  </TextContainer>
                </SquareColored>
              </div>
              <div style={{ height: "250px" }} />
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
                  "retrospective.retrospective_seventeen.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt15}
                width="100%"
                height="100%"
                style={{ marginBottom: "16px" }}
              />
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
                    "retrospective.retrospective_seventeen.background_container.doctors_school.title"
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
                    "retrospective.retrospective_seventeen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "130px", marginBottom: "-130px" }}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={18}
                  >
                    21 ALUNOS
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    se formaram na 9a turma do PFPJ
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    O experimento “Corre-Ria: Águas que Vêm de Nós” foi
                    apresentado em{" "}
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={16}
                    >
                      16 sessões
                    </Typography>
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  marginBottom={12}
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.LightBlue}
                    fontSize={18}
                  >
                    1.502 PESSOAS
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    assistiram ao experimento
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
            <div 
              style={{
                height: "100px"
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
