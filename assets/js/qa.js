/* Quintana Abogados — interacciones del diseño editorial.
   1. Menús desplegables de la barra de navegación (menús anidados).
   2. Pantalla dividida qa/split (lista a la izquierda, panel a la derecha). */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -----------------------------------------------------------------------
     1. Menús desplegables
     Se abren al pasar el ratón (CSS) y también al pulsar o con el teclado.
     ----------------------------------------------------------------------- */
  var menus = Array.prototype.slice.call(document.querySelectorAll("[data-qa-menu]"));

  function setMenu(menu, open) {
    menu.setAttribute("data-open", open ? "true" : "false");
    var btn = menu.querySelector("button");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeAll(except) {
    menus.forEach(function (m) {
      if (m !== except) setMenu(m, false);
    });
  }

  menus.forEach(function (menu) {
    var btn = menu.querySelector("button");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var open = menu.getAttribute("data-open") !== "true";
      closeAll(menu);
      setMenu(menu, open);
    });
    menu.addEventListener("mouseenter", function () {
      btn.setAttribute("aria-expanded", "true");
    });
    menu.addEventListener("mouseleave", function () {
      if (menu.getAttribute("data-open") !== "true") btn.setAttribute("aria-expanded", "false");
      setMenu(menu, false);
    });
    menu.addEventListener("focusout", function (e) {
      if (!menu.contains(e.relatedTarget)) setMenu(menu, false);
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-qa-menu]")) closeAll();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var open = menus.filter(function (m) { return m.getAttribute("data-open") === "true"; })[0];
    closeAll();
    if (open) open.querySelector("button").focus();
  });

  /* -----------------------------------------------------------------------
     Imagen a todo el ancho (qa/showcase width="full")
     El CSS centra el bloque respecto a la columna de contenido; si esa columna
     no está centrada en la ventana (p. ej. con índice lateral), se corrige aquí.
     ----------------------------------------------------------------------- */
  var bleeds = Array.prototype.slice.call(document.querySelectorAll(".qa-showcase--full"));

  function fitBleeds() {
    var vw = document.documentElement.clientWidth;
    bleeds.forEach(function (el) {
      el.style.marginLeft = "";
      el.style.marginRight = "";
      el.style.width = "";
      var parent = el.parentElement.getBoundingClientRect();
      el.style.width = vw + "px";
      el.style.marginLeft = -parent.left + "px";
      el.style.marginRight = -(vw - parent.right) + "px";
    });
  }

  if (bleeds.length) {
    fitBleeds();
    window.addEventListener("resize", fitBleeds);
  }

  /* -----------------------------------------------------------------------
     2. Pantalla dividida (qa/split)
     ----------------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-qa-split]"), function (split) {
    var items = Array.prototype.slice.call(split.querySelectorAll(".qa-split__item"));
    var tabs = items.map(function (it) { return it.querySelector(".qa-split__tab"); });
    var panels = Array.prototype.slice.call(split.querySelectorAll(".qa-split__panel"));
    var seconds = parseFloat(split.getAttribute("data-interval"));
    var interval = isNaN(seconds) ? 8000 : seconds * 1000;
    var current = 0;
    var timer = null;
    var paused = false;
    var visible = false;

    if (!items.length) return;

    function activate(index, focus) {
      current = (index + items.length) % items.length;
      items.forEach(function (it, i) {
        var on = i === current;
        if (on) it.setAttribute("data-active", "true");
        else it.removeAttribute("data-active");
        tabs[i].setAttribute("aria-selected", on ? "true" : "false");
        tabs[i].setAttribute("tabindex", on ? "0" : "-1");
        if (panels[i]) {
          panels[i].hidden = !on;
          if (on) panels[i].setAttribute("data-active", "true");
          else panels[i].removeAttribute("data-active");
        }
      });
      if (focus) tabs[current].focus();
      restart();
    }

    function tick() {
      activate(current + 1, false);
    }

    function restart() {
      if (timer) window.clearTimeout(timer);
      timer = null;
      if (interval > 0 && !reduceMotion && !paused && visible && items.length > 1) {
        timer = window.setTimeout(tick, interval);
      }
      split.style.setProperty("--qa-split-progress-duration", interval + "ms");
      split.setAttribute("data-running", timer ? "true" : "false");
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { activate(i, false); });
      tab.addEventListener("keydown", function (e) {
        var keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
        if (e.key in keys) {
          e.preventDefault();
          activate(current + keys[e.key], true);
        } else if (e.key === "Home") {
          e.preventDefault();
          activate(0, true);
        } else if (e.key === "End") {
          e.preventDefault();
          activate(items.length - 1, true);
        }
      });
    });

    split.addEventListener("mouseenter", function () { paused = true; restart(); });
    split.addEventListener("mouseleave", function () { paused = false; restart(); });
    split.addEventListener("focusin", function () { paused = true; restart(); });
    split.addEventListener("focusout", function (e) {
      if (!split.contains(e.relatedTarget)) { paused = false; restart(); }
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        restart();
      }, { threshold: 0.35 }).observe(split);
    } else {
      visible = true;
      restart();
    }
  });
})();
