import { SliderChanged, SliderConfig, SliderState } from "./types";

export function renderSlider(
  config: SliderConfig,
  onSlidersChanged: SliderChanged
) {
  const containerId = config?.containerId;
  const container = document.getElementById(containerId);
  if (!containerId || !container) {
    console.error("Provide a valid container for the slider");
  }
  const currentIndex = (container?.childNodes.length ?? 0) + 1;

  const sliderConfig: SliderConfig = {
    radius: config.radius ?? 100,
    min: config.min ?? 0,
    max: config.max ?? 100,
    step: config.step ?? 1,
    color: config.color ?? "rgba(1, 25, 0, 0.9)",
    id: config.id ?? `slider-${currentIndex}`,
    containerId: config.containerId,
    sliderWidth: 20,
    tailWidth: 32,
  };

  const sliderState: SliderState = {
    isActive: false,
    angle: 0,
  };
}
