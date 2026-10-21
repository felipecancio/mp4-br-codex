import { motion } from "motion/react";
import { Folder, FileImage, ShieldCheck, Monitor, Download, Package } from "lucide-react";

export default function WhatIsIncluded() {
  const items = [
    { icon: <FileImage className="text-purple-400" />, title: "+40 mil artes PNG/JPG", desc: "Alta resolução para estampas, quadros e personalizados." },
    { icon: <Folder className="text-green-400" />, title: "65 temas organizados", desc: "Pastas por categoria no Google Drive para encontrar o que precisa." },
    { icon: <ShieldCheck className="text-yellow-400" />, title: "Para seus produtos", desc: "Artes para aplicar nas suas criações e em produtos para venda." },
    { icon: <Monitor className="text-pink-400" />, title: "Acesso vitalício", desc: "Pagamento único, sem mensalidades." },
    { icon: <Download className="text-blue-400" />, title: "Acesso imediato", desc: "Link por e-mail e WhatsApp após a confirmação da compra." },
    { icon: <Package className="text-cyan-400" />, title: "3 bônus incluídos", desc: "Money Dollar, Funkos e Futebol sem custo extra." },
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="incluido">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            O que vem no Mega Pack 4.0?
          </h2>
          <p className="text-gray-500 mt-4 font-bold text-sm tracking-widest uppercase">
            Sua biblioteca criativa em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center group transition-colors hover:border-white/20"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-white group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h4 className="text-white font-black text-xl mb-2 tracking-tight uppercase italic">{item.title}</h4>
              <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
