import React from "react";
import { useTranslation } from "react-i18next";
import {
  AccountabilityContainer,
  BackgroundBlue,
  BackgroundPink,
  BackgroundYellow,
  GridContainer,
  RectangleBlue,
  RectangleContainer,
  RectanglePink,
  SquareContainer,
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
import { PercentSquare } from "../../../../../components/PercentSquare";

export const AccountabilityTree: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <AccountabilityHeader />
      <AccountabilityContainer>
        <SquareContainer>
          <GridContainer>
            <BackgroundYellow>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={16}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.LightBlue}
                  lineHeight={1}
                  fontSize={28}
                >
                  {t("retrospective.accountability.title_03")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={16}
                chooseWidth={100}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.LightBlue}
                  lineHeight={1.25}
                  fontSize={16}
                >
                  {t("retrospective.accountability.subtitle_03")}
                </Typography>
              </TextContainer>
            </BackgroundYellow>
            <BackgroundBlue>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={16}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={28}
                >
                  {t("retrospective.accountability.title_04")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={48}
                chooseWidth={100}
              >
                <PercentSquare
                  chooseWidth={34}
                  chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  text="35%"
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.projects.item_01")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={48}
                chooseWidth={100}
              >
                <PercentSquare
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Purple}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  text="5,80%"
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.projects.item_02")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={48}
                chooseWidth={100}
              >
                <PercentSquare
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Green}
                  chooseTextColor={DalegriaColorsEnum.Black}
                  text="3,60%"
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.projects.item_03")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={48}
                chooseWidth={100}
              >
                <PercentSquare
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.Pink}
                  chooseTextColor={DalegriaColorsEnum.White}
                  text="1,30%"
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.projects.item_04")}
                </Typography>
              </TextContainer>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={48}
                chooseWidth={100}
              >
                <PercentSquare
                  chooseWidth={42}
                  chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                  chooseTextColor={DalegriaColorsEnum.White}
                  text="0,30%"
                />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.White}
                  lineHeight={1}
                  fontSize={14}
                >
                  {t("retrospective.accountability.projects.item_05")}
                </Typography>
              </TextContainer>
            </BackgroundBlue>
          </GridContainer>
          <BackgroundPink>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={24}
              >
                {t("retrospective.accountability.title_05")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={110}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.Green}
                chooseTextColor={DalegriaColorsEnum.White}
                text="4,10%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_01")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={34}
                chooseBackgroundColor={DalegriaColorsEnum.Purple}
                chooseTextColor={DalegriaColorsEnum.White}
                text="3,1%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_02")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                chooseTextColor={DalegriaColorsEnum.Black}
                text="2,50%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_03")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={24}
                chooseBackgroundColor={DalegriaColorsEnum.Yellow}
                chooseTextColor={DalegriaColorsEnum.White}
                text="2%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_04")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                chooseTextColor={DalegriaColorsEnum.White}
                text="1,40%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_05")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.DarkBlue}
                chooseTextColor={DalegriaColorsEnum.White}
                text="1,40%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_06")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.Black}
                chooseTextColor={DalegriaColorsEnum.White}
                text="1,40%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_07")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={48}
                chooseBackgroundColor={DalegriaColorsEnum.LightBlue}
                chooseTextColor={DalegriaColorsEnum.Black}
                text="30,40%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_08")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={27}
              chooseWidth={130}
            >
              <PercentSquare
                chooseWidth={42}
                chooseBackgroundColor={DalegriaColorsEnum.Red}
                chooseTextColor={DalegriaColorsEnum.White}
                text="7,60%"
              />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.White}
                lineHeight={1}
                fontSize={14}
              >
                {t("retrospective.accountability.operational.item_09")}
              </Typography>
            </TextContainer>
          </BackgroundPink>
        </SquareContainer>

        <RectangleContainer>
          <RectangleBlue />
        </RectangleContainer>

        <RectangleContainer>
          <RectanglePink />
        </RectangleContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/prestacao-de-contas-02")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>

          <GlobalNextButton onClick={() => navigate("/equipe")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </AccountabilityContainer>
    </>
  );
};