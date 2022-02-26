var customInfo = {
  "111-7289040-3401053": [
    {
      fontName: "Abril Fatface",
      fontColor: "#000000",
      text: "Be your own reason to smile",
    },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "dsd" },
  ],
  "111-7626985-7989837": [
    { fontName: "Abril Fatface", fontColor: "#000000", text: "Nico Moulton" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "1SG\n10/1/21" },
  ],
  "111-8047938-6944209": [
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
  "112-8395539-4354629": [
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
  "113-4729142-5148230": [
    { fontName: "Allura", fontColor: "#800080", text: "Dawn" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
  "113-8727809-2040220": [
    { fontName: "Luckiest Guy", fontColor: "#000000", text: "Happy 60th" },
    { fontName: "Luckiest Guy", fontColor: "#000000", text: "Happy 60th" },
  ],
  "114-0655649-3941001": [
    { fontName: "Bad Script", fontColor: "#000000", text: "" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
  "114-0662222-3364244": [
    {
      fontName: "Abril Fatface",
      fontColor: "#ffffff",
      text: "Love you, Grandpa!",
    },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
  "114-3268718-8448243": [
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
    { fontName: "Abril Fatface", fontColor: "#000000", text: "" },
  ],
};

var photoPath = {
  "111-7289040-3401053": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/111-7289040-3401053/S1-111-7289040-3401053.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/111-7289040-3401053/S2-111-7289040-3401053.jpg",
  },
  "111-7626985-7989837": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/111-7626985-7989837/S1-111-7626985-7989837.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/111-7626985-7989837/S2-111-7626985-7989837.jpg",
  },
  "111-8047938-6944209": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/111-8047938-6944209/S1-111-8047938-6944209.jpg",
    S2: null,
  },
  "112-8395539-4354629": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/112-8395539-4354629/S1-112-8395539-4354629.jpg",
    S2: null,
  },
  "113-4729142-5148230": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/113-4729142-5148230/S1-113-4729142-5148230.jpg",
    S2: null,
  },
  "113-8727809-2040220": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/113-8727809-2040220/S1-113-8727809-2040220.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/113-8727809-2040220/S2-113-8727809-2040220.jpg",
  },
  "114-0655649-3941001": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0655649-3941001/S1-114-0655649-3941001.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0655649-3941001/S2-114-0655649-3941001.jpg",
  },
  "114-0662222-3364244": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0662222-3364244/S1-114-0662222-3364244.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0662222-3364244/S2-114-0662222-3364244.jpg",
  },
  "114-3268718-8448243": {
    S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-3268718-8448243/S1-114-3268718-8448243.jpg",
    S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-3268718-8448243/S2-114-3268718-8448243.jpg",
  },
};

function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
  return output;
}

var customInfoColorsByArray = [];
var mergedArrayOfColorsArray = [];

var colorCodeFromCustomInfo = Object.values(customInfo);
for (let i = 0; i < colorCodeFromCustomInfo.length; i++) {
  var firstSideColor = colorCodeFromCustomInfo[i]; //one products colors
  var result = getFields(firstSideColor, "fontColor");
  // console.log(result);
  customInfoColorsByArray.push(result); // returns font color's of each product by two (front and back) as array in an array

  mergedArrayOfColorsArray = [...mergedArrayOfColorsArray, ...result];
}
// console.log(customInfoColorsByArray);
console.log(mergedArrayOfColorsArray);

// var returnColorsArray = function() {
//   for (let i = 0; i < colorCodeFromCustomInfo.length; i++) {
// var firstSideColor = colorCodeFromCustomInfo[i]; //one products colors
// var result = getFields(firstSideColor, "fontColor");
// // console.log(result);
// customInfoColorsByArray.push(result); // returns font color's of each product by two (front and back) as array in an array
//   }
//   return customInfoColorsByArray;
// }
// console.log(returnColorsArray())

// goal: it should return like this: var color = ["#000000", "#38761d", "#800080", '#38761d','#800080', '#38761d','#800080', '#800080','#800080', '#38761d','#800080', '#800080','#800080', '#800080','#ffffff', '#000000',
// '#800080', '#800080' ]
