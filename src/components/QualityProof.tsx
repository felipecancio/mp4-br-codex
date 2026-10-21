import { motion } from "motion/react";
import GreenCTAButton from "./GreenCTAButton";
import { Search, CheckCircle } from "lucide-react";

const checklist = [
  { t: "Quadros, camisetas e muito mais", d: "Painéis, adesivos, azulejos, papéis de parede e outros produtos personalizados." },
  { t: "PNG e JPG · 300 DPI", d: "Dimensões em torno de 4100 × 6100 px para diferentes aplicações gráficas." },
  { t: "Artes para seus produtos", d: "Conteúdo desenvolvido pela Criativarts para aplicar nas suas criações." },
];

function QualityImage({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <img
        src="/quality-dtf-print.png"
        alt="Exemplo de impressão das artes do Mega Pack 4.0"
        className="w-full h-auto rounded-[40px] border border-white/10"
        draggable={false}
      />
    </motion.div>
  );
}

function QualityHeading() {
  return (
    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
      NO MEGA PACK 4.0 <br />
      <span className="text-gray-500">VOCÊ ENCONTRA</span>
    </h2>
  );
}

function QualityParagraph() {
  return (
    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
      Mais de <span className="text-white font-bold">40 mil artes</span> em{" "}
      <span className="text-white font-bold">65 temas</span> para ampliar seu catálogo. Arquivos com tamanho médio de 5 MB,
      organizados em pastas para visualizar e baixar com facilidade. Confira a resolução adequada a cada formato de impressão.
    </p>
  );
}

function QualityParagraph2() {
  return (
    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
      Acesso vitalício pelo Drive, com link enviado por e-mail e WhatsApp e suporte pós-venda. Conte com a{" "}
      <span className="text-white font-bold">garantia de satisfação</span>: se o material não atender às suas expectativas,
      a Criativarts se compromete a devolver o valor integral da compra.
    </p>
  );
}

function QualityList() {
  return (
    <ul className="space-y-4">
      {checklist.map((item, i) => (
        <li key={i} className="flex gap-4">
          <div className="mt-1 shrink-0">
            <CheckCircle className="text-green-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-black text-lg uppercase tracking-tight">{item.t}</h4>
            <p className="text-gray-500 text-sm">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function QualityQuote() {
  return (
    <div className="mt-12 p-8 rounded-[32px] bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10">
      <div className="flex items-center gap-4 text-white">
        <Search className="w-10 h-10 shrink-0 text-purple-400" />
        <p className="font-bold italic">
          &quot;Nosso compromisso é com a sua satisfação. Se o material não for o que você esperava, devolvemos o valor
          integral da sua compra.&quot;
        </p>
      </div>
      <p className="text-gray-400 text-xs mt-4 text-right">— Garantia Criativarts · Mega Pack 4.0</p>
    </div>
  );
}

export default function QualityProof() {
  return (
    <section className="py-24 bg-black overflow-hidden" id="calidad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:hidden">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <QualityHeading />
            <QualityParagraph />
            <QualityParagraph2 />
          </motion.div>
          <QualityImage />
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <QualityList />
            <QualityQuote />
          </motion.div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <QualityImage />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <QualityHeading />
            <QualityParagraph />
            <QualityParagraph2 />
            <QualityList />
            <QualityQuote />
          </motion.div>
        </div>

        <div className="mt-12 text-center lg:mt-16">
          <GreenCTAButton>QUERO O MEGA PACK 4.0</GreenCTAButton>
        </div>
      </div>
    </section>
  );
}
