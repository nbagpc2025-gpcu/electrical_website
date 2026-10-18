ELECTRICAL ENGINEERING DEPARTMENT — GOVERNMENT POLYTECHNIC CHHOTAUDEPUR
Updated 18 October 2026

UPLOAD
Extract the complete ZIP and upload its CONTENTS to the existing GitHub Pages publishing folder, replacing matching files. index.html and assets must be at that folder's root. The optional update ZIP contains changed/new files only and requires the previous Student-Notices website package already installed.
No deployment has been performed.

ELECTRICAL-ONLY CONNECTIONS
Website: https://nbagpc2025-gpcu.github.io/electrical_website/
Electrical student notice CSV configured: https://docs.google.com/spreadsheets/d/e/2PACX-1vQzojHsWS58bkH3kBmIq1SqFl_4_qtrg4lK5qepIfSFyIJC-SfN718uRo8BUvl0uw/pub?gid=1548518541&single=true&output=csv
Electrical GoatCounter: https://electricalwebsite.goatcounter.com
Public TOTAL.json verified: count=0, so the display calculation is 1000 + 0 = 1000. No Mechanical account or sheet has been added.
Both VISIT_COUNTER_CODE and NOTICES_SHEET_CSV are now configured in assets/js/content.js.
Enable “Allow adding visitor counts on your website” in GoatCounter settings.
VISIT_COUNTER_START defaults to 1000 and is configurable. Display = starting value + actual recorded TOTAL. The tooltip explains this offset. No fake visits are generated. Counter stays hidden when unconfigured or unavailable.

NOTICE SHEET
Required: Name or Title, Link. Optional: Date, Category, Semester, Details, Show.
Use YYYY-MM-DD dates. Blank titles and Show=No/Hide/False are hidden. Only absolute HTTP/HTTPS document URLs become clickable. Dated notices sort newest first; undated notices retain sheet order. New marks dates within the past seven days. Search/category/semester filters appear on the Notice Board. Homepage shows three latest notices.
While visible, pages fetch updates every minute and when returning to the tab. Google's publishing cache can delay changes. After the initial connection, edit and publish the sheet without uploading website files again. Backup notices remain available on fetch/CSV failure.

PRESERVATION
Notice filters now stay inside the notice column; clearer empty messages distinguish no published notices from no filter matches.
Institute logo removed from all pages, favicon and social/home-screen references; only the Electrical Department logo is used.
Added English/Hindi/Gujarati interface buttons, saved language preference and page zoom controls (100-150%, with reset). Original academic records, notices, image text and documents retain their wording.
Added student-activities.html with 13 existing Extra-curricular and IETE ISF activities plus Tech Fest YouTube videos.
Added a drafted HOD welcome message attributed to V H Ghanchi, HOD, Lecturer in Mechanical Engineering, Class II (Ph.D. Pursuing), using the designation supplied by the user. Original layout, content, laboratory images, Instrumentation images and slideshow controls retained. Existing YouTube embeds retained; no video files added. English/Hindi/Gujarati controls are now available. Text in slide images and linked documents retains its original language.

VALIDATION
Passed JavaScript syntax checks; CSV compatibility, quoted fields, visibility, sorting, semester parsing, unsafe URL rejection and counter arithmetic tests. All local HTML links/assets resolve; all JSON parses. All 30 slide images and laboratory photos match the previous complete ZIP byte for byte.
Browser checks passed: language switching/restoration, zoom in/out/reset, logo removal, HOD section, 13 student activities, notice filter structure and mobile width at 100/110%, with no page script errors. Analytics and sheet responses were mocked for those browser checks to avoid test analytics visits.
Not verified: all live external document links, production browser GoatCounter/sheet behavior/cache, or GitHub Pages deployment. The published CSV was fetched successfully and its headers match. The current Mid Semester Exam row has Show=No; set G2 to Yes to publish it. Browser fetching/cache remains unverified. The Electrical GoatCounter public endpoint returned count=0. Live browser counter rendering remains unverified. No replacement Drive links were provided.
