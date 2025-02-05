function transferRegistrationToMain(row=FILLOUT_SHEET.getLastRow()) {
  const sheet = FILLOUT_SHEET;
  const sourceRow = row;
  const sourceColSize = sheet.getLastColumn();

  const rangeSource = sheet.getRange(sourceRow, 1, 1, sourceColSize);
  const values = rangeSource.getValues()[0];

  // Prepare registration data to export
  const exportJson = prepareRegistration(values);

  // `Memberships Collected (Main)` GSheet
  const sheetURL = MEMBERSHIP_URL;
  const ss = SpreadsheetApp.openByUrl(sheetURL);
  const importSheet = ss.getSheetByName(IMPORT_NAME);
  
  // Export registration to `Import` sheet
  const newRow = importSheet.getLastRow() + 1;
  const rangeNewImport = importSheet.getRange(newRow, 1);
  rangeNewImport.setValue(exportJson);
  
  // This triggers the `onChange(e)` function
  importSheet.insertRowAfter(newRow);
}


function prepareRegistration(rawData) {

  /** -> CURRENT SEMESTER INDICES (1-indexed) <-
   * 
   * 1: Timestamp
   * 2: McGill Email Address
   * 3: First Name
   * 4: Last Name
   * 5: Preferred Name/Pronouns
   * 6: Year
   * 7: Program
   * 8: Describe yourself and your interest in running
   * 9: Name of referral
   * 10: Waiver
   * 11: Payment Method
   * 12: Interac e-Transfer Ref
   * 13: EmptyCol
   * 14: Fee Paid
   * 15: Collection Date
   * 16: Collected By
   * 17: Given to Internal
   * 18: Comments
   * 19: Attendance Status
   * 20: Member ID
   */

  // Return value from rawData using `index`
  const get = (index => rawData[index - 1]);

  const timestamp = new Date(`${get(COLUMN_MAP.TIMESTAMP)}`);

  const formattedTimestamp = Utilities.formatDate(
    timestamp,
    TIMEZONE,
    "yyyy-MM-dd HH:mm:ss"
  );
  
  // Initial Mapping
  const exportObj = {
    'timestamp' : formattedTimestamp,
    'email' : get(COLUMN_MAP.EMAIL),
    'firstName' : get(COLUMN_MAP.FIRST_NAME),
    'lastName' : get(COLUMN_MAP.LAST_NAME),
    'preferredName' : get(COLUMN_MAP.PREFERRED_NAME),
    'year' : get(COLUMN_MAP.YEAR),
    'program' : get(COLUMN_MAP.PROGRAM),
    'memberDescription' : get(COLUMN_MAP.MEMBER_DESCR),
    'paymentMethod' : get(COLUMN_MAP.COLLECTED_BY),
    'interacRef' : get(COLUMN_MAP.INTERAC_REF),
    'comments' : get(COLUMN_MAP.COMMENTS),
  }

  // Prepare payment information
  // CASE 1: Interac e-Transfer
  const interacRegex = /interac/i;
  if (interacRegex.test(exportObj.paymentMethod)) {
    Logger.log('Case 1');
  }

  // Prepare referral information
  const referral = get(COLUMN_MAP.REFERRAL);
  const refPerson = get(COLUMN_MAP.REF_PERSON);
  const refPlatform = get(COLUMN_MAP.REF_PLATFORM);

  // Add referral information to exportObj
  exportObj['referral'] = `${referral} ${refPlatform} ${refPerson}`.trim();

  return JSON.stringify(exportObj);
}
