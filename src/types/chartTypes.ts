export type TChart = {
  labels: string[];
  ids: string[];
  areas: number[];
  bars: number[];
  tags: string[];
  tagBtnStates: TTagBtnStates[];
};

export type TTagBtnStates = {
  tag: string,
  isOn: boolean
}