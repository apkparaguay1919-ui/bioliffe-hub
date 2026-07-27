export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "Productos",
  "Moringa",
  "Negocio",
  "Mentoría",
  "Compras y pagos",
  "Distribución",
  "Eventos y Academia",
] as const;

export const faqs: FaqItem[] = [
  // Productos
  { id: 1, category: "Productos", question: "¿Qué es Bioliffe Moringa?", answer: "Es una marca de productos de bienestar elaborados a partir de moringa y otros extractos naturales, junto con un sistema de negocio y mentoría para distribuidores." },
  { id: 2, category: "Productos", question: "¿Qué productos tiene el catálogo actual?", answer: "El catálogo incluye productos como Eficlax, Alkam y otras fórmulas premium con moringa, cada una orientada a distintos hábitos de bienestar." },
  { id: 3, category: "Productos", question: "¿Los productos tienen garantía de resultados?", answer: "Son productos de bienestar; no sustituyen diagnóstico ni tratamiento médico y los resultados pueden variar de una persona a otra." },
  { id: 4, category: "Productos", question: "¿Cómo se debe conservar cada producto?", answer: "Cada producto incluye su modo de conservación en el empaque; en general se recomienda mantenerlos en un lugar fresco, seco y alejado de la luz directa." },
  { id: 5, category: "Productos", question: "¿Hay productos aptos para toda la familia?", answer: "El catálogo incluye formulaciones distintas; te recomendamos consultarnos por WhatsApp para orientarte según tus objetivos personales." },
  { id: 6, category: "Productos", question: "¿Los productos son de fabricación propia?", answer: "Bioliffe cuida el proceso productivo de principio a fin para mantener un estándar de calidad premium en cada lote." },
  { id: 7, category: "Productos", question: "¿Cómo sé cuál producto es para mí?", answer: "Nuestro equipo de mentoría puede ayudarte a elegir según tus hábitos y objetivos; escríbenos por WhatsApp para una orientación personalizada." },
  { id: 8, category: "Productos", question: "¿Puedo ver ingredientes y modo de uso antes de comprar?", answer: "Sí, cada ficha de producto en la web incluye ingredientes, modo de uso y preguntas frecuentes específicas." },

  // Moringa
  { id: 9, category: "Moringa", question: "¿Qué es la moringa?", answer: "La moringa (Moringa oleifera) es una planta originaria del sur de Asia, conocida por su perfil nutricional y su uso extendido en distintas culturas." },
  { id: 10, category: "Moringa", question: "¿De dónde viene la moringa que usa Bioliffe?", answer: "Trabajamos con proveedores que cumplen estándares de cultivo y calidad para garantizar consistencia en cada fórmula." },
  { id: 11, category: "Moringa", question: "¿Qué nutrientes aporta la moringa en general?", answer: "La planta es reconocida por su contenido de vitaminas, minerales y antioxidantes naturales, según fuentes de nutrición general." },
  { id: 12, category: "Moringa", question: "¿La moringa cura enfermedades?", answer: "No. La información sobre la moringa es de carácter general y educativo; ningún producto Bioliffe cura, trata o previene enfermedades." },
  { id: 13, category: "Moringa", question: "¿Cómo se cultiva la moringa?", answer: "Es un árbol de rápido crecimiento, resistente a la sequía, que se adapta a climas tropicales y subtropicales." },
  { id: 14, category: "Moringa", question: "¿Todos los productos Bioliffe contienen moringa?", answer: "La moringa es el ingrediente base de la marca, aunque cada fórmula combina distintos extractos según su objetivo específico." },

  // Negocio
  { id: 15, category: "Negocio", question: "¿Cómo funciona la oportunidad de negocio Bioliffe?", answer: "Se basa en la distribución de productos y en la construcción de un equipo, con un sistema de mentoría y duplicación paso a paso." },
  { id: 16, category: "Negocio", question: "¿Qué tipos de bonos existen?", answer: "Existen bonos por ventas, por desarrollo de equipo y reconocimientos por rango, explicados en detalle en la sección Oportunidad de Negocio." },
  { id: 17, category: "Negocio", question: "¿Necesito experiencia previa en ventas?", answer: "No es necesario; el sistema de mentoría está diseñado para acompañarte desde cero." },
  { id: 18, category: "Negocio", question: "¿Cuánto tiempo debo dedicarle al negocio?", answer: "Es flexible: puedes empezar part-time y ajustar tu dedicación según tus metas personales." },
  { id: 19, category: "Negocio", question: "¿Cómo empiezo a ser distribuidor?", answer: "Escríbenos por WhatsApp y te guiamos paso a paso en el proceso de inscripción y primeros pasos." },
  { id: 20, category: "Negocio", question: "¿Qué es la duplicación del sistema?", answer: "Es enseñar a tu equipo exactamente lo que aprendiste, para que puedan repetir el mismo proceso con sus propios contactos." },
  { id: 21, category: "Negocio", question: "¿Hay un plan de compensación detallado?", answer: "Sí, se explica de forma completa en la página de Oportunidad de Negocio, incluyendo rangos y reconocimientos." },
  { id: 22, category: "Negocio", question: "¿El negocio funciona en toda Latinoamérica?", answer: "Actualmente tenemos presencia en Paraguay, Perú y estamos en expansión hacia otros países de la región." },
  { id: 23, category: "Negocio", question: "¿Qué pasa si no logro resultados de inmediato?", answer: "Los resultados dependen de la constancia y el esfuerzo individual; el sistema de mentoría te acompaña en cada etapa del proceso." },

  // Mentoría
  { id: 24, category: "Mentoría", question: "¿En qué consiste la mentoría 24/7?", answer: "Es un sistema de acompañamiento permanente con módulos de formación, seguimiento y soporte directo de tu línea de auspicio." },
  { id: 25, category: "Mentoría", question: "¿Cuántos módulos tiene el sistema de mentoría?", answer: "El sistema cuenta con 8 módulos, desde mentalidad de líder hasta duplicación del sistema." },
  { id: 26, category: "Mentoría", question: "¿La mentoría tiene costo adicional?", answer: "La mentoría está incluida dentro del sistema de acompañamiento a distribuidores; consulta condiciones vigentes por WhatsApp." },
  { id: 27, category: "Mentoría", question: "¿Puedo acceder a la mentoría sin ser distribuidor?", answer: "La mentoría está orientada principalmente a distribuidores activos; escríbenos para conocer las opciones disponibles." },
  { id: 28, category: "Mentoría", question: "¿Hay mentoría específica para liderazgo?", answer: "Sí, existe una sesión grupal semanal enfocada en el desarrollo de liderazgo para socios activos." },

  // Compras y pagos
  { id: 29, category: "Compras y pagos", question: "¿Cómo puedo comprar un producto?", answer: "Puedes escribirnos directamente por WhatsApp desde cualquier ficha de producto o el botón flotante de la web." },
  { id: 30, category: "Compras y pagos", question: "¿Qué métodos de pago se aceptan?", answer: "Los métodos de pago disponibles se confirman al momento de la consulta por WhatsApp, según tu ubicación." },
  { id: 31, category: "Compras y pagos", question: "¿Hacen envíos a todo Paraguay?", answer: "Sí, coordinamos envíos según cobertura disponible; consulta tiempos y costos por WhatsApp." },
  { id: 32, category: "Compras y pagos", question: "¿Puedo comprar desde otro país?", answer: "Sí, contamos con distribución en Perú y estamos ampliando cobertura; escríbenos para coordinar tu pedido." },
  { id: 33, category: "Compras y pagos", question: "¿Los precios están publicados en la web?", answer: "Los precios se confirman directamente por WhatsApp para poder informarte sobre promociones vigentes." },
  { id: 34, category: "Compras y pagos", question: "¿Puedo hacer pedidos al por mayor?", answer: "Sí, como distribuidor puedes acceder a condiciones especiales para compras al por mayor." },

  // Distribución
  { id: 35, category: "Distribución", question: "¿En qué ciudades hay distribuidores activos?", answer: "Contamos con distribuidores en distintas ciudades de Paraguay; consulta el mapa de cobertura en la sección correspondiente." },
  { id: 36, category: "Distribución", question: "¿Cómo puedo convertirme en distribuidor en mi ciudad?", answer: "Escríbenos por WhatsApp indicando tu ciudad y te contactamos con el proceso de inscripción." },
  { id: 37, category: "Distribución", question: "¿Hay apoyo logístico para distribuidores?", answer: "Sí, el sistema incluye acompañamiento y recursos para facilitar la distribución local." },

  // Eventos y Academia
  { id: 38, category: "Eventos y Academia", question: "¿Con qué frecuencia hay eventos?", answer: "Realizamos eventos por Zoom semanalmente y encuentros presenciales periódicos; consulta el calendario de eventos." },
  { id: 39, category: "Eventos y Academia", question: "¿Qué es la Academia Bioliffe?", answer: "Es un espacio de formación con cursos, videos y capacitaciones para distribuidores en todas las etapas." },
  { id: 40, category: "Eventos y Academia", question: "¿Los eventos tienen costo?", answer: "La mayoría de los eventos de formación son sin costo para distribuidores activos; consulta detalles de eventos especiales." },
  { id: 41, category: "Eventos y Academia", question: "¿Puedo ver eventos anteriores en video?", answer: "Sí, gran parte de nuestro contenido de eventos anteriores está disponible en la sección de Videos y en nuestro canal de YouTube." },
  { id: 42, category: "Eventos y Academia", question: "¿Cómo me entero de los próximos viajes y reconocimientos?", answer: "Los anunciamos en la sección de Eventos de la web y a través de nuestras redes sociales oficiales." },
];
