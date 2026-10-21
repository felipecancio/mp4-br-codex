import { ShieldCheck } from "lucide-react";
import { useCopy } from "../i18n/LocaleContext";

export default function Footer() {
  const { copy } = useCopy();
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-white tracking-tighter mb-6 italic uppercase">
              CRIATIVARTS · MEGA PACK 4.0
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              {copy.footer.about}
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 italic">{copy.footer.navTitle}</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  {copy.footer.home}
                </a>
              </li>
              <li>
                <a href="#temas" className="hover:text-white transition-colors">
                  {copy.footer.themes}
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  {copy.footer.benefits}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {copy.footer.questions}
                </a>
              </li>
              <li>
                <a href="#comprar" className="hover:text-white transition-colors">
                  {copy.footer.buy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            {copy.footer.copyright}
          </p>
          <div className="flex items-center gap-4 text-gray-600 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-green-500" /> {copy.footer.secure}
          </div>
        </div>
      </div>
    </footer>
  );
}
