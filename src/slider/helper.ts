/**
 * @param {number} index level of the inner slider
 * @param {number} radius radius of the slider
 * @param {number} width width of the slider
 * @returns {HTMLElement}
 */
export function createSliderUi(index: number, radius: number, width: number) {
  const sliderContainer = document.createElement("div");
  const activeSlider = document.createElement("div");
  const innerCircle = document.createElement("div");
  const tail = document.createElement("div");

  sliderContainer.style.zIndex = "" + index ?? 0;

  tail.classList.add("tail");
  sliderContainer.classList.add("outer-circle");
  activeSlider.classList.add("active-slider");
  innerCircle.classList.add("inner-circle");

  sliderContainer.style.width = radius * 2 + "px";
  sliderContainer.style.height = radius * 2 + "px";
  activeSlider.style.width = radius * 2 + "px";
  activeSlider.style.height = radius * 2 + "px";
  innerCircle.style.width = (radius - width) * 2 + "px";
  innerCircle.style.height = (radius - width) * 2 + "px";

  sliderContainer.append(activeSlider, innerCircle, tail);

  return { slider: sliderContainer, tail };
}
