export interface Event { id: number; title: string; type: "Zoom" | "Presencial" | "WhatsApp"; date: string; time: string; desc: string; }

export const events: Event[] = [
  { id: 1, title: "Capacitación de Productos", type: "Zoom", date: "Todos los martes", time: "20:00 PY", desc: "Aprende en detalle cada producto del catálogo Bioliffe." },
  { id: 2, title: "Zoom de Oportunidad de Negocio", type: "Zoom", date: "Todos los jueves", time: "20:00 PY", desc: "Presentación del sistema, compensación y cómo empezar." },
  { id: 3, title: "Mentoría de Liderazgo", type: "WhatsApp", date: "Todos los sábados", time: "10:00 PY", desc: "Sesión grupal de formación para líderes activos." },
  { id: 4, title: "Reto de Seguimiento WhatsApp", type: "WhatsApp", date: "Primer lunes de cada mes", time: "09:00 PY", desc: "Reto práctico de 7 días para mejorar tu seguimiento." },
];