import React from "react";
import { useTranslation } from "react-i18next";
import {
  BannerContainerDesktop,
  BannerContentDesktop,
  BannerDetailsContainer,
  BlueFlag,
  DirectorDescriptionText,
  DirectorText,
  JokerImage,
} from "../textDirectorPresident.styles";
import {
  GlobalContainer,
  TextContainer,
  Typography,
} from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import {
  TextDivision,
  TextSideDivision,
} from "../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import { SquareColored } from "../../../components/SquareColored";
import jokerTwo from "../../../../public/assets/jokersPng/mobile-recortes4.png";
import { Link } from "react-router-dom";

export const TextDirectorPresidentDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GlobalContainer>
      <BannerContainerDesktop>
        <TextContainer justifyContent="flex-start" align="flex-start">
          <BlueFlag>
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.White}
              fontSize={16}
            >
              Texto diretor-presidente
            </Typography>
          </BlueFlag>
        </TextContainer>
        <BannerContentDesktop>
          <BannerDetailsContainer>
            <TextContainer
              textAlign="left"
              align="flex-start"
              justifyContent="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={60}
              >
                O compromisso com a{" "}
                <span
                  style={{
                    fontFamily: DalegriaFontesEnum.ManualBasicS,
                    color: DalegriaColorsEnum.LightBlue,
                  }}
                >
                  cultura
                </span>{" "}
                e a
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={60}
              >
                defesa do seu financiamento:
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              align="flex-start"
              justifyContent="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={32}
              >
                como enfrentamos os desafios dos últimos anos
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              align="flex-start"
              justifyContent="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.White}
                fontSize={24}
              >
                por Luis Vieira da Rocha,
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.White}
                fontSize={20}
              >
                diretor-presidente
              </Typography>
            </TextContainer>
            <TextSideDivision
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginTop: "-220px",
              }}
            >
              <JokerImage src={jokerTwo} />
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={16}
                textTransform="uppercase"
                style={{
                  writingMode: "vertical-lr",
                  marginBottom: "32px",
                  marginRight: "4px",
                  transform: "rotate(180deg)",
                }}
              >
                foto lana pinho
              </Typography>
            </TextSideDivision>
          </BannerDetailsContainer>
        </BannerContentDesktop>
      </BannerContainerDesktop>

      <TextDivision>
        <TextSideDivision>
          <DirectorDescriptionText>
            <DirectorText>{t("director_text")}</DirectorText>
          </DirectorDescriptionText>

          <TextContainer
            align="flex-start"
            textAlign="center"
            justifyContent="flex-start"
            marginLeft={100}
          >
            <Link
              to="https://doutoresdaalegria.org.br/blog/o-compromisso-com-a-cultura-e-a-defesa-do-seu-financiamento-como-enfrentamos-os-desafios-dos-ultimos-anos/"
              style={{ textDecoration: "none" }}
            >
              <SquareColored
                type="primary"
                backgroundColor={DalegriaColorsEnum.Pink}
                chooseWidth={400}
              >
                <TextContainer
                  align="center"
                  textAlign="center"
                  justifyContent="flex-end"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.White}
                    lineHeight={1}
                    fontSize={20}
                  >
                    confira o link
                  </Typography>
                </TextContainer>
              </SquareColored>
            </Link>
          </TextContainer>
        </TextSideDivision>
      </TextDivision>

      <div
        style={{
          display: "flex",
          backgroundColor: "transparent",
          height: "230px",
        }}
      />
    </GlobalContainer>
  );
};
