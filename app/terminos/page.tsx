import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE, WHATSAPP_DISPLAY } from "../lib/site";

/**
 * ⚠️ Base honesta y ajustada a lo que el sitio realmente hace. No soy abogado:
 * conviene que un profesional la revise antes de darla por definitiva,
 * sobre todo la parte de compras y devoluciones, que depende de las
 * condiciones comerciales reales de Bioliffe en Paraguay.
 */

export const metadata: Metadata = {
  title: "Términos de uso",
  description:
    "Condiciones de uso del sitio de Bioliffe Moringa Paraguay: alcance de la información, productos, oportunidad de negocio y limitaciones.",
  alternates: { canonical: `${SITE.url}/terminos` },
};

export default function TerminosPage() {
  return (
    <LegalPage eyebrow="Legal" title="Términos de uso" updated="6 de septiembre de 2026">
      <div>
        <h2>Sobre este sitio</h2>
        <p>
          {SITE.url} es el sitio de {SITE.advisor.name}, distribuidor
          independiente de productos Bioliffe Moringa en Paraguay. No es el
          sitio corporativo de la marca Bioliffe: es una plataforma de
          información y contacto de un distribuidor autorizado.
        </p>
      </div>

      <div>
        <h2>La información es orientativa</h2>
        <p>
          Los contenidos sobre productos, moringa, bienestar y formación tienen
          fines informativos. Las descripciones de producto siguen la
          información del fabricante.
        </p>
        <p>
          <strong>{SITE.legal.disclaimer}</strong> Si tenés una condición de
          salud, estás embarazada, en período de lactancia o tomás medicación,
          consultá con un profesional de la salud antes de incorporar cualquier
          suplemento.
        </p>
      </div>

      <div>
        <h2>Precios y compras</h2>
        <p>
          Los precios que se muestran están expresados en guaraníes y pueden
          cambiar sin aviso. La compra no se realiza dentro de este sitio: se
          coordina por WhatsApp con el asesor, que confirma precio final,
          disponibilidad, forma de pago y envío antes de cerrar cualquier
          operación.
        </p>
        <p>
          Las condiciones de cambio y devolución se acuerdan en esa conversación
          y siguen la normativa de defensa del consumidor vigente en Paraguay.
        </p>
      </div>

      <div>
        <h2>Oportunidad de negocio</h2>
        <p>
          Sumarse como distribuidor es una actividad comercial independiente.{" "}
          <strong>{SITE.legal.incomeDisclaimer}</strong> Los testimonios,
          reconocimientos y bonos que se muestran corresponden a resultados
          individuales de personas concretas y no representan lo que va a
          obtener cualquier persona que se sume.
        </p>
      </div>

      <div>
        <h2>Contenido de terceros</h2>
        <p>
          El sitio muestra videos alojados en YouTube y enlaza a WhatsApp y a
          redes sociales. Esos servicios tienen sus propios términos y
          políticas, sobre los que no tenemos control.
        </p>
      </div>

      <div>
        <h2>Propiedad intelectual</h2>
        <p>
          Las marcas Bioliffe y Bioliffe Moringa pertenecen a sus titulares. Los
          textos, el diseño y el contenido audiovisual propio de este sitio no
          pueden reproducirse con fines comerciales sin autorización.
        </p>
      </div>

      <div>
        <h2>Uso del sitio</h2>
        <p>
          Al usar el sitio te comprometés a proporcionar datos verdaderos en los
          formularios y a no utilizarlo con fines ilícitos ni para enviar
          comunicaciones no solicitadas.
        </p>
      </div>

      <div>
        <h2>Contacto</h2>
        <p>
          Cualquier consulta sobre estos términos: WhatsApp {WHATSAPP_DISPLAY} o
          la <a href="/contacto">página de contacto</a>.
        </p>
      </div>
    </LegalPage>
  );
}
