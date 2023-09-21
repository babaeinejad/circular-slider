import { renderSlider } from "./slider/slider.js";
import { SliderConfig } from "./slider/types.js";

function onSlidersChanged(id: string, value: number) {
  console.log("onSlidersChanged", id, value);
}

function addSlider(config: SliderConfig) {
  renderSlider(config, onSlidersChanged);
}
const sliderConfig1: SliderConfig = {
  id: "budget",
  containerId: "container",
  min: 100,
  max: 500,
  color: "purple",
};
const sliderConfig2: SliderConfig = {
  id: "daily-budget",
  containerId: "container",
  min: 1000,
  max: 10000,
  color: "blue",
};

const sliderConfig3: SliderConfig = {
  id: "transportation-budget",
  containerId: "container",
  min: 1000,
  max: 10000,
  color: "green",
};

const sliderConfig4: SliderConfig = {
  id: "transportation-budget",
  containerId: "container",
  min: 1000,
  max: 10000,
  color: "orange",
};

const sliderConfig5: SliderConfig = {
  id: "transportation-budget",
  containerId: "container",
  min: 1000,
  max: 10000,
  color: "red",
};

addSlider(sliderConfig1);
addSlider(sliderConfig2);
addSlider(sliderConfig3);
addSlider(sliderConfig4);
addSlider(sliderConfig5);
