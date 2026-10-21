import { motion } from "motion/react";
import { Check, Zap, Shield, Rocket, Timer } from "lucide-react";
import FloatingProductBox from "./FloatingProductBox";
import { trackMetaEvent } from "../lib/metaPixel";
import { useCopy } from "../i18n/LocaleContext";

const HOTMART_CHECKOUT =
  "https://pay.hotmart.com/C97387804T?off=1ba1tnm0&checkoutMode=10";

export default function PricingCTA() {
  const { copy } = useCopy();
  const offerChecklist = copy.pricing.checklist;
  return (
    <section className="scroll-mt-24 py-24 bg-black relative overflow-hidden" id="comprar">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden p-8 md:p-16 text-center shadow-2xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-orange-200 sm:text-[10px]">
            <span className="text-xs leading-none" aria-hidden>
              ⏳
            </span>
            {copy.pricing.urgencyBadge}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
            {copy.pricing.title}
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-sm font-medium leading-relaxed text-gray-400 md:text-lg">
            {copy.pricing.promoBefore}{" "}
            <span className="font-black text-orange-400">{copy.pricing.promoHighlight}</span>{" "}
            {copy.pricing.promoMid}{" "}
            <span className="font-black text-orange-400">{copy.pricing.promoUpdates}</span>
            {copy.pricing.promoEnd}{" "}
            <span className="font-black text-emerald-400">{copy.pricing.promoPrice}</span>
          </p>

          <div className="mb-10 -mx-8 flex w-[calc(100%+4rem)] flex-col items-center justify-center sm:mx-0 sm:w-full">
            <FloatingProductBox size="2xl" className="mx-auto w-full" alt={copy.pricing.productAlt} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-12">
            {offerChecklist.map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-300 font-bold text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                {text}
              </div>
            ))}
          </div>

          <p className="mx-auto mb-4 max-w-2xl text-center text-sm font-medium leading-relaxed text-gray-300 sm:mb-5 sm:text-base">
            {copy.pricing.updatesNote}
          </p>

          <p id="oferta-desconto" className="mx-auto mb-5 flex w-fit max-w-full scroll-mt-28 items-center justify-center gap-2 px-4 py-3 text-center text-sm font-black uppercase leading-snug tracking-wide text-amber-200 sm:mb-6 sm:px-6 sm:text-lg">
            <Timer className="h-5 w-5 shrink-0 text-amber-400 sm:h-6 sm:w-6" aria-hidden />
            <span>{copy.pricing.limitedOffer}</span>
          </p>

          <motion.a
            href={HOTMART_CHECKOUT}
            rel="noopener noreferrer"
            onClick={() =>
              trackMetaEvent("InitiateCheckout", {
                content_name: "Mega Pack 4.0",
                content_category: "digital_product",
              })
            }
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
                "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
                "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
                "0 0 34px 10px rgba(52, 211, 153, 0.5), 0 18px 54px rgba(5, 150, 105, 0.58)",
                "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
                "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
                "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
              ],
              filter: [
                "brightness(1)",
                "brightness(1.012)",
                "brightness(1.03)",
                "brightness(1.05)",
                "brightness(1.03)",
                "brightness(1.012)",
                "brightness(1)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              times: [0, 0.14, 0.32, 0.5, 0.68, 0.86, 1],
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full sm:w-auto inline-flex bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 text-white px-8 py-5 text-xl max-[360px]:px-3 max-[360px]:text-base sm:px-12 sm:py-6 sm:text-2xl rounded-2xl font-black items-center justify-center gap-2 sm:gap-3 border border-emerald-300/40 mb-6 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-emerald-300 hover:via-green-400 hover:to-emerald-600 transition-colors whitespace-nowrap"
          >
            <Zap className="h-7 w-7 shrink-0 fill-white text-white sm:h-8 sm:w-8" />
            {copy.pricing.buyNow}
          </motion.a>

          <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-6 opacity-40 max-sm:text-[10px] sm:text-xs">
            <div className="flex shrink-0 items-center gap-1.5 text-white font-bold uppercase tracking-wide sm:tracking-widest sm:gap-2">
              <Shield className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> {copy.pricing.securePay}
            </div>
            <div className="flex shrink-0 items-center gap-1.5 text-white font-bold uppercase tracking-wide sm:tracking-widest sm:gap-2">
              <Rocket className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> {copy.pricing.instantDelivery}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
