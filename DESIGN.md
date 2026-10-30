---
name: Coltanques
description: Sitio público de Coltanques. Transporte de carga por carretera en Colombia desde 1976.
colors:
  red: "#ea0029"
  red-deep: "#ce0e2d"
  ink: "#101820"
  paper: "#ffffff"
  tone: "#f1f2f4"
  tone-2: "#e3e5e9"
  muted: "#4a515a"
  on-dark-muted: "#c3c8ce"
typography:
  display:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2.625rem, 1rem + 4.6vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  head:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2.125rem, 1.25rem + 3.1vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.018em"
  lead:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.25rem, 1.08rem + 0.6vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.38
  body:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  margin: "clamp(1rem, 2.4vw, 2.5rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  tile-gap: "8px"
  section: "clamp(6rem, 12vw, 12rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.9rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.tone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
---

# Design System: Coltanques

## Overview

**Creative North Star: "La diagonal de la carretera"**

El sitio toma una sola forma del manual de marca: la inclinación de 12° del logotipo y los cortes diagonales de sus páginas. Esa forma recorta cada fotografía, inclina cada botón, marca cada viñeta y corta los mosaicos y la banda final de cotización. Todo lo demás es recto y plano: suelo blanco, tinta negra `#101820` y el rojo de marca en campos enteros.

La fotografía es real: la flota roja en las montañas, el archivo histórico desde 1976 y el duotono rojo del manual. Los titulares son Jost Heavy oblicua en mayúsculas, el sustituto libre de la Futura STD Heavy del manual. El cuerpo de texto va en Jost regular, a 17 px o más.

**Key Characteristics:**
- Un único motivo: el paralelogramo inclinado a 12°, aplicado como `clip-path` o `skewX`.
- El rojo en campos grandes (el hero, la cifra principal, la banda de cotizar) y en la acción. Nunca en degradado.
- Esquinas rectas, sin sombras en reposo y sin filetes. Las superficies se separan con un salto de tono.
- Un titular `h1` por página, de dos líneas como máximo, y un encabezado en cada sección.

## Colors

### Primary
- **Rojo Coltanques** `#ea0029` (Pantone 185C): campos de color, botón primario y viñetas. El texto blanco sobre este rojo da 4,6:1; úselo con 17 px o más.
- **Rojo profundo** `#ce0e2d` (Pantone 186C): hover de los botones, cifras sobre tono y texto rojo pequeño (5,6:1 con blanco).

### Neutral
- **Tinta** `#101820` (Pantone Black 6C): texto, campos oscuros y footer.
- **Papel** `#ffffff`: suelo.
- **Tono** `#f1f2f4` y **Tono 2** `#e3e5e9`: superficies de mosaicos, campos de formulario y FAQ.
- **Gris de apoyo** `#4a515a`: solo notas secundarias (8:1 sobre blanco). Sobre tinta se usa `#c3c8ce`.

**The One Red Rule.** El rojo es un campo o una acción, nunca una palabra coloreada dentro de un titular.

## Typography

**Display Font:** Jost 800 oblicua, en mayúsculas.
**Body Font:** Jost 400 y 500.

### Hierarchy
- **Display:** `clamp(42px … 92px)` / 0,94. Para el `h1`; en las páginas internas baja hasta 76 px.
- **Head:** `clamp(34px … 68px)` / 0,98. Para los `h2` de sección.
- **Lead:** `clamp(20px … 26px)` / 1,38. Frase de apoyo bajo el titular.
- **Body:** `clamp(17px … 19px)` / 1,55, con una medida de 64ch como máximo.
- **Small:** 15 px. Pies de foto, fuentes y notas.

**The Two-Line Rule.** Ningún titular pasa de dos líneas en 1440, 768 o 390 px. Primero se cortan palabras; el tamaño se baja solo como último recurso.

## Layout
Rejilla de 12 columnas con márgenes externos iguales `clamp(16px, 2.4vw, 40px)` y ancho máximo de 1760 px. Las secciones van separadas `clamp(96px, 12vw, 192px)` y los mosaicos, 8 px. La asimetría vive dentro de la rejilla: la foto inclinada de un lado y el texto del otro. Por debajo de 56rem todo pasa a una columna en el orden de lectura, y por debajo de 68rem la navegación se convierte en un menú a pantalla completa.

## Elevation & Depth
Plano. Solo el header fijo lleva sombra cuando el contenido pasa por debajo. Las capas se separan con tono (papel, tono, tinta, rojo).

## Shapes
Esquinas siempre rectas. El paralelogramo inclinado a 12° (`--tan: 0.2126`) es la única forma con carácter. En las cajas recortadas, el corte se calcula a partir de la altura (`--h`) para que todas las diagonales queden paralelas.

**The Parallel Cut Rule.** Los mosaicos contiguos usan el mismo ángulo, así que el hueco de 8 px entre ellos es una diagonal constante.

## Components

### Buttons
Un solo tipo de botón: el rectángulo inclinado con `skewX(-12deg)` y el contenido contra-inclinado. Hay tres variantes: roja (primaria), tinta y papel. Al pulsarlo escala a 0,97 y en hover pasa al rojo profundo. El foco se marca con un contorno de 3 px en tinta (en blanco sobre fondos oscuros o rojos).

### Inputs / Fields
Campo plano en tono, con una base de 3 px que pasa a rojo con el foco. La etiqueta va siempre visible encima. El error aparece debajo, en rojo profundo y enlazado con `aria-describedby`.

### Navigation
Header blanco fijo con el logo, cuatro enlaces y la acción "Cotizar". Al bajar se compacta. El elemento activo lleva una barra roja inclinada. En móvil, un menú en tinta a pantalla completa.

### Signature: selector "¿Qué necesita mover?"
Lista de los cuatro servicios en tipografía display. Al elegir uno cambian la foto, el color del bloque inclinado y una ficha con enlaces a "Ver" y "Cotizar" (prellenado).

### Signature: banda "Cotizar"
Un enlace a todo el ancho, en rojo, con el borde izquierdo inclinado y la palabra COTIZAR a unos 18vw. En hover invierte los colores.

## Do's and Don'ts

### Do:
- **Do** recortar las fotografías con el paralelogramo de 12°, o dejarlas rectas cuando sean archivo en tira.
- **Do** usar el rojo en campos completos y en la acción primaria.
- **Do** citar la fuente y el año de cada cifra.

### Don't:
- **Don't** usar degradados, sombras en reposo, filetes finos ni esquinas redondeadas.
- **Don't** poner etiquetas pequeñas en mayúsculas sobre los titulares, ni numerar secciones 01/02/03.
- **Don't** deformar, recolorear ni encerrar el logotipo en un contenedor (manual de marca).
- **Don't** colorear una palabra dentro de un titular.
