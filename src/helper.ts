export function getPanelValueItem(
  container: HTMLElement,
  label: string,
  min: number,
  color: string
) {
  const panelSliderItem = document.createElement("div");
  const panelSliderValue = document.createElement("div");
  const panelSliderLegend = document.createElement("div");
  const panelSliderLabel = document.createElement("div");
  panelSliderItem.classList.add("panel-slider-item");
  panelSliderValue.classList.add("panel-slider-value");
  panelSliderValue.textContent = "" + min;
  panelSliderLegend.classList.add("panel-slider-legend");
  panelSliderLegend.style.backgroundColor = color;
  panelSliderLabel.classList.add("panel-slider-label");
  panelSliderLabel.textContent = label;
  panelSliderItem.append(panelSliderValue, panelSliderLegend, panelSliderLabel);
  container.append(panelSliderItem);
}
