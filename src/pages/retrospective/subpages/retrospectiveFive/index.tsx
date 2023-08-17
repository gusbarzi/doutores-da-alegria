import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundPinkContainer,
  RetrospectiveContainer,
} from "./retrospectiveFive.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { RetrospectiveHeader } from "../../components/retrospectiveHeader";
import { IList } from "../../../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { CustomList } from "../../../../components/CustomList";
import { SquareColored } from "../../../../components/SquareColored";

export const RetrospectiveFive: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sanPauloList: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.hospitals_served_sp.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("retrospective.hospitals_served_sp.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("retrospective.hospitals_served_sp.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("retrospective.hospitals_served_sp.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("retrospective.hospitals_served_sp.fiveth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("retrospective.hospitals_served_sp.sixth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 7,
      text: t("retrospective.hospitals_served_sp.seventh"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 8,
      text: t("retrospective.hospitals_served_sp.eighth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
  ];

  const recifeList: IList[] = [
    {
      itemId: 1,
      text: t("retrospective.hospitals_served_rj.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("retrospective.hospitals_served_rj.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("retrospective.hospitals_served_rj.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("retrospective.hospitals_served_rj.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("retrospective.hospitals_served_rj.fiveth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdBold,
      fontColor: DalegriaColorsEnum.White,
      fontSize: 16,
    },
  ];

  return (
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
            fontSize={10}
            textTransform="uppercase"
          >
            {t("retrospective.activity_year_description")}
          </Typography>
        </TextContainer>

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
            {t("retrospective.joker_place.title")}
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
            textTransform="uppercase"
          >
            {t("retrospective.joker_place.stanza_01")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Gray}
            fontSize={16}
            textTransform="uppercase"
          >
            {t("retrospective.joker_place.stanza_02")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Gray}
            fontSize={16}
            textTransform="uppercase"
          >
            {t("retrospective.joker_place.stanza_03")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Gray}
            fontSize={16}
            textTransform="uppercase"
          >
            {t("retrospective.joker_place.stanza_04")}
          </Typography>
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Gray}
            fontSize={16}
            textTransform="uppercase"
          >
            {t("retrospective.joker_place.stanza_05")}
          </Typography>
        </TextContainer>

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
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.joker_act")}
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
              textColor={DalegriaColorsEnum.Yellow}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.san_paulo")}
            </Typography>
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
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
            <CustomList list={sanPauloList} />
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={12}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.StdLight}
              textColor={DalegriaColorsEnum.Yellow}
              fontSize={16}
              textTransform="uppercase"
            >
              {t("retrospective.recife")}
            </Typography>
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
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
            <CustomList list={recifeList} />
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
                textColor={DalegriaColorsEnum.White}
                fontSize={14}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_people_impacted")}
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
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={16}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_child_sp")}
                <span
                  style={{
                    color: DalegriaColorsEnum.White,
                    fontFamily: DalegriaFontesEnum.StdBold,
                    marginLeft: "8px",
                    fontSize: "10px",
                  }}
                >
                  {t("retrospective.direct_public")}
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
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={16}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_people_sp")}
                <span
                  style={{
                    color: DalegriaColorsEnum.White,
                    fontFamily: DalegriaFontesEnum.StdBold,
                    marginLeft: "8px",
                    fontSize: "10px",
                  }}
                >
                  {t("retrospective.indirect_public")}
                </span>
              </Typography>
            </TextContainer>
          </SquareColored>

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
                textColor={DalegriaColorsEnum.White}
                fontSize={16}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_people_impacted")}
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
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={16}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_child_rc")}
                <span
                  style={{
                    color: DalegriaColorsEnum.White,
                    fontFamily: DalegriaFontesEnum.StdBold,
                    marginLeft: "8px",
                    fontSize: "10px",
                  }}
                >
                  {t("retrospective.direct_public")}
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
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={16}
                textTransform="uppercase"
              >
                {t("retrospective.how_many_people_rc")}
                <span
                  style={{
                    color: DalegriaColorsEnum.White,
                    fontFamily: DalegriaFontesEnum.StdBold,
                    marginLeft: "8px",
                    fontSize: "10px",
                  }}
                >
                  {t("retrospective.indirect_public")}
                </span>
              </Typography>
            </TextContainer>
          </SquareColored>
        </BackgroundPinkContainer>

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/restrospectiva-04")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-06")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
