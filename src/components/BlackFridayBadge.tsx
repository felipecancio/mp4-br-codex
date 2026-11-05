import { Tag } from "lucide-react";
import { useCopy } from "../i18n/LocaleContext";

export default function BlackFridayBadge() {
  const { copy } = useCopy();

  return (
    <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-center text-xs font-black leading-tight tracking-wide text-amber-200 sm:px-4 sm:text-sm">
      <Tag className="h-4 w-4 shrink-0" aria-hidden />
      {`${copy.navbar.blackFridayLabel} ${copy.navbar.blackFridayDiscount}`}
    </span>
  );
}
