import React from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../../../hooks/useMediaQuery";
import breakpoints from "../../../utils/breakpoints";
import { IList } from "../../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import {
  BannerDetailsContainer,
  JokerImage,
  SocialBannerContainerDesktop,
  SocialBannerContentDesktop,
  SocialImpactContainer,
  SocialImpactContentDesktop,
  SocialImpactTitle,
} from "../socialImpact.styles";
import { TextContainer, Typography } from "../../../styles/global.styles";
import { TextSideDivision } from "../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import { CustomList } from "../../../components/CustomList";
import jokerSixteen from "../../../../public/assets/jokersPng/mobile-recortes16.png";
import jokerSeventeen from "../../../../public/assets/jokersPng/mobile-recortes17.png";

export const SocialImpactDesktop: React.FC = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const selectFontsizeList = isDesktop ? 20 : 16;

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("social_impacts_values.item1"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("social_impacts_values.item2"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 3,
      text: t("social_impacts_values.item3"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 4,
      text: t("social_impacts_values.item4"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 5,
      text: t("social_impacts_values.item5"),
      color: DalegriaColorsEnum.LightYellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
  ];

  return (
    <>
      <SocialBannerContainerDesktop>
        <SocialBannerContentDesktop>
          <BannerDetailsContainer>
            <SocialImpactTitle>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                lineHeight={1}
                fontSize={120}
              >
                impacto
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                lineHeight={1}
                fontSize={120}
              >
                Social
              </Typography>
            </SocialImpactTitle>
            <TextSideDivision
              style={{
                display: "flex",
                width: "1400px",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginBottom: "-30px",
                marginLeft: "-90px",
              }}
            >
              <JokerImage src={jokerSixteen} />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={16}
                textTransform="uppercase"
                style={{
                  writingMode: "vertical-lr",
                  marginBottom: "200px",
                  marginRight: "4px",
                  transform: "rotate(180deg)",
                }}
              >
                foto lana pinho
              </Typography>
            </TextSideDivision>
          </BannerDetailsContainer>
        </SocialBannerContentDesktop>
      </SocialBannerContainerDesktop>
      <div>
        <SocialImpactContentDesktop>
          <SocialImpactContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              chooseWidth={850}
              chooseGap={12}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                lineHeight={1.25}
                fontSize={20}
              >
                {t("social_impact_text_01.first_stanza")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                lineHeight={1.25}
                fontSize={20}
              >
                {t("social_impact_text_01.second_stanza")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Pink}
                lineHeight={1}
                fontSize={24}
              >
                Qual o impacto do nosso
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Pink}
                lineHeight={1}
                fontSize={24}
              >
                trabalho nos hospitais?
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              chooseGap={12}
              chooseWidth={450}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                lineHeight={1.25}
                fontSize={20}
              >
                {t("social_impact_text_02")}
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                lineHeight={1.25}
                fontSize={20}
              >
                {t("social_impact_text_03")}
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              chooseGap={12}
              chooseWidth={450}
            >
              <CustomList list={valuesItemList} />
            </TextContainer>
          </SocialImpactContainer>
        </SocialImpactContentDesktop>
      </div>
      <TextSideDivision
        style={{
          display: "flex",
          width: "600px",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginBottom: "-80px",
          marginLeft: "-40px",
        }}
      >
        <Typography
          fontFamily={DalegriaFontesEnum.StdLight}
          textColor={DalegriaColorsEnum.Black}
          fontSize={16}
          textTransform="uppercase"
          style={{
            writingMode: "vertical-lr",
            marginBottom: "20px",
            transform: "rotate(180deg)",
          }}
        >
          foto lana pinho
        </Typography>
        <JokerImage src={jokerSeventeen} />
      </TextSideDivision>
    </>
  );
};
