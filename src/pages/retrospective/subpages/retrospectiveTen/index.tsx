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
import OriginalArt7 from "../../../../../public/assets/photos/originalart-7.png";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { LinkPersonal } from "./retrospectiveTen.styles";

export const RetrospectiveTen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-11");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/restrospectiva-09");
    window.scrollTo(0, 0);
  };

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
                <BlueHeart width={40} height={30} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.LightBlue}
                  fontSize={18}
                  textTransform="uppercase"
                >
                  fevereiro
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer style={{ display: "flex", gap: "16px" }}>
                <OriginalArtTwo src={OriginalArt7} />
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
                      "retrospective.retrospective_ten.background_container.doctors_school.title"
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
                        fontSize={24}
                      >
                        Antes da pandemia de Covid-19, as festas de carnaval,
                        São João e o Natal eram comemoradas pelos palhaços com
                        cortejos que reuniam os elencos e passavam por todos os
                        hospitais.
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={24}
                      >
                        Em 2022, ano de transições e retomadas, o carnaval e o
                        São João foram lembrados nos hospitais, mas reunindo
                        menos palhaços.
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={24}
                      >
                        Em Recife, os hospitais receberam grupos de três
                        palhaços, como Dr. Dud Grud “Homem da Meia-Noite”, Dra.
                        Baju “Rainha da Tradicional Clube Vassourinhas” e Dr.
                        Wago Ninguém “Rei do Maracatu”.{" "}
                        <LinkPersonal to="https://www.instagram.com/p/CaXpBfGp_xw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                          Olha a farra!
                        </LinkPersonal>
                      </Typography>
                    </TextContainer>
                  </TextSideDivision>
                  <TextSideDivision
                    chooseWidth={500}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SquareColored
                      borderColor={DalegriaColorsEnum.Yellow}
                      type="outlined"
                      style={{ width: "350px" }}
                    >
                      <TextContainer
                        textAlign="left"
                        justifyContent="flex-start"
                        align="flex-start"
                        marginBottom={8}
                      >
                        <Typography
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={20}
                          textTransform="uppercase"
                        >
                          {t(
                            "retrospective.retrospective_ten.background_container.doctors_school.square.text_01"
                          )}
                          <span
                            style={{
                              marginLeft: "8px",
                              fontSize: "14px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_ten.background_container.doctors_school.square.text_05"
                            )}
                          </span>
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
                          textColor={DalegriaColorsEnum.White}
                          fontSize={16}
                          textTransform="uppercase"
                        >
                          {t(
                            "retrospective.retrospective_ten.background_container.doctors_school.square.text_02"
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
                          fontFamily={DalegriaFontesEnum.StdBold}
                          textColor={DalegriaColorsEnum.White}
                          fontSize={12}
                          textTransform="uppercase"
                        >
                          {t(
                            "retrospective.retrospective_ten.background_container.doctors_school.square.text_03"
                          )}
                          <span
                            style={{
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_ten.background_container.doctors_school.square.text_06"
                            )}
                          </span>
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
                          textColor={DalegriaColorsEnum.White}
                          fontSize={12}
                          textTransform="uppercase"
                        >
                          {t(
                            "retrospective.retrospective_ten.background_container.doctors_school.square.text_04"
                          )}
                          <span
                            style={{
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_ten.background_container.doctors_school.square.text_07"
                            )}
                          </span>
                        </Typography>
                      </TextContainer>
                    </SquareColored>
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
              chooseGap={4}
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
                  "retrospective.retrospective_ten.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt7}
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
                    "retrospective.retrospective_ten.background_container.doctors_school.title"
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
                    "retrospective.retrospective_ten.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  Em Recife, os hospitais receberam grupos de três palhaços,
                  como Dr. Dud Grud “Homem da Meia-Noite”, Dra. Baju “Rainha da
                  Tradicional Clube Vassourinhas” e Dr. Wago Ninguém “Rei do
                  Maracatu”.{" "}
                  <LinkPersonal to="https://www.instagram.com/p/CaXpBfGp_xw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                    Olha a farra!
                  </LinkPersonal>
                   
                </Typography>
              </TextContainer>

              <SquareColored
                borderColor={DalegriaColorsEnum.Yellow}
                type="outlined"
              >
                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={8}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={20}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_ten.background_container.doctors_school.square.text_01"
                    )}
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "14px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_ten.background_container.doctors_school.square.text_05"
                      )}
                    </span>
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
                    textColor={DalegriaColorsEnum.White}
                    fontSize={16}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_ten.background_container.doctors_school.square.text_02"
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
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_ten.background_container.doctors_school.square.text_03"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_ten.background_container.doctors_school.square.text_06"
                      )}
                    </span>
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
                    textColor={DalegriaColorsEnum.White}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_ten.background_container.doctors_school.square.text_04"
                    )}
                    <span
                      style={{
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_ten.background_container.doctors_school.square.text_07"
                      )}
                    </span>
                  </Typography>
                </TextContainer>
              </SquareColored>
            </BackgroundBlueContainer>
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
