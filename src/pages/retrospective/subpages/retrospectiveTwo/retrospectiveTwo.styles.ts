import breakpoints from '../../../../utils/breakpoints';
import { DalegriaColorsEnum } from '../../../../utils/colors';
import { DalegriaFontesEnum } from '../../../../utils/fontes';
import { styled } from "styled-components";

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 16px;
  gap: 8px;

  ${breakpoints.higherThan('desktop')} {
    gap: 4px;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftText = styled.div`
  display: flex;
`;

export const RightText = styled.div`
  display: flex;
  width: 120px;

  ${breakpoints.higherThan('desktop')} {
    width: 300px;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  background-color: ${DalegriaColorsEnum.Yellow};
  padding: 16px;
`;

export const TextDirection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const RetrospectiveContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
`;

export const OriginalArtOne = styled.img`
  width: 100%;
`;

export const RetrospectiveHiperContainerDesktop = styled.div`
  display: flex;
  width: 100%;
`;

export const RetroLeftSide = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const RetroRightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;