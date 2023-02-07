import FeaturedProject from "./FeaturedProject";

export default function WorkSection({ featuredProjects }) {
    return (
        <section id="work" className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
                <div className="flex flex-col items-center lg:mb-36 lg:flex-row lg:items-end lg:gap-6 2xl:mb-40">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        Work
                    </h2>
                    <div className="mt-6 mb-12 h-[3px] w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 lg:my-0 lg:mb-2">
                        &nbsp;
                    </div>
                </div>
                <div>
                    {featuredProjects.map((project) => (
                        <FeaturedProject
                            key={project._id}
                            description={project.description}
                            repo={project.repo}
                            url={project.url}
                            title={project.title}
                            screenshot={project.screenshot}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
