// Interface Main
export interface TTimeline {
  id: string | number;
  date: TDate;
  content: TContent;
  icon: string;
  active: boolean;
}

// Interfaces secondary
export interface TDate {
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

export interface TContent {
  tags: string[];
  title: string;
  description: string;
  files?: TFile[];
}
