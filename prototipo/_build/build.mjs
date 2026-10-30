// Genera las páginas estáticas del prototipo: `node _build/build.mjs` desde la carpeta prototipo/.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { SITE, contact, services, cities, norms, policies, history, pillars } from "./content.mjs";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..");

const I = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" aria-hidden="true" class="cta-band__arrow"><path d="M12 36 36 12M16 12h20v20"/></svg>`,
  ext: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-icon-play style="display:none"><path d="M7 4.5v15l12-7.5z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-icon-pause><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.2-4 4.2-6 8-6s6.8 2 8 6"/></svg>`,
  up: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`,
};

const ext = (route) => SITE + route;
const svcList = Object.entries(services);

/* ---------- shared parts ---------- */
const head = ({ title, desc, path }) => `<!doctype html>
<html lang="es-CO">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#ea0029">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Coltanques">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="assets/img/viaducto-poster.jpg">
<meta property="og:locale" content="es_CO">
<link rel="icon" type="image/svg+xml" href="assets/logo/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400..800;1,400..800&display=swap">
<script>document.documentElement.classList.add("js")</script>
<link rel="stylesheet" href="assets/css/site.css">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Coltanques S.A.S.","alternateName":"Colombiana de Tanques","foundingDate":"1976","url":"https://www.coltanques.com.co/","logo":"assets/logo/coltanques-horizontal.svg","address":{"@type":"PostalAddress","streetAddress":"Carrera 88 No. 17B-40","addressLocality":"Bogotá","addressCountry":"CO"}}</script>
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>`;

const nav = [
  ["servicios.html", "Servicios", "servicios"],
  ["index.html#cobertura", "Cobertura", "cobertura"],
  ["nosotros.html", "Nosotros", "nosotros"],
  ["nosotros.html#trabaja", "Trabaja con nosotros", "trabaja"],
];

const header = (current) => `
<header class="site-header" data-header>
  <div class="frame header-row">
    <a class="brand" href="index.html" aria-label="Coltanques, ir al inicio"><img src="assets/logo/coltanques-horizontal.svg" width="200" height="40" alt="Coltanques Logística y Transportes"></a>
    <nav class="nav" aria-label="Principal">
      <ul>
        ${nav.map(([href, label, key]) => `<li><a href="${href}"${current === key ? ' aria-current="page"' : ""}>${label}</a></li>`).join("\n        ")}
      </ul>
    </nav>
    <div class="header-actions">
      <a class="nav-portal" href="${SITE}">${I.user}Portal clientes</a>
      <a class="btn btn--sm" href="cotizar.html"><span>Cotizar</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu" data-menu-toggle><span class="bars" aria-hidden="true"></span><span data-label>Menú</span></button>
    </div>
  </div>
</header>
<div class="menu" id="menu" hidden>
  <ul class="menu-main">
    ${[["index.html", "Inicio"], ...nav.map(([h, l]) => [h, l])].map(([h, l], i) => `<li style="--i:${i}"><a href="${h}"><span class="tick" aria-hidden="true"></span>${l}</a></li>`).join("\n    ")}
  </ul>
  <ul class="menu-sub">
    ${svcList.map(([, s]) => `<li><a href="${s.file}">${s.title}</a></li>`).join("\n    ")}
    <li><a href="${SITE}">Portal clientes</a></li>
  </ul>
  <a class="btn" href="cotizar.html"><span>Solicitar cotización</span>${I.arrow}</a>
</div>`;

const crumbs = (items) => `
<nav class="crumbs frame" aria-label="Ruta de navegación">
  <ol>
    ${items.map(([href, label], i) => (i === items.length - 1 ? `<li><span aria-current="page">${label}</span></li>` : `<li><a href="${href}">${label}</a></li>`)).join("\n    ")}
  </ol>
</nav>`;

const ctaBand = () => `
<a class="cta-band slant-left" href="cotizar.html" aria-label="Solicitar cotización: cuéntenos qué necesita mover">
  <span class="cta-band__inner">
    <span class="cta-band__top"><p>Cuéntenos qué necesita mover y un asesor comercial le enviará una propuesta.</p>${I.arrowUp}</span>
    <span class="cta-band__word" aria-hidden="true">Cotizar</span>
  </span>
</a>`;

const footer = () => `
<footer class="site-footer">
  <div class="frame">
    <a class="footer-mark" href="index.html" aria-label="Coltanques, ir al inicio"><img src="assets/logo/coltanques-horizontal-negativo.svg" width="688" height="149" alt="Coltanques Logística y Transportes" loading="lazy"></a>
    <div class="footer-cols">
      <div class="footer-col">
        <h2>Servicios</h2>
        <ul>${svcList.map(([, s]) => `<li><a href="${s.file}">${s.title}</a></li>`).join("")}</ul>
      </div>
      <div class="footer-col">
        <h2>Compañía</h2>
        <ul>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="nosotros.html#historia">Historia</a></li>
          <li><a href="nosotros.html#sostenibilidad">Sostenibilidad</a></li>
          <li><a href="nosotros.html#gobierno-corporativo">Gobierno corporativo</a></li>
          <li><a href="nosotros.html#trabaja">Trabaja con nosotros</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>Atención</h2>
        <ul>
          <li><a href="cotizar.html">Solicitar cotización</a></li>
          <li><a href="${ext("pqrs-page")}">PQRS</a></li>
          <li><a href="${ext("ethics-line")}">Línea ética</a></li>
          <li><a href="${ext("offices")}">Oficinas</a></li>
          <li><a href="${SITE}">Portal clientes</a></li>
        </ul>
      </div>
      <div class="footer-col footer-col--contact">
        <h2>Contacto</h2>
        <address>
          <p><strong>Sede principal</strong>${contact.address}</p>
          <p><strong>Línea comercial</strong><a href="${contact.phoneHref}">${contact.phone}</a></p>
          <p><strong>WhatsApp comercial</strong><a href="${contact.whatsappHref}">${contact.whatsapp}</a></p>
          <p><strong>Línea ética</strong><a href="mailto:${contact.ethics}">${contact.ethics}</a></p>
        </address>
      </div>
    </div>
  </div>
  <div class="footer-base">
    <div class="frame footer-base__row">
      <p>© <span data-year>2026</span> Coltanques S.A.S. Todos los derechos reservados.</p>
      <button class="btn btn--sm" type="button" data-top><span>Volver arriba</span>${I.up}</button>
    </div>
  </div>
</footer>
<script src="assets/js/site.js" defer></script>
</body>
</html>
`;

const page = (meta, current, body, { cta = true } = {}) =>
  head(meta) + header(current) + `\n<main id="contenido">\n${body}\n</main>` + (cta ? ctaBand() : "") + footer();

const quoteFields = (prefix, compact) => `
      <div>
        <label for="${prefix}-origen">Origen</label>
        <input class="input" id="${prefix}-origen" name="origen" required autocomplete="address-level2" placeholder="Ciudad o municipio" aria-describedby="err-${prefix}-origen" data-msg="Escriba la ciudad de origen.">
        <p class="error" id="err-${prefix}-origen"></p>
      </div>
      <div>
        <label for="${prefix}-destino">Destino</label>
        <input class="input" id="${prefix}-destino" name="destino" required placeholder="Ciudad o municipio" aria-describedby="err-${prefix}-destino" data-msg="Escriba la ciudad de destino.">
        <p class="error" id="err-${prefix}-destino"></p>
      </div>
      ${compact ? "" : `<div class="full">
        <label for="${prefix}-carga">Qué necesita mover</label>
        <span class="hint" id="hint-${prefix}-carga">Tipo de mercancía, peso o volumen aproximado y frecuencia.</span>
        <input class="input" id="${prefix}-carga" name="carga" placeholder="Ej.: 30 t de tubería, dos viajes al mes" aria-describedby="hint-${prefix}-carga">
      </div>`}
      <div>
        <label for="${prefix}-nombre">Nombre y empresa</label>
        <input class="input" id="${prefix}-nombre" name="nombre" required autocomplete="name" aria-describedby="err-${prefix}-nombre" data-msg="Escriba su nombre y el de su empresa.">
        <p class="error" id="err-${prefix}-nombre"></p>
      </div>
      <div>
        <label for="${prefix}-contacto">Correo o teléfono</label>
        <input class="input" id="${prefix}-contacto" name="contacto" required autocomplete="email" aria-describedby="err-${prefix}-contacto" data-msg="Escriba un correo o un teléfono para responderle.">
        <p class="error" id="err-${prefix}-contacto"></p>
      </div>
      ${compact ? "" : `<div class="full">
        <label for="${prefix}-detalles">Detalles adicionales <span class="muted">(opcional)</span></label>
        <textarea class="input" id="${prefix}-detalles" name="detalles" rows="4"></textarea>
      </div>`}
      <div class="full">
        <label class="check"><input type="checkbox" name="autoriza" required aria-describedby="err-${prefix}-autoriza"><span>Autorizo el tratamiento de mis datos según la <a href="${ext("privacepolicy")}">política de protección de datos</a>.</span></label>
        <p class="error" id="err-${prefix}-autoriza"></p>
      </div>
      <div class="full form-foot">
        <button class="btn" type="submit"><span>Enviar solicitud</span>${I.arrow}</button>
        <p class="form-note">Un asesor comercial le responderá con una propuesta.</p>
      </div>`;

const formDone = () => `
    <div class="form-done" data-form-done role="status">
      <h3>Solicitud recibida</h3>
      <p>Gracias. Un asesor comercial de <span data-done-svc>Coltanques</span> le contactará para preparar su propuesta.</p>
      <p class="small">Prototipo: este formulario todavía no envía datos.</p>
    </div>`;

/* ---------- INICIO ---------- */
const chooserData = Object.fromEntries(svcList.map(([k, s]) => [k, { title: s.title, short: s.short, text: s.lead, href: s.file, tone: s.tone }]));
const first = services["carga-seca"];

const home = page(
  { title: "Coltanques | Transporte de carga por carretera en Colombia desde 1976", desc: "Transporte terrestre de carga seca y líquida, almacenamiento y distribución, y rutas a Ecuador. 50 años moviendo al país. Solicite su cotización." },
  "inicio",
  `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__shape slant-left">
    <div class="hero__media slant-left">
      <video data-hero-video autoplay muted loop playsinline preload="metadata" poster="assets/img/viaducto-poster.jpg" aria-label="Convoy de tractocamiones rojos de Coltanques cruzando un viaducto entre montañas">
        <source src="assets/video/viaducto.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <button class="video-toggle" type="button" data-video-toggle>${I.pause}${I.play}<span data-label>Pausar video</span></button>
  <div class="frame hero__content">
    <div class="hero__text">
      <h1 class="display" id="hero-title" data-rise style="--i:0">Movemos la carga del país</h1>
      <p class="hero__lead" data-rise style="--i:1">Transporte terrestre de carga seca y líquida, almacenamiento y rutas a Ecuador. Cincuenta años en la carretera, desde 1976.</p>
      <div class="actions" data-rise style="--i:2">
        <a class="btn" href="cotizar.html"><span>Solicitar cotización</span>${I.arrow}</a>
        <a class="link-arrow" href="${contact.whatsappHref}">Hablar con un asesor${I.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section frame figures" aria-labelledby="fig-title">
  <div class="figures__board">
    <h2 class="head figures__title" id="fig-title" data-reveal>Medio siglo en la carretera</h2>
    <div class="tile tile--a slant slant-pad" data-reveal>
      <p class="tile__fig nums">50<small>años</small></p>
      <p class="tile__cap">Moviendo al país desde 1976, con la flota roja que se reconoce en cada vía.</p>
    </div>
    <div class="tile tile--b slant slant-pad" data-reveal style="--i:1">
      <p class="tile__fig nums">7 M</p>
      <p class="tile__cap">Millones de toneladas transportadas al año.</p>
    </div>
    <div class="tile tile--c slant slant-pad" data-reveal style="--i:2">
      <p class="tile__fig nums">6.000</p>
      <p class="tile__cap">Empleos generados por la operación.</p>
    </div>
  </div>
  <p class="figures__source">Toneladas y empleos: cifras publicadas por La Nota Económica en 2024.</p>
</section>

<section class="section frame" aria-labelledby="choose-title">
  <div class="chooser" data-chooser data-tone="${first.tone}">
    <div class="chooser__stage">
      <div class="chooser__block slant" aria-hidden="true"></div>
      <div class="chooser__photo slant">
        ${svcList.map(([k, s], i) => `<img data-photo="${k}" class="${i === 0 ? "is-on" : ""}" src="${s.photo}" alt="${s.photoAlt}" style="object-position:${s.photoPos}" width="1280" height="720" loading="lazy">`).join("\n        ")}
      </div>
      <div class="chooser__fact" data-fact-box aria-live="polite">
        <h3 data-fact="title">${first.title}</h3>
        <p data-fact="text">${first.lead}</p>
        <div class="actions">
          <a class="link-arrow" data-fact="more" href="${first.file}"><span>Ver ${first.short}</span>${I.arrow}</a>
          <a class="link-arrow" data-fact="quote" href="cotizar.html?servicio=carga-seca"><span>Cotizar ${first.short}</span>${I.arrow}</a>
        </div>
      </div>
    </div>
    <div class="chooser__list">
      <h2 id="choose-title">¿Qué necesita mover?</h2>
      <ul>
        ${svcList.map(([k, s], i) => `<li><button class="chooser__opt" type="button" data-choose="${k}" aria-pressed="${i === 0}"><span class="tick" aria-hidden="true"></span>${s.label}</button></li>`).join("\n        ")}
      </ul>
    </div>
  </div>
  <script type="application/json" id="chooser-data">${JSON.stringify(chooserData)}</script>
</section>

<section class="section" id="cobertura" aria-labelledby="cov-title">
  <div class="frame coverage">
    <div class="coverage__photo slant" data-wipe>
      <img src="assets/img/viaducto-curva.jpg" width="1280" height="720" alt="Tractocamiones de Coltanques en un viaducto curvo entre montañas" loading="lazy">
    </div>
    <div class="coverage__body">
      <h2 class="head" id="cov-title" data-reveal>Presencia en 12 ciudades</h2>
      <p class="lead" data-reveal style="--i:1">Oficinas y bodegas en los puertos, los campos y los centros de consumo del país, con salida a Ecuador por Ipiales.</p>
      <ul class="points">
        ${cities.map(([c, d], i) => `<li class="point" data-reveal style="--i:${i % 3}"><h3><span class="tick" aria-hidden="true"></span>${c}</h3><p>${d}</p></li>`).join("\n        ")}
      </ul>
      <p class="coverage__more"><a class="link-arrow" href="${ext("offices")}">Ver direcciones de las oficinas${I.ext}</a></p>
    </div>
  </div>
</section>

<section class="section panel-wrap" aria-labelledby="about-title">
  <div class="panel">
    <h2 class="head panel__title" id="about-title" data-reveal>50 años de historia</h2>
    <figure class="panel__photo slant" data-wipe>
      <img src="assets/img/via-montana.jpg" width="1624" height="1257" alt="Caravana de carrotanques de Coltanques en una vía de montaña" loading="lazy">
    </figure>
    <div class="panel__text">
      <div data-reveal><h3>De cinco camiones a una flota nacional</h3><p>Empezamos en 1976 con cinco Ford modelo 71 llevando crudo. Hoy movemos carga seca, líquida y almacenada desde 12 ciudades.</p></div>
      <div data-reveal style="--i:1"><h3>Pioneros en la carretera</h3><p>En 1986 abrimos camino en el transporte de carga seca y en 2014 hicimos nuestro primer despacho internacional, hacia Ecuador.</p></div>
      <a class="btn" href="nosotros.html#historia" data-reveal style="--i:2"><span>Conozca nuestra historia</span>${I.arrow}</a>
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="norm-title">
  <div class="board">
    <div class="board__tile board__lead slant slant-pad" data-reveal>
      <h2 class="head" id="norm-title">Operamos bajo norma</h2>
      <p>Certificaciones, planes y políticas que respaldan cada despacho.</p>
    </div>
    ${norms.map(([n, d, r], i) => (r ? `<a class="board__tile slant slant-pad" href="${ext(r)}" data-reveal style="--i:${(i % 4) + 1}"><b>${n}</b><span>${d}</span></a>` : `<div class="board__tile slant slant-pad" data-reveal style="--i:${(i % 4) + 1}"><b>${n}</b><span>${d}</span></div>`)).join("\n    ")}
  </div>
</section>
`,
);

/* ---------- SERVICIOS ---------- */
const industries = [
  ["Construcción", "Tuberías, tejas, láminas, hierro y acero para obras y distribuidores."],
  ["Alimentos y bebidas", "Azúcar, harinas, cervezas y alimentos para plantas y centros de distribución."],
  ["Hidrocarburos", "Crudo, combustibles refinados, gas y servicios petroleros."],
  ["Agroindustria", "Aceite de palma, azúcar y productos a granel del campo a la industria."],
];
const steps = [
  ["Solicitud", "Nos cuenta qué necesita mover, desde dónde y hacia dónde."],
  ["Propuesta", "Un asesor comercial estudia la operación y le envía una cotización."],
  ["Programación", "Acordamos fechas, vehículos y requisitos de cargue."],
  ["Despacho", "Su carga sale con nuestra flota y el asesor le acompaña hasta la entrega."],
];

const servicios = page(
  { title: "Servicios de transporte y logística | Coltanques", desc: "Carga seca, carga líquida, almacenamiento y distribución, y transporte a Ecuador. Conozca las modalidades y solicite su cotización." },
  "servicios",
  `${crumbs([["index.html", "Inicio"], ["servicios.html", "Servicios"]])}
<section class="page-head" aria-labelledby="page-title">
  <div class="frame page-head__grid">
    <div class="page-head__text">
      <h1 class="display" id="page-title" data-reveal>Transporte y logística</h1>
      <p class="lead" data-reveal style="--i:1">Cuatro líneas de servicio para mover, guardar y distribuir su carga en Colombia y hacia Ecuador.</p>
      <div class="actions" data-reveal style="--i:2"><a class="btn" href="cotizar.html"><span>Solicitar cotización</span>${I.arrow}</a><a class="link-arrow" href="#lineas">Ver los servicios${I.arrow}</a></div>
    </div>
    <div class="page-head__media slant-left">
      <div class="under slant-left"></div>
      <div class="over slant-left" data-wipe><video data-hero-video autoplay muted loop playsinline preload="metadata" poster="assets/img/viaducto-curva.jpg" aria-label="Convoy de tractocamiones de Coltanques cruzando un viaducto entre montañas"><source src="assets/video/viaducto.mp4" type="video/mp4"></video></div>
      <button class="video-toggle" type="button" data-video-toggle>${I.pause}${I.play}<span data-label>Pausar video</span></button>
    </div>
  </div>
</section>

<section class="section frame" id="lineas" aria-labelledby="lines-title">
  <div class="section-head">
    <h2 class="head" id="lines-title" data-reveal>Cuatro líneas de servicio</h2>
    <p class="lead" data-reveal style="--i:1">Cada una con sus modalidades. Si no sabe cuál necesita, un asesor le recomienda la adecuada.</p>
  </div>
  <div class="lines" style="margin-top:clamp(3rem,6vw,5rem)">
    ${svcList.map(([k, s]) => `<article class="line" aria-labelledby="l-${k}">
      <div class="line__media slant" data-wipe><img src="${s.photo}" alt="${s.photoAlt}" style="object-position:${s.photoPos}" loading="lazy" width="1280" height="720"></div>
      <div class="line__body">
        <h3 class="line__title" id="l-${k}" data-reveal>${s.title}</h3>
        <p class="lead" data-reveal style="--i:1">${s.lead}</p>
        <h4 data-reveal style="--i:2">Modalidades</h4>
        <ul class="chips" data-reveal style="--i:2">${s.modes.map(([m]) => `<li><span class="tick" aria-hidden="true"></span>${m}</li>`).join("")}</ul>
        <div class="actions" data-reveal style="--i:3"><a class="btn" href="${s.file}"><span>Ver ${s.short}</span>${I.arrow}</a><a class="link-arrow" href="cotizar.html?servicio=${k}">Cotizar${I.arrow}</a></div>
      </div>
    </article>`).join("\n    ")}
  </div>
</section>

<section class="section frame" aria-labelledby="ind-title">
  <div class="industries">
    <div class="industries__head">
      <h2 class="head" id="ind-title" data-reveal>Industrias que atendemos</h2>
      <p class="lead" data-reveal style="--i:1">Sectores que confían en nuestra flota desde hace décadas.</p>
    </div>
    <ul class="industries__list">
      ${industries.map(([n, d], i) => `<li class="industry" data-reveal style="--i:${i}"><h3>${n}</h3><p>${d}</p></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section frame" aria-labelledby="how-title">
  <div class="section-head">
    <h2 class="head" id="how-title" data-reveal>Cómo trabajamos</h2>
    <p class="lead" data-reveal style="--i:1">De la primera llamada al despacho, con un asesor comercial a cargo de su operación.</p>
  </div>
  <ol class="steps">
    ${steps.map(([t, d], i) => `<li class="step slant slant-pad" data-reveal style="--i:${i}"><h3>${t}</h3><p>${d}</p></li>`).join("\n    ")}
  </ol>
</section>
`,
);

/* ---------- SERVICE pages ---------- */
const assure = [
  ["Certificación BASC", "Desde 2003 operamos bajo la alianza empresarial internacional para un comercio seguro."],
  ["Seguridad vial", "Un Plan Estratégico de Seguridad Vial guía la formación de conductores y el cuidado de la flota."],
  ["Flota renovada", "Tractocamiones Kenworth y vehículos de norma Euro 5 incorporados entre 2020 y 2022."],
  ["Red nacional", "Oficinas y bodegas en 12 ciudades, con salida a Ecuador por Ipiales."],
];

const servicePage = (key) => {
  const s = services[key];
  const others = svcList.filter(([k]) => k !== key);
  return page(
    { title: `${s.title} | Coltanques`, desc: `${s.lead} Solicite su cotización de ${s.short} con Coltanques.` },
    "servicios",
    `${crumbs([["index.html", "Inicio"], ["servicios.html", "Servicios"], [s.file, s.title]])}
<section class="page-head" aria-labelledby="page-title">
  <div class="frame page-head__grid">
    <div class="page-head__text">
      <h1 class="display" id="page-title" data-reveal>${s.title}</h1>
      <p class="lead" data-reveal style="--i:1">${s.lead}</p>
      <p class="small muted" data-reveal style="--i:1;margin-top:1rem">${s.since}</p>
      <div class="actions" data-reveal style="--i:2"><a class="btn" href="#cotizar"><span>Cotizar ${s.short}</span>${I.arrow}</a><a class="link-arrow" href="${contact.whatsappHref}">Hablar con un asesor${I.arrow}</a></div>
    </div>
    <div class="page-head__media slant-left">
      <div class="under slant-left"></div>
      <div class="over slant-left" data-wipe><img src="${s.photo}" alt="${s.photoAlt}" style="object-position:${s.photoPos}" width="1280" height="720"></div>
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="goods-title">
  <div class="goods">
    <div class="goods__head">
      <h2 class="head" id="goods-title" data-reveal>${s.goodsTitle}</h2>
      <p class="lead" data-reveal style="--i:1;margin-top:1.25rem">${s.goodsLead}</p>
    </div>
    <ul class="goods__list" data-reveal style="--i:1">${s.goods.map((g) => `<li>${g}</li>`).join("")}</ul>
    <div class="strip">
      ${s.gallery.map(([src, alt, w, h], i) => `<figure data-reveal style="--i:${i}"><div class="frame-img slant"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy"></div><figcaption>${alt}.</figcaption></figure>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="modes-title">
  <div class="modes">
    <div class="modes__head">
      <h2 class="head" id="modes-title" data-reveal>Modalidades</h2>
      <p class="lead" data-reveal style="--i:1">Elija la que se ajusta a su operación. Si no está seguro, el asesor le recomienda una.</p>
    </div>
    <ul class="modes__list">
      ${s.modes.map(([m, d, w], i) => `<li class="mode" data-reveal style="--i:${i % 2}"><span class="tick" aria-hidden="true"></span><h3>${m}</h3><p>${d}</p><p class="when">${w}</p></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section field-ink" aria-labelledby="assure-title">
  <div class="frame assure">
    <div class="assure__photo slant" data-wipe><img src="assets/img/tractocamion-frente-rojo.jpg" alt="Frente de un tractocamión en penumbra, en duotono rojo" width="1800" height="1391" loading="lazy" style="object-position:20% 50%"></div>
    <div class="assure__body">
      <h2 class="head" id="assure-title" data-reveal>Su carga, bajo norma</h2>
      <ul class="assure__list">
        ${assure.map(([t, d], i) => `<li data-reveal style="--i:${i}"><span class="tick" aria-hidden="true"></span><b>${t}</b><p>${d}</p></li>`).join("\n        ")}
      </ul>
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="faq-title">
  <div class="faq">
    <div class="faq__head"><h2 class="head" id="faq-title" data-reveal>Preguntas frecuentes</h2></div>
    <div class="faq__list">
      ${s.faqs.map(([q, a], i) => `<details data-reveal style="--i:${i}"${i === 0 ? " open" : ""}><summary>${q}<span class="plus" aria-hidden="true"></span></summary><p>${a}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section field-ink" id="cotizar" aria-labelledby="closer-title">
  <div class="frame closer">
    <div class="closer__head">
      <h2 class="head" id="closer-title">Solicite su cotización</h2>
      <p class="lead">Déjenos los datos básicos de su ${s.short} y un asesor comercial le contactará con una propuesta.</p>
      <div class="actions"><a class="link-arrow" href="${contact.phoneHref}">Llamar al ${contact.phone}${I.arrow}</a><a class="link-arrow" href="${contact.whatsappHref}">WhatsApp comercial${I.arrow}</a></div>
    </div>
    <div class="closer__form">
      <form class="form" data-quote-form novalidate>
        <input type="radio" name="servicio" value="${key}" data-label="${s.title.toLowerCase()}" checked hidden>
        ${quoteFields("c", true)}
      </form>
      ${formDone()}
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="sib-title">
  <div class="siblings">
    <h2 class="head" id="sib-title" data-reveal>Otros servicios</h2>
    <ul>
      ${others.map(([, o], i) => `<li data-reveal style="--i:${i}"><a class="sibling" href="${o.file}"><span class="tick" aria-hidden="true"></span>${o.title}${I.arrow}</a></li>`).join("\n      ")}
    </ul>
  </div>
</section>
`,
    { cta: false },
  );
};

/* ---------- NOSOTROS ---------- */
const fades = [
  ["assets/img/via-montana.jpg", "Caravana de carrotanques en una vía de montaña", "Los primeros años, en la cordillera", 1624, 1257],
  ["assets/img/flota-tripulacion.jpg", "Conductores de Coltanques junto a sus carrotanques", "Conductores y flota de carga líquida", 1624, 1255],
  ["assets/img/equipo-carga-expresa.jpg", "Equipo de Coltanques reunido frente a un furgón con el logotipo", "Nuestro equipo", 1624, 1257],
  ["assets/img/tractocamion-frente.jpg", "Frente de un tractocamión en penumbra", "La flota de hoy", 1800, 1391],
];

const nosotros = page(
  { title: "Nosotros: 50 años moviendo al país | Coltanques", desc: "Desde 1976 Coltanques transporta la carga de Colombia. Conozca nuestra historia, misión, pilares y programas de sostenibilidad." },
  "nosotros",
  `${crumbs([["index.html", "Inicio"], ["nosotros.html", "Nosotros"]])}
<section class="page-head about-head" aria-labelledby="page-title">
  <div class="frame page-head__grid">
    <div class="page-head__text">
      <h1 class="display" id="page-title" data-reveal>Moviendo al país</h1>
      <p class="lead" data-reveal style="--i:1">Cincuenta años, desde 1976, llevando sobre nuestros lomos de metal la confianza y el futuro de los colombianos.</p>
      <div class="actions" data-reveal style="--i:2"><a class="btn" href="#historia"><span>Recorrer la historia</span>${I.arrow}</a></div>
    </div>
    <figure class="page-head__media slant-left">
      <div class="under slant-left"></div>
      <div class="over slant-left" data-wipe><div class="fade" data-crossfade>
        ${fades.map(([src, alt, cap, w, h], i) => `<img src="${src}" alt="${alt}" data-cap="${cap}" width="${w}" height="${h}" class="${i === 0 ? "is-on" : ""}"${i ? ' loading="lazy"' : ""}>`).join("\n        ")}
      </div></div>
      <figcaption data-crossfade-cap>${fades[0][2]}</figcaption>
    </figure>
  </div>
</section>

<section class="section frame" aria-labelledby="who-title">
  <div class="statement">
    <figure class="statement__photo slant" data-wipe><img src="assets/img/equipo-50-anos.webp" width="600" height="500" alt="Directivos de Coltanques con chaquetas rojas frente a un tractocamión de los 50 años" loading="lazy"></figure>
    <div class="statement__body">
      <h2 class="head" id="who-title" data-reveal>Quiénes somos</h2>
      <blockquote data-reveal style="--i:1;margin-top:2rem">Un sueño que empezó en el 76 llevando crudo por un país ansioso por crecer. Cada camino lleva la huella de nuestros neumáticos.</blockquote>
      <p data-reveal style="--i:2">Hoy somos una compañía de logística y transporte de carga con presencia en 12 ciudades, bodegas propias y una flota que cruza la frontera con Ecuador. Seguimos construyendo país, un despacho a la vez.</p>
    </div>
  </div>
</section>

<section class="section frame" id="historia" aria-labelledby="hist-title">
  <div class="timeline__head">
    <h2 class="head" id="hist-title" data-reveal>Nuestra historia</h2>
    <p class="lead" data-reveal style="--i:1">Seis épocas de una misma carretera.</p>
  </div>
  <div class="timeline__tabs" role="tablist" aria-label="Épocas de la historia de Coltanques" data-tabs>
    ${history.map((h, i) => `<button class="timeline__tab slant" role="tab" type="button" id="tab-${h.id}" aria-controls="panel-${h.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${h.tab}</button>`).join("\n    ")}
  </div>
  ${history.map((h, i) => `<div class="timeline__panel" role="tabpanel" id="panel-${h.id}" aria-labelledby="tab-${h.id}"${i ? " hidden" : ""}>
    <div class="timeline__text">
      <h3>${h.title}</h3>
      <p>${h.text}</p>
      ${h.items.length ? `<ul class="milestones">${h.items.map(([y, t]) => `<li><b>${y}</b><span>${t}</span></li>`).join("")}</ul>` : ""}
    </div>
    <div class="timeline__photos">
      ${h.photos.slice(0, 5).map((p, j) => `<figure><img src="${p}" alt="${h.alts[j] || ""}" width="370" height="250" loading="lazy"></figure>`).join("\n      ")}
    </div>
  </div>`).join("\n  ")}
</section>

<section class="section field-ink" aria-labelledby="founder-title">
  <div class="frame founder">
    <div class="founder__body">
      <h2 class="head" id="founder-title" data-reveal>Nuestro fundador</h2>
      <p class="lead" data-reveal style="--i:1">Henry Cubides Olarte fundó Coltanques en 1976 con cinco camiones y la convicción de que el transporte de carga podía construir país. Cincuenta años después, su visión sigue marcando el rumbo de la compañía.</p>
    </div>
    <figure class="founder__photo slant" data-wipe><img src="assets/img/historia/2024_2.webp" width="370" height="250" alt="Retrato en blanco y negro de Henry Cubides Olarte, fundador de Coltanques" loading="lazy"></figure>
  </div>
</section>

<section class="section frame" aria-labelledby="purpose-title">
  <h2 class="sr-only" id="purpose-title">Misión y visión</h2>
  <div class="purpose">
    <div class="purpose__item field-red" data-reveal>
      <h3 class="head">Misión</h3>
      <p>Somos aliados estratégicos en logística y transporte de carga en los diferentes sectores de la economía, garantizando soluciones integrales para la satisfacción de nuestros clientes y promoviendo el desarrollo del país, de nuestros clientes, colaboradores, accionistas y proveedores.</p>
    </div>
    <div class="purpose__item field-tone" data-reveal style="--i:1">
      <h3 class="head">Visión</h3>
      <p>Ser una compañía de servicios integrales en operación logística de clase mundial.</p>
    </div>
  </div>
</section>

<section class="section frame" aria-labelledby="pillars-title">
  <div class="section-head">
    <h2 class="head" id="pillars-title" data-reveal>Nuestros pilares</h2>
    <p class="lead" data-reveal style="--i:1">Cinco ideas que guían cómo trabajamos, en la oficina y en la carretera.</p>
  </div>
  <ul class="pillars">
    ${pillars.map(([t, d], i) => `<li class="pillar" data-reveal style="--i:${i % 2}"><h3><span class="tick" aria-hidden="true"></span>${t}</h3><p>${d}</p></li>`).join("\n    ")}
  </ul>
</section>

<section class="section frame" id="sostenibilidad" aria-labelledby="impact-title">
  <div class="impact">
    <div class="impact__head">
      <h2 class="head" id="impact-title" data-reveal>Sostenibilidad</h2>
      <p class="lead" data-reveal style="--i:1">Programas de bienestar y desarrollo social para nuestros grupos de interés, organizados en tres ejes.</p>
    </div>
    <ul class="impact__list">
      <li class="impact__row" data-reveal><b class="nums">6.000</b><div><h3>Economía circular</h3><p>Personas beneficiadas con programas como Tapas para sanar y el ecodiseño de la dotación.</p></div></li>
      <li class="impact__row" data-reveal style="--i:1"><b class="nums">450</b><div><h3>Cuidado integral a comunidades</h3><p>Personas atendidas con programas de salud y seguridad alimentaria.</p></div></li>
      <li class="impact__row" data-reveal style="--i:2"><b class="nums">300</b><div><h3>Apoyo a la educación</h3><p>Personas beneficiadas, de la primera infancia a la educación superior.</p></div></li>
    </ul>
    <div class="impact__more">
      <div data-reveal><h3>Gestión ambiental</h3><p>Reducimos nuestro impacto transformando las dotaciones en desuso en nuevos productos.</p></div>
      <div data-reveal style="--i:1"><h3>Seguridad vial</h3><p>Nuestro <a href="${ext("policiespesv")}">Plan Estratégico de Seguridad Vial</a> cuida a conductores, comunidades y carga.</p></div>
    </div>
  </div>
</section>

<section class="section frame" id="gobierno-corporativo" aria-labelledby="gov-title">
  <div class="impact">
    <div class="impact__head">
      <h2 class="head" id="gov-title" data-reveal>Gobierno corporativo</h2>
      <p class="lead" data-reveal style="--i:1">Las políticas con las que Coltanques cumple la ley, protege los datos y opera con ética.</p>
    </div>
    <div class="gov">
      ${policies.map(([g, items], i) => `<div class="gov__group" data-reveal style="--i:${i}"><h3>${g}</h3><ul>${items.map(([l, r]) => `<li><a href="${ext(r)}"><span>${l}</span>${I.ext}</a></li>`).join("")}</ul></div>`).join("")}
    </div>
  </div>
</section>

<section class="section frame" id="trabaja" aria-labelledby="join-title">
  <div class="section-head">
    <h2 class="head" id="join-title" data-reveal>Trabaja con nosotros</h2>
    <p class="lead" data-reveal style="--i:1">Más de 6.000 personas hacen posible cada despacho. Hay un lugar para usted en la oficina o al volante.</p>
  </div>
  <div class="join" style="margin-top:clamp(2.5rem,4vw,3.5rem)">
    <a class="slant slant-pad" href="${SITE}" data-reveal><b>Únase a nuestro equipo</b><span>Vacantes en las áreas administrativa, comercial y de operaciones.</span><span class="ext">Ver vacantes${I.ext}</span></a>
    <a class="slant slant-pad" href="${SITE}" data-reveal style="--i:1"><b>Quiero ser conductor</b><span>Si tiene experiencia en tractocamión, postúlese para manejar con la flota roja.</span><span class="ext">Postularme${I.ext}</span></a>
  </div>
</section>
`,
);

/* ---------- COTIZAR ---------- */
const cotizar = page(
  { title: "Solicitar cotización | Coltanques", desc: "Cuéntenos qué necesita mover y un asesor comercial de Coltanques le enviará una propuesta de transporte, almacenamiento o distribución." },
  "",
  `${crumbs([["index.html", "Inicio"], ["cotizar.html", "Solicitar cotización"]])}
<section class="page-head" aria-labelledby="page-title">
  <div class="frame page-head__grid" style="min-height:min(56svh,32rem)">
    <div class="page-head__text">
      <h1 class="display" id="page-title" data-reveal>Solicitar cotización</h1>
      <p class="lead" data-reveal style="--i:1">Cuéntenos qué necesita mover. Un asesor comercial estudiará su operación y le enviará una propuesta.</p>
    </div>
    <div class="page-head__media slant-left" style="--h:min(46svh,26rem)">
      <div class="under slant-left"></div>
      <div class="over slant-left" data-wipe><img src="assets/img/equipo-50-anos.webp" width="600" height="500" alt="Equipo comercial y directivo de Coltanques frente a un tractocamión" style="object-position:50% 70%"></div>
    </div>
  </div>
</section>
<section class="section frame" aria-labelledby="form-title" style="padding-top:0">
  <h2 class="sr-only" id="form-title">Formulario de cotización</h2>
  <div class="quote">
    <div class="quote__form">
      <form class="form" data-quote-form novalidate data-reveal>
        <fieldset class="choice full">
          <legend>Servicio</legend>
          <div class="choice__opts">
            ${svcList.map(([k, s], i) => `<label><input type="radio" name="servicio" value="${k}" data-label="${s.title.toLowerCase()}"${i === 0 ? " checked" : ""}><span class="opt"><span class="tick" aria-hidden="true"></span>${s.title}</span></label>`).join("\n            ")}
          </div>
        </fieldset>
        ${quoteFields("q", false)}
      </form>
      ${formDone()}
    </div>
    <aside class="quote__aside" id="canales" aria-labelledby="ch-title" data-reveal style="--i:1">
      <h2 class="h3" id="ch-title">Prefiere hablar con alguien</h2>
      <div class="channels" style="margin-top:1.25rem">
        <a class="channel channel--red slant" href="${contact.phoneHref}"><b>${contact.phone}</b><span>Línea comercial</span></a>
        <a class="channel slant" href="${contact.whatsappHref}"><b>${contact.whatsapp}</b><span>WhatsApp comercial</span></a>
        <a class="channel slant" href="mailto:${contact.email}"><b>${contact.email}</b><span>Correo comercial</span></a>
        <div class="channel slant"><b>Sede principal</b><span>${contact.address}</span></div>
      </div>
      <div class="next-steps">
        <h2>Qué pasa después</h2>
        <ol>
          <li><span class="tick" aria-hidden="true"></span><span>Un asesor revisa su solicitud y le contacta para confirmar los detalles.</span></li>
          <li><span class="tick" aria-hidden="true"></span><span>Le enviamos una propuesta con tarifa, vehículos y tiempos.</span></li>
          <li><span class="tick" aria-hidden="true"></span><span>Programamos el primer despacho en las fechas que acordemos.</span></li>
        </ol>
      </div>
    </aside>
    <div class="strip">
      ${[["assets/img/viaducto-poster.jpg", "Tractocamión con carga seca en un viaducto de montaña", 1280, 720], ["assets/img/flota-tripulacion.jpg", "Conductores junto a sus carrotanques", 1624, 1255], ["assets/img/bodega.webp", "Bodega de almacenamiento y distribución", 1920, 1080]].map(([src, alt, w, h], i) => `<figure data-reveal style="--i:${i}"><div class="frame-img slant"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy"></div><figcaption>${alt}.</figcaption></figure>`).join("\n      ")}
    </div>
  </div>
</section>
`,
  { cta: false },
);

const files = { "index.html": home, "servicios.html": servicios, "nosotros.html": nosotros, "cotizar.html": cotizar };
for (const k of Object.keys(services)) files[services[k].file] = servicePage(k);
for (const [name, html] of Object.entries(files)) writeFileSync(join(OUT, name), html);
console.log("built:", Object.keys(files).join(", "));
