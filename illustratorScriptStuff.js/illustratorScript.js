var montagePath = {
    file: "11ozmugmontageupdate.ai",
    rows: 6,
    cols: 5,
    artboard: NaN,
    path: "/Users/berkolatto/Downloads/PHOTO MONTAJ/11ozmugmontageupdate.ai",
  };
  
  var customInfo = {
    "111-7289040-3401053": [
      {
        fontName: "Abril Fatface",
        fontColor: "#38761d",
        text: "Be your own reason to smile",
      },
      { fontName: "Abril Fatface", fontColor: "#800080", text: "asd" },
    ],
    "111-7626985-7989837": [
      { fontName: "Abril Fatface", fontColor: "#38761D", text: "Nico Moulton" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "1SG\n10/1/21" },
    ],
    "111-8047938-6944209": [
      { fontName: "Abril Fatface", fontColor: "#000000", text: "asd" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "xs" },
    ],
    "112-8395539-4354629": [
      { fontName: "Abril Fatface", fontColor: "#800080", text: "dc" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "xasx" },
    ],
    "113-4729142-5148230": [
      { fontName: "Allura", fontColor: "#800080", text: "Dawn" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "cac" },
    ],
    "113-8727809-2040220": [
      { fontName: "Luckiest Guy", fontColor: "#38761d", text: "Happy 60th" },
      { fontName: "Luckiest Guy", fontColor: "#000000", text: "Happy 60th" },
    ],
    "114-0655649-3941001": [
      { fontName: "Bad Script", fontColor: "#000000", text: "cadc" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "csaca" },
    ],
    "114-0662222-3364244": [
      {
        fontName: "Abril Fatface",
        fontColor: "#ffffff",
        text: "Love you, Grandpa!",
      },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "sda" },
    ],
    "114-3268718-8448243": [
      { fontName: "Abril Fatface", fontColor: "#000000", text: "acda" },
      { fontName: "Abril Fatface", fontColor: "#000000", text: "csac" },
    ],
  };
  
  var color;
  var reversedColor = [];
    for (var key in customInfo) {
          for(i = 0; i < 2; i ++) {
            reversedColor.unshift(customInfo[key][i]
              .fontColor
              .toUpperCase());
          }
      }
      
  var newArrayColor = [];
  for (i = 0; i < reversedColor.length; i +=2) {
    newArrayColor.push(reversedColor[i], reversedColor[i + 1]);
  //   newArrayColor.push(reversedColor[i + 1]);
    newArrayColor.reverse();
  }
  
  
  color = newArrayColor.reverse();
  
  
  var photoPath = {
    "111-7289040-3401053": {
      S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/113-8727809-2040220/S1-113-8727809-2040220.jpg",
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
      S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/113-8727809-2040220/S1-113-8727809-2040220.jpg",
    },
    "114-0655649-3941001": {
      S1: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0662222-3364244/S2-114-0662222-3364244.jpg",
      S2: "/Users/berkolatto/Downloads/PHOTO MONTAJ/Photo/114-0662222-3364244/S2-114-0662222-3364244.jpg",
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
  
  var montageDoc = app.open(File(montagePath.path));
  var square = montageDoc.layers.getByName("CLOSE THIS LAYER");
  // var cmyk = new CMYKColor();
  
  var layerNameCounter = 1;
  
  for (var id in photoPath) {
    var textCounter = 0;
    for (var side in photoPath[id]) {
      if (photoPath[id][side] !== null) {
        try {
          var photoFile = File(photoPath[id][side]);
          var photoItem = montageDoc.placedItems.add();
          photoItem.file = photoFile;
          setLocation(photoItem, square, layerNameCounter);
          setSize(photoItem, square, layerNameCounter);
          photoItem.embed();
        } catch (error) {
          var errorText = montageDoc.textFrames.add();
          var fileArray = photoPath[id][side].split("/");
          errorText.contents = fileArray[fileArray.length - 1];
          setLocation(errorText, square, layerNameCounter);
        }
      }
  
      var fonts = app.textFonts;
      var desiredFont = app.textFonts[0];
      var fontName = customInfo[id][textCounter].fontName.replace(" ", "");
      var fontRegex = new RegExp(fontName, "g");
  
      for (var i = 0; i < fonts.length; i++) {
        if (fontRegex.test(fonts[i].name)) {
          desiredFont = fonts[i];
          break;
        }
      }
  
      // var colorCode = customInfo[id][textCounter].fontName;
      // cmyk.cyan = color[colorCode];
  
      var textItem = montageDoc.textFrames.add();
      textItem.contents = customInfo[id][textCounter].text;
      textItem.textRange.characterAttributes.textFont = desiredFont;
      setLocation(textItem, square, layerNameCounter);
      setSize(textItem, square, layerNameCounter);
      layerNameCounter++;
      textCounter++;
    }
  }
  
  function setLocation(photoItem, square, layerNameCounter) {
    var layerName = layerNameCounter.toString();
  
    var squareLayer = square.pathItems.getByName(layerName);
  
    var xPos =
      squareLayer.position[0] + (squareLayer.width - photoItem.width) / 2;
    var yPos =
      squareLayer.position[1] - (squareLayer.height - photoItem.height) / 2;
  
    photoItem.position = [xPos, yPos];
  }
  
  function setSize(photoItem, square, layerNameCounter) {
    var layerName = layerNameCounter.toString();
  
    var squareLayer = square.pathItems.getByName(layerName);
  
    var size =
      Math.min(
        squareLayer.width / photoItem.width,
        squareLayer.height / photoItem.height
      ) * 100;
  
    photoItem.resize(size, size);
  }
  
  //////////////////// AFTER THIS
  
  // var myDoc = app.activeDocument;
  tfs = montageDoc.textFrames;
  // tfs = myDoc.textFrames;
  tfsLen = tfs.length;
  var selectionArray = [];
  
  // here I convert document to rgb to force further edition by using rgb colors not cmyk or anything else
  app.executeMenuCommand("doc-color-rgb");
  
  var myNewColor = new RGBColor();
  
  // here I take my colors as an array
  // function getFields(input, field) {
  //   var output = [];
  //   for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
  //   return output;
  // }
  
  // var customInfoColorsByArray = [];
  
  // var colorCodeFromCustomInfo = Object.values(customInfo);
  // for (let i = 0; i < colorCodeFromCustomInfo.length; i++) {
  //   var firstSideColor = colorCodeFromCustomInfo[i]; //one products colors
  //   var result = getFields(firstSideColor, "fontColor");
  //   // console.log(result);
  //   customInfoColorsByArray.push(result); // returns font color's of each product by two (front and back) as array in an array
  // }
  // // console.log(returnColorsArray())
  // console.log(customInfoColorsByArray);
  
  // var newRGBColorArrayOldVersion = [];
  // for (var key in customInfo) {
  //   if (Object.prototype.hasOwnProperty.call(customInfo, key)) {
  //     var val = customInfo[key];
  //     // use val
  //     // console.log(val)
  //     for (let i = 0; i < val.length; i++) {
  //       // console.log(val[i].fontColor);
  //       newRGBColorArrayOldVersion.push(val[i].fontColor);
  //     }
  //     // console.log(newRGBColorArrayOldVersion);
  //   }
  // }
  
  // var color = [
    // "#000000",
    // "#38761d",
    // "#800080",
    // "#38761d",
    // "#800080",
    // "#38761d",
    // "#800080",
    // "#800080",
    // "#800080",
    // "#38761d",
    // "#800080",
    // "#800080",
    // "#800080",
    // "#800080",
    // "#ffffff",
    // "#000000",
    // "#800080",
    // "#800080",
  // ];
  
  // here I have created two seperate arrays
  // hexCodeSplitArray is for splitting hex code before converting it
  // to rgb like this: [ff, ff, ff], each represents hex numbers
  // latter, I remove # by using replace method (regex)
  
  var hexCodeSplitArray = [];
  var convertedfromHexToRGB = [];
  
  var r = [];
  var g = [];
  var b = [];
  
  for (var i = 0; i < color.length; i++) {
    var hexWithoutHash = color[i].replace(/[^a-zA-Z0-9]/g, ""); //hex code without hash
    var hexSplitUp = hexWithoutHash.match(/.{1,2}/g); //hex code splitted up
    hexCodeSplitArray.push(hexSplitUp);
  
  
    // here I use parseInt to convert hex code to decimal number for each array member
    // i use index to iterate it on all color members of color array
    var newParsedHex0 = parseInt(hexCodeSplitArray[i][0], 16);
    var newParsedHex1 = parseInt(hexCodeSplitArray[i][1], 16);
    var newParsedHex2 = parseInt(hexCodeSplitArray[i][2], 16);
  
    // here i push my first converted decimals into new array "convertedfromHexToRGB"
    // this "convertedfromHexToRGB" array is decimal version of colors array; has all colors
    convertedfromHexToRGB.push([newParsedHex0]);
    convertedfromHexToRGB[i].push(newParsedHex1, newParsedHex2);
  
    // here i push my converted decimals ([128, 0, 128] for example) into seperate array according to their index
    // like imagine i have [[0,0,0],[128,0,128]] in my "convertedfromHexToRGB" array,
    // I take each arrays first, second and third elements (like this: [0,128]) then store them as r which represents red,
    // g for green, b for  blue
    r.push(convertedfromHexToRGB[i][0]);
    g.push(convertedfromHexToRGB[i][1]);
    b.push(convertedfromHexToRGB[i][2]);
  
  }
  
  // Here I loop over textFrames and then get paragraphs inside textFrames,
  // later I assign r[i] as my new rgb(red, green and blue as seperately)
  // then use fillColor which does the same trick as if this is cmyk and change color of paragraphs of textFrames
  
  // For loop's i is my index and so I use that index to change color latter  
  
  // loop over text frames
  for (i = 0; i < tfsLen; i++) {
  
    // To prevent errors with tfs[i].textRange.size when == 0
    if (tfs[i].textRange.length > 0 ) {
      // text frames counting
      // selectionArray[selectionArray.length] = tfs[i];
  
      // get all the paragraphs from the current text frame
      var current_paragraphs = tfs[i].textRange.paragraphs;
      var current_textFont = tfs[i].textRange;
  
      // loop over paragraphs
      for (j = 0; j < current_paragraphs.length; j++) {
        // proceed only with non-zero-length paragraphs
        if (current_paragraphs[j].characters.length > 0) {
          // convert
  
          myNewColor.red = r[i];
          myNewColor.green = g[i];
          myNewColor.blue = b[i];
  
          current_paragraphs[j].fillColor = myNewColor;
          // current_textFont.fillColor = myNewColor;
        }
      }
    }
  }