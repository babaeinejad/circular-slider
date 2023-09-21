import { renderSlider } from "./slider/slider.js";

export function testFu() {
  return "hi";
}

function onSlidersChanged(id: string, value: number) {
  console.log("onSlidersChanged", id, value);
}

function addSlider(config: any) {
  renderSlider(config, onSlidersChanged);
}
const sliderConfig1 = {
  containerId: "container",
};
const sliderConfig2 = {
  containerId: "container",
};

addSlider(sliderConfig1);
addSlider(sliderConfig2);
