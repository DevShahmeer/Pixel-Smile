// Create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// Draw the head
drawRectangle(0, 0, 20, 8);

// Function to draw a single pixel (dot) at the specified position
function drawDot(x: number, y: number) {
  if (isPointInImage(x, y)) {
    imageData[y * imageWidth + x] = true;
  }
}

// Draw the eyes
drawDot(7, 2);
drawDot(12, 2);

// Draw the smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);


// Output the image to the console
outputImage();

// Function to draw a horizontal line
function drawHorizontalLine(x: number, y: number, length: number) {
  for (let i = 0; i < length; i++) {
    drawDot(x + i, y);
  }
}

// Function to draw a vertical line
function drawVerticalLine(x: number, y: number, length: number) {
  for (let i = 0; i < length; i++) {
    drawDot(x, y + i);
  }
}

// Function to draw a rectangle
function drawRectangle(x: number, y: number, width: number, height: number) {
  // Top
  drawHorizontalLine(x, y, width);
  // Bottom
  drawHorizontalLine(x, y + height - 1, width);
  // Left
  drawVerticalLine(x, y, height);
  // Right
  drawVerticalLine(x + width - 1, y, height);
}

/**
 * Checks if the provided point is within the image boundaries.
 * @param x - The horizontal position within the image.
 * @param y - The vertical position within the image.
 * @returns {boolean} - `true` if the point is within the image, `false` otherwise.
 */
function isPointInImage(x: number, y: number): boolean {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an "on" pixel with.
 * @param offChar - Character to render an "off" pixel with.
 */
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // New line
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel is "on" when the value is `true` and "off" when the value is `false`.
 * The pixel values are stored in rows (row-major order).
 * @returns {boolean[]} - An array representing the image data.
 */
function createImageData(): boolean[] {
  // Create an array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}