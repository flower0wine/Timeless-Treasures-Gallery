export function getElementOffsetTop(element) {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

export function getElementOffsetLeft(element) {
  let offsetLeft = 0;
  while (element) {
    offsetLeft += element.offsetLeft;
    element = element.offsetParent;
  }
  return offsetLeft;
}
