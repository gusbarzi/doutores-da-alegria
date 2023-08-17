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
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveThirteen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
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
          justifyContent="left"
          align="left"
          marginBottom={12}
        >
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
              textTransform="uppercase"
            >
              {t(
                "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_01"
              )}
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
              textTransform="uppercase"
            >
              {t(
                "retrospective.retrospective_thirteen.background_container.doctors_school.stanza_02"
              )}
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
        </BackgroundBlueContainer>
        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate(-1)}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-14")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
