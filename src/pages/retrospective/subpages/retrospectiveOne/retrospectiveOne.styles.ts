import breakpoints from '../../../../utils/breakpoints';
import { DalegriaColorsEnum } from './../../../../utils/colors';
import { DalegriaFontesEnum } from './../../../../utils/fontes';
import { styled } from "styled-components";

export const DivisorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  ${breakpoints.higherThan('desktop')} {
    justify-content: center;
    align-items: center;
  }
`;

export const LeftTextFirstStanza = styled.div`
  display: flex;
  margin-left: 15px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const RightTextFirstStanza = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
  text-transform: uppercase;

  ${breakpoints.higherThan('desktop')} {
    width: 380px;
  }
`;

export const SecondStanzaDivisor = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TwoHundredContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftTextSecondStanza = styled.div`
  display: flex;
  width: 120px;
  margin-left: 20px;
  margin-bottom: 65px;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;

  ${breakpoints.higherThan('desktop')} {
    width: 250px;
    margin-bottom: 210px;
  }
`;

export const RightTextSecondStanza = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RetrospectiveHiperContainer = styled.div`
  display: flex;
  padding: 0 60px;
  margin-bottom: 50px;
  width: 100%;
  gap: 60px;
`;

export const LeftSide = styled.div`
  width: 100%;
`

export const RightSide = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageContainerDesktop = styled.div`
  position: absolute;
  right: 600px;
  top: 770px;
`;

export const RetrospectiveOneBannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const RetrospectiveOneBannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 330px;

  background-color: ${DalegriaColorsEnum.Yellow};
`;

export const RetrospectiveOneBannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
`;