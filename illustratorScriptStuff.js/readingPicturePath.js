///
///
///
var photoPath = {
  "112-5816586-5687460": {
    S1: "/Users/berkolatto/Downloads/automationSvgFiles/113-8016505-9156245/113-8016505-9156245-S2.svg",
    S2: "/Users/berkolatto/Downloads/automationSvgFiles/113-8016505-9156245/113-8016505-9156245-S2.svg",
  },
  "113-9217693-6059412": {
    S1: "/Users/berkolatto/Downloads/automationSvgFiles/113-8016505-9156245/113-8016505-9156245-S1.svg",
    S2: "/Users/berkolatto/Downloads/automationSvgFiles/113-8016505-9156245/113-8016505-9156245-S1.svg",
  },
  "114-1652945-7021805": {
    S1: "/Users/berkolatto/Downloads/automationSvgFiles/111-6404308-9348205/111-6404308-9348205-S2.svg",
    S2: "/Users/berkolatto/Downloads/automationSvgFiles/111-6404308-9348205/111-6404308-9348205-S2.svg",
    S3: "/Users/berkolatto/Downloads/automationSvgFiles/111-6404308-9348205/111-6404308-9348205-S1.svg",
    S4: "/Users/berkolatto/Downloads/automationSvgFiles/111-6404308-9348205/111-6404308-9348205-S1.svg",
    S5: "/Users/berkolatto/Downloads/automationSvgFiles/111-0701737-0346636/111-0701737-0346636-S1.svg",
    S6: "/Users/berkolatto/Downloads/automationSvgFiles/111-0701737-0346636/111-0701737-0346636-S1.svg",
    S7: "/Users/berkolatto/Downloads/automationSvgFiles/111-3468946-7111468/111-3468946-7111468-S1.svg",
    S8: "/Users/berkolatto/Downloads/automationSvgFiles/111-3468946-7111468/111-3468946-7111468-S1.svg",
  },
  "113-8256929-4856225": {
    S1: "/Users/mocukson/Desktop/photo mug montaj file/PHOTO/BRD/113-8256929-4856225/113-8256929-4856225-S1.svg",
    S2: "/Users/mocukson/Desktop/photo mug montaj file/PHOTO/BRD/113-8256929-4856225/113-8256929-4856225-S2.svg",
  },
};
///
///
///
var svgFiles = [];
for (ele in photoPath) {
  // console.log(ele);
  for (el in photoPath[ele]) {
    // console.log(photoPath[ele][el]);
    svgFiles.push(photoPath[ele][el]);
  }
}

console.log(svgFiles[1]);
