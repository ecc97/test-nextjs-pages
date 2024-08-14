export interface ButtonLangProps {
    language: 'en' | 'es';
    setLanguage: React.Dispatch<React.SetStateAction<'en' | 'es'>>;
}