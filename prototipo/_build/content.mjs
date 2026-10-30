// Contenido del prototipo. Fuente: sitio actual www.coltanques.com.co, manual de marca y brief del cliente.
// Lo marcado con "MUESTRA" es contenido de ejemplo que la empresa debe confirmar antes de publicar.

export const SITE = "https://www.coltanques.com.co/";

export const contact = {
  address: "Carrera 88 No. 17B-40, Bogotá D.C.",
  phone: "(601) 000 0000", // MUESTRA
  phoneHref: "tel:+576010000000", // MUESTRA
  whatsapp: "+57 300 000 0000", // MUESTRA
  whatsappHref: "cotizar.html#canales", // MUESTRA: reemplazar por https://wa.me/<número>
  email: "comercial@coltanques.com.co", // MUESTRA
  ethics: "lineaetica@coltanques.com.co",
};

export const services = {
  "carga-seca": {
    title: "Carga seca", label: "Carga seca",
    short: "carga seca",
    tone: "red",
    file: "carga-seca.html",
    photo: "assets/img/viaducto-poster.jpg",
    photoAlt: "Tractocamión de Coltanques con carga seca cruzando un viaducto entre montañas",
    photoPos: "40% 55%",
    lead: "Insumos, materias primas y productos terminados por carretera: en contenedor, a granel, masiva o en distribución.",
    since: "Pioneros en carga seca desde 1986, cuando lo común era el vehículo carrozado o carpado.",
    gallery: [["assets/img/historia/2010-2020_7.webp", "Grúa cargando un contenedor sobre un tractocamión de Coltanques", 370, 250], ["assets/img/historia/2000-2010_2.webp", "Tractocamión de Coltanques con el furgón de un cliente de bebidas", 370, 250], ["assets/img/historia/1990-2000_4.webp", "Tractocamión Colvanes con furgón de distribución", 370, 250]],
    goodsTitle: "Qué transportamos",
    goodsLead: "Mercancías que movemos todos los días para la industria y la construcción.",
    goods: ["Tuberías", "Tejas", "Láminas", "Materiales de construcción", "Hierro", "Acero", "Azúcar", "Alimentos", "Cervezas", "Harinas"],
    modes: [
      ["Contenedor", "Movimiento de contenedores entre puertos, patios y plantas.", "Para importaciones y exportaciones que entran o salen por puerto."],
      ["Masivo", "Grandes volúmenes de un mismo producto en despachos programados.", "Para abastecer plantas o centros de acopio con un flujo constante."],
      ["Granel", "Carga suelta, sin empaque, en vehículos adecuados para granel.", "Para granos, minerales y otros productos que se cargan sin embalaje."],
      ["Distribución", "Entregas a varios puntos desde una bodega o centro de distribución.", "Para llevar producto terminado a clientes y puntos de venta."],
      ["Carga extradimensionada", "Piezas que superan las medidas o el peso de una carga convencional.", "Para equipos y estructuras que exigen planeación de ruta y permisos."],
      ["Servicios petroleros", "Tubería, equipos e insumos para la operación de campos.", "Para contratistas y operadores del sector de hidrocarburos."],
      ["Materiales de construcción", "Cemento, hierro, tejas, láminas y tubería para obras y distribuidores.", "Para proyectos de construcción y cadenas de ferretería."],
    ],
    faqs: [
      ["¿Qué información necesito para cotizar?", "Origen y destino, tipo de mercancía, peso o volumen aproximado y la frecuencia de los despachos. Con esos datos un asesor comercial prepara la propuesta."],
      ["¿Atienden viajes puntuales y despachos recurrentes?", "Sí. Puede pedir un viaje puntual o programar despachos periódicos; el asesor le confirma la disponibilidad de flota para sus fechas."],
      ["¿Hasta dónde llegan?", "Operamos en todo el territorio nacional desde nuestra red de oficinas y bodegas en 12 ciudades, y llegamos a Ecuador por el paso de Rumichaca."],
      ["¿Cómo cuidan la carga en ruta?", "Operamos con certificación BASC desde 2003 y con un Plan Estratégico de Seguridad Vial. El asesor le explica los controles que aplican a su operación."],
    ],
  },
  "carga-liquida": {
    title: "Carga líquida", label: "Carga líquida",
    short: "carga líquida",
    tone: "ink",
    file: "carga-liquida.html",
    photo: "assets/img/flota-tripulacion.jpg",
    photoAlt: "Dos conductores de Coltanques junto a sus carrotanques, en duotono rojo",
    photoPos: "50% 60%",
    lead: "Crudo, combustibles y líquidos industriales en carrotanque, desde el campo o la planta hasta su destino.",
    since: "Es nuestro origen: Coltanques nació en 1976 llevando crudo por las carreteras del país.",
    gallery: [["assets/img/viaducto-cisterna.jpg", "Carrotanque de Coltanques cruzando un viaducto", 1280, 720], ["assets/img/historia/2010-2020_2.webp", "Conductores frente a la flota de carrotanques", 370, 250], ["assets/img/historia/1980-1990_7.webp", "Carrotanque de los años 80 con aviso de peligro", 370, 250]],
    goodsTitle: "Qué transportamos",
    goodsLead: "Líquidos que movemos para el sector energético y la industria.",
    goods: ["Crudo", "Combustibles refinados", "Aceites", "Aceite de palma", "Gas"],
    modes: [
      ["Líquido negro", "Crudo y productos pesados, desde campos de producción hacia refinerías y puertos.", "Para operadores y comercializadores de hidrocarburos."],
      ["Líquido blanco", "Combustibles refinados y líquidos limpios en tanques dedicados.", "Para distribuidores de combustible y la industria de aceites."],
      ["Gas", "Transporte de gas en vehículos especializados.", "Para operaciones que requieren equipos y protocolos para gas."],
    ],
    faqs: [
      ["¿Qué información necesito para cotizar?", "Producto, volumen por viaje, origen y destino, y la frecuencia de cargue. Con esos datos un asesor comercial prepara la propuesta."],
      ["¿Tienen experiencia en hidrocarburos?", "Desde 1976. Hemos movido crudo desde campos del Huila, Casanare y Meta hacia Barrancabermeja y otros destinos del país."],
      ["¿Cómo cuidan la carga en ruta?", "Operamos con certificación BASC desde 2003 y con un Plan Estratégico de Seguridad Vial. El asesor le explica los controles que aplican a su operación."],
    ],
  },
  almacenamiento: {
    title: "Almacenamiento y distribución", label: "Almacenamiento",
    short: "almacenamiento",
    tone: "deep",
    file: "almacenamiento.html",
    photo: "assets/img/bodega.webp",
    photoAlt: "Operario en un montacargas entre estanterías de una bodega de Coltanques",
    photoPos: "50% 50%",
    lead: "Recibimos, descargamos, clasificamos y almacenamos su mercancía en nuestras bodegas, y la despachamos cuando la necesite.",
    since: "Desde 2015 operamos bodegas propias en cinco ciudades del país.",
    gallery: [["assets/img/historia/2010-2020_5.webp", "Bodega de Coltanques con un furgón en el patio", 370, 250], ["assets/img/historia/2010-2020_4.webp", "Tractocamiones frente a una bodega", 370, 250], ["assets/img/historia/2010-2020_3.webp", "Furgones de Coltanques en una estación de servicio", 370, 250]],
    goodsTitle: "Bodegas propias",
    goodsLead: "Ubicadas cerca de los puertos y de los principales centros de consumo.",
    goods: ["Medellín", "Cali", "Pereira", "Cartagena", "Buenaventura"],
    modes: [
      ["Almacén", "Recepción, descargue, clasificación y almacenamiento de su mercancía.", "Para inventarios que necesitan un lugar seguro entre la producción y la venta."],
      ["Centro de distribución", "Preparación de pedidos y despachos desde un punto central.", "Para empresas que atienden muchos clientes desde un solo inventario."],
      ["Distribución", "Entregas a varios puntos con nuestra flota.", "Para llevar el producto de la bodega al cliente final."],
      ["ITR", "Recepción y entrega de contenedores con su Interchange Transport Receipt.", "Para operaciones de comercio exterior entre puerto y patio."],
      ["Transferencia de contenedores", "Movimiento de contenedores entre puerto, patio y bodega.", "Para desconsolidar o reubicar carga que llega por puerto."],
    ],
    faqs: [
      ["¿Qué información necesito para cotizar?", "Tipo de mercancía, volumen o número de posiciones, tiempo estimado de almacenamiento y ciudad. Con esos datos un asesor comercial prepara la propuesta."],
      ["¿Puedo combinar almacenamiento y transporte?", "Sí. Las bodegas se conectan con nuestra flota de carga seca y líquida para que reciba y despache con un solo proveedor."],
      ["¿En qué ciudades tienen bodega?", "Medellín, Cali, Pereira, Cartagena y Buenaventura."],
    ],
  },
  "transporte-ecuador": {
    title: "Transporte a Ecuador", label: "Ecuador",
    short: "transporte a Ecuador",
    tone: "tone",
    file: "transporte-ecuador.html",
    photo: "assets/img/viaducto-curva.jpg",
    photoAlt: "Tractocamiones de Coltanques en un viaducto curvo rodeado de montañas",
    photoPos: "60% 50%",
    lead: "Carga por carretera entre Colombia y Ecuador, con oficina en Ipiales junto al paso de Rumichaca.",
    since: "Hicimos nuestro primer despacho internacional a Ecuador en 2014.",
    gallery: [["assets/img/historia/2010-2020_9.webp", "Tractocamiones de Coltanques en el paso de frontera hacia Ecuador", 370, 250], ["assets/img/viaducto-poster.jpg", "Tractocamión con carga seca en un viaducto de montaña", 1280, 720], ["assets/img/historia/2010-2020_1.webp", "Carrotanques de Coltanques en una vía rural", 370, 250]],
    goodsTitle: "Cómo operamos",
    goodsLead: "Conectamos la red nacional con el paso de frontera del sur.",
    goods: ["Oficina en Ipiales", "Paso de Rumichaca", "Red nacional conectada"],
    modes: [
      ["Transporte internacional", "Carga por carretera entre ciudades de Colombia y Ecuador.", "Para empresas que exportan o abastecen operaciones en Ecuador."],
      ["Paso de frontera", "Coordinación del cruce en Rumichaca desde nuestra oficina de Ipiales.", "Para que la carga no se detenga en la frontera más de lo necesario."],
      ["Conexión nacional", "Integración con nuestra red de carga seca, líquida y bodegas en Colombia.", "Para consolidar la carga antes de salir del país."],
    ],
    faqs: [
      ["¿Qué información necesito para cotizar?", "Origen y destino, tipo de mercancía, peso o volumen y la fecha estimada. Con esos datos un asesor comercial prepara la propuesta."],
      ["¿Desde cuándo operan a Ecuador?", "Desde 2014, cuando hicimos nuestro primer despacho internacional."],
    ],
  },
};

export const cities = [
  ["Bogotá", "Sede principal, en la Carrera 88 No. 17B-40."],
  ["Medellín", "Oficina y bodega."],
  ["Cali", "Oficina y bodega."],
  ["Buenaventura", "Oficina y bodega en el puerto del Pacífico."],
  ["Cartagena", "Bodega en el puerto del Caribe."],
  ["Barranquilla", "Oficina en la costa Caribe."],
  ["Bucaramanga", "Oficina regional."],
  ["Barrancabermeja", "Oficina desde los años 80."],
  ["Duitama", "Oficina desde los años 80."],
  ["Pereira", "Bodega en el Eje Cafetero."],
  ["Manizales", "Oficina regional."],
  ["Ipiales", "Oficina junto al paso de frontera con Ecuador."],
];

export const norms = [
  ["BASC", "Certificación en comercio seguro desde 2003.", "policiessecuritybasc"],
  ["PESV", "Plan Estratégico de Seguridad Vial.", "policiespesv"],
  ["SARLAFT", "Prevención del lavado de activos y la financiación del terrorismo.", "policiessarlaft"],
  ["PTEE", "Programa de Transparencia y Ética Empresarial.", "policiesptee"],
  ["Gestión integrada", "Política integrada de gestión de calidad, seguridad y ambiente.", "policiesmanagement"],
  ["Euro 5", "Vehículos de norma Euro 5 incorporados entre 2020 y 2022.", null],
];

export const policies = [
  ["Ética y cumplimiento", [
    ["SARLAFT", "policiessarlaft"],
    ["PTEE", "policiesptee"],
  ]],
  ["Datos personales", [
    ["Protección de datos", "privacepolicy"],
    ["Aviso de privacidad", "privacynotice"],
  ]],
  ["Operación responsable", [
    ["PESV", "policiespesv"],
    ["Política de seguridad BASC", "policiessecuritybasc"],
    ["Política de sostenibilidad", "policiessustainability"],
    ["Derechos humanos y laborales", "policieshumanrights"],
  ]],
];

const H = (d, n) => Array.from({ length: n }, (_, i) => `assets/img/historia/${d}_${i + 1}.webp`);

export const history = [
  {
    id: "d1976", tab: "1976", title: "1976",
    text: "Nace Colombiana de Tanques, Coltanques, con una flota de cinco vehículos Ford modelo 71 de 28 toneladas de capacidad y una oficina en el barrio Ricaurte de Bogotá. Esos primeros años marcaron el comienzo de un viaje lleno de retos que forjó nuestra identidad: llevar la carga que el país necesita para crecer y, con ella, los sueños de quienes hacen parte de esta familia.",
    items: [],
    photos: H("1974", 6),
    alts: ["Tractocamión rojo de los primeros años de Coltanques", "Dos hombres junto a un carrotanque Ford de la flota inicial", "Cabezote blanco de los primeros años, en blanco y negro", "Carrotanque rojo con franjas blancas en un patio", "Bendición de un carrotanque de la flota inicial", "Conductor junto a su carrotanque en carretera"],
  },
  {
    id: "d1980", tab: "1980–1990", title: "1980–1990",
    text: "El transporte por carretera gana un peso enorme en la economía nacional. Abrimos sedes regionales en Duitama y Barrancabermeja y, más tarde, llegamos a Venezuela y Ecuador.",
    items: [
      ["1980", "Trasladamos la operación del barrio Ricaurte a una sede en la avenida 38 con Américas."],
      ["1982", "Movilizamos crudo desde el Campo Dina, en el Huila, y líquido blanco como aceite de palma."],
      ["1984", "Ganamos la licitación de transporte de crudo de Araguaney a Barrancabermeja, por la antigua vía Yopal–Pajarito–Sogamoso."],
      ["1985", "Transportamos crudo comprado en el pozo de Castilla para comercializadoras internacionales."],
      ["1986", "Entramos al transporte de carga seca y nos convertimos en pioneros del servicio."],
    ],
    photos: H("1980-1990", 8),
    alts: ["Bulldozer abriendo vía junto a un carrotanque en zona montañosa", "Conductor frente a su tractocamión en una bodega", "Carrotanque en un patio de cargue", "Carrotanque rojo y blanco con el nombre Coltanques", "Flota de carrotanques estacionada junto a una vía", "Conductor frente a un tractocamión con aviso Coltanques", "Carrotanque con aviso de peligro en carretera", "Carrotanque en una vía de montaña"],
  },
  {
    id: "d1990", tab: "1990–2000", title: "1990–2000",
    text: "El auge petrolero y la consolidación de la flota de terceros impulsan un gran crecimiento. Abrimos agencias regionales en Barranquilla, Bucaramanga, Buenaventura, Medellín, Manizales y Cali.",
    items: [
      ["1990", "Construimos la sede de 25.000 m² en la calle 13 de Bogotá, donde operamos desde entonces."],
      ["1991", "Iniciamos la alianza con Kenworth de la Montaña con los primeros 20 tractocamiones T800."],
      ["1996", "Creamos Colvanes, hoy Envía, para el transporte de mercancías en paqueteo y distribución."],
    ],
    photos: H("1990-2000", 7),
    alts: ["Carrotanque Coltanques en una vía de montaña", "Conductores junto a la flota en un patio de tierra", "Flota de carrotanques Coltanques en una vía", "Tractocamión Colvanes con furgón rojo y blanco", "Conductor junto a su carrotanque en carretera", "Tractocamión Kenworth blanco y rojo en un puerto", "Tres tractocamiones Kenworth nuevos con sus conductores"],
  },
  {
    id: "d2000", tab: "2000–2010", title: "2000–2010",
    text: "Con el nuevo milenio iniciamos un proceso de expansión y consolidación, con soluciones integrales en carga líquida y seca.",
    items: [
      ["2003", "Obtenemos la certificación BASC, la alianza empresarial internacional para un comercio seguro."],
      ["2005", "Adoptamos el logotipo actual de Coltanques."],
      ["2009", "Iniciamos el proyecto de renovación de flota para todas las operaciones."],
    ],
    photos: H("2000-2010", 7),
    alts: ["Caravana de tractocamiones Coltanques en una avenida", "Tractocamión con furgón de un cliente de bebidas", "Equipo de Coltanques y Envía frente a la sede", "Fila de tractocamiones rojos en un patio", "Vista de un patio de operaciones con vehículos", "Tractocamión azul con furgón en una bodega", "Celebración de la empresa con globos rojos y blancos"],
  },
  {
    id: "d2010", tab: "2010–2020", title: "2010–2020",
    text: "Fortalecemos la infraestructura, llegamos a nuevas regiones como Ipiales y modernizamos la flota para ofrecer soluciones integrales en todo el país.",
    items: [
      ["2012", "Entre 2010 y 2012 incorporamos 500 tractocamiones Kenworth T800 y T600."],
      ["2014", "Hacemos el primer despacho internacional de Coltanques hacia Ecuador."],
      ["2015", "Comenzamos almacenamiento y distribución con bodegas en Medellín, Cali, Pereira, Cartagena y Buenaventura."],
      ["2022", "Entre 2020 y 2022 incorporamos vehículos de norma Euro 5."],
    ],
    photos: ["assets/img/historia/2010-2020_2.webp", "assets/img/historia/2010-2020_1.webp", "assets/img/historia/2010-2020_3.webp", "assets/img/historia/2010-2020_4.webp", "assets/img/historia/2010-2020_5.webp", "assets/img/historia/2010-2020_6.webp", "assets/img/historia/2010-2020_7.webp", "assets/img/historia/2010-2020_8.webp", "assets/img/historia/2010-2020_9.webp"],
    alts: ["Conductores frente a una flota de carrotanques nuevos", "Carrotanques en una vía entre potreros", "Estación de servicio con tractocamiones Coltanques", "Fila de tractocamiones frente a una bodega", "Bodega de Coltanques con furgón", "Tractocamión con lona roja en carretera", "Grúa cargando un contenedor sobre un tractocamión", "Fila de tractocamiones de distintas marcas", "Tractocamiones en el paso de frontera hacia Ecuador"],
  },
  {
    id: "d2026", tab: "2026", title: "50 años",
    text: "En 2026 Coltanques cumple 50 años. Honramos el legado de nuestro fundador, Henry Cubides Olarte, y reafirmamos el compromiso de seguir construyendo país. Gracias por ser parte de este viaje: quedan muchos años de historia por delante.",
    items: [],
    photos: ["assets/img/historia/2024_1.webp", "assets/img/historia/2024_2.webp"],
    alts: ["Equipo de Coltanques formado frente a la flota de carrotanques", "Henry Cubides Olarte, fundador de Coltanques"],
  },
];

export const pillars = [
  ["Bienestar", "Necesitamos que nuestra gente siempre esté bien."],
  ["Pensamiento innovador", "Desafiamos la manera en que trabajamos y generamos ideas para que todos lo hagamos mejor."],
  ["Sostenibilidad", "Trabajamos para que nuestros indicadores sean sobresalientes; eso nos hará perdurables en el tiempo."],
  ["Servir", "Es la actitud y la disposición de ser útil."],
  ["Trabajo en equipo", "Como en un equipo de fútbol: nos importa el desempeño del otro, trabajamos alineados y el resultado es de todos."],
];
