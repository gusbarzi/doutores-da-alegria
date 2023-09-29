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
import {
  BannerContainer,
  ColorideBackground,
  ColorideBackgroundDesktop,
  JokerImage,
  TransparentBackgroundDesktop,
  XRayBannerContainerDesktop,
  XRayBannerContentDesktop,
  XRayBannerDetailsContainer,
  XRayHiperContainer,
} from "../../xRay.styles";
import jokerSeven from "../../../../../public/assets/jokersPng/mobile-recortes7.png";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { CustomList } from "../../../../components/CustomList";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../utils/breakpoints";

import { TextSideDivision } from "../../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import { IList } from "../../../../components/CustomList/customList.types";
import { ArtboardImage } from "../../../opening/opening.styles";
import artImage from "../../../../../public/assets/PNGS/Outros/Artboard 6.png";

export const XRayOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const push = isDesktop ? "/restrospectiva-01" : "/raio-x-02";

  const xRayListItens: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.list_item.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 2,
      text: t("x_ray.list_item.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 3,
      text: t("x_ray.list_item.thirth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 4,
      text: t("x_ray.list_item.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 5,
      text: t("x_ray.list_item.fifth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 6,
      text: t("x_ray.list_item.sixth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
    {
      itemId: 7,
      text: t("x_ray.list_item.seventh"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 20,
    },
  ];

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

  const handleNext = () => {
    navigate(push);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate("/de-dentro-para-fora");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isDesktop ? (
        <>
          <XRayBannerContainerDesktop>
            <XRayBannerContentDesktop>
              <XRayBannerDetailsContainer>
                <TextContainer
                  align="center"
                  justifyContent="flex-start"
                  textAlign="center"
                  chooseHeight={400}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasicS}
                    textColor={DalegriaColorsEnum.Pink}
                    fontSize={140}
                  >
                    raio{" "}
                    <span
                      style={{
                        fontFamily: DalegriaFontesEnum.ManualBasicS,
                        color: DalegriaColorsEnum.Yellow,
                      }}
                    >
                      X
                    </span>
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Red}
                    fontSize={40}
                    style={{ marginRight: "68px" }}
                  >
                    doutores da alegria
                  </Typography>
                </TextContainer>
              </XRayBannerDetailsContainer>
            </XRayBannerContentDesktop>
          </XRayBannerContainerDesktop>
          <XRayHiperContainer>
            <ColorideBackgroundDesktop>
              <CustomList list={xRayListItens} chooseWidth={700} />
              <TextSideDivision
                style={{
                  display: "flex",
                  width: "600px",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  marginTop: "-140px",
                  marginLeft: "-30px",
                }}
              >
                <JokerImage src={jokerSeven} />
                <Typography
                  fontFamily={DalegriaFontesEnum.StdLight}
                  textColor={DalegriaColorsEnum.Black}
                  fontSize={16}
                  textTransform="uppercase"
                  style={{
                    writingMode: "vertical-lr",
                    marginBottom: "16px",
                    marginRight: "4px",
                    transform: "rotate(180deg)",
                  }}
                >
                  foto lana pinho
                </Typography>
              </TextSideDivision>
            </ColorideBackgroundDesktop>
          </XRayHiperContainer>
          <XRayHiperContainer>
            <TransparentBackgroundDesktop>
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
                  style={{ marginBottom: "12px" }}
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
                  style={{ marginBottom: "12px" }}
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
                  style={{ marginBottom: "12px" }}
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
                  style={{ marginBottom: "12px" }}
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
                  style={{ marginBottom: "12px" }}
                >
                  {t("x_ray.we_won_prizes_list.title")}
                </Typography>
                <CustomList list={weWonPrizesList} />
              </TextContainer>
            </TransparentBackgroundDesktop>
          </XRayHiperContainer>
        </>
      ) : (
        <>
          <DalegriaContainer choosePadding={0}>
            <BannerContainer>
              <ArtboardImage src={artImage} />
            </BannerContainer>
            <ColorideBackground>
              <CustomList list={xRayListItens} />
            </ColorideBackground>

            <Caveira
              width={120}
              height={120}
              style={{ display: "flex", marginTop: "-60px" }}
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
