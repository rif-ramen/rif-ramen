export const registerControllers = async (stimulus) => {
  const importMap = await import.meta.glob("../controllers/*.js", {
    eager: true,
  });

  Object.keys(importMap).forEach(async (key) => {
    const controllerName = key
      .split("../controllers/")[1]
      .split("-controller.js")[0];
    const { default: controllerModule } = await importMap[key];
    stimulus.register(controllerName, controllerModule);
  });
};

export const zeropad = (number, length = 7) => {
  if (isNaN(number))
    throw new SyntaxError("zeropad requires a number or string");

  if (typeof length !== "undefined" && (isNaN(length) || length < 0))
    throw new SyntaxError("zeropad requires a positive integer for length");

  number = Math.abs(parseFloat(number));
  const padLength = length - String(number).length + 1;
  const pads = new Array(padLength).join("0");
  return pads + number;
};

export const formatSecondsToDuration = (durationSeconds) => {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

  return `${zeropad(minutes, 2)}:${zeropad(seconds, 2)}`;
};

export const SIZES = {
  TABLET: 1024,
};

export const setBackground = {
  white: () =>
    document.querySelector(":root").style.setProperty("--site-bg", "white"),
  black: () =>
    document.querySelector(":root").style.setProperty("--site-bg", "black"),
  cloud: () =>
    document.querySelector(":root").style.setProperty("--site-bg", "#F5F5F0"),
};

export const afterIntro = (callback) => {
  if (window.firstRender) window.addEventListener("intro:completed", callback);
  else callback();
};
