/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, Project, Section, Writing, Publication } from "./types";

export const SECTIONS: Section[] = [
  { id: "about", label: "SOBRE MÍ", number: "00" },
  { id: "projects", label: "PROYECTOS DESTACADOS", number: "01" },
  { id: "experience", label: "TRAYECTORIA", number: "02" },
  { id: "writings", label: "ESCRITURA PERSONAL", number: "03" },
  { id: "publications", label: "PUBLICACIONES", number: "04" },
  { id: "playground", label: "PLAYGROUND & TOKENS", number: "05" },
  { id: "contact", label: "CONTACTO", number: "06" },
];

// Pilares temáticos con colores distintivos del sistema de diseño
export const PILLARS = {
  "psico-tech": {
    label: "Psicología × Tecnología",
    className: "bg-terracotta/10 text-terracotta border-terracotta/25",
  },
  "impact-research": {
    label: "Investigación de impacto",
    className: "bg-sage/10 text-sage border-sage/25",
  },
  "learning-communities": {
    label: "Comunidades que aprenden",
    className: "bg-ochre/15 text-[#9C6A1F] border-ochre/30",
  },
} as const;

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Psicólogo social, coordinador e investigador",
    company: "Laboratorio de Tecnologías Sociales",
    companyUrl: "https://labtecnosocial.org",
    startDate: "2021",
    endDate: "PRESENTE",
    description: [
      "Lidero equipos multidisciplinarios para crear productos tecnológicos con enfoque social: apps, mapas interactivos e investigación aplicada sobre bienestar emocional y tecnología."
    ],
    skills: ["Gestión de proyectos", "Metodologías ágiles", "Liderazgo de equipos", "Investigación social aplicada"]
  },
  {
    id: "exp-2",
    role: "Consultor y docente para cooperación internacional y universidades",
    company: "UMSS · Solidar Suiza · GIZ y más",
    startDate: "2022",
    endDate: "2026",
    description: [
      "He formado a más de 150 estudiantes y profesionales como docente de pregrado y posgrado (UMSS, UNICEN) y consultor para Solidar Suiza, GIZ, ChildFund, USIP, FES-KAS y Fundación Jubileo. Del aula universitaria a la capacitación de productores agropecuarios: formo capacidades donde se necesitan."
    ],
    skills: ["Facilitación", "Diseño instruccional", "Capacitación digital", "E-learning"]
  },
  {
    id: "exp-3",
    role: "Liderazgo de comunidades y organizaciones juveniles",
    company: "RELIDD · JCI · SOCEPSI",
    startDate: "2018",
    endDate: "2023",
    description: [
      "Coordinador nacional de investigación en RELIDD, director de proyectos en JCI Cochabamba y director científico de la Sociedad Científica de Estudiantes de Psicología. Un patrón constante: construir equipos, activar colectivos y dejar capacidades instaladas."
    ],
    skills: ["Formación de equipos", "Gestión de proyectos", "Producción de contenido", "Gestión de eventos"]
  },
  {
    id: "exp-4",
    role: "Auxiliar de docencia en investigación cualitativa e intervención psicosocial",
    company: "Universidad Mayor de San Simón",
    startDate: "2017",
    endDate: "2019",
    description: [
      "Dirigí 63 proyectos de investigación y acompañé a más de 470 estudiantes."
    ],
    skills: ["Investigación cualitativa", "Tutoría", "Redacción científica"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Thani: Conecta con tus emociones",
    pillar: "psico-tech",
    meta: "+700 descargas",
    description: "Lideré el desarrollo de una aplicación móvil de bienestar emocional, coordinando un equipo de 7 personas entre desarrolladores, psicólogos y comunicadores bajo metodologías ágiles. Desde el diseño psicológico de la experiencia hasta el lanzamiento.",
    skills: [],
    imageUrl: "/src/assets/images/thani.jpg",
    projectUrl: "https://thaniconecta.app/"
  },
  {
    id: "proj-2",
    title: "App Te Escucho",
    pillar: "psico-tech",
    meta: "+2,300 descargas · Alcance nacional",
    description: "Atención psicológica gratuita a distancia durante la pandemia. Fui psicólogo de primera línea (13 horas semanales de atención) y dirigí un equipo de 21 estudiantes en la producción de contenido audiovisual de salud mental.",
    skills: [],
    imageUrl: "/src/assets/images/teescucho.jpg",
    projectUrl: "https://www.opinion.com.bo/articulo/cochabamba/app-escucho-atencion-psicologica-secuelas-covid/20210624201326824677.html"
  },
  {
    id: "proj-3",
    title: "Investigacion social aplicada",
    pillar: "impact-research",
    meta: "7 proyectos de investigación aplicada",
    description: "Transformo investigación social en herramientas visuales que cualquiera puede explorar: el mapa y tipología del consumo de alcohol en Cochabamba, el análisis de sentimientos de la música folklórica boliviana y estudios sobre violencia en la región metropolitana.",
    skills: [],
    imageUrl: "/src/assets/images/articulos.jpg",
    projectUrl: "#"
  },
  {
    id: "proj-4",
    title: " III Encuesta de Percepción Ciudadana sobre Institucionalidad Democrática",
    pillar: "impact-research",
    meta: "Fundación Jubileo",
    description: "Supervisé un equipo de encuestadores en una de las encuestas de percepción ciudadana más relevantes del país sobre institucionalidad democrática, aportando evidencia para el debate público y las políticas de transparencia.",
    skills: [],
    imageUrl: "/src/assets/images/encuesta.jpg",
    projectUrl: "https://www.jubileobolivia.org.bo/Publicaciones/Democracia-y-Derechos-Humanos/Tercera-encuesta-nacional-de-percepcion-ciudadana"
  },
  {
    id: "proj-5",
    title: "Capacitación a productores agropecuarios (App Tarpuy)",
    pillar: "learning-communities",
    meta: "Solidar Suiza",
    description: "Lideré la administración de la app Tarpuy y realicé talleres de capacitación digital con productores agropecuarios de Cochabamba, llevando herramientas tecnológicas a comunidades periurbanas.",
    skills: [],
    imageUrl: "/src/assets/images/tarpuy.jpg",
    projectUrl: "https://labtecnosocial.org/tarpuy-acerca-la-oferta-y-demanda-de-productos-organicos-a-traves-del-celular/"
  },
  {
    id: "proj-6",
    title: "Capacitación a personal de salud”",
    pillar: "learning-communities",
    meta: "INTERTEAM - COMUNDO",
    description: "Implementé 2 manuales y capacité a 40 personas del personal de enfermería durante la pandemia de COVID-19, fortaleciendo capacidades del sistema de salud con apoyo del Interteam, Comundo y JCI.",
    skills: [],
    imageUrl: "/src/assets/images/manualcovid.jpg",
    projectUrl: ""
  }
];

export const WRITINGS: Writing[] = [
  {
    id: "write-1",
    title: "Hermosa Sincronía",
    date: "NOVIEMBRE 2025",
    excerpt: "Este relato nace de la alegría. Celebra la vida, sus sorpresas inesperadas y la dicha de conocer a alguien",
    readTime: "",
    category: "Relato intropectivo",
    link: " https://javiol4.github.io/hermosa-sincronia/"
  },
  {
    id: "write-2",
    title: "Armonía de Dos",
    date: "ABRIL 2024",
    excerpt: "Poesía digital. Una historia de amor contada desde las perspectivas de los protagonistas con versos, imágenes y música. Esta historia se divide en seis capítulos, cada uno presenta una perspectiva que se despliega verticalmente y la otra horizontalmente.",
    readTime: "",
    category: "Poesía digital",
    link: "https://lab-tecnosocial.github.io/art-poetry/"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "Global well-being in 2025: A multidimensional analysis of mental, financial, and social health in 92 countries",
    authors: "Coautor",
    source: "Preprint / Open Science Framework",
    year: "2025",
    doi: "10.31234/osf.io/3jyda_v3",
    link: "https://doi.org/10.31234/osf.io/3jyda_v3"
  },
  {
    id: "pub-2",
    title: "La presencia de la cultura del honor en el Área Metropolitana de Cochabamba",
    authors: "Autor",
    source: "En libro: Violencias sociales en (post)pandemia en una región metropolitana de Bolivia.",
    year: "2024",
    link: "https://www.researchgate.net/publication/381117355_La_Presencia_de_la_Cultura_del_Honor_en_el_Area_Metropolitana_de_Cochabamba"
  },
  {
    id: "pub-3",
    title: "Fundamentos morales y percepciones políticas en Bolivia",
    authors: "Autor",
    source: "En libro: Polarización política y social en Bolivia. Del Proyecto Unámonos (FES-KAS).",
    year: "2023",
    link: "https://www.researchgate.net/publication/380601161_Fundamentos_morales_y_percepciones_politicas_en_Bolivia_resultados_de_la_Encuesta_de_Polarizacion"
  },
  {
    id: "pub-4",
    title: "Educar para liberar diagnóstico participativo sobre educación sexual integral",
    authors: "Coautor",
    source: "Actúa Detén la Violencia",
    year: "2023",
    link: "https://www.actuadetenlaviolencia.org.bo/educar-para-liberar-diagnostico-participativo-sobre-educacion-sexual-integral/"
  },
  {
    id: "pub-5",
    title: "Caracterización de la conversación digital sobre el rechazo a las vacunas COVID-19",
    authors: "Autor",
    source: "Revista Punto Cero. Año 27, N°44, Pág. 56-70",
    year: "2022",
     doi: "10.35319/puntocero.202244191",
    link: "https://doi.org/10.35319/puntocero.202244191"
  },
  {
    id: "pub-6",
    title: "Análisis de sentimientos de música folklórica boliviana",
    authors: "Coautor",
    source: "Laboratorio de Tecnologías Sociales",
    year: "2023",
    link: "https://labtecnosocial.org/analisis-sentimientos-musica-folklorica-boliviana/"
  },
  {
    id: "pub-7",
    title: "Fundamentos morales en Cochabamba",
    authors: "Autor",
    source: "Laboratorio de Tecnologías Sociales",
    year: "2023",
    link: "https://labtecnosocial.org/articulo-FMEC/"
  },
    {
    id: "pub-8",
    title: "Consumo de alcohol en Cochabamba: Mapa y tipología",
    authors: "Autor",
    source: "Laboratorio de Tecnologías Sociales",
    year: "2022",
    link: "https://labtecnosocial.org/consumo-de-alcohol-en-cochabamba/"
  },
    {
    id: "pub-9",
    title: "Opiniones y creencias sobre vacunas en redes sociales bolivianas",
    authors: "Coautor",
    source: "Laboratorio de Tecnologías Sociales",
    year: "2022",
    link: "https://labtecnosocial.org/opiniones-creencias-vacunas-rrss-bolivia/"
  },
    {
    id: "pub-10",
    title: "¿Quédate en casa? Una radiografía de la violencia en las familias más allá de la pandemia",
    authors: "Coautor",
    source: "Actúa Detén la Violencia",
    year: "2021",
    link: "https://www.actuadetenlaviolencia.org.bo/quedate-en-casa-una-radiografia-de-la-violencia-en-las-familias-mas-alla-de-la-pandemia/"
  },
  {
    id: "pub-11",
    title: "Vivencias y estrategias cotidianas de estudiantes universitarios para afrontar Covid-19",
    authors: "Coautor",
    source: "Subversiones. Revista de investigación. Año 5, Nº6, Pág. 117-132",
    year: "2020",
    link: "https://www.actuadetenlaviolencia.org.bo/quedate-en-casa-una-radiografia-de-la-violencia-en-las-familias-mas-alla-de-la-pandemia/"
  },
  {
    id: "pub-12",
    title: "Mitos y creencias de la investigación",
    authors: "Autor",
    source: "En boletín impreso: Simirikuna N°1, Sociedad Científica de Estudiantes de Psicología",
    year: "2018",
    link: "https://www.researchgate.net/publication/369329099_Superando_adversidades_Una_aproximacion_al_parkour"
  },
  {
    id: "pub-13",
    title: "Superando Adversidades: Una Aproximación Al Parkour",
    authors: "Autor",
    source: "En libro: Des(a)nudando Realidades. Juventud, género, violencia y vida cotidiana",
    year: "2018",
    link: "https://www.researchgate.net/publication/369329099_Superando_adversidades_Una_aproximacion_al_parkour"
  }
];

// Etiquetas visuales de herramientas para el carrusel del Playground
export const TOOL_TAGS = [
  "ATLAS.ti",
  "Flourish",
  "Canva",
  "Figma",
  "Moodle",
  "Notion",
  "GitHub",
  "Loom",
  "Google Workspace",
  "Slack",
  "Scrum / Ágil",
  "IA Generativa",
  "Edición de videos",
  "UX Research"
];
