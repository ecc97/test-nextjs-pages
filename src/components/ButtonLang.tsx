import {ButtonLangProps} from '@/types/IButtonLang';
  
  export default function ButtonLang({ language, setLanguage }: ButtonLangProps) {
    const handleLanguage = () => {
      setLanguage((lang) => (lang === 'en' ? 'es' : 'en'));
    };
  
    return (
      <button
        onClick={handleLanguage}
        className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {language === 'en' ? 'Change Language' : 'Cambiar Idioma'}
      </button>
    );
  }
  