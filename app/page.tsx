import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Credencial from "./components/Credencial";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Navbar from "./components/Navbar";
import { products } from "./data/products";
import { mentorshipModules } from "./data/modules";
import { events } from "./data/events";
import { testimonials } from "./data/testimonials";
import { createWhatsAppLink, WA_MESSAGES } from "./lib/whatsapp";

export default function Home() {
  return (
    <main className="text-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />

      {/* MORINGA */}
      <section className="relative py-32 px-6" id="moringa">
        <div className="absolute inset-0">
          <img src="/images/pexels-jahratreza-37937214.jpg" alt="moringa" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl">
            <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-4">Nuestra historia</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Moringa:<br /><span className="text-green-600">el arbol de la vida</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              La moringa es una de las plantas mas nutritivas del planeta. Bioliffe combina sus propiedades con formulas premium para acompanarte en tu camino hacia el bienestar.
            </p>
            <ul className="space-y-4 mb-10">
              {["Apoya el bienestar digestivo naturalmente","Puede acompanar rutinas de control de peso","Contribuye al bienestar general con constancia","Complemento ideal para habitos saludables"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={createWhatsAppLink(WA_MESSAGES.producto)} target="_blank" rel="noopener noreferrer"
              className="inline-flex bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-xl transition-all">
              Conocer mas productos
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <video className="w-full h-full object-cover" controls poster="/images/eficlax.jpeg">
              <source src="/videos/producto.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="relative py-32 px-6" id="productos">
        <div className="absolute inset-0">
          <img src="/images/pexels-chaitaastic-1796727.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 bg-black/40 backdrop-blur rounded-3xl py-10 px-6">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Catalogo</p>
            <h2 className="text-5xl font-black text-white mb-4">Productos Bioliffe Moringa</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">Cada producto esta disenado para apoyar habitos de bienestar saludables</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        </div>
      </section>

      {/* NEGOCIO */}
      <section className="relative py-32 px-6" id="negocio">
        <div className="absolute inset-0">
          <img src="/images/pexels-allphoto-bangkok-1628521-13612693.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 bg-white/90 backdrop-blur rounded-3xl py-10 px-6">
            <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-4">Como funciona</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">El sistema Bioliffe</h2>
            <p className="text-gray-700 text-lg max-w-xl mx-auto">Un metodo probado en 3 pasos para transformar tu bienestar y tu economia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {n:"01",icon:"🌿",title:"Conoce los productos",desc:"Productos naturales premium con moringa para apoyar tu bienestar digestivo, energetico y general."},
              {n:"02",icon:"🎓",title:"Formacion y mentoria",desc:"Accede a 8 modulos de capacitacion, seguimiento 24/7 y todos los recursos para crecer."},
              {n:"03",icon:"🚀",title:"Construye tu negocio",desc:"Sistema probado de 6 pasos para empezar, crecer y duplicar resultados con tu equipo."},
            ].map((step) => (
              <div key={step.n} className="relative bg-white/95 backdrop-blur border border-white/50 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group">
                <span className="absolute top-8 right-8 text-7xl font-black text-gray-100 group-hover:text-green-50 transition-all">{step.n}</span>
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-gray-900 font-black text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-xl transition-all text-center">Hablar por WhatsApp</a>
            <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-700 hover:border-green-300 font-bold py-4 px-10 rounded-xl transition-all text-center">Ver oportunidad</a>
            <a href={createWhatsAppLink(WA_MESSAGES.mentoria)} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-700 hover:border-green-300 font-bold py-4 px-10 rounded-xl transition-all text-center">Entrar a mentoria</a>
          </div>
        </div>
      </section>

      {/* MENTORIA */}
      <section className="relative py-32 px-6" id="mentoria">
        <div className="absolute inset-0">
          <img src="/images/pexels-bernahanim_-1173268160-32664637.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 bg-black/40 backdrop-blur rounded-3xl py-10 px-6">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Capacitacion</p>
            <h2 className="text-5xl font-black text-white mb-4">Sistema de mentoria</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">8 modulos disenados para llevarte de cero a lider</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mentorshipModules.slice(0,8).map((mod: any) => (
              <div key={mod.id} className="bg-white/90 backdrop-blur border border-white/50 rounded-2xl p-6 hover:bg-white transition-all duration-300">
                <div className="text-3xl mb-4">{mod.icon}</div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{mod.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="relative py-32 px-6" id="testimonios">
        <div className="absolute inset-0">
          <img src="/images/pexels-beckesbestphotos-2782969.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 bg-white/90 backdrop-blur rounded-3xl py-10 px-6">
            <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-4">Resultados reales</p>
            <h2 className="text-5xl font-black text-gray-900 mb-4">Lo que dice nuestra comunidad</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0,6).map((t: any) => (
              <div key={t.id} className="bg-white/95 backdrop-blur border border-white/50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-black text-sm">{t.name?.charAt(0)}</div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section className="relative py-32 px-6" id="eventos">
        <div className="absolute inset-0">
          <img src="/images/pexels-jahratreza-37911594.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20 bg-black/40 backdrop-blur rounded-3xl py-10 px-6">
            <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">Agenda</p>
            <h2 className="text-5xl font-black text-white mb-4">Proximos eventos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(0,4).map((ev: any) => (
              <div key={ev.id} className="bg-white/90 backdrop-blur border border-white/50 rounded-2xl p-8 hover:bg-white transition-all">
                <div className="flex items-start gap-5">
                  <div className="bg-green-100 rounded-2xl p-4 text-3xl">{ev.icon}</div>
                  <div>
                    <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">{ev.date}</p>
                    <h3 className="text-gray-900 font-bold mb-2">{ev.title}</h3>
                    <p className="text-gray-500 text-sm">{ev.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 px-6 text-center">
        <div className="absolute inset-0">
          <img src="/images/pexels-tranmautritam-922978.jpg" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto bg-green-700/85 backdrop-blur rounded-3xl py-14 px-8">
          <p className="text-green-200 text-xs font-bold tracking-widest uppercase mb-6">Unete ahora</p>
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Transforma tu vida con<br />Bioliffe Moringa
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Unete al sistema Bioliffe Moringa Paraguay. Aprende, comparte y construye tu negocio de bienestar con mentoria 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={createWhatsAppLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-gray-50 font-black py-4 px-10 rounded-xl transition-all">Hablar por WhatsApp</a>
            <a href={createWhatsAppLink(WA_MESSAGES.negocio)} target="_blank" rel="noopener noreferrer"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl transition-all">Ver oportunidad</a>
          </div>
          <p className="text-white/60 text-xs">Producto de bienestar. No sustituye diagnostico ni tratamiento medico. Resultados pueden variar.</p>
        </div>
      </section>

      <Credencial />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}