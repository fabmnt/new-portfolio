import { createContext, useContext, type ReactNode } from "react";
import type { TranslationKeys } from "@/i18n";

interface TranslationContextType {
  t: TranslationKeys;
  locale: "en" | "es";
}

export const TranslationContext = createContext<TranslationContextType | null>(null);

interface Props {
  locale: "en" | "es";
  t: TranslationKeys;
  children: ReactNode;
}

export function TranslationProvider({ locale, t, children }: Props) {
  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }
  return context;
}
