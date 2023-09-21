export interface SliderConfig {
  radius?: number;
  min?: number;
  max?: number;
  step?: number;
  id: string;
  color: string;
  containerId: string;
}

export type Position = {
  x: number;
  y: number;
};

export type SliderChanged<T = any> = (id: string, value: T) => void;
