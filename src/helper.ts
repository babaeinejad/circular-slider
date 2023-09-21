import { SliderConfig } from "./slider/types";

export function getPanelValueItem(
  container: HTMLElement,
  sliderConfig: SliderConfig
) {
  const panelSliderItem = document.createElement("div");
  const panelSliderValue = document.createElement("div");
  const panelSliderLegend = document.createElement("div");
  const panelSliderLabel = document.createElement("div");
  panelSliderItem.classList.add("panel-slider-item");
  panelSliderItem.id = `panelItem-${sliderConfig.id}`;
  panelSliderValue.classList.add("panel-slider-value");
  panelSliderValue.textContent = "" + sliderConfig.min;
  panelSliderLegend.classList.add("panel-slider-legend");
  panelSliderLegend.style.backgroundColor = sliderConfig.color;
  panelSliderLabel.classList.add("panel-slider-label");
  panelSliderLabel.textContent = sliderConfig.label ?? "";
  panelSliderItem.append(panelSliderValue, panelSliderLegend, panelSliderLabel);
  container.append(panelSliderItem);
}
