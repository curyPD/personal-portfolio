import { SiLinkedin, SiTwitter, SiFacebook, SiGithub } from "react-icons/si";

export default function DesktopSocialLinks({ socialLinks }) {
    return (
        <div className="hidden xl:block">
            <ul className="mx-auto flex h-20 max-w-4xl items-center gap-7 px-6 2xl:max-w-6xl">
                {socialLinks.map((socialLink) => {
                    let icon;
                    if (socialLink.title.toLowerCase() === "linkedin")
                        icon = (
                            <SiLinkedin className="h-7 w-7 text-gray-400/70" />
                        );
                    else if (socialLink.title.toLowerCase() === "twitter")
                        icon = (
                            <SiTwitter className="h-7 w-7 text-gray-400/70" />
                        );
                    else if (socialLink.title.toLowerCase() === "facebook")
                        icon = (
                            <SiFacebook className="h-7 w-7 text-gray-400/70" />
                        );
                    else if (socialLink.title.toLowerCase() === "github")
                        icon = (
                            <SiGithub className="h-7 w-7 text-gray-400/70" />
                        );
                    return (
                        <div key={socialLink._id}>
                            <a
                                href={socialLink.url}
                                target="_blank"
                                rel="noopener noferrer"
                            >
                                {icon}
                            </a>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
