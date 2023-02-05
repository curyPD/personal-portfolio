import Image from "next/image";
import { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";

export default function AboutSection({ aboutSection }) {
    const portableTextComponents = useMemo(
        () => ({
            block: {
                normal: ({ children }) => (
                    <span className="block text-base font-medium text-gray-700">
                        {children}
                    </span>
                ),
            },
            marks: {
                link: ({ value, children }) => (
                    <a
                        href={value.href}
                        className="text-sky-600 underline decoration-sky-600 hover:no-underline"
                    >
                        {children}
                    </a>
                ),
            },
        }),
        []
    );
    const { width, height } = getImageDimensions(aboutSection.profilePicture);
    return (
        <section id="about" className="py-28">
            <div className="mx-auto max-w-lg px-5 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl">
                        About me
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-rose-600 to-orange-600">
                        &nbsp;
                    </div>
                </div>
                <div className="flex flex-col items-center gap-20">
                    <p className="space-y-4">
                        <PortableText
                            value={aboutSection.about}
                            components={portableTextComponents}
                        />
                    </p>
                    <figure className="w-9/12">
                        <Image
                            src={urlFor(aboutSection.profilePicture).url()}
                            alt={aboutSection.profilePicture.alt}
                            width={width}
                            height={height}
                        />
                        <figcaption className="text-xs text-gray-200">
                            {aboutSection.profilePicture.caption}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
