export const numberInputRandomizer = {
  isInteger: [1, 45, "x", "x1", "1x"],
  parseFloat: ["1.35askdmx", "15rt.45", "98,#44", "445454544.357565xx", "x.34"],
  parseInt: ["215", "927", "14", "3", "24"],
  toFixed: [215.38, 927.79, 14.5, 38.15038, 24.099],
  toPrecision: [215.38, 927.79, 14.5, 38.15038, 24.099],
  toString: [215.38, 927, 14.5, 38, 24.9],
};

export const numberParameterRandomizer = {
  isInteger: [],
  parseFloat: [],
  parseInt: [],
  toFixed: [2, 6, 8, 10, 50],
  toPrecision: [2, 6, 8, 10, 50],
  toString: [],
};
