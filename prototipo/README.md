# Prototipo navegable: sitio Coltanques

HTML, CSS y JavaScript sin dependencias. Abra `index.html` en el navegador, con doble clic. La tipografía Jost se carga de Google Fonts, así que necesita conexión.

## Páginas
| Archivo | Página |
|---|---|
| `index.html` | Inicio |
| `servicios.html` | Servicios (hub) |
| `carga-seca.html`, `carga-liquida.html`, `almacenamiento.html`, `transporte-ecuador.html` | Plantilla de página de servicio |
| `nosotros.html` | Nosotros: historia, fundador, misión, pilares, sostenibilidad y trabajo |
| `cotizar.html` | Solicitar cotización. Acepta `?servicio=carga-seca` para llegar prellenado |

## Editar y regenerar
Las páginas se generan con `node _build/build.mjs`. El contenido está en `_build/content.mjs` y la maquetación en `_build/build.mjs`. Los estilos viven en `assets/css/site.css` y el comportamiento en `assets/js/site.js`. **No edite los `.html` a mano:** se sobrescriben en cada generación.

## Contenido de muestra que hay que reemplazar antes de publicar
Está marcado como `MUESTRA` en `_build/content.mjs`:
- Teléfono comercial `(601) 000 0000`, WhatsApp `+57 300 000 0000` y correo `comercial@coltanques.com.co`.
- Enlace de WhatsApp: hoy apunta a `cotizar.html#canales` y debe pasar a `https://wa.me/<número>`.
- Formularios: validan y muestran confirmación, pero **no envían datos**.
- Las descripciones de cada modalidad y las preguntas frecuentes están redactadas para el prototipo y debe validarlas el área comercial.
- Los enlaces a portal de clientes, vacantes, oficinas, PQRS y políticas llevan al sitio actual.
