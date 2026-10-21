import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCopy } from "../i18n/LocaleContext";
import GreenCTAButton from "./GreenCTAButton";

function itemsPerPage() {
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

export default function ClientTestimonials() {
  const { copy } = useCopy();
  const testimonials = copy.testimonials.items;
  const railRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [pageSize, setPageSize] = useState(itemsPerPage);
  const pages = Array.from({ length: Math.ceil(testimonials.length / pageSize) }, (_, page) =>
    testimonials.slice(page * pageSize, (page + 1) * pageSize),
  );

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    const update = () => setPageSize(itemsPerPage());
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  useLayoutEffect(() => {
    const rail = railRef.current;
    if (rail) rail.scrollLeft = 0;
    setAtStart(true);
    setAtEnd(pages.length <= 1);
  }, [pageSize, pages.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [active]);

  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const currentPage = Math.round(rail.scrollLeft / rail.clientWidth);
    const nextPage = Math.max(0, Math.min(pages.length - 1, currentPage + direction));
    rail.scrollTo({ left: nextPage * rail.clientWidth, behavior: "smooth" });
  };

  const updatePosition = () => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [testimonials.length]);

  const selected = active === null ? null : testimonials[active];

  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-10 sm:py-12">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-4xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
            {copy.testimonials.kicker}
          </p>
          <h2 id="testimonials-title" className="text-3xl font-black uppercase italic leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
            {copy.testimonials.title}
          </h2>
        </div>

        <div className="relative px-10 sm:px-12">
          <button type="button" aria-label="Ver conversas anteriores" onClick={() => move(-1)} disabled={atStart} className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-25 sm:h-9 sm:w-9">
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div
            ref={railRef}
            role="region"
            aria-label="Depoimentos de clientes"
            tabIndex={0}
            onScroll={updatePosition}
            className="relative flex h-[282px] snap-x snap-mandatory overflow-x-auto overscroll-x-contain outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            {pages.map((page, pageIndex) => (
              <div key={`${pageSize}-${pageIndex}`} className="grid h-full w-full shrink-0 snap-start snap-always items-center gap-4" style={{ gridTemplateColumns: `repeat(${pageSize}, minmax(0, 1fr))` }}>
                {page.map((item, index) => (
                  <div key={item.src} className="flex min-w-0 items-center justify-center">
              <button
                type="button"
                aria-label={`Ampliar conversa ${pageIndex * pageSize + index + 1} de ${testimonials.length}`}
                aria-haspopup="dialog"
                onClick={() => setActive(pageIndex * pageSize + index)}
                style={{ width: Math.round((item.width / item.height) * 280), maxWidth: "100%" }}
                className="block shrink-0 snap-start overflow-hidden rounded-xl border border-white/15 p-0 transition-colors hover:border-purple-400/50 focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button type="button" aria-label="Ver próximas conversas" onClick={() => move(1)} disabled={atEnd} className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-25 sm:h-9 sm:w-9">
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base font-medium leading-relaxed text-gray-400 sm:mt-8 sm:text-lg">
          {copy.testimonials.subtitle}
        </p>
        <div className="mt-6 text-center">
          <GreenCTAButton href="#comprar">{copy.testimonials.cta}</GreenCTAButton>
        </div>
      </div>

      {createPortal(
        <dialog ref={dialogRef} aria-label="Depoimento ampliado" onCancel={() => setActive(null)} onClick={(event) => { if (event.target === event.currentTarget) setActive(null); }} className="m-auto w-fit max-w-[calc(100vw_-_2rem)] overflow-visible rounded-xl border border-white/15 bg-transparent p-0 text-white shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm">
          {selected && (
            <>
              <img src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} className="block max-h-[calc(100dvh_-_4rem)] w-auto max-w-full rounded-xl" />
              <button type="button" aria-label="Fechar conversa ampliada" onClick={() => setActive(null)} className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-zinc-950 text-white shadow-lg transition hover:bg-zinc-800"><X className="h-4 w-4" aria-hidden /></button>
            </>
          )}
        </dialog>,
        document.body,
      )}
    </section>
  );
}
