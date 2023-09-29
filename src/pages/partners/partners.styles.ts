import { styled } from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const PartnersContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;

  ${breakpoints.higherThan('desktop')} {
    margin-bottom: 16px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: -65px;

  ${breakpoints.higherThan("desktop")} {
    grid-template-columns: repeat(3, 1fr);

    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: red;
    }

    &::before {
      left: calc(33.33% - 4px);
    }

    &::after {
      left: calc(66.66% + 2px);
    }
  }
`;

export const GridItemOne = styled.div`
  width: 120px;
  height: 500px;
  display: flex;
  flex-direction: column;

  ${breakpoints.higherThan("desktop")} {
    width: 150px;
  }
`;

export const GridItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 500px;

  ${breakpoints.higherThan("desktop")} {
    width: 140px;
  }
`;

export const GridItemTree = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 500px;

  ${breakpoints.higherThan("desktop")} {
    width: 140px;
  }
`;

export const PartnerImagesContaienr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const PartnerImg = styled.img`
  width: 100%;

  ${breakpoints.higherThan("desktop")} {
    width: 60%;
  }
`;
