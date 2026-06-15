export default function Credencial() {
  return (
    <section className="w-full bg-[#f7f4ed] py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-[3px] text-[#c9a84c] uppercase">
            Respaldo Internacional
          </span>
          <h2 className="text-2xl font-black text-[#0d1f0f] mt-2">
            Liderado por un distribuidor certificado mundialmente
          </h2>
        </div>
        <div className="bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#f0ebe0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#1a5c2a] flex items-center justify-center text-white font-black text-lg">
                  JQ
                </div>
                <div>
                  <h3 className="font-black text-[#0d1f0f] text-lg">Javier Quintana Mendoza</h3>
                  <p className="text-xs text-[#c9a84c] font-bold uppercase mt-0.5">Distribuidor Recomendado</p>
                  <p className="text-xs text-[#888] mt-0.5">Paraguay</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-xs text-[#555]">✓ Empresa: Bioliffe Moringa</p>
                <p className="text-xs text-[#555]">✓ Certificado desde noviembre 2025</p>
                <p className="text-xs text-[#555]">✓ Lider en ventas directas internacionales</p>
                <p className="text-xs text-[#555]">✓ Mentoria activa 24/7 para su equipo</p>
              </div>
              <a href="https://wa.me/51950639288" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white font-bold text-xs py-3 px-6 rounded-xl text-center hover:bg-[#1ebe5a] transition-colors">
                Contactar a Javier por WhatsApp
              </a>
            </div>
            <div className="p-8 flex flex-col justify-center items-center text-center bg-[#fafaf8]">
              <div className="w-20 h-20 bg-[#1a5c2a] rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4">
                BFH
              </div>
              <h4 className="font-black text-[#0d1f0f] text-base mb-1">Business For Home</h4>
              <p className="text-xs text-[#888] mb-4 leading-relaxed max-w-xs">
                Plataforma internacional numero 1 en ventas directas con mas de 650,000 usuarios. Javier esta listado como Recommended Distributor.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mb-5">
                <div className="bg-white border border-[#f0ebe0] rounded-xl p-3">
                  <div className="text-lg font-black text-[#c9a84c]">250B</div>
                  <div className="text-[10px] text-[#888]">Ventas totales BFH</div>
                </div>
                <div className="bg-white border border-[#f0ebe0] rounded-xl p-3">
                  <div className="text-lg font-black text-[#1a5c2a]">650K+</div>
                  <div className="text-[10px] text-[#888]">Usuarios en la app</div>
                </div>
              </div>
              <a href="https://www.businessforhome.org/recommended-distributor/javier-quintana-mendoza/" target="_blank" rel="noopener noreferrer" className="border border-[#1a5c2a] text-[#1a5c2a] font-bold text-xs py-2.5 px-5 rounded-xl hover:bg-[#e8f5e0] transition-colors">
                Ver perfil oficial en BFH
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[#1a5c2a] rounded-2xl p-6 text-center">
          <p className="text-white text-sm leading-relaxed max-w-2xl mx-auto">
            Un lider es quien tiene la habilidad de guiar y motivar a los miembros del equipo, inspirar respeto y confianza.
          </p>
          <p className="text-[#c9a84c] text-xs font-bold mt-3 uppercase">
            Business For Home - Definicion de Lider Profesional
          </p>
        </div>
      </div>
    </section>
  );
}