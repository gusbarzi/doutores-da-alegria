import React from "react";
import { useTranslation } from "react-i18next";
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
import { ReactComponent as Caveira } from "../../../../../public/assets/caveira.svg";
import { BannerContainer, ColorideBackground } from "../../xRay.styles";
import { IList } from "../../../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { CustomList } from "../../../../components/CustomList";
import artImage from "../../../../../public/assets/PNGS/Outros/Artboard 6.png";
import { ArtboardImage } from "../../../opening/opening.styles";

export const XRayTwo: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const impactedPeopleList: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.impacted_people_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.impacted_people_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  const whoGoesHospitalList: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.who_goes_hospital_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.who_goes_hospital_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("x_ray.who_goes_hospital_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  const haveSchoolList: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.have_school_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.have_school_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("x_ray.have_school_list.thirth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("x_ray.have_school_list.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("x_ray.have_school_list.fifth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("x_ray.have_school_list.sixth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  const seeUsList: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.see_us_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.see_us_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("x_ray.see_us_list.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  const weWonPrizesList: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.we_won_prizes_list.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.we_won_prizes_list.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("x_ray.we_won_prizes_list.third"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  return (
    <>
      <DalegriaContainer choosePadding={0}>
        <BannerContainer>
          <ArtboardImage src={artImage} />
        </BannerContainer>
        <ColorideBackground>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            chooseGap={4}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={24}
            >
              {t("x_ray.impacted_people_list.title")}
            </Typography>
            <CustomList list={impactedPeopleList} />
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            chooseGap={4}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={24}
            >
              {t("x_ray.who_goes_hospital_list.title")}
            </Typography>
            <CustomList list={whoGoesHospitalList} />
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            chooseGap={4}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={24}
            >
              {t("x_ray.have_school_list.title")}
            </Typography>
            <CustomList list={haveSchoolList} />
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            chooseGap={4}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={24}
            >
              {t("x_ray.see_us_list.title")}
            </Typography>
            <CustomList list={seeUsList} />
          </TextContainer>

          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            chooseGap={4}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={24}
            >
              {t("x_ray.we_won_prizes_list.title")}
            </Typography>
            <CustomList list={weWonPrizesList} />
          </TextContainer>
        </ColorideBackground>

        <Caveira
          width={120}
          height={120}
          style={{ position: "absolute", bottom: "-930px" }}
        />

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/raio-x-01")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/restrospectiva-01")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
