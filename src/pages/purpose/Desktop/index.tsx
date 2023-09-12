import { useTranslation } from "react-i18next";
import breakpoints from "../../../utils/breakpoints";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { IList } from "../../../components/CustomList/customList.types";
import {
  BackgroundYellowDesktop,
  JokerImage,
  PurposeContainerDesktop,
} from "../purpose.styles";
import {
  GlobalContainer,
  TextContainer,
  Typography,
} from "../../../styles/global.styles";
import { CustomList } from "../../../components/CustomList";
import jokerOne from "../../../../public/assets/jokersPng/mobile-recortes2.png";
import { TextSideDivision } from "../../retrospective/subpages/retrospectiveFive/retrospectiveFive.styles";

export const PurposeDesktop: React.FC = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(breakpoints.higherThan("desktop"));
  const selectLosangoColor = isDesktop
    ? DalegriaColorsEnum.White
    : DalegriaColorsEnum.Yellow;
  const selectFontsizeList = isDesktop ? 24 : 16;

  const taskInstList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_text_01"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("purpose_text_02"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
  ];

  const valuesItemList: IList[] = [
    {
      itemId: 1,
      text: t("purpose_values.art_culture"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 2,
      text: t("purpose_values.liberty_expression"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 3,
      text: t("purpose_values.transparent"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 4,
      text: t("purpose_values.art_education"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 5,
      text: t("purpose_values.search-simplicity"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 6,
      text: t("purpose_values.happy_state"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
    {
      itemId: 7,
      text: t("purpose_values.search_multscadule"),
      color: selectLosangoColor,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: selectFontsizeList,
    },
  ];

  return (
    <GlobalContainer>
      <PurposeContainerDesktop>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: "-10px",
            marginRight: "-50px",
            zIndex: "10"
          }}
        >
          <JokerImage src={jokerOne} />
        </div>
        <BackgroundYellowDesktop>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={24}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasicS}
              textColor={DalegriaColorsEnum.LightBlue}
              fontSize={80}
            >
              Qual o nosso
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasicS}
              textColor={DalegriaColorsEnum.Pink}
              fontSize={80}
            >
              propósito
            </Typography>
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasicS}
              textColor={DalegriaColorsEnum.Purple}
              fontSize={80}
            >
              ?
            </Typography>
          </TextContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={24}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Red}
              fontSize={32}
            >
              Tarefa Institucional
            </Typography>
          </TextContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={24}
          >
            <CustomList list={taskInstList} />
          </TextContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={24}
          >
            <Typography
              fontFamily={DalegriaFontesEnum.ManualBasic}
              textColor={DalegriaColorsEnum.Red}
              fontSize={32}
            >
              Valores
            </Typography>
          </TextContainer>
          <TextContainer
            textAlign="left"
            justifyContent="flex-start"
            align="flex-start"
            marginBottom={24}
          >
            <CustomList list={valuesItemList} />
          </TextContainer>
        </BackgroundYellowDesktop>
      </PurposeContainerDesktop>
    </GlobalContainer>
  );
};
