import { useTranslation } from "react-i18next";
import breakpoints from "../../../utils/breakpoints";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { DalegriaColorsEnum } from "../../../utils/colors";
import { DalegriaFontesEnum } from "../../../utils/fontes";
import { IList } from "../../../components/CustomList/customList.types";
import {
  BannerContainer,
  DescriptionContainer,
  DescriptionTitle,
  PurposeContainer,
  ValuesContainer,
} from "../purpose.styles";
import { CustomList } from "../../../components/CustomList";
import { ArtboardImage } from "../../opening/opening.styles";
import artImage from "../../../../public/assets/PNGS/Outros/Artboard 1.png";


export const PurposeMobile: React.FC = () => {
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
    <PurposeContainer>
      <BannerContainer>
        <ArtboardImage src={artImage} />
      </BannerContainer>
      <DescriptionContainer>
        <DescriptionTitle>Tarefa Institucional</DescriptionTitle>
        <CustomList list={taskInstList} />
      </DescriptionContainer>
      <ValuesContainer>
        <DescriptionTitle>Valores</DescriptionTitle>
        <CustomList list={valuesItemList} />
      </ValuesContainer>
    </PurposeContainer>
  );
};
