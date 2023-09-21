import { testFu } from "../slider";
import { getAngle, getTailPosition } from "../utilities";

describe("slider utility functions", () => {
  test("Returns the correct angle", function () {
    const center = {
      x: 150,
      y: 150,
    };
    const radius = 100;
    let x = 500;
    let y = 500; // coordinates for the midpoint of the second quadrant
    let angle = getAngle(center, x, y, radius);
    expect(angle).toBe(135);

    x = 0;
    y = 300; // coordinates for the midpoint of the third quadrant
    angle = getAngle(center, x, y, radius);
    expect(angle).toBe(225);
  });

  test("Tail is correctly positioned", function () {
    let tailWidth = 30;
    let sliderWidth = 20;
    let radius = 100;
    let angleDegree = 0;
    let center = {
      x: 150,
      y: 150,
    };

    let tailPosition = getTailPosition(
      tailWidth,
      sliderWidth,
      radius,
      angleDegree,
      center
    );

    // Assuming the main container is 300 x 300 pixels in size, and taking into account the dimensions
    // of the tail, width, and slider elements, the x position (distance from the left edge of the container)
    // should be set to 85 pixels.
    expect(Math.abs(tailPosition?.x! - 85)).toBeLessThan(1);
    expect(Math.abs(tailPosition?.y! - -5)).toBeLessThan(1);

    angleDegree = 90;

    tailPosition = getTailPosition(
      tailWidth,
      sliderWidth,
      radius,
      angleDegree,
      center
    );

    expect(Math.abs(tailPosition?.x! - 175)).toBeLessThan(1);
    expect(Math.abs(tailPosition?.y! - 85)).toBeLessThan(1);
  });
});
