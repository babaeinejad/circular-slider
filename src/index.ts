import { getPanelValueItem } from "./helper.js";
import { renderSlider } from "./slider/slider.js";
import { SliderConfig } from "./slider/types.js";

function onSlidersChanged(id: string, value: number) {
  console.log("onSlidersChanged", id, value);
}

const appState: {
  [id: string]: number;
} = {};

function addSlider(
  config: SliderConfig,
  sliderAddedCalback: (label: string, min: number, color: string) => void
) {
  renderSlider(config, onSlidersChanged);
  sliderAddedCalback(config.label!, config.min ?? 0, config.color);
}

function onSliderAdded(id: string, min: number, color: string) {
  const panelContainer = document.getElementById("panel-container");
  const sliderContainer = document.getElementById("slider-container");

  if (!panelContainer) {
    return;
  }
  sliderContainer?.childNodes.forEach((item) => {
    if (!appState[id]) {
      appState[id] = min;
      const panelValueItem = getPanelValueItem(panelContainer, id, min, color);
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
  min: 1000,
  max: 10000,
  color: "blue",
};

const sliderConfig3: SliderConfig = {
  id: "insurance",
  label: "Insurance",
  containerId: "slider-container",
  min: 1000,
  max: 10000,
  color: "green",
};

const sliderConfig4: SliderConfig = {
  id: "entertainment",
  label: "Entertainment",
  containerId: "slider-container",
  min: 1000,
  max: 10000,
  color: "orange",
};

const sliderConfig5: SliderConfig = {
  id: "helthcare",
  label: "Helth Care",
  containerId: "slider-container",
  min: 1000,
  max: 10000,
  color: "red",
};

addSlider(sliderConfig1, onSliderAdded);
addSlider(sliderConfig2, onSliderAdded);
addSlider(sliderConfig3, onSliderAdded);
addSlider(sliderConfig4, onSliderAdded);
addSlider(sliderConfig5, onSliderAdded);
