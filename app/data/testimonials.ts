export interface Testimonial { id: number; name: string; role: string; text: string; initial: string; color: string; }

export const testimonials: Testimonial[] = [
  { id: 1, name: "María G.", role: "Distribuidora Paraguay", text: "Me siento con más energía desde que incorporé los productos a mi rutina diaria.", initial: "M", color: "bg-green-700" },
  { id: 2, name: "Carlos R.", role: "Líder de equipo", text: "El sistema me ayudó a tener más claridad para presentar el negocio correctamente.", initial: "C", color: "bg-emerald-700" },
  { id: 3, name: "Ana L.", role: "Distribuidora activa", text: "Me ayudó a ordenar mis hábitos y ahora tengo más constancia en mi rutina.", initial: "A", color: "bg-teal-700" },
  { id: 4, name: "Jorge M.", role: "Emprendedor Bioliffe", text: "Aprendí a presentar mejor los productos sin prometer cosas que no debo.", initial: "J", color: "bg-yellow-700" },
  { id: 5, name: "Patricia V.", role: "Nueva distribuidora", text: "Me siento acompañada para emprender. La mentoría 24/7 marcó la diferencia.", initial: "P", color: "bg-amber-700" },
  { id: 6, name: "Luis F.", role: "Socio activo", text: "Ahora tengo una guía clara para compartir la oportunidad con mi red.", initial: "L", color: "bg-lime-700" },
];
