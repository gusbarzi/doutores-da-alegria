export interface ICustomList {
  list: IList[];
}

export interface IList {
  itemId: number;
  text: string;
  color: string;
  fontFamily: string;
  fontSize: number;
}