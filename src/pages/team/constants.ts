import { DalegriaColorsEnum } from "../../utils/colors";

import fundador from "../../../public/assets/team/equipe_mobile fundador.png";
import conselhoFiscal from "../../../public/assets/team/equipe_mobile conselho.png";
import diretoriaEstatuaria from "../../../public/assets/team/equipe_mobile2.png";
import marketing from "../../../public/assets/team/equipe_mobile3.png";
import comunicacao from "../../../public/assets/team/equipe_mobile4.png";
import admFinanceiro from "../../../public/assets/team/equipe_mobile5.png";
import it from "../../../public/assets/team/equipe_mobile6.png";
import planejamento from "../../../public/assets/team/equipe_mobile7.png";
import escola from "../../../public/assets/team/equipe_mobile8.png";
import unidadeSp from "../../../public/assets/team/equipe_mobile9.png";

export const valuntários = [
  { name: "Bruna Isabelle Arruda" },
  { name: "Carolina Pinheiro Trabaquim" },
  { name: "Cristina Giangiardi" },
  { name: "Cristina Helena Fukuda" },
  { name: "Giovanna Arredondo" },
  { name: "Jackeline Morena de Oliveira" },
  { name: "Jessica da Silva Rocha" },
  { name: "Jessica Oliveira Viana" },
  { name: "João Vitor Dos Santos Hirata" },
  { name: "Julia Melinchenco" },
  { name: "Larissa Pavan" },
  { name: "Larissa Ramos Porto" },
  { name: "Maria Eliza" },
  { name: "Marina Garcia Caneschi" },
  { name: "Marina Sousa Gouveia" },
  { name: "Naila Teixeira Cezario" },
  { name: "Tarcisio Bezerra" },
  { name: "Tayane Nascimento Gasparello" },
];

export const cursos = [
  { name: "Emilio Terron" },
  { name: "Morgana Masetti" },
  { name: "Raul Figueiredo" },
  { name: "Roberta Calza" },
  { name: "Thaïs Ferrara" },
];

export const jovens_palhaços = [
  { name: "Célio Colella" },
  { name: "Ariadne Pereira" },
  { name: "Cibele Mateus" },
  { name: "Cleiton Doug" },
  { name: "Daiane Ciriaco" },
  { name: "Deise Brito" },
  { name: "Fabio Caniatto" },
  { name: "Fernanda Camilo - Fefê Camilo" },
  { name: "Filipe Bregantim" },
  { name: "Guilherme Ribeiro" },
  { name: "Luciana Viacava" },
  { name: "Mafalda Pequenino" },
  { name: "Marcos Nascimento" },
  { name: "Nereu Afonso" },
  { name: "Heraldo Firmino" },
  { name: "Paola Musatti" },
  { name: "Raniere Guerra" },
  { name: "Silvana de Jesus" },
  { name: "Soladies Produções" },
  { name: "Dioio Produções Artísticas" },
  { name: "T. Angel" },
  { name: "Tiaraju" },
  { name: "Vulcânica Pokaropa" },
  { name: "Thaïs Ferrara" },
  { name: "Marina Santos" },
  { name: "Maré Val Pires" },
  { name: "Tereza Gontijo" },
];

export const imprensa = [
  { name: "Editor - Edson Paes de Melo Filho e Lúcio Nunes (SP)" },
  { name: "Poema Comunicação –Edna Nunes e Pollyanna Diniz (Recife)" },
  { name: "Movimento Essencial – Pamina S. Milewski e Rafaela Lemos (RJ)" },
];

export const ti = [
  {
    name: "Knet – Carlos Sadao Eto, Jonathan Ribeiro Alves e Walter Karl Meyer",
  },
  { name: "Kasi – Adriano Leite e Leandro Metropolo" },
  { name: "QS do Brasil – Cayo Souza, Marcio Dias" },
  { name: "Focus Net – Fernando Luis Rodrigues" },
  { name: "Interhome – Marcos Campos, Marcelo Campos, Danilo Campos" },
];

export interface IDropdownConstent {
  width: string;
  title: string;
  img: any;
  imgWidth: number;
  background: string;
  mobileWidth: string;
  imgWidthMobile: number;
}

export const dropdownContent: IDropdownConstent[] = [
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "Fundador",
    img: fundador,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Blue_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "Conselho Fiscal",
    img: conselhoFiscal,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Purple_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "Diretoria Estatutária - Gestão 2022/23",
    img: diretoriaEstatuaria,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Yellow_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "Marketing e mobilização de recursos",
    img: marketing,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Pink_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "comunicação",
    img: comunicacao,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Blue_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "Administrativo-financeiro",
    img: admFinanceiro,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Purple_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "tecnologia da informação",
    img: it,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Yellow_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "planejamento e jurídico",
    img: planejamento,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Pink_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "escola",
    img: escola,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Blue_100
  },
  {
    width: "1000px",
    mobileWidth: "100%",
    title: "unidade de são paulo",
    img: unidadeSp,
    imgWidth: 400,
    imgWidthMobile: 350,
    background: DalegriaColorsEnum.Purple_100
  },
]