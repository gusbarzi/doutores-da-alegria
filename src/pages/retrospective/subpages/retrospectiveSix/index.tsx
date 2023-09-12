import React from "react";
import { useTranslation } from "react-i18next";
import {
  OriginalArtFour,
  RetrospectiveContainer,
} from "./retrospectiveSix.styles";
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
import OriginalArt4 from "../../../../../public/assets/photos/originalart-4.png";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { SquareColored } from "../../../../components/SquareColored";
import {
  BackgroundPinkContainer,
  TextDivision,
  TextSideDivision,
} from "../retrospectiveFive/retrospectiveFive.styles";
import { CustomList } from "../../../../components/CustomList";
import { IList } from "../../../../components/CustomList/customList.types";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";

export const RetrospectiveSix: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const hospitalsList: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.hospitals_list_retrospective_six.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("retrospective.hospitals_list_retrospective_six.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("retrospective.hospitals_list_retrospective_six.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("retrospective.hospitals_list_retrospective_six.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("retrospective.hospitals_list_retrospective_six.fiveth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("retrospective.hospitals_list_retrospective_six.sixth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
  ];

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
              <OriginalArtFour src={OriginalArt4} />
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.ManualBasic}
                  textColor={DalegriaColorsEnum.Pink}
                  fontSize={40}
                  textTransform="uppercase"
                >
                  {t("retrospective.art_to_hospitals.title")}
                </Typography>
              </TextContainer>
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
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={24}
                    >
                      {t("retrospective.art_to_hospitals.stanza_01")}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={24}
                    >
                      {t("retrospective.art_to_hospitals.stanza_02")}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={24}
                    >
                      {t("retrospective.art_to_hospitals.stanza_03")}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={24}
                    >
                      {t("retrospective.art_to_hospitals.stanza_04")}
                    </Typography>
                    <Typography
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Gray}
                      fontSize={24}
                    >
                      {t("retrospective.art_to_hospitals.stanza_05")}
                    </Typography>
                  </TextContainer>
                  <SquareColored
                    borderColor={DalegriaColorsEnum.Yellow}
                    type="outlined"
                    style={{ height: "50px" }}
                  >
                    <TextContainer
                      textAlign="center"
                      justifyContent="center"
                      align="center"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={16}
                        textTransform="uppercase"
                      >
                        {t("retrospective.square_retrospective_six.text_01")}
                        <span
                          style={{
                            color: DalegriaColorsEnum.Black,
                            fontFamily: DalegriaFontesEnum.ManualBasic,
                            marginLeft: "2px",
                            fontSize: "20px",
                          }}
                        >
                          {t("retrospective.square_retrospective_six.text_02")}
                        </span>
                      </Typography>
                    </TextContainer>
                  </SquareColored>
                </TextSideDivision>
                <TextSideDivision chooseWidth={600}>
                  <BackgroundPinkContainer>
                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      marginBottom={12}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Yellow}
                        fontSize={24}
                        textTransform="uppercase"
                      >
                        {t(
                          "retrospective.hospitals_list_retrospective_six.title"
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
                          "retrospective.hospitals_list_retrospective_six.sub_title"
                        )}
                      </Typography>
                    </TextContainer>

                    <TextContainer
                      textAlign="left"
                      justifyContent="flex-start"
                      align="flex-start"
                      chooseGap={8}
                      marginBottom={12}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.White}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        {t("retrospective.hospitals_served")}
                      </Typography>
                      <CustomList list={hospitalsList} />
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
                        fontSize={12}
                      >
                        {t(
                          "retrospective.hospitals_list_retrospective_six.footer"
                        )}
                      </Typography>
                    </TextContainer>
                  </BackgroundPinkContainer>
                </TextSideDivision>
              </TextDivision>
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
            <img
              src={OriginalArt4}
              width={360}
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
                textColor={DalegriaColorsEnum.Pink}
                fontSize={24}
                textTransform="uppercase"
              >
                {t("retrospective.art_to_hospitals.title")}
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
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.art_to_hospitals.stanza_01")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.art_to_hospitals.stanza_02")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.art_to_hospitals.stanza_03")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.art_to_hospitals.stanza_04")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Gray}
                fontSize={16}
              >
                {t("retrospective.art_to_hospitals.stanza_05")}
              </Typography>
            </TextContainer>

            <SquareColored
              borderColor={DalegriaColorsEnum.Yellow}
              type="outlined"
              style={{ height: "50px" }}
            >
              <TextContainer
                textAlign="center"
                justifyContent="center"
                align="center"
                marginBottom={16}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={12}
                  textTransform="uppercase"
                >
                  {t("retrospective.square_retrospective_six.text_01")}
                  <span
                    style={{
                      color: DalegriaColorsEnum.Black,
                      fontFamily: DalegriaFontesEnum.ManualBasic,
                      marginLeft: "2px",
                      fontSize: "16px",
                    }}
                  >
                    {t("retrospective.square_retrospective_six.text_02")}
                  </span>
                </Typography>
              </TextContainer>
            </SquareColored>

            <BackgroundPinkContainer style={{ marginTop: "16px" }}>
              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.Yellow}
                  fontSize={16}
                  textTransform="uppercase"
                >
                  {t("retrospective.hospitals_list_retrospective_six.title")}
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
                  fontSize={14}
                  textTransform="uppercase"
                >
                  {t(
                    "retrospective.hospitals_list_retrospective_six.sub_title"
                  )}
                </Typography>
              </TextContainer>

              <TextContainer
                textAlign="left"
                justifyContent="flex-start"
                align="flex-start"
                chooseGap={8}
                marginBottom={12}
              >
                <Typography
                  fontFamily={DalegriaFontesEnum.StdBold}
                  textColor={DalegriaColorsEnum.White}
                  textTransform="uppercase"
                  fontSize={16}
                >
                  {t("retrospective.hospitals_served")}
                </Typography>
                <CustomList list={hospitalsList} />
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
                  fontSize={12}
                >
                  {t("retrospective.hospitals_list_retrospective_six.footer")}
                </Typography>
              </TextContainer>
            </BackgroundPinkContainer>
          </DalegriaContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/restrospectiva-05")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/restrospectiva-07")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
