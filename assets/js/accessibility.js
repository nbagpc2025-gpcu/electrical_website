/* Text size buttons (A- / A / A+) in the top bar. The choice is remembered on this device. */
(function () {
  var sizes = [0.9, 1, 1.1, 1.2], i = 1, KEY = "gpcelectrical-text-size";
  try { var saved = parseFloat(localStorage.getItem(KEY)); if (sizes.indexOf(saved) > -1) i = sizes.indexOf(saved); } catch (e) {}
  var targets = function () { return document.querySelectorAll("main, footer"); };
  var apply = function () {
    targets().forEach(function (el) { el.style.zoom = sizes[i] === 1 ? "" : sizes[i]; });
    var lbl = document.getElementById("ts-value"); if (lbl) lbl.textContent = Math.round(sizes[i] * 100) + "%";
    document.querySelectorAll("[data-ts]").forEach(function (b) {
      var d = b.getAttribute("data-ts");
      b.disabled = (d === "-" && i === 0) || (d === "+" && i === sizes.length - 1);
    });
    try { localStorage.setItem(KEY, sizes[i]); } catch (e) {}
  };
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-ts]"); if (!b) return;
    var d = b.getAttribute("data-ts");
    i = d === "+" ? Math.min(i + 1, sizes.length - 1) : d === "-" ? Math.max(i - 1, 0) : 1;
    apply();
  });
  apply();
})();

/* English, Gujarati and Hindi buttons. Google Translate translates page text;
   presentation images and linked documents retain their original language. */
(function () {
  var selected = "en";
  try { selected = localStorage.getItem("gpcelectrical-language") || "en"; } catch(e) {}
  if (!/^(en|gu|hi)$/.test(selected)) selected = "en";
  var buttons = document.querySelectorAll("[data-language]");
  function mark(language) {
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-language") === language)); });
  }
  mark(selected);
  function setLanguage(language) {
    var value = "/en/" + language;
    try { localStorage.setItem("gpcelectrical-language", language); } catch(e) {}
    var scope = location.pathname.slice(0, location.pathname.lastIndexOf("/")+1) || "/";
    var attributes = "; path=" + scope + "; max-age=31536000; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : "");
    document.cookie = "googtrans=" + value + attributes;
    location.reload();
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () {
    var language = b.getAttribute("data-language");
    if (language !== selected && /^(en|gu|hi)$/.test(language)) setLanguage(language);
  }); });
  if (selected === "en") return;
  var container = document.getElementById("google_translate_element");
  if (!container) { container = document.createElement("div"); container.id = "google_translate_element"; document.body.appendChild(container); }
  document.documentElement.lang = selected;
  window.gtInit = function () {
    new google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "en,gu,hi", autoDisplay: false }, "google_translate_element");
  };
  var script = document.createElement("script");
  script.src = "https://translate.google.com/translate_a/element.js?cb=gtInit";
  script.async = true;
  script.onerror = function () {
    document.documentElement.lang = "en";
    mark("en");
    document.querySelectorAll(".language-buttons").forEach(function (group) {
      var note = document.createElement("span"); note.className = "language-error notranslate";
      note.setAttribute("translate", "no"); note.setAttribute("role", "status");
      note.textContent = "Translation unavailable. Please try again later.";
      group.after(note);
    });
  };
  document.body.appendChild(script);
})();

/* Keep the fixed header clear of content when language controls wrap on phones. */
(function () {
  var header = document.querySelector("header"); if (!header) return;
  var update = function () {
    document.documentElement.style.setProperty("--site-header-height", Math.ceil(header.getBoundingClientRect().height) + "px");
  };
  update();
  if ("ResizeObserver" in window) new ResizeObserver(update).observe(header);
  else window.addEventListener("resize", update);
})();

