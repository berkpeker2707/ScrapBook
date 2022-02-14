//Kod.gs
function onEdit(e)
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var editRange = sheet.getActiveRange();
  var editRow = editRange.getRow();
  var editCol = editRange.getColumn();
  var range = sheet.getRange("F1:G28");
  var rangeRowStart = range.getRow();
  var rangeRowEnd = rangeRowStart + range.getHeight()-1;
  var rangeColStart = range.getColumn();
  var rangeColEnd = rangeColStart + range.getWidth()-1;
  if (editRow >= rangeRowStart && editRow <= rangeRowEnd 
      && editCol >= rangeColStart && editCol <= rangeColEnd)
  {
    var time = new Date().toLocaleDateString("tr-TR"); 
    var price = sheet.getCurrentCell().getValue();
    var product = sheet.getCurrentCell().offset(0,-1).getValue();
    // let product = sheet.getCurrentCell();
    var alert = "Product named: " + product + " changed price to " + price + " at " + time + ".";
    // Logger.log(alert);
    // GmailApp.sendEmail("semihtinas@gmail.com", "Change has been made at googlesheet testDoc", alert);

    var emails = ["asd1@gmail.com","asd2@gmail.com"];
    for (var i = 0; i < emails.length; i++) {
      GmailApp.sendEmail(emails[i], "Change has been made at googlesheet testDoc", alert);
    }

  }
}

//appsscript.json (manifest)
// {
//   "timeZone": "Europe/Istanbul",
//   "dependencies": {
//   },
//   "exceptionLogging": "STACKDRIVER",
//   "runtimeVersion": "V8",
//   "oauthScopes": [
//     "https://www.googleapis.com/auth/gmail.send",
//     "https://www.googleapis.com/auth/gmail.compose",
//     "https://www.googleapis.com/auth/gmail.modify",
//     "https://mail.google.com/",
//     "https://www.googleapis.com/auth/gmail.addons.current.action.compose",
//     "https://www.googleapis.com/auth/spreadsheets.currentonly",
//     "https://www.googleapis.com/auth/spreadsheets"
//   ]
// }