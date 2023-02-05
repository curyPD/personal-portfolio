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
    technologies,
}) {
    return (
        <article className="relative rounded-lg bg-purple-100/95 px-3 pt-5 pb-12 shadow-lg shadow-gray-900/10 xs:px-4">
            <h4 className="mb-3 text-center text-sm font-semibold text-purple-900 xs:text-base">
                {title}
            </h4>
            <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:text-xs">
                {description}
            </p>
            <div className="flex items-center justify-center gap-3">
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
                            className={`h-auto ${
                                tech.title.toLowerCase().includes("html") ||
                                tech.title.toLowerCase().includes("parcel")
                                    ? "w-8 xs:w-11"
                                    : tech.title
                                          .toLowerCase()
                                          .includes("javascript")
                                    ? "w-7 xs:w-10"
                                    : "w-6 xs:w-8"
                            } ${
                                tech.title.toLowerCase().includes("html")
                                    ? "-mx-1"
                                    : ""
                            }`}
                        />
                    );
                })}
            </div>
            <div className="absolute bottom-1 right-1 flex h-8 w-16 items-center justify-center gap-2">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-700" />
                </a>
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-5 w-5 text-gray-700" />
                </a>
            </div>
        </article>
    );
}
