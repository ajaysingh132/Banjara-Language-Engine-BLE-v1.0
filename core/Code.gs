// =======================================
// Banjara Language Engine (BLE)
// Google Apps Script Backend
// Version 1.0
// =======================================

const SHEET_NAME = "BLE Members";

function doGet(e) {

  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "BLE API Running",
        version: "1.0"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);

}

function doPost(e) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName(SHEET_NAME);

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([

    new Date(),

    data.name,

    data.mobile,

    data.email,

    data.state,

    data.district,

    data.community,

    data.caste,

    data.gotra,

    data.language,

    data.skills,

    data.interests,

    data.source

  ]);

  return ContentService
    .createTextOutput(
      JSON.stringify({
        success: true,
        message: "Registration Successful"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);

}
