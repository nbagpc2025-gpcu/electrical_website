# Electrical Engineering Department website, GP Chhotaudepur

Same design as the Mechanical Engineering Department website. Content from
https://sites.google.com/view/gpchhotaudepureed/ (collected 12 Oct 2026).

| Page | File |
|---|---|
| Home | `index.html` |
| Vision, Mission, PEOs, POs & PSOs | `vision-mission.html` |
| Faculty & Staff | `staff.html` |
| Courses & Study Material | `courses.html` |
| Activities & Events | `activities.html` |
| IETE, SSIP & NPTEL | `initiatives.html` |
| Newsletters | `newsletters.html` |
| Notice Board | `notice-board.html` |
| Download | `download.html` |

Pages that read from the `data` folder only show their content once the site is online (or run
`python3 -m http.server 8000` in this folder and open http://localhost:8000).

## What to edit

| File | Shown on |
|---|---|
| `assets/js/content.js` | Notices (fallback list), Tech Fest videos, Downloads, visitor counter, notice-sheet link |
| `data/vision_mission.json` | Vision, mission, PEOs, POs, PSOs (must match the SAR word for word) |
| `data/courses.json` | Courses page: each course and its Drive links |
| `data/activities.json` | Expert lectures, industrial visits, extra-curricular and IETE ISF activities |
| `data/staff.json` | Faculty & Staff (fill the `staff` list; same fields as the Mechanical site) |
| `data/newsletters.json` | Newsletters page |

On GitHub: open the file, click the pencil icon, edit, commit. Keep the quotes, commas and brackets.
Never put student names, enrolment numbers or phone numbers in these files.

**Add a course resource:** in `data/courses.json`, add `{"label": "Study materials", "url": "https://drive.google.com/..."}`
to the course's `resources` list. Share every Drive file or folder as *Anyone with the link → Viewer*.

## Notices from a Google Sheet

Use `Electrical_Notices.xlsx` exactly as described for the Mechanical site: upload it to the department's Google
Drive, save as Google Sheets, **File → Share → Publish to web → Notices tab → CSV**, and paste the link into
`window.NOTICES_SHEET_CSV` in `assets/js/content.js`.

## Visitor counter

Create a separate GoatCounter account for this site (e.g. code `gpceed`), tick "Allow adding visitor counts on
your website" in its settings, and put the code into `window.VISIT_COUNTER_CODE` in `assets/js/content.js`.

## Logo and contact

The header shows the institute logo until the department logo is supplied: replace `assets/img/logo.png`,
`logo-512.png` and `favicon.png` (keep the names). The department email can be added on request.

## Putting it online

Same as the Mechanical site: new public GitHub repository, upload everything in this folder,
**Settings → Pages → Deploy from a branch → main / (root)**.
