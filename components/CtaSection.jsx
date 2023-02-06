export default function CtaSection({ ctaSection }) {
    return (
        <section id="contact" className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center 2xl:max-w-xl">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        Get in touch
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-sky-500 to-cyan-500 xl:my-8">
                        &nbsp;
                    </div>
                </div>
                <p className="mb-12 text-sm font-medium text-gray-700 xs:text-base lg:text-lg xl:text-xl 2xl:mb-20 2xl:text-2xl 2xl:leading-normal">
                    {ctaSection.cta}
                </p>
                <a
                    href="mailto:romandruzhininwork@gmail.com"
                    className="mx-auto block max-w-xs rounded bg-gray-900 py-2.5 text-base font-normal text-white shadow-lg lg:w-48 xl:w-60 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                >
                    Contact me
                </a>
            </div>
        </section>
    );
}
