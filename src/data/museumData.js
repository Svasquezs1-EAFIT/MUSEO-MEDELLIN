/**
 * Datos de los museos y lugares culturales.
 *
 * Cada lugar incluye:
 *  - name: nombre oficial
 *  - description: descripción corta
 *  - schedule: horario de apertura
 *  - address: dirección física
 *  - price: información de costo / entrada
 *  - tags: lista de palabras clave / sinónimos (todo en minúsculas, sin tildes)
 *  - image: ruta de la imagen
 */
export const MUSEUMS = {
  antioquia: {
    name: "Museo de Antioquia",
    description:
      "Es el museo más importante de Medellín. Alberga una enorme colección de obras donadas por Fernando Botero.",
    schedule: "Lunes a Sábado de 10:00 AM a 6:00 PM.",
    address: "Carrera 52 #52-43, Centro de Medellín.",
    price: "Entrada con costo. Hay tarifa reducida para estudiantes y entrada libre el primer domingo de cada mes.",
    tags: ["museo de antioquia", "antioquia", "botero", "fernando botero", "plaza botero", "centro"],
    image: "/images/museo-antioquia/1.png",
  },
  castillo: {
    name: "Museo El Castillo",
    description:
      "Un castillo de estilo gótico medieval rodeado de jardines franceses. Exhibe artes decorativas.",
    schedule: "Lunes a Domingo de 9:00 AM a 5:00 PM.",
    address: "Calle 9 Sur #32-269, El Poblado.",
    price: "Entrada con costo. Tarifas diferenciadas para adultos, niños y estudiantes.",
    tags: ["museo el castillo", "el castillo", "castillo", "gotico", "jardines franceses", "poblado", "artes decorativas"],
    image: "/images/museo-el-castillo/1.png",
  },
  palacio: {
    name: "Palacio de la Cultura Rafael Uribe Uribe",
    description:
      "Ícono arquitectónico de la ciudad con su estilo gótico flamenco y su fachada ajedrezada.",
    schedule: "Lunes a Viernes de 8:00 AM a 5:00 PM.",
    address: "Carrera 51 #52-03, Centro de Medellín.",
    price: "Entrada gratuita.",
    tags: ["palacio de la cultura", "palacio cultura", "palacio", "rafael uribe", "rafael uribe uribe", "fachada ajedrezada", "gotico flamenco"],
    image: "/images/palacio-cultura/1.png",
  },
  mamm: {
    name: "Museo de Arte Moderno de Medellín (MAMM)",
    description:
      "Es un espacio de vanguardia ubicado en Ciudad del Río. Es famoso por su arquitectura industrial y por albergar obras de Débora Arango y arte contemporáneo.",
    schedule: "Martes a Viernes de 11:00 AM a 7:00 PM. Sábados y Domingos de 11:00 AM a 6:00 PM.",
    address: "Carrera 44 #19A-100, Ciudad del Río.",
    price: "Entrada con costo. Hay descuentos para estudiantes y entrada libre algunos días según programación.",
    tags: ["mamm", "museo de arte moderno", "arte moderno", "arte contemporaneo", "debora arango", "ciudad del rio", "vanguardia"],
    image: "/images/museo-arte-moderno/1.png",
  },
  memoria: {
    name: "Museo Casa de la Memoria",
    description:
      "Es un espacio dedicado a las víctimas del conflicto armado en Medellín y Colombia. Un lugar de reflexión, diálogo y construcción de memoria histórica.",
    schedule: "Martes a Viernes de 9:00 AM a 6:00 PM. Sábados y Domingos de 10:00 AM a 4:00 PM.",
    address: "Calle 51 #36-66, Parque Bicentenario.",
    price: "Entrada libre.",
    tags: ["casa de la memoria", "casa memoria", "memoria", "victimas", "conflicto armado", "memoria historica", "reflexion"],
    image: "/images/casa-memoria/1.png",
  },
  agua: {
    name: "Museo del Agua EPM",
    description:
      "Un museo interactivo dedicado a la educación sobre el recurso hídrico, el medio ambiente y la ciencia. Es ideal para aprender sobre el ciclo del agua de forma divertida.",
    schedule: "Martes a Viernes de 8:30 AM a 4:00 PM. Sábados y Domingos de 10:30 AM a 4:30 PM.",
    address: "Parque de los Pies Descalzos, Centro.",
    price: "Entrada con costo. Tarifas reducidas para estudiantes y grupos.",
    tags: ["museo del agua", "agua", "epm", "medio ambiente", "ciclo del agua", "recurso hidrico", "interactivo"],
    image: "/images/museo-del-agua/1.png",
  },
  explora: {
    name: "Parque Explora",
    description:
      "Un impresionante centro interactivo de ciencia y tecnología. Cuenta con el acuario de agua dulce más grande de Sudamérica, un vivario y salas dedicadas a la mente, el tiempo y la física.",
    schedule: "Martes a Viernes de 8:30 AM a 5:30 PM. Sábados, Domingos y Festivos de 10:00 AM a 6:30 PM.",
    address: "Carrera 52 #73-75, zona norte de Medellín.",
    price: "Entrada con costo. Incluye acceso a salas interactivas, acuario y vivario.",
    tags: ["parque explora", "explora", "acuario", "vivario", "ciencia", "tecnologia", "peces", "interactivo", "ninos"],
    image: "/images/parque-explora/1.png",
  },
  planetario: {
    name: "Planetario de Medellín Jesús Emilio Ramírez",
    description:
      "Un espacio para la divulgación científica sobre el universo. Cuenta con un domo digital de alta resolución, un museo de astronomía y experiencias sobre la exploración espacial.",
    schedule: "Martes a Viernes de 8:30 AM a 5:30 PM. Sábados, Domingos y Festivos de 10:00 AM a 6:30 PM.",
    address: "Carrera 52 #71-117, Parque de los Deseos.",
    price: "Acceso al museo gratuito. Funciones del domo digital con costo.",
    tags: ["planetario", "jesus emilio ramirez", "astronomia", "estrellas", "universo", "espacio", "domo", "ciencia"],
    image: "/images/planetario/1.png",
  },
  gardeliana: {
    name: "Casa Museo Gardeliana",
    description:
      "Declarada Patrimonio Histórico y Cultural de Medellín. Es un lugar dedicado a la difusión de la cultura del tango y a honrar la memoria del 'Zorzal Criollo', Carlos Gardel.",
    schedule: "Lunes a Sábado de 9:00 AM a 5:00 PM.",
    address: "Carrera 45 #76-50, barrio Manrique.",
    price: "Entrada libre.",
    tags: ["gardeliana", "casa gardeliana", "gardel", "carlos gardel", "tango", "zorzal", "manrique", "patrimonio"],
    image: "/images/museo-gardeliana/1.png",
  },
  jardin: {
    name: "Jardín Botánico de Medellín",
    description:
      "Un museo vivo de 13.2 hectáreas. Su estructura más famosa es el Orquideorama. Es un centro de conservación botánica y un espacio perfecto para conectar con la naturaleza.",
    schedule: "Lunes a Domingo de 9:00 AM a 4:30 PM.",
    address: "Carrera 52 #73-298, norte de Medellín.",
    price: "Entrada gratuita (excepto en eventos especiales).",
    tags: ["jardin botanico", "jardin", "botanico", "orquideorama", "naturaleza", "plantas", "flores", "orquideas", "aire libre"],
    image: "/images/jardin-botanico/1.png",
  },
  sanpedro: {
    name: "Museo Cementerio San Pedro",
    description:
      "Fundado en 1842, es un museo a cielo abierto con una riqueza artística y arquitectónica invaluable. Sus mausoleos y esculturas cuentan la historia de las familias más influyentes de la región.",
    schedule: "Lunes a Domingo de 7:30 AM a 5:30 PM.",
    address: "Carrera 51 #68-68, barrio San Pedro.",
    price: "Entrada libre. Recorridos guiados con costo.",
    tags: ["cementerio san pedro", "museo cementerio", "san pedro", "cementerio", "mausoleos", "esculturas", "patrimonio"],
    image: "/images/museo-san-pedro/1.png",
  },
  deseos: {
    name: "Parque de los Deseos",
    description:
      "Un centro cultural al aire libre donde se proyectan películas y se realizan conciertos. Su diseño permite interactuar con elementos de astronomía y física, como el reloj solar y el muro de eco.",
    schedule: "Abierto todos los días de 8:00 AM a 10:00 PM.",
    address: "Carrera 52 #71-117, frente al Planetario, norte de Medellín.",
    price: "Entrada libre.",
    tags: ["parque de los deseos", "parque deseos", "deseos", "cine al aire libre", "reloj solar", "muro de eco", "conciertos", "aire libre"],
    image: "/images/parque-deseos/1.png",
  },
  piesdescalzos: {
    name: "Parque de los Pies Descalzos",
    description:
      "Un oasis urbano creado por EPM para invitar a los visitantes a caminar sin zapatos. Tiene zonas de arena, bosques de guaduas y pozos de agua para masajear los pies y relajarse.",
    schedule: "Abierto todos los días de 9:00 AM a 10:00 PM.",
    address: "Carrera 58 #42-125, Centro de Medellín.",
    price: "Entrada libre.",
    tags: ["pies descalzos", "parque pies descalzos", "arena", "relajacion", "bosque de guaduas", "guaduas", "epm", "aire libre"],
    image: "/images/pies-descalzos/1.png",
  },
};

/**
 * Frases de saludo, despedida y solicitud de listado.
 * Todas en minúsculas y sin tildes para coincidir con la normalización.
 */
export const INTENTIONS = {
  SALUDO: ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "saludos", "que tal", "buenas"],
  DESPEDIDA: ["adios", "chao", "hasta luego", "gracias", "muchas gracias", "nos vemos", "hasta pronto"],
  LISTADO: ["que hay", "museos", "lugares", "lista", "opciones", "todos", "donde ir", "ver todos", "que puedo visitar", "muestrame todos"],
};

/**
 * Sub-intenciones que se aplican CUANDO ya se identificó un museo.
 * Permiten responder de forma específica: solo horario, solo dirección, solo precio.
 */
export const SUB_INTENTIONS = {
  HORARIO: ["horario", "hora", "abre", "cierra", "abierto", "cerrado", "atencion", "atiende", "cuando", "a que hora"],
  UBICACION: ["direccion", "ubicacion", "donde queda", "donde esta", "como llego", "como llegar", "ubicado", "ubicada", "queda"],
  PRECIO: ["precio", "costo", "vale", "gratis", "gratuita", "gratuito", "entrada", "boleta", "cuanto", "tarifa", "pagar"],
};