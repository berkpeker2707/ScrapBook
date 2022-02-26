// For Adobe Illustrator Script

//DESCRIPTION: Convert RGB to rounded CMYK
/*
    ©Copyright Dave Saunders
    
    This script converts RGB colors in the active document or,
    if no document is open, in the application default swatches
    to CMYK, rounding the values to the nearest whole number
    and, if the RGB swatch was originally named in the form
    Adobe's Kuler uses, the swatch name is changes to the
    CMYK naming format used by InDesign.
*/
var target = app;

var myColors = target.colors.everyItem().getElements();

function renameForCMYK(color) {
  var vals = color.colorValue;
  color.name =
    "C=" + vals[0] + " M=" + vals[1] + " Y=" + vals[2] + " K=" + vals[3];
}
function convertToCMYK(color) {
  color.space = ColorSpace.cmyk;
  var vals = color.colorValue;
  for (var j = vals.length - 1; j >= 0; j--) {
    vals = Math.round(vals);
  }
  color.colorValue = vals;
}
for (var j = myColors.length - 1; j >= 0; j--) {
  if (myColors.space == ColorSpace.rgb) {
    convertToCMYK(myColors);
    if (myColors.name.indexOf("R =") != -1) {
      renameForCMYK(myColors);
    }
  }
}
/*
    Note that a "Kuler name" is considered to have been
    detected if the string "R =" is detected in the swatch
    name. It is conceivable that that string could be used
    in a non-Kuler name. I consider this a limitation,
    not a bug.
*/
