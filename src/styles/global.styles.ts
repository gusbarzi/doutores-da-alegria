import styled, { createGlobalStyle, css } from "styled-components";
import { DalegriaColorsEnum } from "../utils/colors";
import breakpoints from "../utils/breakpoints";

interface ITextContainerStylesProps {
  align?: string;
  textAlign?: string;
  justifyContent?: string;
  chooseGap?: number;
  flexDirection?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  chooseWidth?: number;
  chooseHeight?: number;
}

interface ITypographyStylesProps {
  fontFamily?: string;
  textColor?: string;
  fontSize?: number;
  height?: number;
  width?: number;
  textTransform?: string;
  lineHeight?: number;
  whiteSpace?: string;
}

interface IDelegriaContainerStylesProps {
  choosePadding?: number;
  chooseGap?: number;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body, button, input, textarea {
    background-color: #fbfbfb;
  };

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  };



  @font-face {
    font-family: 'DalegriaManualBasic';
    src: local('DalegriaManualBasic'), url('../../public/fonts/DalegriaManual-Basic.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaManualBasicS';
    src: local('DalegriaManualBasicS'), url('../../public/fonts/DalegriaManual-BasicS.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaManualInline';
    src: local('DalegriaManualInline'), url('../../public/fonts/DalegriaManual-Inline.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaManualSombra';
    src: local('DalegriaManualSombra'), url('../../public/fonts/DalegriaManual-Sombra.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaSimplesBasic';
    src: local('DalegriaSimplesBasic'), url('../../public/fonts/DalegriaSimples-Basic.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaSimplesCirco';
    src: local('DalegriaSimplesCirco'), url('../../public/fonts/DalegriaSimples-Circo.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DalegriaSimplesInlineS';
    src: local('DalegriaSimplesInlineS'), url('../../public/fonts/DalegriaSimples-InlineS.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'VAGRoundedStdBlack';
    src: local('VAGRoundedStdBlack'), url('../../public/fonts/VAGRoundedStd-Black.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'VAGRoundedStdBold';
    src: local('VAGRoundedStdBold'), url('../../public/fonts/VAGRoundedStd-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'VAGRoundedStdLight';
    src: local('VAGRoundedStdLight'), url('../../public/fonts/VAGRoundedStd-Light.otf') format('opentype');
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: 'VAGRoundedStdThin';
    src: local('VAGRoundedStdThin'), url('../../public/fonts/VAGRoundedStd-Thin.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const GlobalContainer = styled.div<{ fullwidth?: boolean }>`
  max-width: ${({ fullwidth }) => (fullwidth ? "none" : "1500px")};
  margin: 0 auto;
`;

export const GlobalBackButton = styled.button`
  background-color: transparent;
  color: ${DalegriaColorsEnum.LightBlue};
  border: none;
  outline: none;
  transform: scaleX(-1);
`;

export const GlobalNextButton = styled.button`
  background-color: transparent;
  color: ${DalegriaColorsEnum.LightBlue};
  border: none;
  outline: none;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
`;

export const ButtonContainerTwo = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  padding: 16px;
`;

export const TextContainer = styled.div<ITextContainerStylesProps>`
  display: flex;

  ${({
    align,
    textAlign,
    justifyContent,
    chooseGap,
    flexDirection,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    chooseWidth,
    chooseHeight,
  }) => css`
    align-items: ${align ? align : "center"};
    justify-content: ${justifyContent ? justifyContent : "center"};
    text-align: ${textAlign ? textAlign : "center"};
    gap: ${chooseGap ? `${chooseGap}px` : 0};
    width: ${chooseWidth ? `${chooseWidth}px` : "100%"};
    height: ${chooseHeight ? `${chooseHeight}px` : ""};
    flex-direction: ${flexDirection ? flexDirection : "column"};
    margin-top: ${`${marginTop}px`};
    margin-left: ${`${marginLeft}px`};
    margin-bottom: ${`${marginBottom}px`};
    margin-right: ${`${marginRight}px`};
  `}
`;

export const Typography = styled.span<ITypographyStylesProps>`
  ${({
    fontFamily,
    fontSize,
    textColor,
    height,
    width,
    textTransform,
    lineHeight,
    whiteSpace
  }) => css`
    font-family: ${fontFamily};
    color: ${textColor};
    font-size: ${`${fontSize}px`};
    height: ${`${height}px`};
    width: ${`${width}px`};
    text-transform: ${textTransform};
    line-height: ${lineHeight};
    white-space: ${whiteSpace};
  `};
`;

export const DalegriaContainer = styled.div<IDelegriaContainerStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ choosePadding, chooseGap }) => css`
    padding: ${`${choosePadding}px`};
    gap: ${`${chooseGap}px`};
  `}
`;

export const BackgroundBlueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${DalegriaColorsEnum.LightBlue};
  padding: 16px;

  ${breakpoints.higherThan("desktop")} {
    padding: 24px 40px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
`;
