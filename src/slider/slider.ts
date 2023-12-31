import { SliderChanged, SliderConfig, SliderState } from "./types.js";
import {
  changeGradient,
  getAngle,
  getCenter,
  getSliderRadius,
  getSliderValue,
  getTailPosition,
  updateElementPosition,
} from "./utilities.js";
import { createSliderUi } from "./helper.js";

export function testFu() {
  return "hi";
}

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
    min: config.min ?? 0,
    max: config.max ?? 100,
    step: config.step ?? 1,
    color: config.color ?? "rgba(1, 25, 0, 0.9)",
    id: config.id ?? `slider-${currentIndex}`,
    containerId: config.containerId,
    sliderWidth: 20,
    tailWidth: 24,
    radius: config.radius ?? getSliderRadius(container!, 20),
  };

  const sliderState: SliderState = {
    isActive: false,
    angle: 0,
    center: getCenter(container),
  };

  const { slider, tail, activePart } = createSliderUi(
    currentIndex,
    sliderConfig.radius!,
    sliderConfig.sliderWidth!,
    sliderConfig.tailWidth!
  );

  container?.append(slider);

  function handleStart(e: MouseEvent | TouchEvent) {
    sliderState.isActive = true;
    e.stopPropagation();
  }

  function handleEnd() {
    sliderState.isActive = false;
  }

  function handleMove(e: MouseEvent | TouchEvent) {
    let position;
    if (e instanceof TouchEvent) {
      position = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    } else {
      position = {
        x: e.clientX,
        y: e.clientY,
      };
    }
    if (sliderState.isActive) {
      const angle = getAngle(
        sliderState.center!,
        position.x,
        position.y,
        sliderConfig.radius!
      );

      if (
        Math.abs(sliderState.angle - angle) > Math.max(sliderConfig.step!, 300)
      ) {
        return;
      }

      sliderState.angle = angle;

      render();

      const currentValue = getSliderValue(
        sliderConfig.min!,
        sliderConfig.max!,
        sliderConfig.step ?? 1,
        sliderState.angle
      );
      onSlidersChanged(sliderConfig.id, currentValue);
    }
  }

  function handleSliderClick(e: MouseEvent | TouchEvent) {
    sliderState.isActive = true;
    handleMove(e);
    sliderState.isActive = false;
  }

  slider.addEventListener("click", handleSliderClick);
  slider.addEventListener("touchstart", handleSliderClick);

  tail.addEventListener("mousedown", handleStart);
  tail.addEventListener("touchstart", handleStart);

  document.addEventListener("mouseup", handleEnd);
  document.addEventListener("touchend", handleEnd);

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleMove);

  function render() {
    const tailPosition = getTailPosition(
      sliderConfig.tailWidth!,
      sliderConfig.sliderWidth!,
      sliderConfig.radius!,
      sliderState.angle,
      sliderState.center!
    );
    updateElementPosition(tail, tailPosition!);
    changeGradient(activePart, sliderState.angle, sliderConfig.color);
  }

  render();
}
