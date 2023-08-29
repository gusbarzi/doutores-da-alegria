import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DalegriaContainer,
  GlobalBackButton,
  GlobalNextButton,
} from "../../../../styles/global.styles";
import { ReactComponent as NextButton } from "../../../../../public/assets/setinha-direita.svg";
import { ReactComponent as Artboard } from "../../../../../public/assets/Links/artboard-6.svg";
import { ReactComponent as Caveira } from "../../../../../public/assets/caveira.svg";
import {
  ColorideBackground,
} from "../../xRay.styles";
import { IList } from "../../../../components/CustomList/customList.types";
import { DalegriaColorsEnum } from "../../../../utils/colors";
import { DalegriaFontesEnum } from "../../../../utils/fontes";
import { CustomList } from "../../../../components/CustomList";

export const XRayOne: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const xRayListItens: IList[] = [
    {
      itemId: 1,
      text: t("x_ray.list_item.first"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 2,
      text: t("x_ray.list_item.second"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 3,
      text: t("x_ray.list_item.thirth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 4,
      text: t("x_ray.list_item.fourth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 5,
      text: t("x_ray.list_item.fifth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 6,
      text: t("x_ray.list_item.sixth"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
    {
      itemId: 7,
      text: t("x_ray.list_item.seventh"),
      color: DalegriaColorsEnum.LightBlue,
      fontFamily: DalegriaFontesEnum.StdLight,
      fontSize: 16,
    },
  ];

  return (
    <>
      <Artboard width={390} height={410} />
      <DalegriaContainer choosePadding={0}>
        <ColorideBackground>
          <CustomList list={xRayListItens} />
        </ColorideBackground>

        <Caveira
          width={120}
          height={120}
          style={{ position: "absolute", bottom: "-250px" }}
        />

        <ButtonContainer>
          <GlobalBackButton onClick={() => navigate("/de-dentro-para-fora")}>
            <NextButton width={50} height={50} />
          </GlobalBackButton>
          <GlobalNextButton onClick={() => navigate("/raio-x-02")}>
            <NextButton width={50} height={50} />
          </GlobalNextButton>
        </ButtonContainer>
      </DalegriaContainer>
    </>
  );
};
