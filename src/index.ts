import { getPanelValueItem } from "./helper.js";
import { renderSlider } from "./slider/slider.js";
import { SliderConfig } from "./slider/types.js";

function onSlidersChanged(id: string, value: number) {
  appState[id] = value;
  renderPanelItem(id);
}

const appState: {
  [id: string]: number;
} = {};

function renderPanelItem(id: string) {
  const panelItem = document.getElementById(`panelItem-${id}`);
  const valueContainer = panelItem?.querySelector(".panel-slider-value");
  if (valueContainer) {
    valueContainer.textContent =
      appState[id] < 50 ? appState[id].toFixed(2) + "" : appState[id] + "";
  }
}

function addSlider(
  config: SliderConfig,
  sliderAddedCalback: (config: SliderConfig) => void
) {
  renderSlider(config, onSlidersChanged);
  sliderAddedCalback(config);
}

function onSliderAdded(config: SliderConfig) {
  const panelContainer = document.getElementById("panel-container");
  const sliderContainer = document.getElementById("slider-container");

  if (!panelContainer) {
    return;
  }
  sliderContainer?.childNodes.forEach((item) => {
    if (!appState[config.id]) {
      appState[config.id!] = config.min ?? 0;
      const panelValueItem = getPanelValueItem(panelContainer, config);
    }
  });
}

const sliderConfig1: SliderConfig = {
  id: "transportation",
  label: "Transportation",
  containerId: "slider-container",
  min: 100,
  max: 500,
  color: "purple",
};

const sliderConfig2: SliderConfig = {
  id: "food",
  label: "Food",
  containerId: "slider-container",
  min: 0,
  max: 1,
  step: 0.01,
  color: "blue",
};

const sliderConfig3: SliderConfig = {
  id: "insurance",
  label: "Insurance",
  containerId: "slider-container",
  min: 100,
  max: 500,
  color: "green",
};

const sliderConfig4: SliderConfig = {
  id: "entertainment",
  label: "Entertainment",
  containerId: "slider-container",
  min: 10,
  max: 50,
  step: 0.5,
  color: "orange",
};

const sliderConfig5: SliderConfig = {
  id: "helthcare",
  label: "Helth Care",
  containerId: "slider-container",
  min: 0,
  max: 10000,
  step: 100,
  color: "red",
};

addSlider(sliderConfig1, onSliderAdded);
addSlider(sliderConfig2, onSliderAdded);
addSlider(sliderConfig3, onSliderAdded);
addSlider(sliderConfig4, onSliderAdded);
addSlider(sliderConfig5, onSliderAdded);
