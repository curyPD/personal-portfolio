import Image from "next/image";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

export default function FeaturedProject({
    description,
    repo,
    url,
    title,
    screenshot,
    technologies,
}) {
    const { width, height } = getImageDimensions(screenshot);
    return (
        <article className="mb-36 grid grid-cols-10 grid-rows-[10] last:mb-0">
            <div className="col-span-full row-start-1 row-end-2">
                <span className="hidden">featured project</span>
                <h4 className="mb-7 text-xl font-semibold text-gray-900 xs:text-2xl">
                    {title}
                </h4>
            </div>
            <div className="relative col-span-full row-start-2 row-end-[7] overflow-hidden rounded-2xl shadow-md shadow-gray-900/10 xs:row-end-[8]">
                <div className="absolute top-0 right-0 flex h-8 w-16 items-center justify-center gap-2 rounded-bl-2xl bg-purple-300/80">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-900" />
                    </a>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-5 w-5 text-gray-900" />
                    </a>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={urlFor(screenshot).url()}
                        alt={screenshot.alt}
                        width={width}
                        height={height}
                    />
                </a>
            </div>
            <div className="z-10 col-start-2 col-end-10 row-start-[6] row-end-[10] rounded-lg bg-purple-100/95 py-4 px-3 shadow-lg shadow-gray-900/10 xs:row-start-[7] xs:px-4 xs:py-5">
                <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:text-xs">
                    {description}
                </p>
                <div className="flex items-center justify-center gap-2">
                    {technologies.map((tech) => {
                        const { width, height } = getImageDimensions(tech.icon);

                        return (
                            <Image
                                key={tech._id}
                                src={urlFor(tech.icon)
                                    .height(72)
                                    .format("png")
                                    .url()}
                                alt={tech.title}
                                width={width}
                                height={height}
                                className={
                                    tech.title
                                        .toLowerCase()
                                        .includes("firebase")
                                        ? "h-auto w-4 xs:w-6"
                                        : "h-auto w-6 xs:w-8"
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
