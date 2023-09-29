import React from "react";
import {
  BannerContainerDesktop,
  BannerContentDesktop,
  BannerDetailsContainer,
} from "../../textDirectorPresident/textDirectorPresident.styles";
import {
  GlobalContainer,
  TextContainer,
  Typography,
} from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import {
  BlueFlag,
  BoardDescriptionText,
  BoardText,
  Division,
  JokerImage,
  Left,
  Right,
} from "../textBoard.styles";
import { SquareColored } from "../../../components/SquareColored";
import jokerFive from "../../../../public/assets/jokersPng/mobile-recortes5.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const TextBoardDesktop: React.FC = () => {
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
              TEXTO DIRETORia
            </Typography>
          </BlueFlag>
        </TextContainer>
        <BannerContentDesktop>
          <BannerDetailsContainer>
            <TextContainer
              textAlign="left"
              align="flex-start"
              justifyContent="flex-start"
              marginBottom={40}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={48}
              >
                Os desafios na defesa da cultura e na
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasicS}
                textColor={DalegriaColorsEnum.Yellow}
                fontSize={48}
              >
                <span
                  style={{
                    fontFamily: DalegriaFontesEnum.ManualBasicS,
                    color: DalegriaColorsEnum.LightBlue,
                  }}
                >
                  gestão
                </span>{" "}
                de uma organização da sociedade civil
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
                por Daiane Carina, Luis Vieira da Rocha,
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.White}
                fontSize={24}
              >
                Ronaldo Aguiar e Simone Ribeiro
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.ManualBasic}
                textColor={DalegriaColorsEnum.White}
                fontSize={20}
              >
                diretoria
              </Typography>
            </TextContainer>
          </BannerDetailsContainer>
        </BannerContentDesktop>
      </BannerContainerDesktop>
      <Division>
        <Left>
          <BoardDescriptionText>
            <BoardText>{t("text_board_text")}</BoardText>
          </BoardDescriptionText>
          <TextContainer
            align="flex-start"
            textAlign="center"
            justifyContent="flex-start"
            marginLeft={100}
          >
            <Link
              to="https://doutoresdaalegria.org.br/blog/os-desafios-na-defesa-da-cultura-e-na-gestao-de-uma-organizacao-da-sociedade-civil/"
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
        </Left>
        <Right>
          <JokerImage src={jokerFive} />
          <Typography
            fontFamily={DalegriaFontesEnum.StdLight}
            textColor={DalegriaColorsEnum.Black}
            fontSize={16}
            textTransform="uppercase"
            style={{
              writingMode: "vertical-lr",
              marginBottom: "16px",
              marginRight: "4px",
              transform: "rotate(180deg)"
            }}
          >
            foto lana pinho
          </Typography>
        </Right>
      </Division>
    </GlobalContainer>
  );
};
