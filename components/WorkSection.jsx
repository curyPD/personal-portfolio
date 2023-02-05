import FeaturedProject from "./FeaturedProject";

export default function WorkSection({ featuredProjects }) {
    return (
        <section id="work" className="py-28">
            <div className="mx-auto max-w-lg px-5 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl">
                        Work
                    </h2>
                    <div className="mt-6 mb-12 h-[3px] w-16 bg-gradient-to-r from-purple-500 to-indigo-500">
                        &nbsp;
                    </div>
                </div>
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
        </section>
    );
}
