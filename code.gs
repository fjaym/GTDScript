/**
 * Function to generate the daily docs for the current week
 * based on the Google Calendar events.
 */
function createDailyDocsForThisWeek() {
  // Logs the current action
  Logger.log('Preparing to create docs for the current week');

  // Setting up the folders
  var parentFolder = DriveApp.getFoldersByName('Work Vault').next();
  setupFolders(parentFolder);

  // Fetching the week range
  var weekRange = getWeekRange(new Date());
  var weekFolderName = weekRange.start + '-' + weekRange.end;
  
  // Creating Google Docs for the week
  createDocsForWeek(weekRange, weekFolderName, parentFolder);
  
  Logger.log('Finished creating daily docs for the current week');
}

/**
 * Setup Year and Month folders if they don't exist.
 */
function setupFolders(parentFolder) {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();

  // Create or get the year folder
  var yearFolderName = year.toString();
  var yearFolder = getOrCreateFolder(parentFolder, yearFolderName);

  // Create or get the month folder
  var monthFolderName = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(new Date(year, month, 1));
  getOrCreateFolder(yearFolder, monthFolderName);
}

/**
 * Format date as DDMMMYY.
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}
