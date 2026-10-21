import { createContext, useContext, type ReactNode } from "react";
import { copies, detectLocale, type Copy, type Locale } from "./copy";

type LocaleContextValue = {
  locale: Locale;
  copy: Copy;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "pt-BR",
  copy: copies["pt-BR"],
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = detectLocale();
  return (
    <LocaleContext.Provider value={{ locale, copy: copies[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useCopy() {
  return useContext(LocaleContext);
}
