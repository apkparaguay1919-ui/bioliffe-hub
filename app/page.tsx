import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Credencial from "./components/Credencial";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Navbar from "./components/Navbar";
import { products } from "./data/products";
import { mentorshipModules, leadershipPillars } from "./data/modules";
import { events } from "./data/events";
import { testimonials } from "./data/testimonials";
import { createWhatsAppLink, WA_MESSAGES } from "./lib/whatsapp";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />

      {/* MORINGA - EL ARBOL DE LA VIDA */}
      <section className="py-24 px-6 bg-black" id="moringa">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Nuestra historia</p>
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">Moringa:<br /><span className="text-green-400">el arbol de la vida</span></h2>
              <p className="text-green-200 text-lg leading-relaxed mb-6">La moringa es una de las plantas mas nutritivas del planeta. Bioliffe combina sus propiedades con formulas premium para acompanarte en tu camino hacia el bienestar.</p>
              <ul className="space-y-3 mb-8">
                {["Apoya el bienestar digestivo naturalmente","Puede acompanar rutinas de control de peso","Contribuye al bienestar general con constancia","Complemento ideal para habitos saludables"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-green-300 text-sm">
                    <span className="text-yellow-400 font-bold mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
              <a href={createWhatsAppLink(WA_MESSAGES.producto)} target="_blank" rel="noopener noreferrer" className="inline-flex bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all">
                Conocer mas productos
              </a>
            </div>
            {/* VIDEO REAL */}
            <div className="relative rounded-3xl overflow-hidden border border-green-700/50 aspect-video bg-black">
              <video className="w-full h-full object-cover" controls poster="/images/metha.png">
                <source src="/videos/producto.mp4" type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-24 px-6 bg-green-950" id="productos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Catalogo</p>
            <h2 className="text-5xl font-black text-white mb-4">Productos Bioliffe Moringa</h2>
            <p className="text-green-300 text-lg max-w-xl mx-auto">Cada producto esta disenado para apoyar habitos de bienestar saludables</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0,8).map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
          <div className="text-center mt-12">
            <a href="/productos" className="inline-flex items-center gap-3 border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400/10 font-bold py-3 px-8 rounded-full transition-all">
              Ver catalogo completo
            </a>
          </div>
        </div>
      </section>

      {/* NEGOCIO */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-950 to-black" id="negocio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Como funciona</p>
            <h2 className="text-5xl font-black text-white mb-4">El sistema Bioliffe</h2>
            <p className="text-green-300 text-lg max-w-xl mx-auto">Un metodo probado en 3 pasos para transformar tu bienestar y tu economia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {n:"01",icon:"🌿",title:"Conoce los productos",desc:"Productos naturales premium con moringa para apoyar tu bienestar digestivo, energetico y general.",color:"from-green-900"},
              {n:"02",icon:"🎓",title:"Formacion y mentoria",desc:"Accede a 8 modulos de capacitacion, seguimiento 24/7 y todos los recursos para crecer.",color:"from-yellow-900"},
              {n:"03",icon:"🚀",title:"Construye tu negocio",desc:"Sistema probado de 6 pasos para empezar, crecer y duplicar resultados con tu equipo.",color:"from-green-800"},
            ].map((step) => (
              <div key={step.n} className={`relative bg-gradient-to-br ${step.color} border border-white/10 rounded-3xl p-8 hover:border-yellow-400/60 transition-all`}>
                <div className="absolute top-6 right-6 text-white/10 font-black text-6xl">{step.n}</div>
                <div className="text-5xl mb-5">{step.icon}</div>
                <h3 className="text-white font-black text-xl mb-3">{step.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-12">
            <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 text-white font-bold py-4 px-8 rounded-full transition-all text-center">Hablar por WhatsApp</a>
            <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-4 px-8 rounded-full transition-all text-center">Ver oportunidad</a>
            <a href={createWhatsAppLink(WA_MESSAGES.mentoria)} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all text-center">Entrar a mentoria</a>
          </div>
          <p className="text-green-500 text-sm text-center">Producto de bienestar. No sustituye diagnostico ni tratamiento medico. Resultados pueden variar.</p>
        </div>
      </section>

      {/* MENTORIA */}
      <section className="py-24 px-6 bg-black" id="mentoria">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Capacitacion</p>
            <h2 className="text-5xl font-black text-white mb-4">Sistema de mentoria</h2>
            <p className="text-green-300 text-lg max-w-xl mx-auto">8 modulos disenados para llevarte de cero a lider</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorshipModules.slice(0,8).map((mod: any) => (
              <div key={mod.id} className="bg-green-950/50 border border-green-900 rounded-2xl p-6 hover:border-yellow-400/60 transition-all">
                <div className="text-3xl mb-3">{mod.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{mod.title}</h3>
                <p className="text-green-400 text-xs leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 px-6 bg-green-950" id="testimonios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Resultados reales</p>
            <h2 className="text-5xl font-black text-white mb-4">Lo que dice nuestra comunidad</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0,6).map((t: any) => (
              <div key={t.id} className="bg-black/40 border border-green-900 rounded-2xl p-6 hover:border-yellow-400/40 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">{t.name?.charAt(0)}</div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-green-400 text-xs">{t.location}</p>
                  </div>
                </div>
                <p className="text-green-200 text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section className="py-24 px-6 bg-black" id="eventos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Agenda</p>
            <h2 className="text-5xl font-black text-white mb-4">Proximos eventos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {events.slice(0,4).map((ev: any) => (
              <div key={ev.id} className="bg-green-950/50 border border-green-900 rounded-2xl p-6 hover:border-yellow-400/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 rounded-xl p-3 text-2xl">{ev.icon}</div>
                  <div>
                    <p className="text-yellow-400 text-xs font-bold uppercase mb-1">{ev.date}</p>
                    <h3 className="text-white font-bold mb-2">{ev.title}</h3>
                    <p className="text-green-300 text-sm">{ev.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-900 to-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">Unete ahora</p>
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Transforma tu vida con<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400">Bioliffe Moringa</span>
          </h2>
          <p className="text-green-200 text-xl mb-12 max-w-2xl mx-auto">Unete al sistema Bioliffe Moringa Paraguay. Aprende, comparte y construye tu negocio de bienestar con mentoria 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-4 px-8 rounded-full">Hablar por WhatsApp</a>
            <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer" className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-full">Ver oportunidad</a>
            <a href={createWhatsAppLink(WA_MESSAGES.mentoria)} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full">Entrar a mentoria</a>
          </div>
          <p className="text-green-500 text-sm">Producto de bienestar. No sustituye diagnostico ni tratamiento medico. Resultados pueden variar.</p>
        </div>
      </section>

      <Credencial />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}