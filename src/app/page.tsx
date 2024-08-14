'use client'
import { useState } from "react";
import { Language } from "@/types/Lang";
import ButtonLang from "@/components/ButtonLang";

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  return (
    <main>
      <h1 className="text-4xl font-bold">
        {language === 'en' ? 'Home Page' : 'Página de Inicio'}
      </h1>
      <p>{language === 'en' ? 'Home Page!' : '¡Página de Inicio!'}</p>
      <ButtonLang language={language} setLanguage={setLanguage} />
    </main>
  );
}

