"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  buildLeadLink,
  LEAD_INTERESTS,
  type LeadData,
} from "../../lib/whatsapp";
import { CIUDADES_PY } from "../../lib/site";

/**
 * Formulario de captación reutilizable.
 *
 * No usa backend: valida los datos en el navegador y arma un mensaje de
 * WhatsApp con el lead ya calificado (nombre, WhatsApp, ciudad, interés).
 * El asesor recibe todo en un solo mensaje y no tiene que preguntar nada.
 *
 * Se usa en:
 *   · el modal del botón "Quiero información ahora" (home)
 *   · la sección "Quiero información" de la home
 *   · /emprender (con el campo extra de experiencia previa)
 *   · /contacto
 */

interface Props {
  /** Muestra el campo "experiencia previa" (se usa en /emprender). */
  withExperience?: boolean;
  /** Interés preseleccionado. Ej: "Emprender un negocio" en /emprender. */
  defaultInterest?: string;
  /** Ruta desde donde se envía, para saber qué sección convierte. */
  origen?: string;
  /** Texto del botón de envío. */
  submitLabel?: string;
  /** "dark" para fondos negros, "light" para fondos blancos. */
  tone?: "dark" | "light";
}

type Errors = Partial<Record<keyof LeadData, string>>;

export default function LeadForm({
  withExperience = false,
  defaultInterest,
  origen,
  submitLabel = "Enviar y hablar por WhatsApp",
  tone = "dark",
}: Props) {
  const [form, setForm] = useState<LeadData>({
    nombre: "",
    whatsapp: "",
    ciudad: "",
    interes: defaultInterest ?? "",
    experiencia: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const dark = tone === "dark";

  const fieldBase = dark
    ? "w-full rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/35 px-4 py-3.5 text-sm outline-none transition-colors focus:border-green-400 focus:bg-white/10"
    : "w-full rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3.5 text-sm outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-100";

  const labelBase = dark
    ? "block text-white/60 text-[11px] font-bold tracking-widest uppercase mb-2"
    : "block text-gray-500 text-[11px] font-bold tracking-widest uppercase mb-2";

  function validate(): boolean {
    const e: Errors = {};

    if (form.nombre.trim().length < 3) {
      e.nombre = "Escribí tu nombre completo.";
    }

    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length < 8) {
      e.whatsapp = "Ingresá un número de WhatsApp válido.";
    }

    if (!form.ciudad) e.ciudad = "Elegí tu ciudad.";
    if (!form.interes) e.interes = "Contanos qué te interesa.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    const link = buildLeadLink({ ...form, origen });
    setSent(true);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  function update<K extends keyof LeadData>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-8 text-center ${
          dark ? "bg-green-500/10 border border-green-400/30" : "bg-green-50 border border-green-200"
        }`}
      >
        <div className="text-5xl mb-4" aria-hidden="true">
          ✅
        </div>
        <h3 className={`font-black text-xl mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          Listo, {form.nombre.split(" ")[0]}
        </h3>
        <p className={`text-sm mb-6 ${dark ? "text-white/60" : "text-gray-600"}`}>
          Se abrió WhatsApp con tus datos ya cargados. Si no se abrió,
          tocá el botón de abajo.
        </p>
        <a
          href={buildLeadLink({ ...form, origen })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
        >
          Abrir WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className={`block mx-auto mt-4 text-xs underline ${dark ? "text-white/40 hover:text-white/70" : "text-gray-400 hover:text-gray-600"}`}
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      <div>
        <label htmlFor="lead-nombre" className={labelBase}>
          Nombre completo
        </label>
        <input
          id="lead-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          value={form.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          placeholder="Ej: María González"
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "err-nombre" : undefined}
          className={fieldBase}
        />
        {errors.nombre && (
          <p id="err-nombre" className="text-red-400 text-xs mt-1.5">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lead-whatsapp" className={labelBase}>
            WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="+595 9xx xxx xxx"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "err-whatsapp" : undefined}
            className={fieldBase}
          />
          {errors.whatsapp && (
            <p id="err-whatsapp" className="text-red-400 text-xs mt-1.5">
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-ciudad" className={labelBase}>
            Ciudad
          </label>
          <select
            id="lead-ciudad"
            name="ciudad"
            value={form.ciudad}
            onChange={(e) => update("ciudad", e.target.value)}
            aria-invalid={!!errors.ciudad}
            aria-describedby={errors.ciudad ? "err-ciudad" : undefined}
            className={`${fieldBase} appearance-none`}
          >
            <option value="">Elegí tu ciudad</option>
            {CIUDADES_PY.map((c) => (
              <option key={c} value={c} className="text-gray-900">
                {c}
              </option>
            ))}
          </select>
          {errors.ciudad && (
            <p id="err-ciudad" className="text-red-400 text-xs mt-1.5">
              {errors.ciudad}
            </p>
          )}
        </div>
      </div>

      <fieldset>
        <legend className={labelBase}>¿Qué te interesa?</legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {LEAD_INTERESTS.map((interes) => {
            const active = form.interes === interes;
            return (
              <label
                key={interes}
                className={`cursor-pointer rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all ${
                  active
                    ? "border-green-400 bg-green-500/15 text-green-300"
                    : dark
                      ? "border-white/15 bg-white/5 text-white/70 hover:border-white/35"
                      : "border-gray-200 bg-white text-gray-600 hover:border-green-300"
                }`}
              >
                <input
                  type="radio"
                  name="interes"
                  value={interes}
                  checked={active}
                  onChange={(e) => update("interes", e.target.value)}
                  className="sr-only"
                />
                {interes}
              </label>
            );
          })}
        </div>
        {errors.interes && (
          <p className="text-red-400 text-xs mt-1.5">{errors.interes}</p>
        )}
      </fieldset>

      {withExperience && (
        <div>
          <label htmlFor="lead-exp" className={labelBase}>
            Experiencia previa <span className="normal-case font-normal">(opcional)</span>
          </label>
          <textarea
            id="lead-exp"
            name="experiencia"
            rows={3}
            value={form.experiencia}
            onChange={(e) => update("experiencia", e.target.value)}
            placeholder="¿Trabajaste antes en ventas, redes de mercadeo o emprendimientos?"
            className={`${fieldBase} resize-none`}
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-400 text-white font-black py-4 rounded-xl text-sm tracking-widest uppercase transition-all shadow-[0_0_0_0_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_4px_rgba(34,197,94,0.35)]"
      >
        {submitLabel}
      </button>

      <p className={`text-[11px] leading-relaxed ${dark ? "text-white/35" : "text-gray-400"}`}>
        Al enviar se abre WhatsApp con tus datos cargados. No guardamos tu
        información en ningún servidor ni la compartimos con terceros.
      </p>
    </form>
  );
}
