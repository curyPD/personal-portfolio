import JsProject from "./JsProject";

export default function JsProjectsSection({ jsProjects }) {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-lg px-5 text-center">
                <div className="col-span-full row-start-1 row-end-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                        vanilla icecream
                    </span>
                    <h2 className="mb-9 text-xl font-semibold text-gray-900 xs:text-2xl">
                        JavaScript adventures
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8">
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
