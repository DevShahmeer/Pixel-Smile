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
