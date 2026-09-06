export interface Event { id: number; title: string; type: "Zoom" | "Presencial" | "WhatsApp"; date: string; time: string; desc: string; }

export const events: Event[] = [
  { id: 1, title: "Capacitación de Productos", type: "Zoom", date: "Todos los martes", time: "20:00 PY", desc: "Aprende en detalle cada producto del catálogo Bioliffe." },
  { id: 2, title: "Zoom de Oportunidad de Negocio", type: "Zoom", date: "Todos los jueves", time: "20:00 PY", desc: "Presentación del sistema, compensación y cómo empezar." },
  { id: 3, title: "Mentoría de Liderazgo", type: "WhatsApp", date: "Todos los sábados", time: "10:00 PY", desc: "Sesión grupal de formación para líderes activos." },
  { id: 4, title: "Reto de Seguimiento WhatsApp", type: "WhatsApp", date: "Primer lunes de cada mes", time: "09:00 PY", desc: "Reto práctico de 7 días para mejorar tu seguimiento." },
];

export interface Module { id: number; title: string; desc: string; icon: string; action: string; }

export const mentorshipModules: Module[] = [
  { id: 1, title: "Mentalidad de líder", desc: "Desarrolla la mentalidad correcta para construir un negocio sólido.", icon: "🧠", action: "Aprende a pensar como líder desde el día uno." },
  { id: 2, title: "Cómo vender sin presionar", desc: "Técnicas éticas para compartir los productos de forma natural.", icon: "🤝", action: "Presenta el valor sin presión, con confianza." },
  { id: 3, title: "Seguimiento por WhatsApp", desc: "Sistema probado de seguimiento profesional por mensajes.", icon: "📱", action: "Mensajes listos para copiar y personalizar." },
  { id: 4, title: "Presentación de productos", desc: "Cómo explicar cada producto de forma clara y segura.", icon: "📦", action: "Scripts probados para cada producto." },
  { id: 5, title: "Publicaciones para redes", desc: "Crea contenido atractivo sin prometer resultados médicos.", icon: "📲", action: "Plantillas de copy para Instagram y Facebook." },
  { id: 6, title: "Cierre de ventas", desc: "Acompaña al cliente hacia la decisión sin presionar.", icon: "✅", action: "Técnicas de cierre éticas y efectivas." },
  { id: 7, title: "Formación de equipo", desc: "Cómo identificar, invitar y acompañar nuevos socios.", icon: "👥", action: "Sistema de invitación paso a paso." },
  { id: 8, title: "Duplicación del sistema", desc: "Enseña a tu equipo lo que tú aprendiste para escalar.", icon: "🔄", action: "El sistema completo para replicar resultados." },
];

export const leadershipPillars = [
  { title: "Visión", desc: "Claridad sobre adónde vas y por qué.", icon: "🔭" },
  { title: "Disciplina", desc: "Acciones diarias que construyen resultados.", icon: "⚡" },
  { title: "Servicio", desc: "Liderar desde el ejemplo y la ayuda genuina.", icon: "🙌" },
  { title: "Comunicación", desc: "Hablar con claridad, escuchar con intención.", icon: "💬" },
  { title: "Seguimiento", desc: "El seguimiento profesional convierte interés en decisión.", icon: "📋" },
  { title: "Ejemplo", desc: "Tu equipo hace lo que tú haces, no lo que dices.", icon: "🌟" },
  { title: "Duplicación", desc: "El sistema correcto permite duplicar resultados.", icon: "🔄" },
  { title: "Comunidad", desc: "Construir juntos es más poderoso que crecer solo.", icon: "🤝" },
];
