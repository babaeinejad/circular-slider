import { Position } from "./types";

export function getCenter(element: HTMLElement) {
  if (!element) {
    return;
  }
  var rect = element.getBoundingClientRect();
  const centerX = Math.ceil((rect.right - rect.left) / 2);
  const centerY = Math.ceil((rect.bottom - rect.top) / 2);
  return {
    x: centerX,
    y: centerY,
  };
}

export function getAngle(
  center: Position,
  x: number,
  y: number,
  radius: number
) {
  const formattedX =
    x > 0 ? Math.min(x, radius - 10) : Math.min(x, -(radius - 10));
  const formattedY =
    y > 0 ? Math.min(y, radius - 10) : Math.min(y, -(radius - 10));

  let angle =
    90 + Math.ceil((Math.atan2(y - center.y, x - center.x) * 180) / Math.PI);
  if (angle < 0) {
    angle += 361;
  }

  console.log(angle);
  return angle;
}

export function getTailPosition(
  tailWidth: number,
  sliderWidth: number,
  radius: number,
  angleDegrees: number,
  center: Position
) {
  if (!center) {
    return;
  }
  var angleRadians = getRadian(angleDegrees);
  const tailOffset = tailWidth / 2;
  var x =
    radius + (radius - sliderWidth / 2) * Math.cos(angleRadians) - tailOffset;
  var y =
    radius + (radius - sliderWidth / 2) * Math.sin(angleRadians) - tailOffset;

  return { x: x, y: y };
}

export function getRadian(degree: number) {
  return ((degree - 90) * Math.PI) / 180;
}

export function updateElementPosition(
  element: HTMLElement,
  position: Position
) {
  if (!position) {
    return;
  }
  element.style.left = position.x + "px";
  element.style.top = position.y + "px";
}

export function changeGradient(
  element: HTMLElement,
  degree: number,
  color: string
) {
  const gradient = `conic-gradient(
        ${color} 0deg,
        ${color} ${degree}deg,
        transparent ${degree}deg,
        transparent 360deg
    )`;

  element.style.backgroundImage = gradient;
}

export function getSliderRadius(container: HTMLElement, sliderWidth: number) {
  if (!container) {
    return;
  }
  const containerWidth =
    Math.ceil(container.offsetWidth / 2) -
    container.childNodes.length * (sliderWidth + 10);
  const containerHeight =
    Math.ceil(container.offsetHeight / 2) -
    container.childNodes.length * (sliderWidth + 10);
  return Math.min(containerWidth, containerHeight);
}

export function getSliderValue(min: number, max: number, angle: number) {
  return min + Math.ceil((angle / 360) * (max - min));
}
