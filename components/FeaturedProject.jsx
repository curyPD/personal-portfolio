import Image from "next/image";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";

export default function FeaturedProject({
    i,
    description,
    repo,
    url,
    title,
    screenshot,
    technologies,
}) {
    const { lang } = useLanguage();

    const { width, height } = getImageDimensions(screenshot);
    return (
        <article className="grid-rows-[repeat(10,_minmax(0,_1fr)] group/article mb-36 grid grid-cols-10 last:mb-0 md:mb-40 lg:mb-64 lg:grid-cols-12 lg:grid-rows-4 lg:items-start">
            <div className="z-10 col-span-full row-start-1 row-end-2 lg:col-start-1 lg:col-end-5 lg:row-end-2 lg:text-left lg:group-even/article:col-start-8 lg:group-even/article:col-end-13 lg:group-even/article:text-right 2xl:col-end-5 2xl:group-even/article:col-start-9">
                <span className="mb-1 hidden text-xs font-bold uppercase tracking-widest text-purple-600 lg:block">
                    {lang === "en" ? `Project #${i}` : `проект #${i}`}
                </span>
                <h3 className="mb-7 text-xl font-semibold text-gray-900 xs:text-2xl sm:mb-8 xl:text-3xl 2xl:text-4xl">
                    {title}
                </h3>
            </div>
            <div className="relative col-span-full row-start-2 row-end-[7] shadow-md shadow-gray-900/10 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:shadow-xl lg:group-even/article:col-start-1 lg:group-even/article:col-end-9 2xl:col-start-5 2xl:col-end-12 2xl:group-even/article:col-start-2">
                <div className="absolute top-0 right-0 flex h-12 w-24 items-center justify-center gap-4 rounded-bl-2xl rounded-tr-2xl bg-purple-100/95 lg:hidden">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                            lang === "en"
                                ? `External link to the ${title} app`
                                : `Ссылка на приложение ${title}`
                        }
                        className="text-purple-600 focus:outline-none focus-visible:text-purple-900"
                    >
                        <HiArrowTopRightOnSquare className="h-7 w-7" />
                    </a>
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                            lang === "en"
                                ? `External link to the ${title} GitHub repo`
                                : `Ссылка на GitHub репозиторий проекта ${title}`
                        }
                        className="text-purple-600 focus:outline-none focus-visible:text-purple-900"
                    >
                        <SiGithub className="h-7 w-7" />
                    </a>
                </div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                        lang === "en"
                            ? `External link to the ${title} app`
                            : `Ссылка на приложение ${title}`
                    }
                    className="block overflow-hidden rounded-2xl transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:opacity-60"
                >
                    <Image
                        src={urlFor(screenshot).url()}
                        alt={screenshot[lang === "en" ? "alt" : "alt_ru"]}
                        width={width}
                        height={height}
                    />
                </a>
            </div>
            <div className="relative z-10 col-start-2 col-end-10 row-start-6 row-end-[10] rounded-lg bg-purple-100/95 py-4 px-3 shadow-lg shadow-purple-900/10 xs:px-4 xs:py-5 md:px-6 md:py-7 lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:pb-16 lg:shadow-2xl lg:group-even/article:col-start-7 lg:group-even/article:col-end-13 xl:px-10 2xl:col-end-7 2xl:group-even/article:col-start-7">
                <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:text-xs xs:leading-normal md:mb-5 md:text-sm lg:pr-11 lg:text-left lg:group-even/article:pl-11 lg:group-even/article:pr-0 lg:group-even/article:text-right xl:text-base 2xl:mb-6 2xl:pr-5 2xl:text-lg 2xl:group-even/article:pl-5 2xl:group-even/article:pr-0">
                    {description}
                </p>
                <div className="flex justify-center gap-2 md:gap-3 lg:justify-start lg:group-even/article:justify-end xl:gap-3">
                    {technologies.map((tech) => {
                        const { width, height } = getImageDimensions(tech.icon);

                        return (
                            <motion.div
                                whileHover={{ scale: 0.85 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 15,
                                }}
                                key={tech._id}
                                className="group/img relative flex items-center"
                            >
                                <Image
                                    src={urlFor(tech.icon)
                                        .height(96)
                                        .format("png")
                                        .url()}
                                    alt={tech.title}
                                    width={width}
                                    height={height}
                                    className={
                                        tech.title
                                            .toLowerCase()
                                            .includes("firebase")
                                            ? "h-auto w-4 xs:w-6 xl:w-8 2xl:w-10"
                                            : "h-auto w-6 xs:w-8 xl:w-10 2xl:w-12"
                                    }
                                />
                                <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] text-purple-600 opacity-0 transition-all duration-100 group-hover/img:translate-y-full group-hover/img:opacity-100 xs:text-[10px] xl:text-xs 2xl:text-sm">
                                    {tech.title}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="absolute bottom-1 right-1 hidden h-12 w-24 items-center justify-center gap-4 lg:flex lg:group-even/article:left-1 lg:group-even/article:right-auto 2xl:right-3 2xl:bottom-3 2xl:group-even/article:left-3 2xl:group-even/article:right-auto">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                            lang === "en"
                                ? `External link to the ${title} app`
                                : `Ссылка на приложение ${title}`
                        }
                        className="text-purple-600 transition-colors duration-100 focus:outline-none focus-visible:text-purple-900 hover:text-purple-900"
                    >
                        <HiArrowTopRightOnSquare className="h-7 w-7" />
                    </a>
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                            lang === "en"
                                ? `External link to the ${title} GitHub repo`
                                : `Ссылка на GitHub репозиторий проекта ${title}`
                        }
                        className="text-purple-600 transition-colors duration-100 focus:outline-none focus-visible:text-purple-900 hover:text-purple-900"
                    >
                        <SiGithub className="h-7 w-7" />
                    </a>
                </div>
            </div>
        </article>
    );
}
