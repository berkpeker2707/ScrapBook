// var photoPath = {
//     "Sock Pictures": {
//       P1: "/Users/berkolatto/Downloads/Socks/Sock Pictures/SOCKTX1.jpg",
//       P2: "/Users/berkolatto/Downloads/Socks/Sock Pictures/133.jpg",
//       P3: "/Users/berkolatto/Downloads/Socks/Sock Pictures/132.jpg",
//       P4: "/Users/berkolatto/Downloads/Socks/Sock Pictures/131.jpg",
//       P5: "/Users/berkolatto/Downloads/Socks/Sock Pictures/130.jpg",
//       P6: "/Users/berkolatto/Downloads/Socks/Sock Pictures/129.jpg",
//       P7: "/Users/berkolatto/Downloads/Socks/Sock Pictures/128.jpg",
//       P8: "/Users/berkolatto/Downloads/Socks/Sock Pictures/127.jpg",
//     },
//   };
  
//   var montagePath = {
//     file: "19_ Sock Montaj 8li.ai",
//     path: "/Users/berkolatto/Downloads/Socks/19_ Sock Montaj 8li.ai",
//   };
  
//   var montageDoc = app.open(File(montagePath.path));

// positionAll = [-1015, 2350, -683, 2350, -352, 2350, -21, 2350, 309, 2350, 641, 2350, 972, 2350, 1302, 2350, -1015, 975, -683, 975, -352, 975, -21, 975, 309, 975, 641, 975, 972, 975, 1302, 975, -1015, -399, -683, -399, -352, -399, -21, -399, 309, -399, 641, -399, 972, -399, 1302, -399, -1015, -1774, -683, -1774, -352, -1774, -21, -1774, 309, -1774, 641, -1774, 972, -1774, 1302, -1774];

// alert(positionAll.slice(0, 2))

//   for (var id in photoPath) {
//     for (var s in photoPath[id]) {
//       var photoFile = File(photoPath[id][s]);

      //Paste according to location
    //   var jpgFilePath =
    //     "/Users/berkolatto/Downloads/Socks/Sock Pictures/SOCKTX1.jpg";
    //   var rasterFile = File(photoFile);
    //   var myPlacedItem = montageDoc.placedItems.add();
    //   var myPlacedItemSecond = montageDoc.placedItems.add();
    //   myPlacedItem.file = rasterFile;
    //   myPlacedItem.position = positionAll.slice(0, 2);
    //   myPlacedItem.embed();
    //   myPlacedItemSecond.file = rasterFile;
    //   for (i = 0; i < positionAll.length; i += 2) {
    //     var x = positionAll.slice(i, i + 2);
    //     // myPlacedItemSecond.position = Array(-683, 2350);
    //     console.log(x)
    //   }
    //   myPlacedItemSecond.embed();
//     }
//   }

/////////////////////////////////////////////////////////

var photoPath = [
    "/Users/berkolatto/Downloads/Socks/Sock Pictures/SOCKTX1.jpg",
    "/Users/berkolatto/Downloads/Socks/Sock Pictures/133.jpg",
    "/Users/berkolatto/Downloads/Socks/Sock Pictures/132.jpg",
     "/Users/berkolatto/Downloads/Socks/Sock Pictures/131.jpg",
     "/Users/berkolatto/Downloads/Socks/Sock Pictures/130.jpg",
     "/Users/berkolatto/Downloads/Socks/Sock Pictures/129.jpg",
     "/Users/berkolatto/Downloads/Socks/Sock Pictures/128.jpg",
     "/Users/berkolatto/Downloads/Socks/Sock Pictures/127.jpg",
    ];

arrMa = [];
for(i = 0; i< photoPath.length; i++) {
    arrMa.push(photoPath[i]);
}

console.log(arrMa);