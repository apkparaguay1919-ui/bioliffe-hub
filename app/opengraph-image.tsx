import { ImageResponse } from "next/og";

/**
 * Imagen que aparece al compartir el sitio en WhatsApp, Facebook o Instagram.
 *
 * Antes no había ninguna: al pegar el link en WhatsApp salía solo texto gris.
 * Para un negocio que se mueve por WhatsApp, eso es plata en la mesa.
 *
 * Se genera sola en el build — no hay que diseñar ni subir ningún archivo.
 * Para cambiar el texto, editá este archivo.
 */

export const alt = "Bioliffe Moringa Paraguay — Bienestar, liderazgo y oportunidad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #050505 0%, #0a2417 55%, #06120c 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(135deg, #4ade80, #16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
              color: "#050505",
            }}
          >
            BM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 900, color: "#ffffff", letterSpacing: -0.5 }}>
              BIOLIFFE <span style={{ color: "#4ade80" }}>MORINGA</span>
            </span>
            <span style={{ fontSize: 19, color: "rgba(255,255,255,0.45)", letterSpacing: 3 }}>
              PARAGUAY
            </span>
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.02,
              letterSpacing: -2.5,
            }}
          >
            Bienestar, <span style={{ color: "#4ade80" }}>liderazgo</span>
          </span>
          <span
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.02,
              letterSpacing: -2.5,
            }}
          >
            y oportunidad.
          </span>
          <span
            style={{
              fontSize: 27,
              color: "rgba(255,255,255,0.55)",
              marginTop: 24,
              lineHeight: 1.4,
            }}
          >
            Productos naturales con moringa, formación y sistema de negocio.
          </span>
        </div>

        {/* Pie */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {["Productos premium", "Mentoría 24/7", "Distribución nacional"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#4ade80",
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.3)",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
