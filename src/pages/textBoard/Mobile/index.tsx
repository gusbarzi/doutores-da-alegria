import React from "react";
import { ArtboardImage } from "../../socialImpact/socialImpact.styles";
import { TextContainer, Typography } from "../../../styles/global.styles";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { DalegriaColorsEnum } from "../../../utils/colors";
import {
  BannerContainer,
  BoardDescriptionText,
  BoardText,
  TextBoardContainer,
} from "../textBoard.styles";
import { SquareColored } from "../../../components/SquareColored";
import artImage from "../../../../public/assets/PNGS/Outros/Artboard 4.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const TextBoardMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BannerContainer>
        <ArtboardImage src={artImage} />
      </BannerContainer>
      <TextBoardContainer>
        <BoardDescriptionText>
          <BoardText>{t("text_board_text")}</BoardText>
        </BoardDescriptionText>
        <TextContainer
          align="center"
          textAlign="center"
          justifyContent="flex-end"
          chooseWidth={390}
        >
          <Link
            to="https://doutoresdaalegria.org.br/blog/os-desafios-na-defesa-da-cultura-e-na-gestao-de-uma-organizacao-da-sociedade-civil/"
            style={{ textDecoration: "none" }}
          >
            <SquareColored
              type="primary"
              backgroundColor={DalegriaColorsEnum.Pink}
              chooseWidth={330}
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
      </TextBoardContainer>
    </>
  );
};
