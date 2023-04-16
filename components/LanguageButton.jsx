import { useLanguage } from "@/context/LanguageProvider";

export default function LanguageButton() {
    const { lang, setLangToEnglish, setLangToRussian } = useLanguage();

    return (
        <button
            className="rounded border border-gray-900 bg-transparent py-1 px-2 text-sm font-medium text-gray-900 transition-colors duration-100 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:bg-gray-900 hover:text-white"
            onClick={lang === "en" ? setLangToRussian : setLangToEnglish}
            aria-label={
                lang === "en"
                    ? "Translate into Russian"
                    : "Перевести на английский"
            }
        >
            {lang === "en" ? "RU" : "EN"}
        </button>
    );
}
