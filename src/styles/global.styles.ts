import styled, { createGlobalStyle } from "styled-components";
import { DalegriaColorsEnum } from "../utils/colors";

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

export const GlobalNextButton = styled.button`
  background-color: transparent;
  color: ${DalegriaColorsEnum.LightBlue};
  border: none;
  outline: none;
`;