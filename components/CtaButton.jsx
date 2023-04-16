import { useLanguage } from "@/context/LanguageProvider";

export default function CtaButton({ email }) {
    const { lang } = useLanguage();

    return (
        <a
            href={`mailto:${email}`}
            className="rounded border-2 border-gray-900 bg-gray-900 py-2.5 text-base font-medium text-white shadow-md transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:bg-transparent hover:text-gray-900 lg:flex-1 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
        >
            {lang === "en" ? "Contact me" : "Связаться"}
        </a>
    );
}
