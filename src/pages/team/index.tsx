import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackgroundLightBue,
  TeamContainer,
  TeamContentDesktop,
} from "./team.styles";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  GlobalBackButton,
  GlobalContainer,
  GlobalNextButton,
  TextContainer,
  Typography,
} from "../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../public/assets/setinha-direita.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../utils/breakpoints";
import { Dropdown } from "../../components/Dropdown";

//teams
import sampaArtistasOne from "../../../public/assets/team/equipe_mobile10.png";
import sampaArtistasTwo from "../../../public/assets/team/equipe_mobile11.png";
import sampaArtistasTree from "../../../public/assets/team/equipe_mobile12.png";
import unidadeRecife from "../../../public/assets/team/equipe_mobile13.png";
import recifeArtistasOne from "../../../public/assets/team/equipe_mobile14.png";
import recifeArtistasTwo from "../../../public/assets/team/equipe_mobile15.png";
import unidadeRio from "../../../public/assets/team/equipe_mobile16.png";
import { DalegriaColorsEnum } from "../../utils/colors";
import {
  TextDivision,
  TextSideDivision,
} from "../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";
import { DalegriaFontesEnum } from "../../utils/fontes";
import {
  cursos,
  dropdownContent,
  imprensa,
  jovens_palhaços,
  ti,
  valuntários,
} from "./constants";

export const Team: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));

  const handleNext = () => {
    navigate("/parceiros")
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    navigate("/prestacao-de-contas-03")
    window.scrollTo(0, 0);
  }

  return (
    <>
      <TeamContainer>
        {isDesktop ? (
          <GlobalContainer>
            <TeamContentDesktop>
              {dropdownContent.map((item) => (
                <Dropdown
                  key={item.img}
                  chooseWidth={item.width}
                  chooseHeaderText={item.title}
                  children={<img src={item.img} width={item.imgWidth} />}
                  chooseBackgroundColor={item.background}
                />
              ))}
              <Dropdown
                chooseWidth="1000px"
                chooseHeaderText="Artistas de são paulo"
                children={
                  <TextDivision>
                    <img src={sampaArtistasOne} width={310} />
                    <img src={sampaArtistasTwo} width={310} />
                    <img src={sampaArtistasTree} width={310} height={585} />
                  </TextDivision>
                }
                chooseBackgroundColor={DalegriaColorsEnum.Yellow_100}
              />
              <Dropdown
                chooseWidth="1000px"
                chooseHeaderText="unidade de recife"
                children={<img src={unidadeRecife} width={400} />}
                chooseBackgroundColor={DalegriaColorsEnum.Pink_100}
              />
              <Dropdown
                chooseWidth="1000px"
                chooseHeaderText="Artistas de recife"
                children={
                  <TextDivision>
                    <img src={recifeArtistasOne} width={400} />
                    <img src={recifeArtistasTwo} width={400} height={485} />
                  </TextDivision>
                }
                chooseBackgroundColor={DalegriaColorsEnum.Blue_100}
              />
              <Dropdown
                chooseWidth="1000px"
                chooseHeaderText="unidade de rio de janeiro"
                children={<img src={unidadeRio} width={400} />}
                chooseBackgroundColor={DalegriaColorsEnum.Purple_100}
              />

              <BackgroundLightBue>
                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    textTransform="uppercase"
                    fontSize={32}
                  >
                    Colaboradores externos
                  </Typography>
                </TextContainer>
                <TextDivision>
                  <TextSideDivision>
                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        Valuntários - nota fiscal paulista
                      </Typography>
                      {valuntários.map((names) => (
                        <Typography
                          key={names.name}
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={14}
                        >
                          {names.name}
                        </Typography>
                      ))}
                    </TextContainer>

                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        cursos e aulas abertas
                      </Typography>
                      {cursos.map((names) => (
                        <Typography
                          key={names.name}
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={14}
                        >
                          {names.name}
                        </Typography>
                      ))}
                    </TextContainer>
                  </TextSideDivision>

                  <TextSideDivision>
                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        programa de formação de palhaços para jovens
                      </Typography>
                      {jovens_palhaços.map((names) => (
                        <Typography
                          key={names.name}
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={14}
                        >
                          {names.name}
                        </Typography>
                      ))}
                    </TextContainer>
                  </TextSideDivision>
                  <TextSideDivision>
                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        assessorias
                      </Typography>
                    </TextContainer>

                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        Gestão de pessoas
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={14}
                      >
                        Regina Leite
                      </Typography>
                    </TextContainer>

                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        Imprensa
                      </Typography>
                      {imprensa.map((names) => (
                        <Typography
                          key={names.name}
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={14}
                        >
                          {names.name}
                        </Typography>
                      ))}
                    </TextContainer>

                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        Morgana Masetti (até fevereiro)
                      </Typography>
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdLight}
                        textColor={DalegriaColorsEnum.Black}
                        fontSize={14}
                      >
                        Regina Leite
                      </Typography>
                    </TextContainer>

                    <TextContainer
                      justifyContent="flex-start"
                      align="flex-start"
                      textAlign="left"
                      marginBottom={16}
                    >
                      <Typography
                        fontFamily={DalegriaFontesEnum.StdBold}
                        textColor={DalegriaColorsEnum.Black}
                        textTransform="uppercase"
                        fontSize={16}
                      >
                        Imprensa
                      </Typography>
                      {ti.map((names) => (
                        <Typography
                          key={names.name}
                          fontFamily={DalegriaFontesEnum.StdLight}
                          textColor={DalegriaColorsEnum.Black}
                          fontSize={14}
                        >
                          {names.name}
                        </Typography>
                      ))}
                    </TextContainer>
                  </TextSideDivision>
                </TextDivision>
              </BackgroundLightBue>
            </TeamContentDesktop>
          </GlobalContainer>
        ) : (
          <>
            <TeamContentDesktop>
              {dropdownContent.map((item) => (
                <Dropdown
                  key={item.img}
                  chooseWidth={isDesktop ? item.width : item.mobileWidth}
                  chooseHeaderText={item.title}
                  children={<img src={item.img} width={isDesktop ? item.imgWidth : item.imgWidthMobile} />}
                  chooseBackgroundColor={item.background}
                />
              ))}
              <Dropdown
                chooseWidth="100%"
                chooseHeaderText="Artistas de são paulo"
                children={
                  <TextDivision style={{ display: "flex", flexDirection: "column"}}>
                    <img src={sampaArtistasOne} width={350} />
                    <img src={sampaArtistasTwo} width={350} />
                    <img src={sampaArtistasTree} width={350} height={650} />
                  </TextDivision>
                }
                chooseBackgroundColor={DalegriaColorsEnum.Yellow_100}
              />
              <Dropdown
                chooseWidth="100%"
                chooseHeaderText="unidade de recife"
                children={<img src={unidadeRecife} width={400} />}
                chooseBackgroundColor={DalegriaColorsEnum.Pink_100}
              />
              <Dropdown
                chooseWidth="100%"
                chooseHeaderText="Artistas de recife"
                children={
                  <TextDivision style={{ display: "flex", flexDirection: "column"}}>
                    <img src={recifeArtistasOne} width={400} />
                    <img src={recifeArtistasTwo} width={400} height={485} />
                  </TextDivision>
                }
                chooseBackgroundColor={DalegriaColorsEnum.Blue_100}
              />
              <Dropdown
                chooseWidth="100%"
                chooseHeaderText="unidade de rio de janeiro"
                children={<img src={unidadeRio} width={400} />}
                chooseBackgroundColor={DalegriaColorsEnum.Purple_100}
              />

              <BackgroundLightBue>
                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.ManualBasic}
                    textColor={DalegriaColorsEnum.Yellow}
                    textTransform="uppercase"
                    fontSize={32}
                  >
                    Colaboradores externos
                  </Typography>
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    Valuntários - nota fiscal paulista
                  </Typography>
                  {valuntários.map((names) => (
                    <Typography
                      key={names.name}
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      {names.name}
                    </Typography>
                  ))}
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    cursos e aulas abertas
                  </Typography>
                  {cursos.map((names) => (
                    <Typography
                      key={names.name}
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      {names.name}
                    </Typography>
                  ))}
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    programa de formação de palhaços para jovens
                  </Typography>
                  {jovens_palhaços.map((names) => (
                    <Typography
                      key={names.name}
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      {names.name}
                    </Typography>
                  ))}
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    assessorias
                  </Typography>
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    Gestão de pessoas
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Regina Leite
                  </Typography>
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    Imprensa
                  </Typography>
                  {imprensa.map((names) => (
                    <Typography
                      key={names.name}
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      {names.name}
                    </Typography>
                  ))}
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    Morgana Masetti (até fevereiro)
                  </Typography>
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdLight}
                    textColor={DalegriaColorsEnum.Black}
                    fontSize={14}
                  >
                    Regina Leite
                  </Typography>
                </TextContainer>

                <TextContainer
                  justifyContent="flex-start"
                  align="flex-start"
                  textAlign="left"
                  marginBottom={16}
                >
                  <Typography
                    fontFamily={DalegriaFontesEnum.StdBold}
                    textColor={DalegriaColorsEnum.Black}
                    textTransform="uppercase"
                    fontSize={16}
                  >
                    Imprensa
                  </Typography>
                  {ti.map((names) => (
                    <Typography
                      key={names.name}
                      fontFamily={DalegriaFontesEnum.StdLight}
                      textColor={DalegriaColorsEnum.Black}
                      fontSize={14}
                    >
                      {names.name}
                    </Typography>
                  ))}
                </TextContainer>
              </BackgroundLightBue>
            </TeamContentDesktop>
          </>
        )}
      </TeamContainer>
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
