export default function CtaSection({ ctaSection }) {
    return (
        <section id="contact" className="py-28">
            <div className="mx-auto max-w-lg px-5 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl">
                        Get in touch
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-sky-500 to-cyan-500">
                        &nbsp;
                    </div>
                </div>
                <p className="mb-12 text-sm font-medium text-gray-800 xs:text-base">
                    {ctaSection.cta}
                </p>
                <a
                    href="mailto:romandruzhininwork@gmail.com"
                    className="mx-auto block max-w-xs rounded bg-gray-900 py-2.5 text-base font-normal text-white shadow-lg"
                >
                    Contact me
                </a>
            </div>
        </section>
    );
}
