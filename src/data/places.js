import { validatePlace } from '../utils/validatePlace.js'

const PLACEHOLDER_IMAGE = '/images/placeholder.svg'

function createPlace(place) {
  const imagenes = Array.isArray(place.imagenes) && place.imagenes.length > 0
    ? place.imagenes
    : [PLACEHOLDER_IMAGE]

  return {
    ...place,

    // Compatibilidad temporal con componentes actuales
    descripcion: place.historiaContexto,
    oferta: place.ofertaCultural,
    valorIdentitario: place.valorIdentitario,
    imagen: imagenes[0],
    imagenes,
  }
}

export const places = [
  createPlace({
    id: '1',
    slug: 'museo-de-antioquia',
    nombre: 'Museo de Antioquia',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Carrera 52 #52-43, Centro de Medellín',
    horarios: 'Lunes a sábado de 10:00 a.m. a 5:30 p.m.; domingos y festivos de 10:00 a.m. a 4:30 p.m.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'arte', 'patrimonio'],
    capas: ['memoria-historica', 'arte-urbano'],
    descripcionBreve: 'Museo histórico y artístico ubicado frente a la Plaza Botero, referente central del patrimonio cultural antioqueño.',
    historiaContexto: 'Fundado en 1881, el Museo de Antioquia es uno de los museos más antiguos de Colombia. Está ubicado en el antiguo Palacio Municipal, edificio declarado Monumento Nacional, y ha sido clave en la conservación del patrimonio artístico regional y nacional. Sus colecciones incluyen obras de Fernando Botero, Pedro Nel Gómez y otros artistas que permiten leer la evolución estética, política y social de Antioquia.',
    relatoNarrativo: 'Frente a la Plaza Botero, el Museo de Antioquia guarda una parte esencial de la memoria artística de la ciudad. Sus salas conectan el centro histórico con las formas, colores y preguntas que han acompañado la transformación cultural de Medellín.',
    ofertaCultural: 'Exposiciones permanentes y temporales, programas pedagógicos, visitas guiadas, actividades académicas y proyectos de extensión cultural.',
    valorIdentitario: 'Símbolo del desarrollo artístico antioqueño y punto de encuentro entre historia, arte y espacio público.',
    coords: { lat: 6.2525, lng: -75.569167 },
    lugaresRelacionados: ['3', '5', '17'],
    bibliografia: [
      {
        titulo: 'Museo de Antioquia. Museo de Antioquia.',
        url: 'https://www.museodeantioquia.co/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial del Museo de Antioquia',
        url: 'https://www.museodeantioquia.co/',
      },
    ],
    tags: ['Centro', 'memoria', 'arte', 'patrimonio', 'Botero'],
    imagenes: [
      '/images/museo-antioquia/1.png',
      '/images/museo-antioquia/2.png',
      '/images/museo-antioquia/3.png',
    ],
  }),

  createPlace({
    id: '2',
    slug: 'cementerio-museo-san-pedro',
    nombre: 'Cementerio Museo San Pedro',
    municipio: 'Medellín',
    barrio: 'San Pedro',
    direccion: 'Carrera 51 #68-68, barrio San Pedro',
    horarios: 'Lunes a domingo de 8:00 a.m. a 5:00 p.m.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'arte', 'patrimonio'],
    capas: ['memoria-historica', 'arte-urbano'],
    descripcionBreve: 'Camposanto patrimonial convertido en museo, con mausoleos, esculturas y recorridos de memoria histórica.',
    historiaContexto: 'Inaugurado en 1842, el Cementerio Museo San Pedro fue concebido inicialmente como camposanto para las élites antioqueñas. En 1999 fue declarado Monumento Nacional por su valor arquitectónico y escultórico. Sus mausoleos, galerías y esculturas permiten comprender transformaciones sociales, políticas y económicas de Medellín.',
    relatoNarrativo: 'Entre mármoles, esculturas y caminos silenciosos, San Pedro funciona como un archivo urbano al aire libre. Cada mausoleo conserva una historia y cada recorrido revela una capa distinta de la memoria de Medellín.',
    ofertaCultural: 'Recorridos guiados, conciertos, obras de teatro, actividades de narración oral y eventos culturales nocturnos.',
    valorIdentitario: 'Archivo histórico al aire libre que conserva la memoria de personajes fundamentales en la construcción de la ciudad.',
    coords: { lat: 6.265875, lng: -75.561405 },
    lugaresRelacionados: ['7', '12', '13'],
    bibliografia: [
      {
        titulo: 'Museo Cementerio de San Pedro. Historia.',
        url: 'https://www.cementeriosanpedro.org.co/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial del Cementerio Museo San Pedro',
        url: 'https://www.cementeriosanpedro.org.co/',
      },
    ],
    tags: ['San Pedro', 'memoria', 'patrimonio', 'escultura', 'historia'],
    imagenes: [
      '/images/cementerio-san-pedro/1.png',
      '/images/cementerio-san-pedro/2.png',
      '/images/cementerio-san-pedro/3.png',
    ],
  }),

  createPlace({
    id: '3',
    slug: 'palacio-de-la-cultura-rafael-uribe-uribe',
    nombre: 'Palacio de la Cultura Rafael Uribe Uribe',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Carrera 51 #52-03, Centro',
    horarios: 'Lunes a sábado de 8:00 a.m. a 5:00 p.m.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'patrimonio', 'arquitectura', 'arte'],
    capas: ['memoria-historica', 'arte-urbano'],
    descripcionBreve: 'Edificio neogótico del centro de Medellín, antigua sede de la Gobernación de Antioquia y actual referente patrimonial.',
    historiaContexto: 'Este edificio de estilo neogótico fue construido a mediados del siglo XX y funcionó como sede de la Gobernación de Antioquia. Actualmente alberga el Instituto de Cultura y Patrimonio de Antioquia. Su arquitectura lo convierte en uno de los íconos visuales del centro histórico y en testimonio del desarrollo urbano de Medellín.',
    relatoNarrativo: 'El Palacio de la Cultura se levanta como una silueta inesperada en el corazón del centro. Sus formas neogóticas recuerdan una Medellín institucional, administrativa y cultural que todavía dialoga con la vida cotidiana de la ciudad.',
    ofertaCultural: 'Exposiciones artísticas, muestras patrimoniales, actividades académicas y acceso a archivos históricos.',
    valorIdentitario: 'Símbolo arquitectónico y cultural que conecta la memoria administrativa del departamento con la promoción del patrimonio regional.',
    coords: { lat: 6.251826, lng: -75.567679 },
    lugaresRelacionados: ['1', '16', '17', '20'],
    bibliografia: [
      {
        titulo: 'Instituto de Cultura y Patrimonio de Antioquia.',
        url: 'https://culturantioquia.gov.co/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Instituto de Cultura y Patrimonio de Antioquia',
        url: 'https://culturantioquia.gov.co/',
      },
    ],
    tags: ['Centro', 'patrimonio', 'arquitectura', 'neogótico', 'historia'],
    imagenes: [
      '/images/palacio-cultura/1.png',
      '/images/palacio-cultura/2.png',
      '/images/palacio-cultura/3.png',
    ],
  }),

  createPlace({
    id: '4',
    slug: 'museo-el-castillo',
    nombre: 'Museo El Castillo',
    municipio: 'Medellín',
    barrio: 'El Poblado',
    direccion: 'Calle 9 Sur #32-269, El Poblado',
    horarios: 'Martes a domingo en horario diurno. Consultar programación institucional.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'arte', 'patrimonio', 'arquitectura'],
    capas: ['memoria-historica', 'arte-urbano'],
    descripcionBreve: 'Museo de artes decorativas ubicado en una edificación inspirada en castillos medievales europeos.',
    historiaContexto: 'Construido en 1930 e inspirado en los castillos medievales europeos, inicialmente fue residencia privada de familias tradicionales antioqueñas. Desde 1971 funciona como museo y conserva colecciones de artes decorativas, mobiliario europeo, vitrales, porcelanas y objetos históricos.',
    relatoNarrativo: 'En medio de jardines y vitrales, Museo El Castillo parece traer a Medellín una postal de otra época. Su arquitectura y sus objetos cuentan historias de estilos de vida, aspiraciones sociales y memorias domésticas de la ciudad.',
    ofertaCultural: 'Exposiciones permanentes y temporales, recorridos guiados, talleres artísticos y actividades culturales en sus jardines históricos.',
    valorIdentitario: 'Evoca tradiciones sociales y estéticas que marcaron etapas importantes en la historia urbana de Medellín.',
    coords: { lat: 6.19019, lng: -75.56954 },
    lugaresRelacionados: ['6', '1'],
    bibliografia: [
      {
        titulo: 'Museo El Castillo. Museo El Castillo.',
        url: 'https://www.museoelcastillo.org/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Museo El Castillo',
        url: 'https://www.museoelcastillo.org/',
      },
    ],
    tags: ['El Poblado', 'patrimonio', 'arquitectura', 'artes decorativas'],
    imagenes: [
      '/images/museo-el-castillo/1.png',
      '/images/museo-el-castillo/2.png',
      '/images/museo-el-castillo/3.png',
    ],
  }),

  createPlace({
    id: '5',
    slug: 'teatro-lido',
    nombre: 'Teatro Lido',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Carrera 48 #54-20, Parque Bolívar',
    horarios: 'Según programación cultural.',
    tipoLugar: 'artístico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'arte', 'música', 'patrimonio'],
    capas: ['memoria-historica', 'cultura-cotidiana', 'arte-urbano'],
    descripcionBreve: 'Teatro patrimonial del centro tradicional, referente de la memoria escénica de Medellín.',
    historiaContexto: 'Inaugurado en 1945, el Teatro Lido fue uno de los escenarios cinematográficos y teatrales más importantes del centro de Medellín. Tras procesos de restauración, continúa activo como teatro patrimonial y como referente cultural del centro tradicional.',
    relatoNarrativo: 'El Teatro Lido conserva la memoria de tardes de cine, funciones teatrales y encuentros artísticos en el Parque Bolívar. Su escenario mantiene viva una parte de la vida cultural que marcó al centro durante el siglo XX.',
    ofertaCultural: 'Programación de teatro, música, danza y eventos comunitarios.',
    valorIdentitario: 'Representa la memoria escénica del siglo XX y la tradición cultural del centro histórico.',
    coords: { lat: 6.252402, lng: -75.564526 },
    lugaresRelacionados: ['9', '20', '3'],
    bibliografia: [
      {
        titulo: 'Red de Escenarios de Medellín. Teatro Lido.',
        url: 'https://redescenariosmedellin.gov.co/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Red de Escenarios de Medellín',
        url: 'https://redescenariosmedellin.gov.co/',
      },
    ],
    tags: ['Centro', 'teatro', 'música', 'danza', 'memoria escénica'],
    imagenes: [
      '/images/teatro-lido/1.png',
      '/images/teatro-lido/2.png',
      '/images/teatro-lido/3.png',
    ],
  }),

  createPlace({
    id: '6',
    slug: 'museo-de-arte-moderno-de-medellin-mamm',
    nombre: 'Museo de Arte Moderno de Medellín (MAMM)',
    municipio: 'Medellín',
    barrio: 'Ciudad del Río',
    direccion: 'Carrera 44 #19A-100, Ciudad del Río',
    horarios: 'Martes a viernes de 11:00 a.m. a 7:00 p.m.; fines de semana hasta las 6:00 p.m.',
    tipoLugar: 'artístico',
    visibilidad: 'popular',
    categoriasCulturales: ['arte', 'memoria', 'patrimonio'],
    capas: ['arte-urbano', 'cultura-cotidiana'],
    descripcionBreve: 'Museo dedicado al arte moderno y contemporáneo, ubicado en una antigua zona industrial recuperada.',
    historiaContexto: 'Fundado en 1978, el MAMM promueve el arte moderno y contemporáneo en Colombia. Su sede actual, ubicada en una antigua zona industrial recuperada, refleja la transformación urbana de Medellín hacia distritos creativos y culturales.',
    relatoNarrativo: 'El MAMM habita una antigua zona industrial y la convierte en punto de encuentro creativo. Allí, Medellín se mira desde el arte contemporáneo, la experimentación y las nuevas preguntas sobre la ciudad.',
    ofertaCultural: 'Exposiciones de arte contemporáneo, cine, talleres, conferencias y actividades académicas.',
    valorIdentitario: 'Fortalece la imagen de Medellín como ciudad innovadora, creativa y abierta a nuevas expresiones artísticas.',
    coords: { lat: 6.223611, lng: -75.574167 },
    lugaresRelacionados: ['4', '11'],
    bibliografia: [
      {
        titulo: 'Museo de Arte Moderno de Medellín. MAMM.',
        url: 'https://www.elmamm.org/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial MAMM',
        url: 'https://www.elmamm.org/',
      },
    ],
    tags: ['Ciudad del Río', 'arte contemporáneo', 'cine', 'creatividad'],
    imagenes: [
      '/images/mamm/1.png',
      '/images/mamm/2.png',
      '/images/mamm/3.png',
      '/images/mamm/4.png',
    ],
  }),

  createPlace({
    id: '7',
    slug: 'casa-museo-pedro-nel-gomez',
    nombre: 'Casa Museo Pedro Nel Gómez',
    municipio: 'Medellín',
    barrio: 'Aranjuez',
    direccion: 'Carrera 51B #85-24, Aranjuez',
    horarios: 'Lunes a sábado de 9:00 a.m. a 5:00 p.m.',
    tipoLugar: 'artístico',
    visibilidad: 'popular',
    categoriasCulturales: ['arte', 'memoria', 'patrimonio'],
    capas: ['arte-urbano', 'memoria-historica'],
    descripcionBreve: 'Residencia y taller del muralista Pedro Nel Gómez, espacio clave para entender el muralismo colombiano.',
    historiaContexto: 'Fue residencia y taller del muralista Pedro Nel Gómez. Conserva murales originales que abordan problemáticas sociales, historia regional y procesos políticos del país. Es un espacio fundamental para comprender el muralismo colombiano y su impacto cultural.',
    relatoNarrativo: 'En la Casa Museo Pedro Nel Gómez, los muros hablan. Cada mural abre una conversación sobre trabajo, territorio, sociedad e identidad visual antioqueña.',
    ofertaCultural: 'Visitas guiadas, archivo documental, exposiciones y actividades educativas.',
    valorIdentitario: 'Preserva el legado de uno de los artistas más influyentes en la construcción de identidad visual antioqueña.',
    coords: { lat: 6.278333, lng: -75.562222 },
    lugaresRelacionados: ['2', '12', '11'],
    bibliografia: [
      {
        titulo: 'Casa Museo Pedro Nel Gómez. Inicio.',
        url: 'https://museopedronelgomez.org/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Casa Museo Pedro Nel Gómez',
        url: 'https://museopedronelgomez.org/',
      },
    ],
    tags: ['Aranjuez', 'muralismo', 'arte', 'Pedro Nel Gómez'],
    imagenes: [
      '/images/casa-pedro-nel/1.png',
      '/images/casa-pedro-nel/2.png',
      '/images/casa-pedro-nel/3.png',
    ],
  }),

  createPlace({
    id: '8',
    slug: 'museo-del-agua-epm',
    nombre: 'Museo del Agua EPM',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Parque de los Pies Descalzos, Centro',
    horarios: 'Según programación institucional.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['ciencia', 'tecnología', 'naturaleza', 'educación'],
    capas: ['espacios-comunitarios', 'cultura-cotidiana'],
    descripcionBreve: 'Espacio interactivo dedicado al agua, la ciencia, la tecnología y la cultura ambiental.',
    historiaContexto: 'El Museo del Agua EPM es un espacio interactivo creado para educar sobre el agua como recurso vital y su papel en el desarrollo humano y urbano. Integra ciencia, tecnología y cultura ambiental en experiencias pedagógicas.',
    relatoNarrativo: 'En el Museo del Agua, la ciudad aprende a mirar un recurso cotidiano como una historia de vida, tecnología y responsabilidad colectiva.',
    ofertaCultural: 'Exhibiciones interactivas, recorridos pedagógicos y experiencias sensoriales.',
    valorIdentitario: 'Promueve la conciencia ambiental como parte de la identidad contemporánea de Medellín.',
    coords: { lat: 6.2453, lng: -75.5779 },
    lugaresRelacionados: ['11', '12', '18'],
    bibliografia: [
      {
        titulo: 'Museo del Agua EPM.',
        url: 'https://www.fundacionepm.org.co/es/museo-del-agua',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Museo del Agua EPM',
        url: 'https://www.fundacionepm.org.co/es/museo-del-agua',
      },
    ],
    tags: ['Centro', 'agua', 'ciencia', 'ambiente', 'educación'],
    imagenes: [
      '/images/museo-agua/1.png',
      '/images/museo-agua/2.png',
      '/images/museo-agua/3.png',
    ],
  }),

  createPlace({
    id: '9',
    slug: 'teatro-pablo-tobon-uribe',
    nombre: 'Teatro Pablo Tobón Uribe',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Carrera 40 #51-24, Centro',
    horarios: 'Según programación cultural.',
    tipoLugar: 'artístico',
    visibilidad: 'popular',
    categoriasCulturales: ['arte', 'música', 'memoria'],
    capas: ['cultura-cotidiana', 'arte-urbano'],
    descripcionBreve: 'Escenario cultural emblemático de Medellín dedicado a las artes escénicas y eventos culturales.',
    historiaContexto: 'Inaugurado en 1967 gracias al filántropo Pablo Tobón Uribe, ha sido uno de los escenarios culturales más importantes de la ciudad. Durante décadas ha promovido teatro, música, danza y eventos académicos de alto nivel.',
    relatoNarrativo: 'El Teatro Pablo Tobón Uribe guarda el pulso de la escena cultural de Medellín. Su programación ha acompañado generaciones de espectadores, artistas y conversaciones públicas.',
    ofertaCultural: 'Programación permanente de artes escénicas y eventos culturales.',
    valorIdentitario: 'Símbolo del compromiso histórico de Medellín con el desarrollo artístico.',
    coords: { lat: 6.24746, lng: -75.5591 },
    lugaresRelacionados: ['5', '20', '3'],
    bibliografia: [
      {
        titulo: 'Teatro Pablo Tobón Uribe. Conócenos.',
        url: 'https://teatropablotobon.com/conocenos/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Teatro Pablo Tobón Uribe',
        url: 'https://teatropablotobon.com/conocenos/',
      },
    ],
    tags: ['Centro', 'teatro', 'música', 'danza', 'arte'],
    imagenes: [
      '/images/teatro-pablo-tobon/1.png',
      '/images/teatro-pablo-tobon/2.png',
      '/images/teatro-pablo-tobon/3.png',
    ],
  }),

  createPlace({
    id: '10',
    slug: 'museo-casa-de-la-memoria',
    nombre: 'Museo Casa de la Memoria',
    municipio: 'Medellín',
    barrio: 'Parque Bicentenario',
    direccion: 'Calle 51 #36-66, Parque Bicentenario',
    horarios: 'Martes a viernes de 9:00 a.m. a 6:00 p.m.; fines de semana de 10:00 a.m. a 4:00 p.m.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'patrimonio', 'educación'],
    capas: ['memoria-historica', 'espacios-comunitarios'],
    descripcionBreve: 'Museo dedicado a la memoria histórica, el conflicto armado y la construcción de paz.',
    historiaContexto: 'Inaugurado en 2012, el Museo Casa de la Memoria surge como iniciativa para documentar y reflexionar sobre el conflicto armado en Colombia y su impacto en Medellín. Reúne testimonios, archivos y exposiciones que promueven la memoria histórica y la construcción de paz.',
    relatoNarrativo: 'La Casa de la Memoria invita a escuchar las voces que la ciudad no puede olvidar. Sus archivos y testimonios convierten el dolor en una posibilidad de reconocimiento y diálogo.',
    ofertaCultural: 'Exposiciones permanentes y temporales, talleres pedagógicos y espacios de diálogo.',
    valorIdentitario: 'Contribuye a la reconstrucción de memoria colectiva y al reconocimiento del pasado reciente como parte esencial de la identidad ciudadana.',
    coords: { lat: 6.2459, lng: -75.5565 },
    lugaresRelacionados: ['15', '16', '2'],
    bibliografia: [
      {
        titulo: 'Museo Casa de la Memoria. Inicio.',
        url: 'https://www.museocasadelamemoria.gov.co/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Museo Casa de la Memoria',
        url: 'https://www.museocasadelamemoria.gov.co/',
      },
    ],
    tags: ['Parque Bicentenario', 'memoria', 'paz', 'conflicto armado', 'educación'],
    imagenes: [
      '/images/casa-memoria/1.png',
      '/images/casa-memoria/2.png',
      '/images/casa-memoria/3.png',
    ],
  }),

  createPlace({
    id: '11',
    slug: 'parque-explora',
    nombre: 'Parque Explora',
    municipio: 'Medellín',
    barrio: 'Zona Norte',
    direccion: 'Carrera 52 #73-75, zona norte de Medellín',
    horarios: 'Martes a domingo de 10:00 a.m. a 5:30 p.m.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['ciencia', 'tecnología', 'educación', 'comunidad'],
    capas: ['espacios-comunitarios', 'cultura-cotidiana'],
    descripcionBreve: 'Centro interactivo de ciencia, tecnología y cultura urbana ubicado en la zona norte de Medellín.',
    historiaContexto: 'Parque Explora nació como parte de una estrategia de transformación urbana basada en cultura y conocimiento. Su construcción se dio en una zona antes marcada por deterioro urbano y violencia, y abrió sus puertas en 2007 como parte del corredor cultural del norte de Medellín.',
    relatoNarrativo: 'Parque Explora convirtió antiguos paisajes industriales en un territorio de ciencia, curiosidad y encuentro. Sus volúmenes rojos son hoy una señal visible de cómo Medellín apostó por el conocimiento como forma de transformación social.',
    ofertaCultural: 'Salas interactivas de ciencia y tecnología, planetario, acuario educativo, vivario, laboratorios de experimentación y actividades comunitarias.',
    valorIdentitario: 'Representa la democratización del acceso a la ciencia, la tecnología y el conocimiento en sectores históricamente vulnerables de la ciudad.',
    coords: { lat: 6.2704, lng: -75.5656 },
    lugaresRelacionados: ['12', '19', '7', '2'],
    bibliografia: [
      {
        titulo: 'Parque Explora. Inicio.',
        url: 'https://www.parqueexplora.org',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Parque Explora',
        url: 'https://www.parqueexplora.org',
      },
    ],
    tags: ['Zona Norte', 'ciencia', 'tecnología', 'educación', 'transformación urbana'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '12',
    slug: 'jardin-botanico-joaquin-antonio-uribe',
    nombre: 'Jardín Botánico Joaquín Antonio Uribe',
    municipio: 'Medellín',
    barrio: 'Zona Norte',
    direccion: 'Carrera 52 #73-298, norte de Medellín',
    horarios: 'Martes a domingo de 8:00 a.m. a 5:00 p.m.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['naturaleza', 'educación', 'patrimonio', 'comunidad'],
    capas: ['espacios-comunitarios', 'cultura-cotidiana'],
    descripcionBreve: 'Espacio natural, científico y cultural dedicado a la conservación de la flora colombiana y tropical.',
    historiaContexto: 'El Jardín Botánico tiene antecedentes recreativos desde finales del siglo XIX y fue constituido formalmente en 1972 como entidad dedicada al fomento de las ciencias naturales. Su renovación entre 2005 y 2007 lo integró al corredor cultural del norte de Medellín.',
    relatoNarrativo: 'El Jardín Botánico es un respiro verde dentro de la ciudad. Entre orquídeas, árboles, mariposas y encuentros culturales, recuerda que la identidad de Medellín también se construye desde la naturaleza.',
    ofertaCultural: 'Exposición de especies vegetales, mariposario, orquidario, jardín de palmas, herbario, actividades pedagógicas y eventos culturales como la Fiesta del Libro y la Cultura.',
    valorIdentitario: 'Conecta la vida cotidiana, la investigación científica, la educación ambiental y la apropiación ciudadana de la naturaleza.',
    coords: { lat: 6.2709, lng: -75.5633 },
    lugaresRelacionados: ['11', '2', '7', '19'],
    bibliografia: [
      {
        titulo: 'Jardín Botánico de Medellín. Inicio.',
        url: 'https://www.botanicomedellin.org',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Jardín Botánico de Medellín',
        url: 'https://www.botanicomedellin.org',
      },
    ],
    tags: ['Zona Norte', 'naturaleza', 'botánica', 'educación ambiental', 'Fiesta del Libro'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '13',
    slug: 'barrio-prado-centro',
    nombre: 'Barrio Prado Centro',
    municipio: 'Medellín',
    barrio: 'Prado Centro',
    direccion: 'Comuna 10 – La Candelaria, norte del centro de Medellín',
    horarios: 'Espacio de libre circulación. Recorridos guiados según programación institucional.',
    tipoLugar: 'histórico',
    visibilidad: 'oculto',
    categoriasCulturales: ['patrimonio', 'arquitectura', 'memoria', 'comunidad'],
    capas: ['memoria-historica', 'cultura-cotidiana'],
    descripcionBreve: 'Sector patrimonial de Medellín reconocido por sus casonas, antejardines y arquitectura republicana, art déco y ecléctica.',
    historiaContexto: 'Prado Centro surgió en 1926 como una urbanización inspirada en el modelo de ciudad jardín. Fue una zona residencial planificada para la élite económica y social de Medellín, y en 1987 fue declarado patrimonio urbanístico y arquitectónico de la ciudad.',
    relatoNarrativo: 'Caminar por Prado Centro es recorrer una Medellín que quiso parecerse a las grandes ciudades modernas. Sus casonas, calles arborizadas y fachadas antiguas guardan la memoria de una ciudad elegante, contradictoria y todavía viva.',
    ofertaCultural: 'Recorridos patrimoniales, actividades de colectivos culturales, teatros independientes, sedes artísticas y programas de conservación urbana.',
    valorIdentitario: 'Es un referente de preservación patrimonial y memoria urbana dentro del centro de Medellín.',
    coords: { lat: 6.2597, lng: -75.5619 },
    lugaresRelacionados: ['3', '17', '12', '11'],
    bibliografia: [
      {
        titulo: 'Alcaldía de Medellín. Prado Centro, patrimonio urbanístico y arquitectónico.',
        url: 'https://www.medellin.gov.co/es/secretaria-cultura-ciudadana/patrimonio/prado-centro/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Patrimonio Prado Centro',
        url: 'https://www.medellin.gov.co/es/secretaria-cultura-ciudadana/patrimonio/prado-centro/',
      },
    ],
    tags: ['Prado Centro', 'patrimonio urbano', 'arquitectura', 'ciudad jardín'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '14',
    slug: 'cerro-nutibara-y-pueblito-paisa',
    nombre: 'Cerro Nutibara y Pueblito Paisa',
    municipio: 'Medellín',
    barrio: 'Belén',
    direccion: 'Cerro Nutibara, Belén, centro-occidente de Medellín',
    horarios: 'Abierto todos los días. Pueblito Paisa según programación interna.',
    tipoLugar: 'cotidiano',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'patrimonio', 'naturaleza', 'comunidad'],
    capas: ['cultura-cotidiana', 'memoria-historica'],
    descripcionBreve: 'Cerro tutelar de Medellín y mirador urbano donde se ubica el Pueblito Paisa, símbolo de identidad regional.',
    historiaContexto: 'El Cerro Nutibara fue adquirido por el municipio en 1927 como parque recreativo y espacio verde. En su cima se inauguró en 1978 el Pueblito Paisa, una réplica de los pueblos antioqueños tradicionales de comienzos del siglo XX.',
    relatoNarrativo: 'Desde el Cerro Nutibara, Medellín se mira a sí misma. El Pueblito Paisa reúne balcones, plaza, iglesia y memoria popular para construir una postal viva de la identidad antioqueña.',
    ofertaCultural: 'Senderos, mirador, Parque de las Esculturas, Teatro al Aire Libre Carlos Vieco, gastronomía típica, artesanías y eventos culturales.',
    valorIdentitario: 'Funciona como símbolo de memoria paisa, paisaje urbano y encuentro entre tradición regional y vida turística contemporánea.',
    coords: { lat: 6.2351, lng: -75.5804 },
    lugaresRelacionados: ['18', '6'],
    bibliografia: [
      {
        titulo: 'Medellín Travel. Cerro Nutibara y Pueblito Paisa.',
        url: 'https://www.medellin.travel/cerro-nutibara/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Cerro Nutibara en Medellín Travel',
        url: 'https://www.medellin.travel/cerro-nutibara/',
      },
    ],
    tags: ['Belén', 'Pueblito Paisa', 'mirador', 'tradición paisa', 'cerro tutelar'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '15',
    slug: 'parque-biblioteca-santo-domingo-savio',
    nombre: 'Parque Biblioteca Santo Domingo Savio',
    municipio: 'Medellín',
    barrio: 'Santo Domingo',
    direccion: 'Carrera 33B #107A-100, barrio Santo Domingo, Comuna 1',
    horarios: 'Según programación institucional.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['comunidad', 'educación', 'memoria', 'arquitectura'],
    capas: ['espacios-comunitarios', 'memoria-historica'],
    descripcionBreve: 'Equipamiento cultural de la ladera nororiental asociado al urbanismo social y la transformación territorial.',
    historiaContexto: 'Ubicado en Santo Domingo, un sector históricamente afectado por violencia y abandono institucional, este parque biblioteca fue diseñado por Giancarlo Mazzanti y construido entre 2006 y 2007 como parte del Plan Municipal de Parques Biblioteca.',
    relatoNarrativo: 'En la montaña de Santo Domingo, la biblioteca apareció como una señal de dignidad urbana. Su historia habla de cultura, comunidad, arquitectura y del derecho a encontrarse alrededor del conocimiento.',
    ofertaCultural: 'Sala de lectura, acceso a internet, talleres de formación, exposiciones, auditorio, espacios de encuentro comunitario y programas de inclusión social.',
    valorIdentitario: 'Representa el vínculo entre cultura, movilidad, inclusión social y transformación urbana en zonas históricamente vulnerables.',
    coords: { lat: 6.2945, lng: -75.5431 },
    lugaresRelacionados: ['10', '11', '19'],
    bibliografia: [
      {
        titulo: 'El Colombiano. Reapertura de la Biblioteca España en Santo Domingo.',
        url: 'https://www.elcolombiano.com/medellin/biblioteca-espana-santo-domingo-reapertura-medellin-2024',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Información sobre reapertura y contexto',
        url: 'https://www.elcolombiano.com/medellin/biblioteca-espana-santo-domingo-reapertura-medellin-2024',
      },
    ],
    tags: ['Santo Domingo', 'parque biblioteca', 'urbanismo social', 'comunidad', 'educación'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '16',
    slug: 'plaza-cisneros-plaza-de-las-luces',
    nombre: 'Plaza Cisneros – Plaza de las Luces',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Entre carreras 50 y 52, calles 44 y 46, Centro de Medellín',
    horarios: 'Espacio público de libre circulación.',
    tipoLugar: 'cotidiano',
    visibilidad: 'popular',
    categoriasCulturales: ['memoria', 'patrimonio', 'arquitectura', 'comunidad'],
    capas: ['memoria-historica', 'cultura-cotidiana'],
    descripcionBreve: 'Plaza pública del centro de Medellín construida sobre el antiguo mercado popular de la ciudad.',
    historiaContexto: 'La Plaza Cisneros ocupa el lugar donde durante décadas funcionó el principal mercado de Medellín. Su transformación en plaza pública, reconocida por sus columnas de luz, forma parte de los procesos de renovación urbana del centro.',
    relatoNarrativo: 'La Plaza de las Luces ilumina un lugar donde antes resonaban voces de mercado, comercio popular y vida cotidiana. Su presente moderno convive con la memoria de una ciudad que se abastecía y se encontraba allí.',
    ofertaCultural: 'Eventos culturales al aire libre, conciertos, actividades comunitarias, ferias artesanales y expresiones de cultura popular.',
    valorIdentitario: 'Permite reflexionar sobre renovación urbana, memoria comercial, espacio público y cultura popular en el centro de Medellín.',
    coords: { lat: 6.2468, lng: -75.5742 },
    lugaresRelacionados: ['17', '3', '1', '20'],
    bibliografia: [
      {
        titulo: 'Empresa de Desarrollo Urbano. Plaza Cisneros.',
        url: 'https://www.edu.gov.co/proyectos/plaza-cisneros',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Proyecto Plaza Cisneros EDU',
        url: 'https://www.edu.gov.co/proyectos/plaza-cisneros',
      },
    ],
    tags: ['Centro', 'Plaza de las Luces', 'espacio público', 'mercado', 'renovación urbana'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '17',
    slug: 'edificios-carre-y-vasquez',
    nombre: 'Edificios Carré y Vásquez',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Avenida San Juan con carrera 50, sector de la Plaza de la Libertad, Centro de Medellín',
    horarios: 'Acceso según uso institucional de cada edificio.',
    tipoLugar: 'histórico',
    visibilidad: 'oculto',
    categoriasCulturales: ['patrimonio', 'arquitectura', 'memoria'],
    capas: ['memoria-historica'],
    descripcionBreve: 'Construcciones patrimoniales gemelas asociadas a la memoria industrial y comercial de Medellín.',
    historiaContexto: 'Los edificios Carré y Vásquez son testimonios arquitectónicos del desarrollo industrial y comercial de Medellín a finales del siglo XIX y comienzos del siglo XX. Su permanencia en el centro los convierte en archivos materiales de la memoria económica y urbana de la ciudad.',
    relatoNarrativo: 'Los edificios Carré y Vásquez parecen observar el centro desde otra época. Sus fachadas recuerdan una Medellín que empezaba a pensarse como ciudad de comercio, industria y modernidad.',
    ofertaCultural: 'Recorridos patrimoniales, actividades institucionales, rutas culturales del centro histórico y estudios sobre arquitectura urbana.',
    valorIdentitario: 'Representan la memoria industrial, comercial y arquitectónica de Medellín.',
    coords: { lat: 6.2473, lng: -75.5735 },
    lugaresRelacionados: ['16', '3', '1', '13'],
    bibliografia: [
      {
        titulo: 'Museo de Antioquia. Edificios Carré y Vásquez.',
        url: 'https://museodeantioquia.co/blog/edificios-carre-y-vasquez/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Edificios Carré y Vásquez - Museo de Antioquia',
        url: 'https://museodeantioquia.co/blog/edificios-carre-y-vasquez/',
      },
    ],
    tags: ['Centro', 'patrimonio', 'arquitectura', 'industria', 'comercio'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '18',
    slug: 'parque-arvi',
    nombre: 'Parque Arví',
    municipio: 'Medellín',
    barrio: 'Santa Elena',
    direccion: 'Corregimiento de Santa Elena, zona rural de Medellín',
    horarios: 'Martes a domingo de 9:00 a.m. a 5:00 p.m.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['naturaleza', 'ruralidad', 'comunidad', 'patrimonio'],
    capas: ['espacios-comunitarios', 'cultura-cotidiana'],
    descripcionBreve: 'Parque natural y cultural ubicado en Santa Elena, con senderos, mercado campesino y turismo rural comunitario.',
    historiaContexto: 'Parque Arví se extiende sobre las montañas orientales del Valle de Aburrá, en el corregimiento de Santa Elena. Su existencia busca preservar bosques nativos, memoria rural y formas de vida campesina frente a la expansión urbana.',
    relatoNarrativo: 'Llegar a Parque Arví es ver cómo la ciudad se abre paso hacia el bosque. Allí, los caminos, el mercado campesino y el aire frío de Santa Elena recuerdan que Medellín también es ruralidad y montaña.',
    ofertaCultural: 'Senderismo, recorridos ecológicos, mercado campesino, educación ambiental, avistamiento de aves, turismo rural comunitario y eventos culturales.',
    valorIdentitario: 'Conecta la cultura urbana con tradiciones campesinas, memoria ambiental y prácticas comunitarias de Santa Elena.',
    coords: { lat: 6.2818, lng: -75.5026 },
    lugaresRelacionados: ['14', '12'],
    bibliografia: [
      {
        titulo: 'Parque Arví. Inicio.',
        url: 'https://parquearvi.org',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Parque Arví',
        url: 'https://parquearvi.org',
      },
    ],
    tags: ['Santa Elena', 'naturaleza', 'ruralidad', 'silleteros', 'turismo comunitario'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '19',
    slug: 'biblioteca-publica-piloto-de-medellin',
    nombre: 'Biblioteca Pública Piloto de Medellín',
    municipio: 'Medellín',
    barrio: 'Carlos E. Restrepo',
    direccion: 'Carrera 64 #50-32, barrio Carlos E. Restrepo',
    horarios: 'Lunes a sábado de 8:00 a.m. a 7:00 p.m.; domingos de 10:00 a.m. a 4:00 p.m.',
    tipoLugar: 'comunitario',
    visibilidad: 'popular',
    categoriasCulturales: ['literatura', 'memoria', 'educación', 'patrimonio'],
    capas: ['espacios-comunitarios', 'memoria-historica'],
    descripcionBreve: 'Institución cultural y bibliotecaria fundada en 1954, referente de memoria literaria e intelectual de Medellín.',
    historiaContexto: 'La Biblioteca Pública Piloto fue fundada en 1954 como parte de un proyecto impulsado por la Unesco para establecer bibliotecas públicas modelo en América Latina. Su colección fotográfica y sus archivos documentales la hacen fundamental para la investigación histórica sobre Medellín y Antioquia.',
    relatoNarrativo: 'La Biblioteca Pública Piloto guarda libros, fotografías y conversaciones que han acompañado la vida intelectual de Medellín. En sus salas, la ciudad ha aprendido a leerse y recordarse.',
    ofertaCultural: 'Colecciones bibliográficas, archivo fotográfico, talleres literarios, tertulias, encuentros con escritores, actividades de lectura e investigación académica.',
    valorIdentitario: 'Democratiza el acceso al conocimiento y preserva memoria documental, fotográfica y literaria de la ciudad.',
    coords: { lat: 6.2573, lng: -75.5793 },
    lugaresRelacionados: ['11', '12', '15'],
    bibliografia: [
      {
        titulo: 'Biblioteca Pública Piloto de Medellín. Inicio.',
        url: 'https://www.bibliotecapiloto.gov.co',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Sitio oficial Biblioteca Pública Piloto',
        url: 'https://www.bibliotecapiloto.gov.co',
      },
    ],
    tags: ['Carlos E. Restrepo', 'biblioteca', 'literatura', 'archivo fotográfico', 'memoria'],
    imagenes: [PLACEHOLDER_IMAGE],
  }),

  createPlace({
    id: '20',
    slug: 'catedral-basilica-metropolitana-de-medellin',
    nombre: 'Catedral Basílica Metropolitana de Medellín',
    municipio: 'Medellín',
    barrio: 'Centro',
    direccion: 'Parque Bolívar, carrera 48 #56-81, Centro de Medellín',
    horarios: 'Lunes a domingo según horario de misas y visitas; incluye museo religioso.',
    tipoLugar: 'histórico',
    visibilidad: 'popular',
    categoriasCulturales: ['religión', 'patrimonio', 'arquitectura', 'memoria'],
    capas: ['memoria-historica', 'cultura-cotidiana'],
    descripcionBreve: 'Monumento religioso, arquitectónico e histórico ubicado frente al Parque Bolívar.',
    historiaContexto: 'La Catedral Basílica Metropolitana comenzó a construirse en 1875 y se prolongó durante varias décadas. De estilo neorrománico, define visualmente el Parque Bolívar y ha sido escenario de celebraciones religiosas, cívicas y sociales de la ciudad.',
    relatoNarrativo: 'La Catedral Metropolitana domina el Parque Bolívar con su arquitectura de ladrillo y su presencia solemne. Sus muros han acompañado procesiones, celebraciones, duelos y memorias de la Medellín histórica.',
    ofertaCultural: 'Celebraciones religiosas, museo de arte sacro, visitas guiadas, eventos culturales del calendario litúrgico y recorridos por el centro histórico.',
    valorIdentitario: 'Expresa la relación entre fe, arquitectura, espacio público e identidad cultural antioqueña.',
    coords: { lat: 6.2542, lng: -75.5639 },
    lugaresRelacionados: ['5', '9', '3', '13'],
    bibliografia: [
      {
        titulo: 'Arquidiócesis de Medellín. Catedral Metropolitana de Medellín.',
        url: 'https://arquidiocesismedellin.org.co/catedral-metropolitana/',
      },
    ],
    enlacesExternos: [
      {
        titulo: 'Catedral Metropolitana de Medellín',
        url: 'https://arquidiocesismedellin.org.co/catedral-metropolitana/',
      },
    ],
    tags: ['Centro', 'Parque Bolívar', 'religión', 'arquitectura', 'patrimonio'],
    imagenes: [PLACEHOLDER_IMAGE],
  })
]

export const invalidPlaces = places
  .map((place) => ({
    id: place.id,
    nombre: place.nombre,
    errors: validatePlace(place),
  }))
  .filter((item) => item.errors.length > 0)

export default places
