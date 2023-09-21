import { renderSlider } from "./slider/slider.js";
import { SliderConfig } from "./slider/types.js";

export function testFu() {
  return "hi";
}

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
  color: "green",
};
const sliderConfig2: SliderConfig = {
  id: "daily-budget",
  containerId: "container",
  min: 1000,
  max: 10000,
  color: "blue",
};

addSlider(sliderConfig1);
addSlider(sliderConfig2);
