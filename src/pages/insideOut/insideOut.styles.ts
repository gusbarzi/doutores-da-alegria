import { styled } from "styled-components";
import { DalegriaColorsEnum } from "../../utils/colors";

export const InsideOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 60px;
  gap: 16px;
  margin-top: 100px;
`;

export const InsideOutBannerContainerDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 60px;

  justify-content: center;
  align-items: center;
`;

export const InsideOutBannerContentDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 330px;

  background-color: ${DalegriaColorsEnum.Purple};
`;

export const InsideOutBannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 32px;
`;

export const HiperContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const JokerImage = styled.img`
  width: 500px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  position: relative;
  flex-direction: column;
`;

export const Division = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 100px;
`;