import React from "react";
import { useTranslation } from "react-i18next";
import {
  FilesContainer,
  GridContainer,
  GridItemOne,
  GridItemTwo,
} from "./files.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import { DalegriaFontesEnum } from "../../utils/fontes";
import { DalegriaColorsEnum } from "../../utils/colors";

export const Files: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <FilesContainer>
        <TextContainer
          textAlign="left"
          justifyContent="flex-start"
          align="flex-start"
          marginBottom={16}
        >
          <Typography
            fontFamily={DalegriaFontesEnum.ManualBasicS}
            textColor={DalegriaColorsEnum.Pink}
            lineHeight={1}
            fontSize={48}
          >
            {t("retrospective.file.titles.one")}
          </Typography>
        </TextContainer>

        <GridContainer>
          <GridItemOne>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.two")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                Cristina Cardoso
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.tree")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                pollyanna diniz
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={13}
              >
                {t("retrospective.file.titles.four")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                pat cividanes
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.five")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                gustavo barzi
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.six")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                ligia souza
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.seven")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                piffer print
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.eight")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                ARILSON LOPES, CAROLINA KINOSHITA, DANILO LIMA, DAIANE CARINA,
                EDILENE SILVA, LUIS VIEIRA DA ROCHA, MARCELLA CASTILHO, NICE
                VASCONCELOS, ODETE PEIXOTO, PIETRA FERRÃO, RONALDO AGUIAR,
                SILVIA CONTAR E SIMONE PIMENTEL
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                {t("retrospective.file.titles.nine")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                {t("retrospective.file.titles.thirteen")}
              </Typography>
            </TextContainer>
          </GridItemOne>
          <GridItemTwo>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                {t("retrospective.file.titles.ten")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Rua Alves Guimarães, 73
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Pinheiros – 05410-000
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                São Paulo – SP
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                (11) 3061-5523
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                {t("retrospective.file.titles.eleven")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Rua Dona Maria César, 170
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Edifício Luciano Costa
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Sala 201B – 2o. Andar
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Bairro do Recife – 50030-140
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Recife – PE
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                (81) 3466-2373 | 3463-0866
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                99112-4676
              </Typography>
            </TextContainer>

            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdBold}
                textColor={DalegriaColorsEnum.Black}
                textTransform="uppercase"
                fontSize={12}
              >
                {t("retrospective.file.titles.twelve")}
              </Typography>
            </TextContainer>
            <TextContainer
              textAlign="left"
              justifyContent="flex-start"
              align="flex-start"
              marginBottom={16}
            >
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Rua Sebastião de Lacerda, 47
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Laranjeiras – 22240-110
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                Rio de Janeiro – RJ
              </Typography>
              <Typography
                fontFamily={DalegriaFontesEnum.StdLight}
                textColor={DalegriaColorsEnum.Black}
                fontSize={14}
              >
                (21) 2297-4176
              </Typography>
            </TextContainer>
          </GridItemTwo>
        </GridContainer>
      </FilesContainer>
      <ButtonContainer>
        <GlobalBackButton onClick={() => navigate("/parceiros")}>
          <NextButton width={50} height={50} />
        </GlobalBackButton>

        <GlobalNextButton onClick={() => navigate("/fim")}>
          <NextButton width={50} height={50} />
        </GlobalNextButton>
      </ButtonContainer>
    </>
  );
};
