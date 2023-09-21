export interface SliderConfig {
  radius?: number;
  min?: number;
  max?: number;
  step?: number;
  id: string;
  color: string;
  containerId: string;
}

export interface SliderState {
  isActive: boolean;
  sliderWidth: number;
  tailWidth: number;
  angle: number;
  center: Position;
}

export type Position = {
  x: number;
  y: number;
};

export type SliderChanged<T = any> = (id: string, value: T) => void;
