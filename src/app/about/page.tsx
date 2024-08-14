'use client'

import React, {useState} from "react";
import { Language } from "@/types/Lang";
import ButtonLang from "@/components/ButtonLang";

export default function About() {
  const [language, setLanguage] = useState<Language>('en');  
  return (
      <main>
        <h1 className="text-4xl font-bold">
        {language === 'en' ? 'About Page' : 'Acerca de'}
        </h1>
        <p>
        {language === 'en' ? 'About Page!' : '¡Página de Acerca de!'}
        </p>
        <ButtonLang language={language} setLanguage={setLanguage} />
      </main>
    );
  }