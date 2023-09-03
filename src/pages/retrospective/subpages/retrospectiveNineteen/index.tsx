import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackgroundBlueContainer,
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import OriginalArt17 from "../../../../../public/assets/photos/originalart-17.jpg";
import OriginalArt16 from "../../../../../public/assets/photos/originalart-16.jpg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { OriginalArtTwelve } from "../retrospectiveFourteen/retrospectiveFourteen.styles";
import {
  BlueBox,
  RetrospectiveContainer,
} from "../retrospectiveEight/retrospectiveEight.styles";
import { OriginalArtNineteen, YellowBox } from "./retrospectiveNineteen.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";

export const RetrospectiveNineteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <RetrospectiveHeader />
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
              fontSize={50}
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
                {t("retrospective.january_to_abril")}
              </Typography>
            </TextContainer>
            <BackgroundBlueContainer style={{ display: "flex", gap: "16px", marginBottom: '60px' }}>
              <OriginalArtNineteen src={OriginalArt16} />
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={32}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.retrospective_nineteen.background_container.doctors_school.title"
                  )}
                </Typography>
              </TextContainer>
              <TextDivision>
                <TextSideDivision>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    chooseGap={8}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      fontSize={24}
                    >
                      Depois de dois anos de pandemia, os palhaços puderam
                      percorrer os hospitais em grupos maiores durante as
                      festividades do Natal.
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.White}
                      fontSize={24}
                    >
                      Em Recife, o elenco reestreou o espetáculo “Auto de
                      Natal”, que conta a história tradicional do nascimento de
                      uma criança, mas pelo olhar transgressor do palhaço, e foi
                      apresentado nos cinco hospitais atendidos pela associação.
                      Em São Paulo, grupos de seis palhaços circularam pelas
                      alas pediátricas com figurino, música e brincadeiras para
                      celebrar a data no Hospital Santa Marcelina, Hospital
                      Municipal M’boi Mirim – Dr. Moysés Deutsch, Hospital do
                      Mandaqui, Hospital do Campo Limpo e Hospital Universitário
                      da Faculdade de Medicina da USP. No Hospital Geral do
                      Grajaú, no Instituto da Criança do Hospital das Clínicas e
                      no Instituto de Tratamento do Câncer Infantil (Itaci), as
                      duplas de palhaços que já atendiam no hospital fizeram uma
                      visita temática especial.
                    </Typography>
                  </TextContainer>
                </TextSideDivision>
                <TextSideDivision>
                  <OriginalArtNineteen src={OriginalArt17} />
                </TextSideDivision>
              </TextDivision>
            </BackgroundBlueContainer>
            <YellowBox>
              <SquareColored
                backgroundColor={DalegriaColorsEnum.Yellow}
                type="primary"
                style={{ marginBottom: "16px" }}
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={20}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_01"
                    )}
                  </Typography>
                </TextContainer>

                <TextContainer
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    textAlign: "center",
                    flexDirection: "row",
                    gap: "16px",
                  }}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdThin}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={16}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_02"
                    )}
                  </Typography>

                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_04"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.LightBlue,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      259 pessoas
                    </span>
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_05"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.LightBlue,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      1.162 pessoas
                    </span>
                  </Typography>
                </TextContainer>

                <TextContainer
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    textAlign: "center",
                    flexDirection: "row",
                    gap: "16px",
                    height: "50px",
                  }}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdThin}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={16}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_03"
                    )}
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_04"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.LightBlue,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      180 pessoas
                    </span>
                  </Typography>

                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_05"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.LightBlue,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      600 pessoas
                    </span>
                  </Typography>
                </TextContainer>
              </SquareColored>
            </YellowBox>
          </RetrospectiveContainer>
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
              <img
                src={OriginalArt16}
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
                  fontSize={20}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.retrospective_nineteen.background_container.doctors_school.title"
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
                    "retrospective.retrospective_nineteen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  {t(
                    "retrospective.retrospective_nineteen.background_container.doctors_school.stanza_02"
                  )}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  {t(
                    "retrospective.retrospective_nineteen.background_container.doctors_school.stanza_03"
                  )}
                </Typography>
              </TextContainer>
              <img
                src={OriginalArt17}
                width={330}
                height={220}
                style={{ marginBottom: "16px" }}
              />
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Yellow}
                style={{ height: "185px", width: "330px" }}
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
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    QUANTAS PESSOAS FORAM IMPACTADAS:
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={14}
                  >
                    São Paulo
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    Público direto{" "}
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={16}
                    >
                      259 pessoas
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
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    Público indireto{" "}
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={16}
                    >
                      1.162 pessoas
                    </Typography>
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={14}
                  >
                    Recife
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  flexDirection="row"
                  align="flex-end"
                  chooseGap={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    Público direto{" "}
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={16}
                    >
                      180 pessoas
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
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Gray}
                    fontSize={12}
                  >
                    Público indireto{" "}
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={16}
                    >
                      600 pessoas
                    </Typography>
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-18")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-20")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
