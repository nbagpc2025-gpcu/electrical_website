/* =====================================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE
   ---------------------------------------------------------------------
   - NOTICES    -> Notice Board page + "Latest notices" on Home
   - ACTIVITIES -> videos on the Activities page and Home
   - DOWNLOADS  -> Download page + quick links on Home
   Newest items go at the TOP of each list. Keep the commas and quotes.
   ===================================================================== */

/* VISITOR COUNTER (GoatCounter, free, no cookies)
   Create a GoatCounter account for this site (e.g. code "gpceed") and put the code here.
   Leave it "" and no visits are counted and no counter is shown. */
window.VISIT_COUNTER_CODE = "";
// Display-only starting value; never sent to GoatCounter.
window.VISIT_COUNTER_START = 1000;

/* NOTICES FROM A GOOGLE SHEET
   Paste the sheet's "Publish to web" CSV link between the quotes below.
   Once set, notices come from the sheet and the NOTICES list below is only a backup.
   Leave it "" to use the list. */
window.NOTICES_SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzojHsWS58bkH3kBmIq1SqFl_4_qtrg4lK5qepIfSFyIJC-SfN718uRo8BUvl0uw/pub?gid=1548518541&single=true&output=csv";

/* Notice fields:
     date:     "2026-10-12" (YYYY-MM-DD) or "" if no date
     category: "Exam" | "Academic" | "Workshop" | "Admission" | "General"
     title, text: what students should know
     link:     URL of the PDF / Drive file, or "" if none            */
window.NOTICES = [
  {
    date: "",
    category: "General",
    title: "Notice archive 2021-2023",
    text: "Earlier exam, fees, term-work and result notices of the Electrical Engineering Department.",
    link: "https://sites.google.com/view/gpchhotaudepureed/notice/important-announcment",
  },
];

/* Video fields:
     youtube:  the video ID (the part after watch?v= in the YouTube link)
     category: "Tech Fest" | "Expert Lecture" | "Industrial Visit" | "Event"
     year, title, text ("" is fine), link (optional extra link)   */
window.ACTIVITIES = [
  { youtube: "GSh5KVA1jVQ", category: "Tech Fest", year: "2023",
    title: "Tech Fest 2023, Electrical Engineering Department", text: "", link: "" },
  { youtube: "jRs9hF_HMiw", category: "Tech Fest", year: "2022",
    title: "Tech Fest 2022, Electrical Engineering Department (Term 212)", text: "", link: "" },
];

/* Download fields: title, text, icon (Material Symbols name), link */
window.DOWNLOADS = [
  { title: "Student Fees Payment", text: "Pay fees online through the e-Shiksha ERP portal", icon: "payments",
    link: "https://erp.eshiksa.net/esh/index.php?plugin=Login&action=index" },
  { title: "Course Study Material", text: "Curriculum, assignments, notes, question banks and lab manuals for every course", icon: "menu_book",
    link: "courses.html" },
  { title: "GTU Question Papers", text: "Previous GTU examination papers", icon: "quiz",
    link: "http://old.gtu.ac.in/Qpaper.html" },
  { title: "Expert Lectures & Visits 2021-22", text: "Photos and reports of the year's co-curricular activities", icon: "photo_library",
    link: "https://drive.google.com/drive/folders/1TWaJfvfhIVT285Xzs0xXlYogpLchE50C" },
  { title: "IETE Students Forum Committee", text: "Committee of the IETE Students Forum (ISF)", icon: "groups",
    link: "https://drive.google.com/file/d/1yH1VM8G9YIIo_x5eZ6KEeTBgPO-KqOk4/view" },
];
