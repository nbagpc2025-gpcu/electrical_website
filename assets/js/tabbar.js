/* Bottom tab bar for phones. Home / Department / Academics / Notices / More.
   Department, Academics and More open a panel of links; Home and Notices go straight to the page.
   Shown only below 768px wide (see tabbar.css). */
(function () {
  var path = (location.pathname.split("/").pop() || "index.html").split("?")[0];
  var TABS = [
    { k: "home", label: "Home", icon: "home", href: "index.html" },
    { k: "dept", label: "Department", icon: "apartment", title: "Department", items: [
      ["vision-mission.html", "Vision, Mission, PEOs & PSOs", "flag"],
      ["staff.html", "Faculty & Staff", "groups"],
      ["laboratories.html", "Laboratories", "science"]] },
    { k: "acad", label: "Academics", icon: "school", title: "Academics", items: [
      ["courses.html", "Courses & Study Material", "menu_book"],
      ["academic-calendar.html", "Academic Calendar", "calendar_month"],
      ["virtual-lab.html", "Virtual Labs", "experiment"],
      ["projects.html", "Student Projects", "build"],
      ["student-performance.html", "Student Performance", "monitoring"],
      ["tpo.html", "Training & Placement", "work"],
      ["training-career.html", "Training & Career Progression", "trending_up"],
      ["internship.html", "Internship", "badge"],
      ["rules-regulation.html", "Rules & Regulation", "gavel"]] },
    { k: "notice", label: "Notices", icon: "campaign", href: "notice-board.html" },
    { k: "more", label: "More", icon: "apps", title: "More", items: [
      ["download.html", "Student Corner & Downloads", "folder_open"],
      ["govt-links.html", "Useful Portals", "link"],
      ["student-achievements.html", "Student Achievements", "emoji_events"],
      ["alumni-achievements.html", "Alumni & Achievements", "workspace_premium"],
      ["student-activities.html", "Student Activities", "sports_soccer"],
      ["activities.html", "Activities & Events", "event"],
      ["initiatives.html", "IETE, SSIP & NPTEL", "lightbulb"],
      ["newsletters.html", "Newsletters", "newspaper"],
      ["faculty-training.html", "Faculty Training", "model_training"],
      ["student-mentoring.html", "Student Mentoring", "diversity_3"],
      ["contribution-to-society.html", "Contribution to Society", "volunteer_activism"]] }
  ];

  function activeKey() {
    for (var i = 0; i < TABS.length; i++) {
      var t = TABS[i];
      if (t.href === path) return t.k;
      if (t.items && t.items.some(function (x) { return x[0] === path; })) return t.k;
    }
    return "";
  }

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function icon(name) { return '<span class="material-symbols-outlined" translate="no" aria-hidden="true">' + name + "</span>"; }
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  document.addEventListener("DOMContentLoaded", function () {
    var active = activeKey();
    var bar = el("nav", "tabbar"); bar.setAttribute("aria-label", "Sections");
    var overlay = el("div", "tabsheet-overlay"); overlay.hidden = true;
    var sheet = el("div", "tabsheet"); sheet.hidden = true; sheet.setAttribute("role", "dialog"); sheet.setAttribute("aria-modal", "true");
    var openBtn = null;

    function close() {
      sheet.hidden = true; overlay.hidden = true;
      if (openBtn) { openBtn.setAttribute("aria-expanded", "false"); openBtn.focus(); openBtn = null; }
      document.documentElement.classList.remove("tabsheet-open");
    }
    function open(tab, btn) {
      if (openBtn === btn) { close(); return; }
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
      sheet.setAttribute("aria-label", tab.title);
      sheet.innerHTML = '<div class="tabsheet-head"><strong>' + esc(tab.title) + '</strong><button type="button" class="tabsheet-close" aria-label="Close">' + icon("close") + "</button></div><ul>" +
        tab.items.map(function (x) {
          return '<li><a href="' + x[0] + '"' + (x[0] === path ? ' aria-current="page"' : "") + ">" + icon(x[2]) + "<span>" + esc(x[1]) + "</span></a></li>";
        }).join("") + "</ul>";
      sheet.querySelector(".tabsheet-close").addEventListener("click", close);
      sheet.hidden = false; overlay.hidden = false; openBtn = btn; btn.setAttribute("aria-expanded", "true");
      document.documentElement.classList.add("tabsheet-open");
      var first = sheet.querySelector("a"); if (first) first.focus();
    }

    TABS.forEach(function (t) {
      var isActive = t.k === active;
      var node;
      if (t.href) {
        node = el("a", "tab", icon(t.icon) + "<span>" + t.label + "</span>"); node.href = t.href;
        if (isActive) node.setAttribute("aria-current", "page");
      } else {
        node = el("button", "tab", icon(t.icon) + "<span>" + t.label + "</span>"); node.type = "button";
        node.setAttribute("aria-haspopup", "dialog"); node.setAttribute("aria-expanded", "false");
        if (isActive) node.classList.add("is-active");
        node.addEventListener("click", function () { open(t, node); });
      }
      bar.appendChild(node);
    });

    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) close(); });
    document.body.appendChild(overlay); document.body.appendChild(sheet); document.body.appendChild(bar);
  });
})();
