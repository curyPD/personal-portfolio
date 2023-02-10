import JsProject from "./JsProject";

export default function JsProjectsSection({ jsProjects }) {
    return (
        <section className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 xl:mb-1 xl:text-xs">
                        vanilla icecream
                    </span>
                    <h2 className="mb-9 text-xl font-semibold text-gray-900 xs:text-2xl sm:mb-10 xl:mb-12 xl:text-3xl 2xl:mb-14 2xl:text-4xl">
                        JavaScript adventures
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:gap-14 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-11 2xl:gap-x-10 2xl:gap-y-12">
                    {jsProjects.map((project) => (
                        <JsProject
                            key={project._id}
                            description={project.description}
                            repo={project.repo}
                            url={project.url}
                            title={project.title}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
