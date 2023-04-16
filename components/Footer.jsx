import { useLanguage } from "@/context/LanguageProvider";

export default function Footer({ text }) {
    const { lang } = useLanguage();

    return (
        <footer className="pt-24 pb-3">
            <p className="text-center text-xs font-normal text-gray-500 xl:text-sm">
                {text[lang === "en" ? "footer" : "footer_ru"]}
            </p>
        </footer>
    );
}
