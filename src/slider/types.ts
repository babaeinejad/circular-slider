export interface SliderConfig {
  radius?: number;
  min?: number;
  max?: number;
  step?: number;
  id: string;
  label?: string;
  color: string;
  sliderWidth?: number;
  tailWidth?: number;
  containerId: string;
}

export interface SliderState {
  isActive: boolean;
  angle: number;
  center?: Position;
}

export type Position = {
  x: number;
  y: number;
};

export type SliderChanged<T = any> = (id: string, value: T) => void;
