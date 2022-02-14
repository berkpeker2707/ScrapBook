var color = {
  "#000000": { cyan: 75, m: 68, y: 67, k: 90 },
  "#ffffff": { cyan: 0, m: 0, y: 0, k: 0 },
  "#800080": { cyan: 61, m: 100, y: 14, k: 4 },
};

for (var i in color) {
  var rgbBefore = i; //rgb code like #ffffff
  console.log(rgbBefore);
  var cmykCodeList = color[i];
  var cmykCodeListRevealed = Object.values(cmykCodeList); // cmyk code as array like [0,0,0,0]
  console.log(cmykCodeListRevealed);
  // console.log(color[Object.keys(color)[0]]);
}

Object.keys(color).forEach(function eachKey(key) {
  console.log(key); // alerts key
  console.log(color[key]); // alerts value
});

console.log(Object.keys(color));
console.log(Object.values(color));

// import {getCustomInfoColor} from "./gettingCustomInfo.js";
// var x = getCustomInfoColor();
// console.log(x)
