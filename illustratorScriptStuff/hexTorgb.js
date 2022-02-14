// String.prototype.convertToRGB = function(){
//     if(this.length != 6){
//         throw "Only six-digit hex colors are allowed.";
//     }

//     var aRgbHex = this.match(/.{1,2}/g);
//     var aRgb = [
//         parseInt(aRgbHex[0], 16),
//         parseInt(aRgbHex[1], 16),
//         parseInt(aRgbHex[2], 16)
//     ];
//     return aRgb;
// }

// console.log('1502BE'.convertToRGB());
// console.log('ff0000'.convertToRGB());
// // console.log('f00'.convertToRGB());

var color = [ "#000000",
"#38761d",
"#800080",
"#38761d",
"#800080",
"#38761d",
"#800080",
"#800080",
"#800080",
"#38761d",
"#800080",
"#800080",
"#800080",
"#800080",
"#ffffff",
"#000000",
"#800080",
"#800080"];

var hexCodeSplitArray = [];
var convertedfromHexToRGB = [];

for (var i = 0; i < color.length; i++) {
  var hexWithoutHash = color[i].replace(/[^a-zA-Z0-9]/g, ""); //hex code without hash
  var hexSplitUp = hexWithoutHash.match(/.{1,2}/g); //hex code splitted up
  hexCodeSplitArray.push(hexSplitUp);
  // console.log(hexWithoutHash)
  var newParsedHex0 = parseInt(hexCodeSplitArray[i][0], 16);
  var newParsedHex1 = parseInt(hexCodeSplitArray[i][1], 16);
  var newParsedHex2 = parseInt(hexCodeSplitArray[i][2], 16);
  // console.log(convertedfromHexToRGB);
  // console.log(newParsedHex0);
  convertedfromHexToRGB.push([newParsedHex0]);
  convertedfromHexToRGB[i].push(newParsedHex1, newParsedHex2);
  // console.log(convertedfromHexToRGB);

  // console.log(hexCodeSplitArray);
  // console.log(convertedfromHexToRGB);
  // console.log(convertedfromHexToRGB[0]);
  // console.log(convertedfromHexToRGB[1]);
  // console.log(convertedfromHexToRGB[2]);
}
// var r = convertedfromHexToRGB[i][0];
// var g = convertedfromHexToRGB[i][1];
// var b = convertedfromHexToRGB[i][2];

// console.log(convertedfromHexToRGB);
var r = [];
var g = [];
var b = [];
for (var i = 0; i < color.length; i++) {
  r.push(convertedfromHexToRGB[i][0]);
  g.push(convertedfromHexToRGB[i][1]);
  b.push(convertedfromHexToRGB[i][2]);
  // var r = convertedfromHexToRGB[i][0];
  // var g = convertedfromHexToRGB[i][1];
  // var b = convertedfromHexToRGB[i][2];
  // console.log(r);
  // console.log(g);
  // console.log(b);
}
// console.log(convertedfromHexToRGB);
console.log(r);
console.log(g);
console.log(b);
// console.log(convertedfromHexToRGB[0][0]);
