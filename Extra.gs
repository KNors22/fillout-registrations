function _altFunctions() {
  // Replace indices in rawData with respective value
  for (const [key, value] of Object.entries(mapToMaster)) {
    mapToMaster[key] = rawData[value] || "";
  }

  const mappedData = Object.fromEntries(
    Object.entries(mapToMaster)
      .map(([index, key]) => [key, key ? (rawData[parseInt(index)] || '') : ''])
  );

  return mappedData;


  // Only return values sof object
  //const indices = Objects.values(mapToMaster);

  /** -> CURRENT MASTER INDICES (1-indexed) <-
   * 
   * 1: McGill Email Address
   * 2: First Name
   * 3: Last Name	
   * 4: Preferred Name/Pronouns	
   * 5: Year	
   * 6: Program	
   * 7: Waivers	
   * 8: Describe yourself and your interest in running	
   * 9: Referral	
   * 10: Latest Registration	
   * 11: Latest Reg Semester	
   * 12: Registration History	
   * 13: EmptyCol	
   * 14: Fee Paid	
   * 15: Fee Expires	
   * 16: Collected By	
   * 17: Collection Date	
   * 18: Given to Internal	
   * 19: Payment History	
   * 20: Comments	
   * 21: Attendance Status	
   * 22: Member ID
   * 
   */

  // Initial Mapping
  const mapToMaster = {
    0 : COLUMN_MAP.EMAIL,
    1 : COLUMN_MAP.FIRST_NAME,
    2 : COLUMN_MAP.LAST_NAME,
    3 : COLUMN_MAP.PREFERRED_NAME,
    4 : COLUMN_MAP.YEAR,
    5 : COLUMN_MAP.PROGRAM,
    6 : '',     // Waiver link
    7 : COLUMN_MAP.MEMBER_DESCR,
    8 : COLUMN_MAP.REFERRAL,
    9 : COLUMN_MAP.TIMESTAMP,
    10 : '',    // Latest Reg Semester
    11 : '',    // Registration History
    12 : '',    // Empty Column
    13 : '',    // `Fee Paid` formula
    14 : '',    // `Fee Expires` formula
    15 : COLUMN_MAP.COLLECTED_BY,
    16 : '',    // Collection Date
    17 : '',    // Given to Internal
    18 : '',    // Payment History
    19 : COLUMN_MAP.COMMENTS,
  }

  const mapToMasterAlt = {
    [MASTER.McGill_Email_Address] : COLUMN_MAP.EMAIL,
    [MASTER.First_Name] : COLUMN_MAP.FIRST_NAME,
    [MASTER.Last_Name] : COLUMN_MAP.LAST_NAME,
    [MASTER.Preferred_Name] : COLUMN_MAP.PREFERRED_NAME,
    [MASTER.Year] : COLUMN_MAP.YEAR,
    [MASTER.Program] : COLUMN_MAP.PROGRAM,
    [MASTER.Describe_yourself] : COLUMN_MAP.MEMBER_DESCR,
    [MASTER.Referral] : COLUMN_MAP.REFERRAL,
    [MASTER.Latest_Registration] : COLUMN_MAP.TIMESTAMP,
    [MASTER.EmptyCol]: '',
    [MASTER.Collected_By] : COLUMN_MAP.COLLECTED_BY,
    [MASTER.Collection_Date] : COLUMN_MAP.TIMESTAMP,
    [MASTER.Comments] : COLUMN_MAP.COMMENTS,
  }

  const mapToSemesterSheetAlt = {
    1: COLUMN_MAP.TIMESTAMP,
    2 : COLUMN_MAP.EMAIL,
    3 : COLUMN_MAP.FIRST_NAME,
    4 : COLUMN_MAP.LAST_NAME,
    5 : COLUMN_MAP.PREFERRED_NAME,
    6 : COLUMN_MAP.YEAR,
    7 : COLUMN_MAP.PROGRAM,
    8 : COLUMN_MAP.MEMBER_DESCR,
    9 : COLUMN_MAP.REFERRAL,
    10 : '',    // Waiver link
    11 : '',    // Payment Method
    12 : '',    // Empty Column
    13 : '',    // `Fee Paid` formula
    14 : '',    // `Fee Expires` formula
    15 : COLUMN_MAP.COLLECTED_BY,
    16 : '',    // Collection Date
    17 : '',    // Given to Internal
    18 : '',    // Payment History
    19 : COLUMN_MAP.COMMENTS,
  }
}


function _printJson(jsonObj=JSON.stringify(MASTER)) {
  Logger.log(jsonObj);
}
