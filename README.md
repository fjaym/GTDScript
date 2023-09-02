# GTD Script - Google Daily Docs Automation

A simple automation script using Google Apps Script to generate Google Docs for each weekday based on your Google Calendar events.

## Overview

This script provides an automated solution to:

1. Create daily docs for the work week (Monday to Friday).
2. Populate these docs with events from your Google Calendar for the respective days.
3. Skip creating docs for weekends and days marked as "Out of Office" in your calendar.
4. Organise these daily docs within year and month folders.
5. Use British date formatting: DDMMMYY (e.g., 31Jul23).

## How to Use

1. Open Google Drive and navigate to the 'Work Vault' folder.
2. Create a new Google Apps Script project within this folder.
3. Copy and paste the provided code into the script editor.
4. Run the function `createDailyDocsForThisWeek` to generate docs for the current week.
5. The script will check for existing folders and only create necessary folders and files.

## Note

Make sure you've set the necessary permissions for Google Calendar and Google Drive in the Apps Script environment.
