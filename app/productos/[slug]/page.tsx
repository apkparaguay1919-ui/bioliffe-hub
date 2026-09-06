import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../data/products";
import { productWhatsAppLink } from "../../lib/whatsapp";
import { formatGs, hasPrice } from "../../lib/format";
import { SITE } from "../../lib/site";
import YouTubeEmbed from "../../components/video/YouTubeEmbed";
import LeadCTA from "../../components/forms/LeadCTA";
import RevealOnScroll from "../../components/effects/RevealOnScroll";

/** Genera una página estática por cada producto de data/products.ts. */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  const title = product.fullName ?? product.name;
  const description = product.description.slice(0, 155);

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/productos/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/productos/${product.slug}`,
      type: "website",
      images: [{ url: `${SITE.url}${product.image}` }],
    },
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const waLink = productWhatsAppLink(product.fullName ?? product.name);
  const relacionados = products.filter((p) => p.id !== product.id).slice(0, 3);

  /* Datos estructurados para Google: ficha de producto + preguntas + migas. */
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.fullName ?? product.name,
      description: product.description,
      image: `${SITE.url}${product.image}`,
      brand: { "@type": "Brand", name: "Bioliffe Moringa" },
      category: product.category,
      ...(hasPrice(product.priceGs)
        ? {
            offers: {
              "@type": "Offer",
              price: product.priceGs,
              priceCurrency: SITE.currency,
              availability: "https://schema.org/InStock",
              url: `${SITE.url}/productos/${product.slug}`,
              areaServed: "PY",
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Productos", item: `${SITE.url}/productos` },
        {
          "@type": "ListItem",
          position: 3,
          name: product.fullName ?? product.name,
          item: `${SITE.url}/productos/${product.slug}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ENCABEZADO DEL PRODUCTO */}
      <section className="border-b border-gray-100 bg-gray-50 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Migas de pan" className="mb-10 text-xs text-gray-400">
            <a href="/" className="hover:text-green-600">
              Inicio
            </a>
            <span className="mx-2">/</span>
            <a href="/productos" className="hover:text-green-600">
              Productos
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>

          <div className="grid items-start gap-14 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={`${product.fullName ?? product.name} — Bioliffe Moringa Paraguay`}
                fetchPriority="high"
                decoding="async"
                className="mx-auto aspect-square w-full max-w-md object-contain"
              />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-green-600">
                {product.category}
              </span>
              <h1 className="mb-3 mt-3 text-5xl font-black leading-tight text-gray-900">
                {product.fullName ?? product.name}
              </h1>
              <p className="mb-6 text-xl text-gray-500">{product.tagline}</p>

              <p
                className={`mb-8 text-3xl font-black ${
                  hasPrice(product.priceGs) ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {formatGs(product.priceGs)}
              </p>

              <p className="mb-8 leading-relaxed text-gray-600">{product.description}</p>

              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-green-500 py-4 px-8 text-center text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-green-400"
                >
                  Pedir por WhatsApp
                </a>
                <LeadCTA
                  label="Quiero asesoría"
                  origen={`/productos/${product.slug}`}
                  defaultInterest="Comprar productos"
                  title={`Consultar por ${product.name}`}
                  subtitle="Dejanos tus datos y te escribimos con precio, disponibilidad y envío a tu ciudad."
                  className="flex-1 rounded-xl border border-gray-300 py-4 px-8 text-center text-sm font-bold uppercase tracking-widest text-gray-700 transition-all hover:border-green-400 hover:text-green-700"
                />
              </div>

              {product.presentation && (
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Presentación: {product.presentation}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS + INGREDIENTES */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <RevealOnScroll>
            <h2 className="mb-8 text-3xl font-black text-gray-900">Beneficios</h2>
            <ul className="space-y-4">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] font-black text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="mb-8 text-3xl font-black text-gray-900">Ingredientes</h2>
            <ul className="space-y-4">
              {product.ingredients.map((ing) => (
                <li
                  key={ing}
                  className="rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm leading-relaxed text-gray-700"
                >
                  {ing}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* MODO DE USO */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-600">
            Modo de uso
          </p>
          <h2 className="mb-6 text-3xl font-black text-gray-900">Cómo incorporarlo a tu rutina</h2>
          <p className="text-lg leading-relaxed text-gray-600">{product.usage}</p>
        </div>
      </section>

      {/* VIDEO OFICIAL */}
      {product.youtubeId && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-green-600">
              Video oficial del canal
            </p>
            <h2 className="mb-10 text-center text-4xl font-black text-gray-900">
              {product.name} en video
            </h2>
            <YouTubeEmbed
              videoId={product.youtubeId}
              title={`${product.fullName ?? product.name} — Bioliffe Moringa`}
            />
          </div>
        </section>
      )}

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-4xl font-black text-gray-900">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {product.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-colors open:border-green-200"
              >
                <summary className="cursor-pointer list-none text-base font-bold text-gray-900 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span
                      className="text-xl text-green-500 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELACIONADOS + CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          {relacionados.length > 0 && (
            <>
              <h2 className="mb-10 text-3xl font-black text-gray-900">Otros productos</h2>
              <div className="mb-20 flex flex-wrap justify-center gap-4">
                {relacionados.map((p) => (
                  <a
                    key={p.id}
                    href={`/productos/${p.slug}`}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 py-4 pl-4 pr-8 transition-all hover:border-green-300 hover:shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="h-14 w-14 rounded-xl bg-gray-50 object-contain p-1"
                    />
                    <span className="text-left">
                      <span className="block font-black text-gray-900">{p.name}</span>
                      <span className="block text-xs text-gray-400">{p.category}</span>
                    </span>
                  </a>
                ))}
              </div>
            </>
          )}

          <p className="mx-auto max-w-lg text-xs leading-relaxed text-gray-400">
            {SITE.legal.disclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
