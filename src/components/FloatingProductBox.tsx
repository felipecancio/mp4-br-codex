import { motion } from "motion/react";

type FloatingProductBoxProps = {
  className?: string;
  size?: "md" | "lg" | "xl" | "2xl";
  alt?: string;
};

const sizeClasses = {
  md: "max-w-[180px] sm:max-w-[200px]",
  lg: "max-w-[200px] sm:max-w-[240px]",
  xl: "max-w-[320px] sm:max-w-[400px] md:max-w-[480px]",
  "2xl": "w-full max-w-none sm:max-w-[500px] md:max-w-[560px] lg:max-w-[620px]",
};

export default function FloatingProductBox({
  className = "",
  size = "md",
  alt = "Mega Pack 4.0 — caixa do produto Criativarts",
}: FloatingProductBoxProps) {
  const maxW = sizeClasses[size];

  return (
    <div className={`relative mx-auto flex w-full flex-col items-center justify-center ${maxW} ${className}`}>
      {/* Brilho difuso — sem caixa/fundo sólido; a página fica visível atrás */}
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[55%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-[42px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[50%] h-[45%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[36px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[48%] h-[35%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/15 blur-[28px]"
        aria-hidden
      />

      <motion.div
        animate={{
          y: [0, -16, 0],
          rotate: [-0.8, 0.8, -0.8],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full origin-center"
      >
        <img
          src="/mockup-mp4.webp"
          alt={alt}
          width={644}
          height={890}
          className="mx-auto block h-[340px] w-auto max-w-full object-contain object-center drop-shadow-[0_12px_32px_rgba(168,85,247,0.25)] sm:h-[420px]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
