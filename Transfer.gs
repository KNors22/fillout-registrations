function transferRegistrationToMain(row=FILLOUT_SHEET.getLastRow()) {
  const sheet = FILLOUT_SHEET;
  const sourceRow = sheet.getLastRow();
  const sourceColSize = sheet.getLastColumn();

  const rangeSource = sheet.getRange(sourceRow, 1, 1, sourceColSize);

  const values = rangeSource.getValues()[0];
  values.unshift("");   // append "" to front for easier access e.g [EMAIL_COL] vs [EMAIL_COL-1]

  const formattedNow = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm');


  // `Memberships Collected (Main)` GSheet
  const sheetURL = MEMBERSHIP_URL;
  const ss = SpreadsheetApp.openByUrl(sheetURL);
  const masterSheet = ss.getSheetByName(MASTER_NAME);

  // Select columns to transfer to target sheet
  const colSizeOfTransfer = values.length;

  const newRow = masterSheet.getLastRow();
  const rangeNewLog = ledgerSheet.getRange(newRow++, 1, 1, colSizeOfTransfer);

  // Set values
  rangeNewLog.setValues([eventToTransfer]);
}