/*
Write a function called “computePerimeterOfARectangle”.

Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimeter.
*/





function computePerimeterOfARectangle(length, width) {
  return (length + width) * 2;
}
let perimeter = computePerimeterOfARectangle(5, 2);
console.log(perimeter);