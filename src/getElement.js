function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("Element doesn't exist");
}

export default getElement;
