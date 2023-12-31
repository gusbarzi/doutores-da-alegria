import { styled } from "styled-components";
import breakpoints from "../../../../utils/breakpoints";

export const RetrospectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RetrospectiveHiperContainerDesktop = styled.div`
  display: flex;
  width: 100%;
`;

export const RetroLeftSide = styled.div`
  width: 100%;
`;

export const RetroRightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JokerImage = styled.img`
  width: 100%;

  ${breakpoints.higherThan('desktop')} {
    width: 560px;
  }
`;