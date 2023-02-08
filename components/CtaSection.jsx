import { forwardRef } from "react";
import { motion } from "framer-motion";

export default forwardRef(function CtaSection({ ctaSection }, ref) {
    return (
        <section ref={ref} id="contact" className="py-28 lg:py-36 xl:py-44">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "0px 0px -30px 0px", once: true }}
                transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeOut",
                }}
                className="mx-auto max-w-lg px-5 text-center 2xl:max-w-xl"
            >
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        Get in touch
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 xl:my-8">
                        &nbsp;
                    </div>
                </div>
                <p className="mb-12 text-sm font-medium text-gray-600 xs:text-base lg:text-lg xl:text-xl 2xl:mb-20 2xl:text-2xl 2xl:leading-normal">
                    {ctaSection.cta}
                </p>
                <a
                    href="mailto:romandruzhininwork@gmail.com"
                    className="mx-auto block max-w-xs rounded border-2 border-gray-900 bg-gray-900 py-2.5 text-base font-medium text-white shadow-md transition-colors duration-100 hover:bg-transparent hover:text-gray-900 lg:w-48 xl:w-60 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                >
                    Contact me
                </a>
            </motion.div>
        </section>
    );
});
