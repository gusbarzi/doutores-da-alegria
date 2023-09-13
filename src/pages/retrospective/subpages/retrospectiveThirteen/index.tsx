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
import OriginalArt10 from "../../../../../public/assets/photos/originalart-10.png";
import OriginalArt11 from "../../../../../public/assets/photos/originalart-11.jpg";
import { ReactComponent as BlueHeart } from "../../../../../public/assets/coração-azul.svg";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { RetrospectiveContainer } from "../retrospectiveEight/retrospectiveEight.styles";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { OriginalArtTwo } from "../retrospectiveFour/retrospectiveFour.styles";

export const RetrospectiveThirteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/restrospectiva-14")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/restrospectiva-12")
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
                  {t("retrospective.january_to_abril")}
                </Typography>
              </TextContainer>
              <BackgroundBlueContainer>
                <TextDivision>
                  <TextSideDivision
                    style={{
                      display: "flex",
                      gap: "24px",
                      flexDirection: "column",
                    }}
                  >
                    <OriginalArtTwo src={OriginalArt10} />
                    <SquareColored
                      borderColor={DalegriaColorsEnum.Yellow}
                      type="outlined"
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
                          textColor={DalegriaColorsEnum.Yellow}
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
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_06"
                            )}
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
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_07"
                            )}
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
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_08"
                            )}
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
                              color: DalegriaColorsEnum.Yellow,
                              fontFamily: DalegriaFontesEnum.ManualBasic,
                              marginLeft: "4px",
                              fontSize: "24px",
                            }}
                          >
                            {t(
                              "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_09"
                            )}
                          </span>
                        </Typography>
                      </TextContainer>
                    </SquareColored>
                  </TextSideDivision>
                  <TextSideDivision style={{ width: "800px" }}>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={12}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.ManualBasic}
                        textColor={DalegriaColorsEnum.Yellow}
                        fontSize={40}
                        textTransform="uppercase"
                      >
                        {t(
                          "retrospective.retrospective_thirteen.background_container.doctors_school.title"
                        )}
                      </Typography>
                    </TextContainer>
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
                        fontSize={24}
                      >
                        {t(
                          "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_01"
                        )}
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.White}
                        fontSize={24}
                      >
                        {t(
                          "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_02"
                        )}
                      </Typography>
                    </TextContainer>
                    <OriginalArtTwo
                      src={OriginalArt11}
                      style={{ marginBottom: "-100px" }}
                    />
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
                  "retrospective.retrospective_thirteen.background_container.doctors_school.date"
                )}
              </Typography>
            </TextContainer>

            <BackgroundBlueContainer>
              <img
                src={OriginalArt10}
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
                    "retrospective.retrospective_thirteen.background_container.doctors_school.title"
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
                    "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_01"
                  )}
                </Typography>
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  fontSize={16}
                >
                  {t(
                    "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_02"
                  )}
                </Typography>
              </TextContainer>

              <SquareColored
                borderColor={DalegriaColorsEnum.Yellow}
                type="outlined"
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
                    textColor={DalegriaColorsEnum.Yellow}
                    fontSize={14}
                    textTransform="uppercase"
                  >
                    {t(
                      "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_01"
                    )}
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
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
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  flexDirection="column"
                >
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
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_06"
                      )}
                    </span>
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  marginBottom={24}
                >
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
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_07"
                      )}
                    </span>
                  </Typography>
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
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
                </TextContainer>

                <TextContainer
                  textAlign="left"
                  justifyContent="flex-start"
                  align="flex-start"
                  flexDirection="column"
                >
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
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_08"
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
                        color: DalegriaColorsEnum.Yellow,
                        fontFamily: DalegriaFontesEnum.ManualBasic,
                        marginLeft: "4px",
                        fontSize: "24px",
                      }}
                    >
                      {t(
                        "retrospective.retrospective_thirteen.background_container.doctors_school.square.text_09"
                      )}
                    </span>
                  </Typography>
                </TextContainer>
              </SquareColored>
              <div style={{ marginBottom: "-200px" }}>
                <img src={OriginalArt11} width={330} height={200} />
              </div>
            </BackgroundBlueContainer>
            <div
              style={{
                height: "180px",
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
