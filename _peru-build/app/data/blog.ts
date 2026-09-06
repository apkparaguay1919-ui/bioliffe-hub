export type BlogCategory =
  | "Nutrición"
  | "Moringa"
  | "Negocio"
  | "Liderazgo"
  | "Salud"
  | "Belleza"
  | "Testimonios";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  cover: string;
  readTime: string;
  publishedAt: string; // ISO date
  content: string[]; // párrafos
  tags: string[];
}

export const blogCategories: BlogCategory[] = [
  "Nutrición",
  "Moringa",
  "Negocio",
  "Liderazgo",
  "Salud",
  "Belleza",
  "Testimonios",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-la-moringa-y-de-donde-viene",
    title: "Qué es la moringa y de dónde viene",
    category: "Moringa",
    excerpt:
      "Un recorrido general por el origen, la historia y los usos tradicionales de la Moringa oleifera, el árbol detrás de nuestros productos.",
    cover: "/images/pexels-jahratreza-37937214.jpg",
    readTime: "4 min",
    publishedAt: "2026-01-12",
    tags: ["moringa", "origen", "historia"],
    content: [
      "La Moringa oleifera es un árbol originario del sur del Himalaya, en el norte de la India, donde se utiliza desde hace siglos en la alimentación tradicional. Con el tiempo, su cultivo se extendió a regiones tropicales y subtropicales de África, Asia y América Latina, incluido Perú.",
      "Se la conoce popularmente como 'árbol de la vida' por la cantidad de partes aprovechables que tiene: hojas, semillas, flores y raíces se usan de distintas formas según la región y la tradición local.",
      "Es un árbol de crecimiento rápido y muy resistente, capaz de adaptarse a suelos pobres y climas con poca disponibilidad de agua, lo que explica por qué su cultivo se ha expandido tanto en zonas tropicales.",
      "Esta nota es información general y educativa sobre la planta. No describe ni reemplaza las características específicas de ningún producto Bioliffe en particular; para eso te invitamos a conocer nuestro catálogo completo.",
    ],
  },
  {
    slug: "perfil-nutricional-general-de-las-hojas-de-moringa",
    title: "El perfil nutricional general de las hojas de moringa",
    category: "Nutrición",
    excerpt:
      "Vitaminas, minerales y proteína vegetal: qué dice la información nutricional general sobre las hojas de moringa.",
    cover: "/images/pexels-tranmautritam-922978.jpg",
    readTime: "3 min",
    publishedAt: "2026-01-20",
    tags: ["nutrición", "moringa", "vitaminas"],
    content: [
      "Las hojas de moringa se estudian con frecuencia por su perfil nutricional general: se les reconoce contenido de vitaminas como A, C y varias del complejo B, además de minerales como calcio, potasio y hierro.",
      "También se destacan por su aporte de proteína vegetal en comparación con otras plantas de hoja verde, y por contener compuestos antioxidantes de origen vegetal.",
      "Es importante distinguir entre información nutricional general de la planta y las propiedades específicas de un producto terminado: cada fórmula Bioliffe combina la moringa con otros ingredientes según su objetivo particular.",
      "Como con cualquier hábito de alimentación o suplementación, lo ideal es sumarlo dentro de una rutina balanceada y, ante dudas puntuales de salud, consultar con un profesional.",
    ],
  },
  {
    slug: "como-empezar-en-el-negocio-de-ventas-directas",
    title: "Cómo empezar en el negocio de ventas directas sin experiencia previa",
    category: "Negocio",
    excerpt:
      "No hace falta experiencia previa en ventas para arrancar: contamos qué pasos sigue un nuevo distribuidor dentro del sistema Bioliffe.",
    cover: "/images/pexels-ankit-rainloure-1425442-12695823.jpg",
    readTime: "5 min",
    publishedAt: "2026-02-02",
    tags: ["negocio", "emprendimiento", "primeros pasos"],
    content: [
      "Una de las dudas más comunes de quienes recién llegan a Bioliffe Moringa es si necesitan experiencia previa en ventas. La respuesta corta es no: el sistema está diseñado para acompañar desde cero.",
      "El primer paso es recorrer los módulos de formación de la Academia Bioliffe, que cubren desde mentalidad de líder hasta seguimiento por WhatsApp y presentación de productos.",
      "El segundo paso es la práctica acompañada: cada distribuidor cuenta con mentoría activa 24/7 para resolver dudas reales mientras empieza a compartir la oportunidad con su círculo cercano.",
      "Con el tiempo, y a medida que el distribuidor gana confianza, empieza también a formar su propio equipo, replicando el mismo sistema que lo formó a él.",
    ],
  },
  {
    slug: "pilares-de-liderazgo-que-toda-red-necesita",
    title: "Los pilares de liderazgo que toda red necesita",
    category: "Liderazgo",
    excerpt:
      "Visión, disciplina, servicio y duplicación: los pilares que sostienen al liderazgo dentro de la comunidad Bioliffe.",
    cover: "/images/pexels-brett-sayles-1002797.jpg",
    readTime: "4 min",
    publishedAt: "2026-02-14",
    tags: ["liderazgo", "mentoría", "equipo"],
    content: [
      "Business For Home, la plataforma internacional de ventas directas, define a un líder como quien tiene la habilidad de guiar y motivar a los miembros de su equipo, inspirando respeto y confianza.",
      "Dentro de Bioliffe Moringa Perú, ese liderazgo se apoya en pilares concretos: visión, disciplina, servicio, comunicación, seguimiento, ejemplo, duplicación y comunidad.",
      "Ninguno de estos pilares depende del carisma innato de una persona: son hábitos que se entrenan, y por eso ocupan un lugar central en los módulos de formación de la Academia Bioliffe.",
      "Un buen indicador de liderazgo real no es cuánto vende una persona, sino cuántas personas de su equipo logran replicar el sistema por sí mismas.",
    ],
  },
  {
    slug: "habitos-de-bienestar-que-podes-sumar-hoy",
    title: "Hábitos simples de bienestar que podés sumar hoy",
    category: "Salud",
    excerpt:
      "Pequeños hábitos diarios —hidratación, descanso, alimentación balanceada— que acompañan cualquier rutina de bienestar.",
    cover: "/images/pexels-beckesbestphotos-2782969.jpg",
    readTime: "3 min",
    publishedAt: "2026-02-25",
    tags: ["bienestar", "hábitos", "rutina"],
    content: [
      "El bienestar no depende de un solo producto ni de un cambio drástico: se construye con hábitos simples sostenidos en el tiempo.",
      "Hidratarte a lo largo del día, cuidar el descanso y mantener una alimentación balanceada son la base sobre la que cualquier rutina de bienestar se sostiene.",
      "Sumar una rutina de bienestar es una decisión personal que conviene tomar con información clara: esta nota es general y educativa, no reemplaza el consejo de un profesional de la salud.",
      "Si estás evaluando incorporar productos naturales a tu rutina, lo recomendable es hacerlo de forma gradual y prestando atención a cómo te sentís.",
    ],
  },
  {
    slug: "cuidado-natural-de-la-piel-y-el-cabello",
    title: "Cuidado natural de la piel y el cabello: por dónde empezar",
    category: "Belleza",
    excerpt:
      "Una mirada general a los ingredientes naturales más buscados hoy para el cuidado de piel y cabello.",
    cover: "/images/pexels-wanderinglenses-32198643.jpg",
    readTime: "3 min",
    publishedAt: "2026-03-05",
    tags: ["belleza", "cuidado natural", "rutina"],
    content: [
      "Cada vez más personas buscan alternativas naturales dentro de su rutina de cuidado personal, ya sea para piel, cabello o bienestar general.",
      "Ingredientes de origen vegetal como la moringa forman parte de esa tendencia, y suelen combinarse con otros extractos naturales según el objetivo de cada producto.",
      "Como con cualquier rutina de cuidado, lo importante es conocer los ingredientes de lo que usás y probar de a poco, prestando atención a cómo reacciona tu piel.",
      "Podés conocer el catálogo completo de productos Bioliffe y consultarnos por WhatsApp cuál se ajusta mejor a lo que estás buscando.",
    ],
  },
  {
    slug: "lo-que-cuenta-nuestra-comunidad",
    title: "Lo que cuenta nuestra comunidad de distribuidores",
    category: "Testimonios",
    excerpt:
      "Un repaso por lo que comparten distribuidoras y distribuidores activos de Bioliffe Moringa Perú en su día a día.",
    cover: "/images/pexels-bernahanim_-1173268160-32664637.jpg",
    readTime: "3 min",
    publishedAt: "2026-03-15",
    tags: ["comunidad", "testimonios", "experiencias"],
    content: [
      "En nuestra sección de testimonios, distribuidoras y distribuidores activos como María, Carlos, Ana, Jorge, Patricia y Luis comparten su experiencia dentro de la comunidad Bioliffe.",
      "Los temas se repiten: más constancia en la rutina diaria, más claridad para presentar la oportunidad de negocio, y sentirse acompañados por la mentoría 24/7 desde el primer día.",
      "Estas experiencias son personales y los resultados pueden variar de una persona a otra, tanto en bienestar como en el negocio.",
      "Si querés conocer estos testimonios completos, los encontrás en la sección de Testimonios de nuestra página principal.",
    ],
  },
  {
    slug: "mentoria-24-7-como-funciona-en-la-practica",
    title: "Mentoría 24/7: cómo funciona en la práctica",
    category: "Negocio",
    excerpt:
      "Qué significa realmente tener mentoría activa 24/7 y cómo se traduce en el día a día de un nuevo distribuidor.",
    cover: "/images/pexels-ian-panelo-4884823.jpg",
    readTime: "4 min",
    publishedAt: "2026-03-28",
    tags: ["mentoría", "negocio", "acompañamiento"],
    content: [
      "Uno de los pilares del sistema Bioliffe es la mentoría activa 24/7: la posibilidad de consultar dudas reales por WhatsApp en el momento en que surgen, no solo en un horario fijo de oficina.",
      "En la práctica, esto significa que un nuevo distribuidor no queda solo frente a una objeción de un cliente potencial o una duda sobre cómo presentar un producto: puede escribir y recibir orientación.",
      "Esta mentoría se apoya en los módulos de la Academia Bioliffe, que ya cubren los escenarios más comunes: presentación de productos, seguimiento por WhatsApp, cierre de ventas y formación de equipo.",
      "Con el tiempo, quien recibe esta mentoría suele convertirse también en mentor de su propio equipo, sosteniendo la cadena de acompañamiento.",
    ],
  },
  {
    slug: "moringa-en-la-alimentacion-diaria",
    title: "Cómo se incorpora la moringa a la alimentación diaria",
    category: "Nutrición",
    excerpt:
      "Formas tradicionales y actuales en las que distintas culturas incorporan la moringa a su alimentación diaria.",
    cover: "/images/pexels-chaitaastic-1796727.jpg",
    readTime: "3 min",
    publishedAt: "2026-04-08",
    tags: ["moringa", "alimentación", "nutrición"],
    content: [
      "En las regiones donde se cultiva desde hace siglos, la moringa se incorpora tradicionalmente de distintas formas: hojas frescas en preparaciones locales, hojas secas molidas en polvo, o infusiones.",
      "Hoy, esa tradición se combina con formatos más prácticos para la vida diaria, como cápsulas o polvos dosificados, pensados para sumarse fácilmente a una rutina ya existente.",
      "Cada persona y cada cultura tiene su propia forma de incorporarla; lo que se mantiene constante es la idea de sumarla como un complemento dentro de una alimentación variada, no como reemplazo de ella.",
      "Esta nota es información general sobre la planta; te invitamos a conocer los productos Bioliffe para ver cómo se presenta la moringa en cada fórmula.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, limit);
}
