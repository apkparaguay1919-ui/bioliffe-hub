import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SITE, WHATSAPP_DISPLAY } from "../lib/site";
import { createWhatsAppLink, WA_MESSAGES } from "../lib/whatsapp";

/**
 * ⚠️ IMPORTANTE
 *
 * Este texto describe con exactitud lo que hace hoy el sitio: el formulario
 * no guarda nada en ningún servidor, arma un mensaje y lo abre en WhatsApp.
 * Si en algún momento agregás analítica, píxel de Meta o guardado de leads en
 * una planilla o base de datos, ESTA PÁGINA HAY QUE ACTUALIZARLA — si no,
 * pasa a decir algo que no es cierto.
 *
 * No soy abogado: esto es una base honesta y correcta técnicamente, pero
 * conviene que un profesional la revise antes de darla por definitiva.
 */

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo trata Bioliffe Moringa Paraguay los datos que dejás en el formulario de contacto. No guardamos tu información en ningún servidor.",
  alternates: { canonical: `${SITE.url}/privacidad` },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      updated="6 de septiembre de 2026"
    >
      <div>
        <h2>Lo importante, en una línea</h2>
        <p>
          Este sitio <strong>no guarda tus datos en ningún servidor ni base de
          datos</strong>. El formulario arma un mensaje de WhatsApp en tu propio
          teléfono o computadora y lo abre para que vos lo envíes. Si no lo
          enviás, no nos llega nada.
        </p>
      </div>

      <div>
        <h2>Quiénes somos</h2>
        <p>
          {SITE.name}, distribuidor independiente de productos Bioliffe Moringa
          en Paraguay, a cargo de {SITE.advisor.name}. Podés contactarnos por
          WhatsApp al {WHATSAPP_DISPLAY} o desde la{" "}
          <a href="/contacto">página de contacto</a>.
        </p>
      </div>

      <div>
        <h2>Qué datos pedimos</h2>
        <p>Los formularios del sitio te piden:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Número de WhatsApp</li>
          <li>Ciudad</li>
          <li>Qué te interesa (comprar, distribuir, aprender o emprender)</li>
          <li>Experiencia previa, solo en el formulario de emprendimiento y es opcional</li>
        </ul>
        <p>
          Todos esos campos los completás vos y se usan únicamente para armar el
          texto del mensaje de WhatsApp.
        </p>
      </div>

      <div>
        <h2>Qué hacemos con esos datos</h2>
        <p>
          Nada automático. El sitio no los envía a ningún lado: los pone dentro
          de un mensaje de WhatsApp y abre la aplicación. A partir de ahí, la
          conversación es entre vos y nuestro asesor, dentro de WhatsApp, y se
          aplican las condiciones de esa plataforma (WhatsApp pertenece a Meta).
        </p>
        <p>
          Usamos lo que nos escribas para responderte, asesorarte y, si
          corresponde, coordinar una compra o tu ingreso como distribuidor. No
          vendemos ni compartimos tu información con terceros.
        </p>
      </div>

      <div>
        <h2>Cookies y almacenamiento</h2>
        <p>
          El sitio no usa cookies de publicidad ni de seguimiento. Solo guarda
          un dato técnico en la memoria temporal de tu navegador
          (<em>sessionStorage</em>): que ya cerraste la ventanita de WhatsApp,
          para no volver a mostrártela en esa visita. Se borra al cerrar la
          pestaña y no identifica a nadie.
        </p>
        <p>
          Los videos se muestran a través de YouTube en modo sin cookies
          (<em>youtube-nocookie.com</em>) y la miniatura no carga nada hasta que
          tocás reproducir. Cuando reproducís un video, se aplican las políticas
          de YouTube (Google).
        </p>
      </div>

      <div>
        <h2>Hosting</h2>
        <p>
          El sitio está alojado en Vercel, que —como cualquier servidor web—
          registra datos técnicos de las visitas (dirección IP, navegador,
          páginas vistas) con fines de funcionamiento y seguridad. Nosotros no
          accedemos a esos registros para identificar personas.
        </p>
      </div>

      <div>
        <h2>Tus derechos</h2>
        <p>
          Como no almacenamos tus datos, no hay una base de la cual borrarte.
          Si querés que eliminemos la conversación de WhatsApp que tuvimos, o
          que dejemos de escribirte, pedilo por ese mismo chat y lo hacemos.
        </p>
      </div>

      <div>
        <h2>Menores de edad</h2>
        <p>
          Este sitio está dirigido a personas mayores de 18 años. No solicitamos
          ni buscamos datos de menores.
        </p>
      </div>

      <div>
        <h2>Cambios</h2>
        <p>
          Si cambiamos la forma en que tratamos los datos, actualizamos esta
          página y la fecha de arriba.
        </p>
      </div>

      <div>
        <h2>Consultas</h2>
        <p>
          Escribinos por{" "}
          <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          y te respondemos.
        </p>
      </div>
    </LegalPage>
  );
}
