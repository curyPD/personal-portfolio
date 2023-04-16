import { forwardRef } from "react";
import CtaButton from "./CtaButton";
import { useLanguage } from "@/context/LanguageProvider";

export default forwardRef(function CtaSection({ ctaSection, email }, ref) {
    const { lang } = useLanguage();

    return (
        <section ref={ref} id="contact" className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center 2xl:max-w-xl">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        {lang === "en" ? "Get in touch" : "Обратная связь"}
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 xl:my-8">
                        &nbsp;
                    </div>
                </div>
                <p className="mb-12 text-sm font-medium text-gray-600 xs:text-base lg:text-lg xl:text-xl 2xl:mb-20 2xl:text-2xl 2xl:leading-normal">
                    {ctaSection[lang === "en" ? "cta" : "cta_ru"]}
                </p>
                <div className="mx-auto flex max-w-xs flex-col lg:w-44 lg:flex-row xl:w-60">
                    <CtaButton email={email} />
                </div>
            </div>
        </section>
    );
});
