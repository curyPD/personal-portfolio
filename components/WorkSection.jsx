import { forwardRef } from "react";
import FeaturedProject from "./FeaturedProject";
import { useLanguage } from "@/context/LanguageProvider";

export default forwardRef(function WorkSection({ featuredProjects }, ref) {
    const { lang } = useLanguage();

    return (
        <section ref={ref} id="work" className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
                <div className="flex flex-col items-center lg:mb-36 lg:flex-row lg:items-end lg:gap-6 2xl:mb-40">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        {lang === "en" ? "Work" : "Портфолио"}
                    </h2>
                    <div className="mt-6 mb-12 h-[3px] w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 lg:my-0 lg:mb-2">
                        &nbsp;
                    </div>
                </div>
                <div>
                    {featuredProjects.map((project, i) => (
                        <FeaturedProject
                            key={project._id}
                            i={i + 1}
                            description={
                                project[
                                    lang === "en"
                                        ? "description"
                                        : "description_ru"
                                ]
                            }
                            repo={project.repo}
                            url={project.url}
                            title={
                                project[lang === "en" ? "title" : "title_ru"]
                            }
                            screenshot={project.screenshot}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});
