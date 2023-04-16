import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export default function LanguageProvider({ children }) {
    const [lang, setLang] = useState("ru");

    useEffect(() => {
        if (navigator.language.toLowerCase().includes("ru")) {
            setLang("ru");
        } else {
            setLang("en");
        }
    }, []);

    function setLangToRussian() {
        setLang("ru");
    }

    function setLangToEnglish() {
        setLang("en");
    }

    return (
        <LanguageContext.Provider
            value={{ lang, setLangToRussian, setLangToEnglish }}
        >
            {children}
        </LanguageContext.Provider>
    );
}
