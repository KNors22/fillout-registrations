// SHEET CONSTANTS
const SHEET_NAME = 'Registrations';
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
  FEE_AMOUNT: 37,
}

const test = 0;
const TIMEZONE = getUserTimeZone_();


// EXTERNAL SHEETS USED IN SCRIPTS
const MASTER_NAME = 'MASTER';
const SEMESTER_NAME = 'Winter 2025';
const MEMBERSHIP_URL = "https://docs.google.com/spreadsheets/d/1qvoL3mJXCvj3m7Y70sI-FAktCiSWqEmkDxfZWz0lFu4/edit?usp=sharing";

const MASTER_COL_LEN = 22   // V


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