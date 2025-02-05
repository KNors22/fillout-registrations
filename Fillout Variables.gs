// SHEET CONSTANTS
const SHEET_NAME = 'Main';
const FILLOUT_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

// LIST OF COLUMNS IN SHEET_NAME
const COLUMN_MAP = {
  SUBMISSION_ID: 1,
  TIMESTAMP: 2,
  FIRST_NAME: 3,
  LAST_NAME: 4,
  EMAIL: 5,
  MEMBER_DESCR: 6,
  COMMENTS: 7,
  PREFERRED_NAME: 10,
  PROGRAM: 11,
  YEAR: 12,
  REFERRAL: 13,
  REF_PLATFORM: 14,
  REF_PERSON: 15,
  COLLECTED_BY: 34,
  INTERAC_REF: 36,
  FEE_AMOUNT: 38,
}

const SEMESTER_MAP = {
  REGISTRATION_DATE : 1,      // Column 'A'
  EMAIL : 2,                  // Column 'B'
  FIRST_NAME : 3,             // Column 'C'
  LAST_NAME : 4,              // Column 'D'
  PREFERRED_NAME : 5,         // Column 'E'
  YEAR : 6,                   // Column 'F'
  PROGRAM : 7,                // Column 'G'
  DESCRIPTION : 8,            // Column 'H'
  REFERRAL : 9,               // Column 'I'
  WAIVER : 10,                // Column 'J'
  PAYMENT_METHOD : 11,        // Column 'K'
  INTERACT_REF : 12,          // Column 'L'
  EMPTY : 13,                 // Column 'M'
  IS_FEE_PAID : 14,           // Column 'N'
  COLLECTION_DATE : 15,       // Column 'O'
  COLLECTION_PERSON : 16,       // Column 'P'
  IS_INTERNAL_COLLECTED : 17,   // Column 'Q'
  COMMENTS : 18,                // Column 'R'
  ATTENDANCE_STATUS : 19,       // Column 'S'
  MEMBER_ID : 20,               // Column 'T'
}

// CURRENT MASTER INDICES (0-indexed)
const MASTER = {
  "McGill_Email_Address" : 1,
  "First_Name" : 2,
  "Last_Name" : 3,
  "Preferred_Name" : 4,
  "Year" : 5,
  "Program" : 6,
  "Waivers" : 7,
  "Describe_yourself" : 8,
  "Referral" : 9,	
  "Latest_Registration" : 10,
  "Latest_Reg_Semester" : 11,
  "Registration_History" : 12,
  "EmptyCol" : 13,
  "Fee_Paid" : 14,
  "Fee_Expires" : 15,
  "Collected_By" : 16,
  "Collection_Date" : 17,
  "Given_to_Internal" : 18,
  "Payment_History" : 19,
  "Comments" : 20,
  "Attendance_Status" : 21,
  "Member_ID" : 22,
}

const TIMEZONE = getUserTimeZone_();


// EXTERNAL SHEETS USED IN SCRIPTS
const MASTER_NAME = 'MASTER';
const SEMESTER_NAME = 'Winter 2025';
const IMPORT_NAME = 'Import';
const MEMBERSHIP_URL = "https://docs.google.com/spreadsheets/d/1qvoL3mJXCvj3m7Y70sI-FAktCiSWqEmkDxfZWz0lFu4/edit?usp=sharing";


/**
 * Returns timezone for currently running script.
 *
 * Prevents incorrect time formatting during time changes like Daylight Savings Time.
 *
 * @return {string}  Timezone as geographical location (e.g.`'America/Montreal'`).
 */

function getUserTimeZone_() {
  return Session.getScriptTimeZone();
}


function testMap() {
  const sheet = FILLOUT_SHEET;
  const sourceColSize = sheet.getLastColumn();
  const values = sheet.getRange(1, 1, 1, sourceColSize).getValues()[0];

  for (const i of Object.values(COLUMN_MAP)) {
    Logger.log(`Index ${i} : ${values[i-1]}`);
  }

}