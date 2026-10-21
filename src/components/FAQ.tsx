import { motion } from "motion/react";
import { PlusCircle } from "lucide-react";
import { useCopy } from "../i18n/LocaleContext";

export default function FAQ() {
  const { copy } = useCopy();
  const faqs = copy.faq.items;
  return (
    <section className="py-24 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            {copy.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group border border-white/10 rounded-2xl bg-white/[0.02] p-6 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="flex items-center justify-between list-none gap-4">
                <span className="text-base sm:text-lg font-bold text-white group-open:text-purple-400 transition-colors uppercase tracking-tight text-left">
                  {String(index + 1).padStart(2, "0")}. {faq.q}
                </span>
                <PlusCircle className="text-white group-open:rotate-45 transition-transform shrink-0" />
              </summary>
              <div className="mt-4 text-gray-400 text-base leading-relaxed">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
