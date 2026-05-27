const SHEET_ID = "187xPfNXluREBH7ytL4ope-qtO3uda5_ZuV3SI-mXXm0";
const SHEET_NAME = "시트";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      payload.name || "",
      payload.phone || "",
      payload.placeUrl || "",
      "",
      "",
      payload.keyword || "",
      payload.businessType || "",
      payload.clientType || "",
      payload.budget || "",
      payload.message || "",
      payload.privacyConsent || "",
      payload.thirdPartyConsent || "",
      payload.pageUrl || "",
      payload.userAgent || "",
    ]);

    const row = sheet.getLastRow();
    sheet
      .getRange(row, 5)
      .setFormula(`=IFERROR(REGEXEXTRACT(D${row},"[0-9]{9,11}"),"")`);
    sheet
      .getRange(row, 6)
      .setFormula(`="https://m.place.naver.com/place/"&E${row}`);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: error && error.message ? error.message : "Unknown error",
    });
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: "Papa Company lead endpoint is running." });
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
