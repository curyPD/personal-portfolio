import { SiLinkedin, SiTwitter, SiFacebook, SiGithub } from "react-icons/si";

export default function DesktopSocialContainer({ socialLinks }) {
    return (
        <ul className="flex items-center gap-5">
            {socialLinks.map((socialLink) => {
                let icon;
                if (socialLink.title.toLowerCase() === "linkedin")
                    icon = <SiLinkedin className="h-6 w-6" />;
                else if (socialLink.title.toLowerCase() === "twitter")
                    icon = <SiTwitter className="h-6 w-6" />;
                else if (socialLink.title.toLowerCase() === "facebook")
                    icon = <SiFacebook className="h-6 w-6" />;
                else if (socialLink.title.toLowerCase() === "github")
                    icon = <SiGithub className="h-6 w-6" />;
                return (
                    <li key={socialLink._id}>
                        <a
                            href={socialLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors duration-100 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                        >
                            {icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
