const WA_NUMBER = "51950639288";

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

export const WA_MESSAGES = {
  general: "Hola Javier, quiero más información sobre Bioliffe Moringa.",
  producto: "Hola Javier, quiero más información sobre los productos Bioliffe Moringa.",
  negocio: "Hola Javier, quiero conocer la oportunidad de negocio con Bioliffe Moringa.",
  mentoria: "Hola Javier, quiero recibir mentoría para empezar correctamente.",
  evento: "Hola Javier, quiero registrarme en el próximo evento Bioliffe Moringa.",
}; 