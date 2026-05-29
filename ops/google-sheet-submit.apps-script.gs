const SHEET_ID = "187xPfNXluREBH7ytL4ope-qtO3uda5_ZuV3SI-mXXm0";
const SHEET_NAME = "시트";

const HEADERS = [
  "접수일시",
  "이름",
  "전화번호",
  "플레이스명",
  "플레이스 URL",
  "메인 키워드",
  "업종",
  "대행사/직광고주",
  "월 광고비 예산",
  "문의사항",
  "개인정보 수집·이용 동의",
  "제3자 정보 제공 동의",
  "페이지 URL",
  "사용자 환경",
  "플레이스 MID값",
  "수정된 플레이스 주소",
];

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet tab not found: ${SHEET_NAME}`);
    }

    ensureHeader_(sheet);

    const nextRow = findNextEmptyRow_(sheet);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const rowValues = headers.map((header) => getPayloadValueByHeader_(header, payload));
    sheet.getRange(nextRow, 1, 1, rowValues.length).setValues([rowValues]);

    return jsonResponse({ ok: true, row: nextRow });
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

function ensureHeader_(sheet) {
  const lastColumn = Math.max(sheet.getLastColumn(), HEADERS.length);
  const currentHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const hasExistingHeaders = currentHeaders.some((value) => String(value || "").trim() !== "");

  if (!hasExistingHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  sheet.setFrozenRows(1);
}

function getPayloadValueByHeader_(header, payload) {
  const normalizedHeader = normalizeHeader_(header);
  const values = {
    "접수일시": new Date(),
    "이름": payload.name || "",
    "전화번호": payload.phone || "",
    "플레이스명": payload.placeName || "",
    "플레이스URL": payload.placeUrl || "",
    "메인키워드": payload.keyword || "",
    "업종": payload.businessType || "",
    "대행사직광고주": payload.clientType || "",
    "월광고비예산": payload.budget || "",
    "문의사항": payload.message || "",
    "개인정보수집이용동의": payload.privacyConsent || "",
    "제3자정보제공동의": payload.thirdPartyConsent || "",
    "페이지URL": payload.pageUrl || "",
    "사용자환경": payload.userAgent || "",
    "플레이스MID값": "",
    "수정된플레이스주소": "",
    "수정할플레이스주소": "",
  };

  return Object.prototype.hasOwnProperty.call(values, normalizedHeader)
    ? values[normalizedHeader]
    : "";
}

function normalizeHeader_(value) {
  return String(value || "")
    .replace(/\s+/g, "")
    .replace(/[·ㆍ・]/g, "")
    .replace(/[\/_-]/g, "")
    .trim();
}

function findNextEmptyRow_(sheet) {
  const lastRow = Math.max(sheet.getLastRow(), 2);
  const timestamps = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  const firstEmptyIndex = timestamps.findIndex(([value]) => value === "");

  if (firstEmptyIndex !== -1) {
    return firstEmptyIndex + 2;
  }

  return lastRow + 1;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
