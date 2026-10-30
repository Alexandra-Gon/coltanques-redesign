/* Coltanques — prototipo. Sin dependencias. Todo el contenido es visible sin JavaScript. */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* header compacto al hacer scroll */
  const header = $("[data-header]");
  if (header) {
    const onScroll = () => header.classList.toggle("is-compact", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* menú móvil */
  const toggle = $("[data-menu-toggle]");
  const menu = $("#menu");
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("[data-label]").textContent = open ? "Cerrar" : "Menú";
      menu.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
      if (open) menu.querySelector("a")?.focus();
    };
    toggle.addEventListener("click", () => setOpen(menu.hidden));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 68.0625rem)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  /* entradas al hacer scroll. Las fotos con barrido arrancan recortadas a cero y Chrome
     no las ve intersecar, así que se observa su contenedor. */
  const revealables = $$("[data-reveal], [data-wipe]");
  if (revealables.length && "IntersectionObserver" in window && !reduce) {
    const targets = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        (targets.get(en.target) || []).forEach((el) => el.classList.add("is-in"));
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    revealables.forEach((el) => {
      const watch = el.hasAttribute("data-wipe") ? el.parentElement : el;
      if (!targets.has(watch)) targets.set(watch, []);
      targets.get(watch).push(el);
      io.observe(watch);
    });
  } else {
    revealables.forEach((el) => el.classList.add("is-in"));
  }

  /* video del hero: respeta "reducir movimiento" y ofrece pausa (WCAG 2.2.2) */
  const video = $("[data-hero-video]");
  const vbtn = $("[data-video-toggle]");
  if (video && vbtn) {
    const label = vbtn.querySelector("[data-label]");
    const sync = () => {
      const playing = !video.paused;
      label.textContent = playing ? "Pausar video" : "Reproducir video";
      vbtn.querySelector("[data-icon-pause]").style.display = playing ? "" : "none";
      vbtn.querySelector("[data-icon-play]").style.display = playing ? "none" : "";
    };
    if (reduce) { video.removeAttribute("autoplay"); video.pause(); }
    else { video.play().catch(() => {}); }
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    vbtn.addEventListener("click", () => (video.paused ? video.play() : video.pause()));
    document.addEventListener("visibilitychange", () => { if (document.hidden) video.pause(); });
    sync();
  }

  /* selector "¿Qué necesita mover?" */
  const chooser = $("[data-chooser]");
  if (chooser) {
    const opts = $$("[data-choose]", chooser);
    const imgs = $$("[data-photo]", chooser);
    const fact = $("[data-fact-box]", chooser);
    const data = JSON.parse($("#chooser-data").textContent);
    const select = (key, focus) => {
      const d = data[key];
      opts.forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.choose === key)));
      imgs.forEach((i) => i.classList.toggle("is-on", i.dataset.photo === key));
      chooser.dataset.tone = d.tone;
      fact.classList.add("is-swapping");
      window.setTimeout(() => {
        $("[data-fact=title]", fact).textContent = d.title;
        $("[data-fact=text]", fact).textContent = d.text;
        const more = $("[data-fact=more]", fact);
        more.href = d.href;
        more.querySelector("span").textContent = "Ver " + d.short;
        const quote = $("[data-fact=quote]", fact);
        quote.href = "cotizar.html?servicio=" + key;
        quote.querySelector("span").textContent = "Cotizar " + d.short;
        fact.classList.remove("is-swapping");
      }, reduce ? 0 : 200);
      if (focus) opts.find((o) => o.dataset.choose === key)?.focus();
    };
    opts.forEach((o, idx) => {
      o.addEventListener("click", () => select(o.dataset.choose));
      o.addEventListener("keydown", (e) => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!dir) return;
        e.preventDefault();
        const next = opts[(idx + dir + opts.length) % opts.length];
        select(next.dataset.choose, true);
      });
    });
  }

  /* fotos que se funden lentamente (cabecera de Nosotros) */
  $$("[data-crossfade]").forEach((box) => {
    const imgs = $$("img", box);
    const cap = box.parentElement.querySelector("[data-crossfade-cap]");
    if (imgs.length < 2 || reduce) return;
    let i = 0, timer;
    const step = () => {
      imgs[i].classList.remove("is-on");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("is-on");
      if (cap) cap.textContent = imgs[i].dataset.cap || "";
    };
    const start = () => { stop(); timer = window.setInterval(step, 5600); };
    const stop = () => window.clearInterval(timer);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    start();
  });

  /* línea de tiempo: pestañas accesibles */
  const tablist = $("[data-tabs]");
  if (tablist) {
    const tabs = $$("[role=tab]", tablist);
    const show = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((t, idx) => {
      t.addEventListener("click", () => show(t));
      t.addEventListener("keydown", (e) => {
        let n = null;
        if (e.key === "ArrowRight") n = tabs[(idx + 1) % tabs.length];
        if (e.key === "ArrowLeft") n = tabs[(idx - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") n = tabs[0];
        if (e.key === "End") n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); show(n, true); n.scrollIntoView({ block: "nearest", inline: "nearest" }); }
      });
    });
  }

  /* formularios de cotización: prellenado, validación y estado de envío */
  const params = new URLSearchParams(location.search);
  $$("[data-quote-form]").forEach((form) => {
    const pre = params.get("servicio");
    if (pre) {
      const radio = form.querySelector(`input[name=servicio][value="${CSS.escape(pre)}"]`);
      if (radio) radio.checked = true;
    }
    const fieldError = (input, msg) => {
      const err = form.querySelector(`#${input.getAttribute("aria-describedby")?.split(" ").find((id) => id.startsWith("err-"))}`);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) { err.textContent = msg || ""; err.classList.toggle("is-on", Boolean(msg)); }
    };
    const check = (input) => {
      if (input.type === "checkbox") return input.checked ? "" : "Necesitamos su autorización para responderle.";
      const v = input.value.trim();
      if (input.required && !v) return input.dataset.msg || "Este campo es obligatorio.";
      if (input.name === "contacto" && v && !/@/.test(v) && v.replace(/\D/g, "").length < 7) return "Escriba un correo o un teléfono de al menos 7 dígitos.";
      return "";
    };
    const inputs = $$("input[required], textarea[required]", form).filter((i) => i.type !== "radio");
    inputs.forEach((i) => i.addEventListener("blur", () => { if (i.getAttribute("aria-invalid") === "true" || i.value) fieldError(i, check(i)); }));
    inputs.forEach((i) => i.addEventListener("input", () => { if (i.getAttribute("aria-invalid") === "true") fieldError(i, check(i)); }));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let first = null;
      inputs.forEach((i) => { const m = check(i); fieldError(i, m); if (m && !first) first = i; });
      if (first) { first.focus(); return; }
      const btn = form.querySelector("[type=submit]");
      btn.setAttribute("aria-busy", "true");
      btn.querySelector("span").textContent = "Enviando…";
      window.setTimeout(() => {
        const done = form.parentElement.querySelector("[data-form-done]");
        const svc = form.querySelector("input[name=servicio]:checked");
        if (done && svc) done.querySelector("[data-done-svc]").textContent = svc.dataset.label;
        form.hidden = true;
        done.classList.add("is-on");
        done.setAttribute("tabindex", "-1");
        done.focus();
      }, reduce ? 0 : 700);
    });
  });

  /* año del pie de página */
  $$("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

  /* volver arriba */
  $$("[data-top]").forEach((b) => b.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.querySelector(".skip")?.focus({ preventScroll: true });
  }));
})();
