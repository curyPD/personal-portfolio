import { SiLinkedin, SiTwitter, SiFacebook, SiGithub } from "react-icons/si";

export default function DesktopSocialLinks({ socialLinks }) {
    return (
        <div className="hidden xl:block">
            <ul className="mx-auto flex h-16 max-w-4xl items-center gap-6 px-6 2xl:max-w-6xl">
                {socialLinks.map((socialLink) => {
                    let icon;
                    if (socialLink.title.toLowerCase() === "linkedin")
                        icon = (
                            <SiLinkedin className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-900" />
                        );
                    else if (socialLink.title.toLowerCase() === "twitter")
                        icon = (
                            <SiTwitter className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-900" />
                        );
                    else if (socialLink.title.toLowerCase() === "facebook")
                        icon = (
                            <SiFacebook className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-900" />
                        );
                    else if (socialLink.title.toLowerCase() === "github")
                        icon = (
                            <SiGithub className="h-6 w-6 text-gray-500 transition-colors hover:text-gray-900" />
                        );
                    return (
                        <li key={socialLink._id}>
                            <a
                                href={socialLink.url}
                                target="_blank"
                                rel="noopener noferrer"
                            >
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
