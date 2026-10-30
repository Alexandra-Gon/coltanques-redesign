# Coltanques · Diagnóstico previo al rediseño

**Fuentes:** *Auditoría UX/UI del sitio de Coltanques* v1.0 (29-oct-2026) y *Manual de marca Coltanques*.
**Estado:** solo diagnóstico. No contiene propuesta de diseño.

> **Cómo se leyeron las fuentes.** El manual de marca se leyó por extracción de texto, así que no se vieron logos, paletas, ejemplos de uso ni ilustraciones. Todo lo que el texto no dice, por ejemplo tono de voz, tamaños mínimos del logo o usos incorrectos ilustrados, queda como pregunta abierta en la sección 5. La auditoría se basa en cuatro capturas de escritorio (Inicio, Nosotros, Servicios y Carga seca). No cubre móvil, rendimiento, teclado ni las secciones Flota, Trabaja con nosotros y Contáctanos. Sus propios autores marcan varios hallazgos como "por verificar".

---

## 1. Hallazgos más críticos, ordenados por impacto

La auditoría identifica 40 hallazgos: 1 crítico, 15 altos, 18 medios y 6 bajos. Los ordeno por impacto en el negocio y en la credibilidad, no por el orden de la auditoría. Los IDs remiten a su matriz.

| # | Hallazgo | IDs | Severidad | Por qué pesa |
|---|---|---|---|---|
| 1 | **No hay ruta comercial.** Ninguna de las 4 vistas muestra "Cotizar", teléfono o WhatsApp. "Contáctanos" está dentro de un desplegable y el footer no tiene datos de contacto. Los únicos CTA ("Conoce más", "Volver a servicios") son de navegación. | CTA-01, 02, 03, 04 | Crítica / Alta | El visitante con intención de compra no puede avanzar y el lead se pierde. La auditoría lo califica 1/5, la peor categoría. Es corrección de bajo esfuerzo. |
| 2 | **Errores visibles y contenido vencido.** Etiquetas e iconos duplicados en Carga seca (Contenedor, Masivo, Distribución). Visión "Para el 2025 seremos…" y copyright 2025, estando en 2026. Grandes zonas en blanco, entre ellas la sección "Certificaciones" sin contenido. Errores de redacción. | US-02, US-04, CO-03, CO-04 | Alta | Una empresa que se presenta como la más grande del país transmite descuido. Se corrige rápido (P1). |
| 3 | **Promesa de liderazgo sin evidencia.** "La más grande del país" no tiene cifras, clientes, casos, cobertura ni certificaciones en la página. Los mensajes son genéricos ("mejor aliado logístico"). | CO-01, CO-02, AI-04 | Alta | En B2B la confianza se construye con datos vigentes. La auditoría cita prensa que respalda el liderazgo (La República, La Nota Económica), pero las cifras deben validarse internamente. |
| 4 | **Servicios poco explicados y mal organizados.** Las tarjetas solo tienen icono y título. La taxonomía mezcla tipo de carga, servicio y geografía. Carga seca mezcla modalidad, tipo de carga y sector. "Servicios" repite el contenido de Inicio. | US-01, AI-01, AI-02, AI-03 | Alta / Media | El usuario hace clic "a ciegas" y no sabe dónde está su necesidad. También debilita el SEO por contenidos solapados. |
| 5 | **Accesibilidad por debajo de WCAG 2.2 AA.** Texto incrustado en imagen (Historia). Contrastes insuficientes: versión del footer ≈ 1,6:1 y verde del ticker ≈ 3,4:1. Texto pequeño sobre fotos y tarjetas translúcidas. Foco, teclado y movimiento sin verificar. | AC-01 a AC-05 | Alta | Es un riesgo de uso y de reputación. Además afecta a todos los usuarios en pantallas pequeñas o con brillo. |
| 6 | **Navegación y header inconsistentes.** La barra roja con redes e "Ingresar" aparece y desaparece según la vista. Hasta tres capas antes del contenido (ticker, barra, header). El ticker financiero queda cortado y compite con la marca. No hay migas de pan. Los públicos no están segmentados ("Ingresar" es ambiguo). | NAV-01 a 04, DV-02, CTA-05 | Media | Desorienta y ocupa el espacio de mayor jerarquía con datos que rara vez ayudan a decidir una contratación. |
| 7 | **Base técnica por confirmar.** El HTML de Inicio solo entregó metadatos, lo que sugiere renderizado en cliente (riesgo SEO). Codificación ISO-8859-1 con tildes corruptas. Sin Open Graph ni canonical. Rendimiento y móvil sin medir. Versión visible en el footer. | TE-01 a 05 | Alta (TE-01) / Media / Baja | Los autores marcan TE-01 como "por confirmar". Es el cambio más costoso (P3), así que conviene medir antes de decidir. |
| 8 | **Sistema visual sin consistencia.** Hero con video de carretera donde la flota casi no se ve. Tres lenguajes de tarjeta distintos. Tarjetas con aspecto de wireframe. Footer casi vacío. | DV-01, 03, 04, 05 | Media | La identidad cromática es sólida, pero falta jerarquía comercial y un sistema de componentes. |

**Dos hallazgos de contenido pueden ser un problema de datos:**
- **CO-05**, la cronología: la auditoría menciona 1974, "50 años" y 1986. El manual de marca dice **"desde 1976"** (ver sección 5, pregunta 1).
- **CO-06**, palabras clave: el SEO promete refrigerado, mercancías peligrosas, carga pesada y comercio internacional, pero la oferta visible no los destaca.

**Lo que ya funciona y conviene conservar** (según la auditoría): identidad cromática fuerte, fotografía real de flota y personas, iconografía lineal coherente, modo oscuro, estructura de primer nivel corta, y la lista concreta de mercancías en Carga seca.

---

## 2. Objetivos de la propuesta

### Experiencia de usuario
- Que cualquier visitante encuentre su necesidad en pocos clics, con una **única taxonomía** (por modalidad de servicio y, aparte, por industria).
- Un **header estable** con estado compacto, migas de pan y elemento activo marcado en todos los niveles.
- Tarjetas y páginas de servicio que **expliquen** qué se ofrece y cuál es el siguiente paso.
- **Cero errores visibles**: sin duplicados, vacíos ni contenido vencido.
- **Accesible por defecto**: WCAG 2.2 AA, texto real en HTML, cuerpo ≥ 16 px, contraste ≥ 4,5:1 y teclado funcional.
- Experiencia móvil verificada (360–414 px) y presupuesto de rendimiento (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1).

### Comunicación corporativa
- Respaldar el liderazgo con **evidencia**: cifras validadas con año y fuente, cobertura, certificaciones, clientes y casos.
- Mensajes basados en beneficios concretos (cobertura, tiempos, seguridad, trazabilidad) en lugar de adjetivos genéricos.
- **Una sola narrativa histórica** coherente en texto, insignia y línea de tiempo.
- Reflejar la identidad del manual (logo, color, tipografía, tono) de forma fiel y consistente. Eso incluye resolver las diferencias entre la auditoría y el manual (sección 4).
- Gobierno editorial: guía de estilo, revisión ortográfica y fechas de vigencia.

### Efectividad comercial
- **Abrir un canal de cotización** visible en todas las páginas, incluido móvil: botón "Cotizar" persistente, teléfono, WhatsApp y formulario corto de 3–4 campos.
- CTA primario y secundario en el hero y un bloque de cierre de conversión en cada página de servicio.
- Rutas diferenciadas para clientes, candidatos y proveedores, con "Ingresar" convertido en portales rotulados.
- Instrumentar la medición **antes** de cambiar nada: línea base de 4 semanas en GA4 (solicitudes de cotización, clics en CTA, finalización de formulario, postulaciones) más Search Console y Lighthouse.
- Alinear el SEO con los servicios que realmente se ofrecen.

---

## 3. Públicos principales y qué necesita cada uno

La auditoría nombra clientes, candidatos, proveedores y empleados/conductores. Los demás perfiles son inferencias mías a partir del contenido del sitio y están marcados. Hay que validarlos (sección 5).

| Público | Qué necesita del sitio | Qué falla hoy |
|---|---|---|
| **Clientes y prospectos B2B** (compradores de transporte y logística: construcción, alimentos y bebidas, energía y petróleo, agroindustria) | Entender rápido qué transporta Coltanques y si cubre su caso. Ver pruebas de confianza (cifras, certificaciones, clientes, casos). Cotizar o hablar con un asesor sin fricción. | Sin CTA comercial, tarjetas sin descripción, promesa sin evidencia, contacto oculto. |
| **Clientes actuales** (los que usan "Ingresar") | Acceso claro y permanente a su portal, y soporte o contacto directo. | "Ingresar" es ambiguo y desaparece según la vista. |
| **Candidatos / "Trabaja con nosotros"** | Vacantes, cultura y proceso de selección en una ruta propia. | Mezclados con el resto de públicos. La sección no fue auditada. |
| **Conductores y empleados** (más de 400 colaboradores, según la auditoría) | Acceso rotulado al portal que les corresponde. | Hoy no hay segmentación ("Portal conductores" es solo una sugerencia de la auditoría). |
| **Proveedores** | Una ruta clara de contacto o registro. | La auditoría los menciona, pero no hay evidencia de que exista una. |
| **Prensa, aliados y entes de control** *(inferido)* | Datos corporativos vigentes, historia, certificaciones, sostenibilidad, PQRS y políticas. | Footer vacío, datos vencidos, "Certificaciones" sin contenido. |
| **Personas con discapacidad o baja visión** *(transversal)* | Contenido en HTML real, contraste suficiente, navegación por teclado y lector de pantalla. | Texto en imagen, contrastes bajos, foco sin verificar. |

Un punto de partida para el diseño es que el **cliente B2B con intención de compra** es el público prioritario, porque ahí está el hallazgo crítico. Las demás audiencias necesitan rutas claras pero secundarias.

---

## 4. Restricciones y lineamientos del manual de marca

### Identidad y logo
- Coltanques = "Colombiana de Transportes". Existen identificador **horizontal** y **vertical**, ambos con retícula definida por el módulo X.
- El logo se compone de dos paneles: **letra C + flecha** (negro) y **mundo** (círculo rojo).
- Los textos complementarios "Logística y Transportes", "Transporte de líquidos" y "Carga Expresa" tienen altura máxima de **2X**.
- **Área de reserva**: nueve módulos de altura X alrededor del identificador horizontal.
- Formatos digitales de referencia: horizontal **192 × 43 px**, vertical **122 × 87 px**. En impreso: 67 × 15 mm y 43 × 25 mm. El texto no aclara si son tamaños mínimos o solo ejemplos.
- **Versiones permitidas**: color de marca (preferida), negativo, escala de grises y alto contraste. Escala de grises y alto contraste solo por limitación técnica o exigencia expresa. El negativo se usa sobre colores planos o cuando el fondo no da contraste. Solo en negativo y alto contraste se permite perder la tridimensionalidad.
- **Prohibido**: deformar el logo, cambiar su sentido, adaptarlo a parámetros ajenos, usar colores fuera de la paleta, ponerlo dentro de un contenedor, omitir partes y añadir elementos que invadan el área de reserva.

### Colores
| Color | HEX | RGB | Referencia |
|---|---|---|---|
| Blanco | `#FFFFFF` | 255, 255, 255 | — |
| Negro | `#101820` | 16, 24, 32 | Pantone Black 6C |
| Rojo | `#EA0029` | 234, 0, 41 | Pantone 185C |
| Rojo oscuro | `#CE0E2D` | 206, 14, 45 | Pantone 186C |

**Diferencias con la auditoría:**
- La auditoría propone `#EF0021`, muestreado de capturas y marcado "confirmar con el manual". **El manual manda**, así que el rojo es `#EA0029` y el rojo oscuro `#CE0E2D`.
- Mi cálculo del contraste del texto blanco (a verificar con una herramienta en el diseño): sobre `#EA0029` ≈ **4,6:1**, en el límite de AA para texto normal; sobre `#CE0E2D` ≈ **5,6:1**, que cumple con holgura.
- Por tanto, el **rojo oscuro `#CE0E2D` resuelve de forma nativa** lo que la auditoría plantea como "rojo ligeramente más oscuro para botones con texto pequeño" (AC-02), sin salir de la paleta.
- El negro de marca es `#101820`, un azul-negro y no negro puro. Hay que usarlo también en el modo oscuro.
- La paleta del manual tiene **solo 4 colores**. Los grises neutros, el verde del ticker y cualquier color funcional (error, éxito, foco) no están definidos. El manual prohíbe variaciones de color del *logo* distintas a su paleta, pero no aclara cómo se extiende la paleta en la interfaz.

### Tipografía
- Familia **Futura STD**: **Heavy** para títulos y **Medium** para cuerpo de texto. Se pueden usar otras variantes de la familia; el manual dice que las funciones son "sugerencias".
- La auditoría propone "una sans-serif con escala modular". La restricción es que debe ser **Futura STD**, con su licencia web y su peso de carga, ambos pendientes de resolver (ver sección 5).
- Se conservan los mínimos de accesibilidad de la auditoría: cuerpo ≥ 16 px y redimensionable al 200 %.

### Tono y voz
Lo que el manual dice (solo en su texto introductorio; no encontré una sección específica de tono de voz):
- **Nombre y fecha:** "Coltanques, moviendo al país desde 1976".
- **Tono:** épico, patriótico y metafórico. Habla de "llevar sobre nuestros lomos de metal la confianza y futuro de los colombianos", de un "sueño" nacido llevando crudo "en un país recién nacido y ansioso por crecer", y de ser "el especialista del sistema nervioso que recorre de pies a cabeza el país".
- **Valores citados:** trabajo duro, responsabilidad, entrega y amor por construir país.
- **Persona gramatical:** primera persona del plural ("llevamos", "nuestro catálogo").

**Tensión con la auditoría:** la auditoría pide mensajes sobrios, basados en beneficios y evidencia, y considera genéricos "mejor aliado logístico" y "cultura de servicio". El manual propone una voz emotiva y de orgullo nacional. No son incompatibles (la emoción puede enmarcar y el dato sostener), pero hay que decidir la proporción (sección 5).

---

## 5. Preguntas que necesito que respondas

Ordenadas por cuánto bloquean el diseño.

**Marca y fidelidad**
1. **¿Desde cuándo?** El manual dice 1976, la auditoría cita "fundación en 1974", "50 años" y hitos de 1986. ¿Cuál es la fecha oficial y cómo se cuenta la historia?
2. **¿Qué rojo?** Confirmo que usaremos `#EA0029` como principal y `#CE0E2D` para texto pequeño y estados, no el `#EF0021` de la auditoría. ¿De acuerdo?
3. **¿Tienes licencia de Futura STD para web?** Si no, ¿se permite una alternativa libre parecida (por ejemplo Jost o Outfit) como respaldo temporal, o debemos licenciar la fuente?
4. **¿Hay más páginas del manual con información visual?** Solo pude leer el texto. ¿Existen reglas sobre fotografía, iconografía, tono de voz, tamaños mínimos del logo o aplicaciones digitales? Si es así, ¿puedes pasarme las páginas clave como imágenes?
5. **¿Puedes darme los archivos del logo en SVG** (horizontal y vertical, color, negativo y alto contraste)? Por regla del manual no los vectorizaré a partir de capturas.

**Alcance y objetivo**
6. **¿Qué entrego exactamente?** ¿Un prototipo navegable en HTML/CSS (Inicio + plantilla de servicio), solo diseños o una propuesta de sistema de diseño? ¿Con qué stack, o sin definirlo aún?
7. **¿Qué fase de la hoja de ruta cubro?** Fase 0 (correcciones rápidas), Fase 1 (estructura y contenido), Fase 2 (rediseño y sistema de diseño), o la visión completa. ¿Y se corrige primero el sitio actual o se parte de cero?
8. **¿Quién es el público prioritario?** Mi hipótesis es el cliente B2B con intención de compra. ¿Lo es, o la prioridad del negocio ahora es reclutar o atender clientes actuales?
9. **¿Qué mide el éxito?** ¿Hay metas de cotizaciones o leads? ¿Existe analítica actual que dé línea base (GA4, Search Console)?

**Contenido y evidencia**
10. **¿Qué cifras puedo usar?** La auditoría cita 6.000+ empleos y 7 millones de toneladas al año a partir de prensa, y su propio texto dice "400 colaboradores". Necesito cifras oficiales y vigentes (empleos, toneladas, flota, cobertura) con año y fuente.
11. **¿Qué certificaciones, clientes y casos de éxito se pueden mostrar públicamente** (y con autorización)? Si no hay, ¿retiro la sección "Certificaciones" hasta tenerlos?
12. **¿Qué servicios se ofrecen realmente?** La oferta visible (carga seca, líquida, almacenamiento, Ecuador) no coincide con las palabras clave (refrigerado, mercancías peligrosas, carga pesada, comercio internacional). ¿Cuáles se muestran y cuáles se retiran?
13. **¿Valida el equipo comercial la taxonomía propuesta** (Servicios / Industrias / Flota y cobertura) o hay una estructura interna que debamos respetar? ¿Hay prioridad entre los sub-negocios del manual ("Logística y Transportes", "Transporte de líquidos", "Carga Expresa")?
14. **¿Cuál es el canal de cotización real?** ¿Teléfono, correo y WhatsApp de ventas, quién atiende y en cuánto tiempo responden? No quiero prometer un plazo falso.

**Tono y contenido de apoyo**
15. **¿Qué proporción de épica y de dato?** ¿Mantenemos el relato emotivo del manual en el hero y usamos datos y beneficios en el resto, o prefieres un tono más sobrio?
16. **¿Qué pasa con el ticker financiero** (TRM, COLCAP, WTI, café)? ¿Lo quiere alguien de la empresa? Mi propuesta sería moverlo a una sección secundaria u opcional.
17. **¿Se mantiene el modo oscuro y el video del hero?** La auditoría valora el modo oscuro; el video casi no muestra la flota. ¿Hay fotografía o video propio de flota y personas con buena calidad?
18. **¿Idioma?** La auditoría menciona un selector de idioma en la barra utilitaria propuesta. ¿Se requiere inglés o solo español?

**Técnico y plataforma**
19. **¿Qué tecnología usa hoy el sitio** (SPA, CMS) y qué equipo lo mantiene? Esto decide si el render en servidor (TE-01) es viable.
20. **¿Qué portales hay detrás de "Ingresar"** (clientes, conductores, proveedores) y qué URL tienen?
21. **¿Puedes darme capturas o acceso a las secciones no auditadas** (Nuestra flota, Trabaja con nosotros, Contáctanos, versión móvil)? Sin ellas esas partes quedarían sin diagnóstico.
