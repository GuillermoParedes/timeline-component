export enum TOrder {
  upward,
  downward,
}

// Interface Main
export interface TTimeline {
  id: string | number;
  leftContent: ILeftContent;
  rightContent: IRightContent;
  icon: string;
  active: boolean;
}

// Interfaces secondary
export interface ILeftContent {
  day: string;
  date: string;
  hour: string;
}
export interface TFile {
  id: string;
  type?: string;
  icon: string;
  url: string;
}

export interface IRightContent {
  tags: string[];
  title: string;
  description: string;
  files?: TFile[];
}
