import { motion } from "motion/react";
import GreenCTAButton from "./GreenCTAButton";
import {
  ShieldCheck,
  Download,
  Package,
  Printer,
} from "lucide-react";
import { useCopy } from "../i18n/LocaleContext";

const benefitIcons = [
  <Package className="w-6 h-6" />,
  <Printer className="w-6 h-6" />,
  <ShieldCheck className="w-6 h-6" />,
  <Download className="w-6 h-6" />,
];

export default function Benefits() {
  const { copy } = useCopy();
  const benefits = copy.benefits.items.map((item, i) => ({
    ...item,
    icon: benefitIcons[i],
  }));
  return (
    <section className="py-24 bg-black border-y border-white/5" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
            {copy.benefits.titleBefore}{" "}
            <span className="text-purple-500">{copy.benefits.titleAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            {copy.benefits.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-full max-w-sm p-6 text-center rounded-3xl bg-white/[0.02] border border-white/5 transition-all group hover:border-white/10 hover:bg-white/[0.04] md:max-w-none md:text-left"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 md:mx-0">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <GreenCTAButton>{copy.benefits.cta}</GreenCTAButton>
        </div>
      </div>
    </section>
  );
}
