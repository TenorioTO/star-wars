export const getContrast70 = (hexColor?: string) => {
  if (hexColor) {
    const r = parseInt(hexColor.substring(1, 2), 16);
    const g = parseInt(hexColor.substring(3, 2), 16);
    const b = parseInt(hexColor.substring(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.7 ? "black" : "white";
  }
  return "black";
};
