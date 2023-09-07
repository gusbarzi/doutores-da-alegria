import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundYellow,
  BackgroundYellowDesktop,
  DoctorsJoyMediaContainer,
  DoctorsJoyMediaContainerDesktop,
  DoctorsJoyMediaContent,
  GridContainer,
  GridItem,
  LeftSide,
  NumbersContainer,
  RightSide,
  TextSquare,
} from "./doctorsJoyMedia.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
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
import { SquareColored } from "../../components/SquareColored";

export const DoctorsJoyMedia: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  return (
    <>
      {isDesktop ? (
        <>
          <DoctorsJoyMediaContainerDesktop>
            <TextContainer
              align="flex-start"
              justifyContent="flex-start"
              marginBottom={40}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={80}
              >
                Doutores da alegria
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={60}
              >
                na midia{" "}
                <span
                  style={{
                    display: "inline-block",
                    width: "740px",
                    textAlign: "left",
                    fontFamily: DalegriaFontesEnum.StdBold,
                    color: DalegriaColorsEnum.Black,
                    fontSize: 20,
                  }}
                >
                  Os veículos de comunicação ajudam a divulgar as iniciativas da
                  associação Doutores da Alegria, mostrando a relevância do
                  nosso trabalho para a sociedade.
                </span>
              </Typography>
            </TextContainer>
            <TextDivision chooseGap={1}>
              <TextSideDivision
                style={{
                  width: "650px",
                }}
              >
                <TextContainer
                  textAlign="left"
                  align="flex-start"
                  justifyContent="flex-start"
                  chooseGap={16}
                  style={{ width: "170px" }}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={24}
                  >
                    Imprensa
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={18}
                    lineHeight={1.5}
                  >
                    Em 2022, tivemos um{" "}
                    <span style={{ fontFamily: DalegriaFontesEnum.StdBold }}>
                      aumento de 270% na publicação de matérias jornalísticas
                    </span>{" "}
                    em relação ao ano anterior. As principais ações abordadas
                    pelos veículos de imprensa foram o retorno aos hospitais do
                    projeto Plateias Hospitalares, no Rio de Janeiro; as
                    apresentações da Banda Doutores da Alegria em São Paulo; e o
                    lançamento do livro Coletânea Conta Causos – Volume 1, no
                    Recife. As nossas ações foram divulgadas nos principais
                    jornais do Rio de Janeiro, São Paulo e Recife e, na
                    televisão, tivemos matérias divulgadas em telejornais locais
                    e nacionais, como o Jornal Nacional e o Jornal Hoje.
                  </Typography>
                </TextContainer>
              </TextSideDivision>
              <TextSideDivision>
                <BackgroundYellowDesktop>
                  <TextDivision style={{ marginTop: "16px" }}>
                    <TextSideDivision
                      style={{
                        marginLeft: "52px",
                      }}
                    >
                      <TextContainer
                        textAlign="left"
                        align="flex-start"
                        justifyContent="flex-start"
                        chooseGap={16}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.ManualBasic}
                          textColor={DalegriaColorsEnum.Pink}
                          fontSize={32}
                        >
                          Redes sociais
                        </Typography>
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={16}
                          lineHeight={1.5}
                        >
                          Entre as ONGs brasileiras, Doutores da Alegria possui
                          a segunda maior audiência no Facebook no país. Além do
                          Facebook, estamos presentes ativamente no Instagram,
                          YouTube e LinkedIn, divulgando as nossas ações nos
                          campos da arte, da saúde e da assistência social.
                          Acreditamos que as redes sociais nos ajudam a ampliar
                          o diálogo com a sociedade e a compartilhar a nossa
                          missão.
                        </Typography>
                      </TextContainer>
                    </TextSideDivision>
                    <TextSideDivision
                      style={{
                        width: "650px",
                        marginRight: "16px",
                      }}
                    ></TextSideDivision>
                  </TextDivision>

                  <TextDivision>
                    <TextSideDivision
                      style={{
                        width: "350px",
                      }}
                    >
                      <SquareColored
                        type="primary"
                        backgroundColor={DalegriaColorsEnum.Pink}
                      >
                        <TextContainer
                          textAlign="left"
                          align="flex-end"
                          justifyContent="flex-end"
                        >
                          <Typography
                            fontFamily={DalegriaFontesEnum.StdBold}
                            textColor={DalegriaColorsEnum.White}
                            lineHeight={1}
                            fontSize={26}
                          >
                            NÚMEROS NAS
                          </Typography>
                          <Typography
                            fontFamily={DalegriaFontesEnum.StdBold}
                            textColor={DalegriaColorsEnum.White}
                            lineHeight={1}
                            fontSize={22}
                          >
                            REDES NACIONAIS
                          </Typography>
                        </TextContainer>
                      </SquareColored>
                    </TextSideDivision>
                    <TextSideDivision
                      style={{
                        marginRight: "16px",
                      }}
                    >
                      <GridContainer>
                        <GridItem>
                          <TextContainer
                            textAlign="left"
                            align="flex-start"
                            justifyContent="flex-start"
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Pink}
                              lineHeight={1}
                              fontSize={60}
                            >
                              + 2,4 milhões
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Pink}
                              lineHeight={1.4}
                              fontSize={40}
                            >
                              de fãs no facebook
                            </Typography>
                          </TextContainer>
                        </GridItem>
                        <GridItem>
                          <TextContainer
                            textAlign="left"
                            align="center"
                            justifyContent="center"
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Red}
                              lineHeight={1}
                              fontSize={80}
                            >
                              + 11 mil
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Red}
                              lineHeight={1}
                              fontSize={48}
                            >
                              seguidores
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Red}
                              lineHeight={1}
                              fontSize={46}
                            >
                              no youtube
                            </Typography>
                          </TextContainer>
                        </GridItem>
                        <GridItem>
                        <TextContainer
                            textAlign="left"
                            align="flex-start"
                            justifyContent="flex-start"
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.LightBlue}
                              lineHeight={1}
                              fontSize={68}
                            >
                              + 114 mil
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.LightBlue}
                              lineHeight={1}
                              fontSize={44}
                            >
                              seguidores
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.LightBlue}
                              lineHeight={1}
                              fontSize={42}
                            >
                              no instagram
                            </Typography>
                          </TextContainer>
                        </GridItem>
                        <GridItem>
                        <TextContainer
                            textAlign="left"
                            align="center"
                            justifyContent="center"
                          >
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Purple}
                              lineHeight={1}
                              fontSize={68}
                            >
                              + 7,8 mil
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Purple}
                              lineHeight={1}
                              fontSize={44}
                            >
                              seguidores
                            </Typography>
                            <Typography
                              fontFamily={DalegriaFontesEnum.ManualBasic}
                              textColor={DalegriaColorsEnum.Purple}
                              lineHeight={1}
                              fontSize={42}
                            >
                              no linkedin
                            </Typography>
                          </TextContainer>
                        </GridItem>
                      </GridContainer>
                    </TextSideDivision>
                  </TextDivision>
                </BackgroundYellowDesktop>
              </TextSideDivision>
            </TextDivision>
          </DoctorsJoyMediaContainerDesktop>
        </>
      ) : (
        <>
          <DoctorsJoyMediaContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={12}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={60}
              >
                {t("retrospective.doctors_joy_media.title")}
              </Typography>
            </TextContainer>
            <DoctorsJoyMediaContent>
              <LeftSide>
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={12}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.5}
                    fontSize={16}
                  >
                    {t("retrospective.doctors_joy_media.text_01")}
                  </Typography>
                </TextContainer>
              </LeftSide>
              <RightSide>
                <TextContainer
                  textAlign="center"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={4}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={28}
                  >
                    {t("retrospective.doctors_joy_media.press")}
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
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.35}
                    fontSize={14}
                  >
                    {t("retrospective.doctors_joy_media.stanza_01")}
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.35}
                    fontSize={14}
                  >
                    {t("retrospective.doctors_joy_media.stanza_02")}
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    lineHeight={1.35}
                    fontSize={14}
                  >
                    {t("retrospective.doctors_joy_media.stanza_03")}
                  </Typography>
                </TextContainer>
              </RightSide>
            </DoctorsJoyMediaContent>
            <BackgroundYellow>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={4}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Pink}
                  fontSize={28}
                >
                  {t("retrospective.doctors_joy_media.social_media.title")}
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
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={16}
                >
                  {t("retrospective.doctors_joy_media.social_media.stanza_01")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={16}
                >
                  {t("retrospective.doctors_joy_media.social_media.stanza_02")}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={16}
                >
                  {t("retrospective.doctors_joy_media.social_media.stanza_03")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <TextSquare>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={20}
                    textTransform="uppercase"
                    lineHeight={1}
                  >
                    {t(
                      "retrospective.doctors_joy_media.number_social_media.title"
                    )}
                  </Typography>
                </TextSquare>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={4}
              >
                <NumbersContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Pink}
                      fontSize={28}
                    >
                      {t(
                        "retrospective.doctors_joy_media.number_social_media.static_01"
                      )}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.LightBlue}
                      fontSize={28}
                    >
                      {t(
                        "retrospective.doctors_joy_media.number_social_media.static_02"
                      )}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Red}
                      fontSize={28}
                    >
                      {t(
                        "retrospective.doctors_joy_media.number_social_media.static_03"
                      )}
                    </Typography>
                  </TextContainer>
                  <TextContainer
                    textAlign="left"
                    justifyContent="flex-start"
                    align="flex-start"
                    marginBottom={16}
                  >
                    <Typography
                      fontFamily={DalegriaFontesEnum.ManualBasic}
                      textColor={DalegriaColorsEnum.Purple}
                      fontSize={28}
                    >
                      {t(
                        "retrospective.doctors_joy_media.number_social_media.static_04"
                      )}
                    </Typography>
                  </TextContainer>
                </NumbersContainer>
              </TextContainer>
            </BackgroundYellow>
          </DoctorsJoyMediaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-20")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/abrace-a-causa")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
