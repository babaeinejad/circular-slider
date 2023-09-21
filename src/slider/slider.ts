import { createSliderUi } from "./helper";
import { SliderChanged, SliderConfig, SliderState } from "./types";
import {
  changeGradient,
  getAngle,
  getSliderValue,
  getTailPosition,
  updateElementPosition,
} from "./utilities";

export function renderSlider(
  config: SliderConfig,
  onSlidersChanged: SliderChanged
) {
  const containerId = config?.containerId;
  const container = document.getElementById(containerId);

  if (!containerId || !container) {
    console.error("Provide a valid container for the slider");
    return;
  }

  const currentIndex = (container?.childNodes.length ?? 0) + 1;
  const sliderConfig: SliderConfig = {
    radius: config?.radius ?? 100,
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

  const { slider, tail, activePart } = createSliderUi(
    currentIndex,
    sliderConfig.radius!,
    sliderConfig.sliderWidth!
  );

  container?.append(slider);

  tail.addEventListener("mousedown", () => {
    sliderState.isActive = true;
  });

  document.addEventListener("mouseup", () => {
    sliderState.isActive = false;
  });

  document.addEventListener("mousemove", (e) => {
    if (sliderState.isActive) {
      const angle = getAngle(
        sliderState.center!,
        e.clientX,
        e.clientY,
        sliderConfig.radius!
      );

      if (Math.abs(sliderState.angle - angle) > 10) {
        return;
      }

      sliderState.angle = angle;

      render();

      const currentValue = getSliderValue(
        sliderConfig.min!,
        sliderConfig.max!,
        sliderState.angle
      );
      onSlidersChanged(sliderConfig.id, currentValue);
    }
  });

  function render() {
    const tailPosition = getTailPosition(
      sliderConfig.tailWidth!,
      sliderConfig.sliderWidth!,
      sliderConfig.radius!,
      sliderState.angle,
      sliderState.center!
    );
    updateElementPosition(tail, sliderState.center!, tailPosition!);
    changeGradient(activePart, sliderState.angle, sliderConfig.color);
  }
}
