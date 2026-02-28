const sitios = [
  {
    id: 1,
    nombre: "Museo de Antioquia",
    direccion: "Carrera 52 #52-43, Centro de Medellín",
    horarios: "Lun–Sáb 10:00–17:30; Dom/Fest 10:00–16:30",
    descripcion: "Fundado en 1881; uno de los más antiguos del país. Colecciones de Botero, Pedro Nel Gómez y otros; eje de revitalización del centro.",
    oferta: "Exposiciones permanentes y temporales, programas pedagógicos, visitas guiadas, actividades académicas.",
    valorIdentitario: "Símbolo del desarrollo artístico antioqueño y encuentro entre historia, arte y espacio público.",
    barrio: "Centro",
    imagen: "/images/museo-antioquia.jpg",
    coords: { lat: 6.2525, lng: -75.569167 } // Wikipedia (coordenadas oficiales) [1](https://es.wikipedia.org/wiki/Museo_de_Antioquia)
  },
  {
    id: 2,
    nombre: "Cementerio Museo San Pedro",
    direccion: "Carrera 51 #68-68, San Pedro",
    horarios: "Lun–Dom 8:00–17:00",
    descripcion: "Inaugurado en 1842; Monumento Nacional desde 1999. Mausoleos y esculturas con estilos europeos adaptados.",
    oferta: "Recorridos guiados, conciertos, teatro, narración oral, eventos nocturnos.",
    valorIdentitario: "Archivo histórico al aire libre de personajes fundamentales de la ciudad.",
    barrio: "San Pedro",
    imagen: "/images/cementerio-san-pedro.jpg",
    coords: { lat: 6.265875, lng: -75.561405 } // Wikipedia (coordenadas) [2](https://es.wikipedia.org/wiki/Cementerio_Museo_San_Pedro)
  },
  {
    id: 3,
    nombre: "Palacio de la Cultura Rafael Uribe Uribe",
    direccion: "Carrera 51 #52-03, Centro",
    horarios: "Lun–Sáb 8:00–17:00",
    descripcion: "Edificio neogótico, antigua sede de la Gobernación; hoy Instituto de Cultura y Patrimonio de Antioquia.",
    oferta: "Exposiciones, muestras patrimoniales, actividades académicas, archivos históricos.",
    valorIdentitario: "Ícono arquitectónico que conecta memoria administrativa y patrimonio regional.",
    barrio: "Centro",
    imagen: "/images/palacio-cultura.jpg",
    coords: { lat: 6.251826, lng: -75.567679 } // Wikipedia (coordenadas) [3](https://es.wikipedia.org/wiki/Palacio_de_la_Cultura_Rafael_Uribe_Uribe)
  },
  {
    id: 4,
    nombre: "Museo El Castillo",
    direccion: "Calle 9 Sur #32-269, El Poblado",
    horarios: "Mar–Dom (consultar programación)",
    descripcion: "Construido en 1930 con inspiración medieval; desde 1971 funciona como museo de artes decorativas.",
    oferta: "Exposiciones, recorridos guiados, talleres y actividades en jardines.",
    valorIdentitario: "Evoca tradiciones sociales y estéticas de etapas clave de la ciudad.",
    barrio: "El Poblado",
    imagen: "/images/museo-el-castillo.jpg",
    coords: { lat: 6.19019, lng: -75.56954 } // Wikipedia (coordenadas) [4](https://en.wikipedia.org/wiki/El_Castillo_Museum)
  },
  {
    id: 5,
    nombre: "Teatro Lido",
    direccion: "Carrera 48 #54-20, Parque Bolívar",
    horarios: "Según programación",
    descripcion: "Inaugurado en 1945; referente cinematográfico y teatral del centro tradicional.",
    oferta: "Teatro, música, danza y eventos comunitarios.",
    valorIdentitario: "Memoria escénica del siglo XX en el centro histórico.",
    barrio: "Centro (Parque Bolívar)",
    imagen: "/images/teatro-lido.jpg",
    coords: { lat: 6.252402, lng: -75.564526 } // Wikipedia (coordenadas) [5](https://en.wikipedia.org/wiki/Teatro_Lido)
  },
  {
    id: 6,
    nombre: "Museo de Arte Moderno de Medellín (MAMM)",
    direccion: "Carrera 44 #19A-100, Ciudad del Río",
    horarios: "Mar–Vie 11:00–19:00; Fines de semana 11:00–18:00",
    descripcion: "Fundado en 1978; sede en antigua zona industrial recuperada, promueve arte moderno y contemporáneo.",
    oferta: "Exposiciones, cine, talleres, conferencias.",
    valorIdentitario: "Refuerza la imagen de Medellín como ciudad creativa e innovadora.",
    barrio: "Ciudad del Río",
    imagen: "/images/mamm.jpg",
    coords: { lat: 6.223611, lng: -75.574167 } // Wikipedia (DMS → decimal 6°13′25″N 75°34′27″O) [6](https://en.wikipedia.org/wiki/Medell%C3%ADn_Museum_of_Modern_Art)
  },
  {
    id: 7,
    nombre: "Casa Museo Pedro Nel Gómez",
    direccion: "Carrera 51B #85-24, Aranjuez",
    horarios: "Lun–Sáb 9:00–17:00",
    descripcion: "Residencia y taller del muralista Pedro Nel Gómez; conserva murales y archivo.",
    oferta: "Visitas guiadas, archivo documental, exposiciones, actividades educativas.",
    valorIdentitario: "Legado clave para la identidad visual antioqueña.",
    barrio: "Aranjuez",
    imagen: "/images/casa-pedro-nel.jpg",
    coords: { lat: 6.278333, lng: -75.562222 } // Wikimapia (DMS 6°16′42″N 75°33′44″O → decimal) [7](https://wikimapia.org/11170015/Casa-Museo-Pedro-Nel-Gomez)
  },
  {
    id: 8,
    nombre: "Museo del Agua EPM",
    direccion: "Carrera 57 #42-139, Parque de los Pies Descalzos",
    horarios: "Según programación institucional",
    descripcion: "Espacio interactivo sobre el agua, ciencia, tecnología y cultura ambiental.",
    oferta: "Exhibiciones interactivas, recorridos pedagógicos, experiencias sensoriales.",
    valorIdentitario: "Conciencia ambiental como identidad contemporánea de Medellín.",
    barrio: "Centro",
    imagen: "/images/museo-agua.jpg",
    coords: { lat: 6.2453, lng: -75.5779 } // Wikipedia (coordenadas) [8](https://en.wikipedia.org/wiki/Water_Museum_EPM)
  },
  {
    id: 9,
    nombre: "Teatro Pablo Tobón Uribe",
    direccion: "Carrera 40 #51-24, Centro",
    horarios: "Según programación",
    descripcion: "Inaugurado en 1967; promueve teatro, música, danza y eventos académicos.",
    oferta: "Programación permanente de artes escénicas.",
    valorIdentitario: "Símbolo del compromiso histórico con el arte.",
    barrio: "Centro",
    imagen: "/images/teatro-pablo-tobon.jpg",
    coords: { lat: 6.24746, lng: -75.5591 } // Wikipedia (coordenadas) [9](https://es.wikipedia.org/wiki/Teatro_Pablo_Tob%C3%B3n_Uribe)
  },
  {
    id: 10,
    nombre: "Museo Casa de la Memoria",
    direccion: "Calle 51 #36-66, Parque Bicentenario",
    horarios: "Mar–Vie 9:00–18:00; Fines de semana 10:00–16:00",
    descripcion: "Inaugurado en 2012; documenta conflicto armado y promueve memoria y paz.",
    oferta: "Exposiciones, talleres pedagógicos, espacios de diálogo.",
    valorIdentitario: "Reconstrucción de memoria colectiva e identidad ciudadana.",
    barrio: "Parque Bicentenario",
    imagen: "/images/casa-memoria.jpg",
    coords: { lat: 6.2459, lng: -75.5565 } // Mapcarta / OSM (coordenadas) [10](https://mapcarta.com/fr/30704830)
  }
]

export default sitios