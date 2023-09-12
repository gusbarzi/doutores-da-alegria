import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundPinkContainer,
  BlueBox,
  RetrospectiveContainer,
} from "./retrospectiveEight.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import OriginalArt6 from "../../../../../public/assets/photos/originalart-6.png";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { OriginalArtFive } from "../retrospectiveSeven/retrospectiveSeven.styles";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveEight: React.FC = () => {
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
              marginBottom={12}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                fontSize={48}
                textTransform="uppercase"
              >
                {t("retrospective.activity_year")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={20}
                textTransform="uppercase"
              >
                {t("retrospective.activity_year_description")}
              </Typography>
            </TextContainer>
            <RetrospectiveContainer>
              <BackgroundPinkContainer
                style={{ marginTop: "16px", gap: "16px" }}
              >
                <OriginalArtFive src={OriginalArt6} />

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={32}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_eight.background_container.doctors_school.title"
                    )}
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
                        fontSize={20}
                      >
                        O que acontece no hospital não fica no hospital! Em
                        2022, 5 edições do espetáculo “Conta Causos”, com
                        histórias de hospital foram aos palcos. No primeiro
                        semestre, os palhaços levaram o espetáculo para as
                        Fábricas de Cultura
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
                        fontSize={20}
                      >
                        Sapopemba, Cidade Tiradentes e Itaim Paulista, e no
                        segundo semestre,foram para as Fábricas de Cultura São
                        Bernardo do Campo e Parque Belém, espaços de cultura
                        promovidos pelo governo do Estado de São Paulo.
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                </TextDivision>
              </BackgroundPinkContainer>

              <TextSideDivision
                style={{
                  display: "flex",
                  width: "950px",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  marginTop: "-60px",
                  marginLeft: "-90px",
                  zIndex: "10",
                }}
              >
                <SquareColored
                  type="primary"
                  backgroundColor={DalegriaColorsEnum.LightBlue}
                  style={{ width: "400px" }}
                >
                  <TextDivision>
                    <TextSideDivision>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={12}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          EM 2022, REALIZAMOS
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.ManualBasic}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          6 edições
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          DO CONTA CAUSOS
                        </Typography>
                      </TextContainer>
                    </TextSideDivision>
                    <TextSideDivision>
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={12}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.ManualBasic}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          1.015 pessoas
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          ASSISTIRAM AO
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                        >
                          ESPETÁCULO
                        </Typography>
                      </TextContainer>
                    </TextSideDivision>
                  </TextDivision>
                </SquareColored>
              </TextSideDivision>
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
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                fontSize={30}
                textTransform="uppercase"
              >
                {t("retrospective.activity_year")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                fontSize={11}
                textTransform="uppercase"
              >
                {t("retrospective.activity_year_description")}
              </Typography>
            </TextContainer>

            <BackgroundPinkContainer style={{ marginTop: "16px" }}>
              <img
                src={OriginalArt6}
                width={380}
                height={250}
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
                  fontSize={23}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.retrospective_eight.background_container.doctors_school.title"
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
                    "retrospective.retrospective_eight.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
              </TextContainer>
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.LightBlue}
                style={{
                  height: "95px",
                  width: "105%",
                  marginBottom: "-100px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    EM 2022, realizamos
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={16}
                  >
                    6 edições
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    Do conta causos
                  </Typography>
                </TextContainer>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={16}
                  >
                    1.015 pessoas
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    textTransform="uppercase"
                    fontSize={12}
                  >
                    assistiram ao
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    expetáculo
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundPinkContainer>
            <div
              style={{
                height: "80px",
              }}
            />
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-07")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-09")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
