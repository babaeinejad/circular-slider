/**
 * @param {number} index level of the inner slider
 * @param {number} radius radius of the slider
 * @param {number} width width of the slider
 * @returns {HTMLElement}
 */
export function createSliderUi(index: number, radius: number, width: number) {
  const sliderContainer = document.createElement("div");
  const activePart = document.createElement("div");
  const innerCircle = document.createElement("div");
  const tail = document.createElement("div");

  sliderContainer.style.zIndex = "" + index ?? 0;

  tail.classList.add("tail");
  sliderContainer.classList.add("outer-circle");
  activePart.classList.add("active-slider");
  innerCircle.classList.add("inner-circle");

  sliderContainer.style.width = radius * 2 + "px";
  sliderContainer.style.height = radius * 2 + "px";
  activePart.style.width = radius * 2 + "px";
  activePart.style.height = radius * 2 + "px";
  innerCircle.style.width = (radius - width) * 2 + "px";
  innerCircle.style.height = (radius - width) * 2 + "px";

  sliderContainer.append(activePart, innerCircle, tail);

  return { slider: sliderContainer, tail, activePart };
}
