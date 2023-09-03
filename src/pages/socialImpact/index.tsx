import React from "react";
import { useTranslation } from "react-i18next";
import {
  DescriptionContainer,
  StanzaText,
  SocialImpactContainer,
  SubTitle,
  BannerContainer,
  SocialImpactContentDesktop,
  SocialBannerContainerDesktop,
  SocialBannerContentDesktop,
  BannerDetailsContainer,
  SocialImpactTitle,
} from "./socialImpact.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { CustomList } from "../../components/CustomList";
import { IList } from "../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../utils/colors";
import { DalegriaFontesEnum } from "../../utils/fontes";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";

export const SocialImpact: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const selectFontsizeList = isDesktop ? 20 : 16;

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("social_impacts_values.item1"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("social_impacts_values.item2"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 3,
      text: t("social_impacts_values.item3"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 4,
      text: t("social_impacts_values.item4"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 5,
      text: t("social_impacts_values.item5"),
      color: DalegriaColorsEnum.Yellow,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontColor: DalegriaColorsEnum.Black,
      fontSize: selectFontsizeList,
    },
  ];

  return (
    <>
      {isDesktop ? (
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
        </>
      ) : (
        <>
          <BannerContainer>
            <TextContainer
              align="center"
              textAlign="center"
              justifyContent="flex-end"
              chooseHeight={280}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.LightBlue}
                lineHeight={1}
                fontSize={68}
              >
                impacto
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Pink}
                lineHeight={1}
                fontSize={68}
              >
                Social
              </Typography>
            </TextContainer>
          </BannerContainer>
          <SocialImpactContainer>
            <DescriptionContainer>
              <StanzaText>{t("social_impact_text_01.first_stanza")}</StanzaText>
              <StanzaText>
                {t("social_impact_text_01.second_stanza")}
              </StanzaText>
            </DescriptionContainer>
            <DescriptionContainer>
              <SubTitle>Qual o impacto do nosso</SubTitle>
              <SubTitle>trabalho nos hospitais?</SubTitle>
            </DescriptionContainer>
            <DescriptionContainer>
              <StanzaText>{t("social_impact_text_02")}</StanzaText>
            </DescriptionContainer>
            <DescriptionContainer>
              <StanzaText>{t("social_impact_text_03")}</StanzaText>
            </DescriptionContainer>

            <CustomList list={valuesItemList} />
          </SocialImpactContainer>
        </>
      )}
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/proposito")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>
        <GlobalNextButton onClick={() => navigate("/texto-diretor-presidente")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
