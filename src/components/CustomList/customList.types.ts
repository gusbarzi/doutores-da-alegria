export interface ICustomList {
  list: IList[];
  chooseWidth?: number;
}

export interface IList {
  itemId: number;
  text: string;
  color: string;
  fontFamily: string;
  fontSize: number;
  fontColor?: string;
}