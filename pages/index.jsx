import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import {
    getHomeSection,
    getEmail,
    getCtaSection,
    getSocialLinks,
    getAboutSection,
    getFeaturedProjects,
    getJsProjects,
    getFooterText,
} from "@/lib/sanity.client";

import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import JsProjectsSection from "../components/JsProjectsSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home({
    homeSection,
    email,
    socialLinks,
    aboutSection,
    featuredProjects,
    jsProjects,
    ctaSection,
    footerText,
}) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const homeSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const workSectionRef = useRef(null);
    const ctaSectionRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isNavVisible ? "hidden" : "";
    }, [isNavVisible]);

    function scrollToSection(ref) {
        return (e) => {
            e.preventDefault();
            setIsNavVisible(false);
            ref.current?.scrollIntoView({ behavior: "smooth" });
        };
    }

    return (
        <>
            <Head>
                <title>Roman Druzhinin | Web Developer</title>
                <meta
                    name="description"
                    content="Roman is a web developer passionate about designing and building blazingly fast, modern, and highly interactive web applications."
                    key="desc"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:title"
                    content="Roman Druzhinin | Web Developer"
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content="Roman is a web developer passionate about designing and building blazingly fast, modern, and highly interactive web applications."
                    key="ogdesc"
                />
                <meta
                    property="og:image"
                    content="/ogimage.png"
                    key="ogimage"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header
                isNavVisible={isNavVisible}
                setIsNavVisible={setIsNavVisible}
                socialLinks={socialLinks}
                scrollToHome={scrollToSection(homeSectionRef)}
                scrollToAbout={scrollToSection(aboutSectionRef)}
                scrollToWork={scrollToSection(workSectionRef)}
                scrollToCta={scrollToSection(ctaSectionRef)}
            />
            <main>
                <HomeSection
                    ref={homeSectionRef}
                    homeSection={homeSection}
                    email={email.email}
                />
                <AboutSection
                    ref={aboutSectionRef}
                    aboutSection={aboutSection}
                    scrollToWork={scrollToSection(workSectionRef)}
                    scrollToCta={scrollToSection(ctaSectionRef)}
                />
                <WorkSection
                    ref={workSectionRef}
                    featuredProjects={featuredProjects}
                />
                <JsProjectsSection jsProjects={jsProjects} />
                <CtaSection
                    ref={ctaSectionRef}
                    ctaSection={ctaSection}
                    email={email.email}
                />
            </main>
            <Footer text={footerText} />
        </>
    );
}

export async function getStaticProps() {
    const [
        homeSection,
        email,
        socialLinks,
        aboutSection,
        featuredProjects,
        jsProjects,
        ctaSection,
        footerText,
    ] = await Promise.all([
        getHomeSection(),
        getEmail(),
        getSocialLinks(),
        getAboutSection(),
        getFeaturedProjects(),
        getJsProjects(),
        getCtaSection(),
        getFooterText(),
    ]);

    return {
        props: {
            homeSection,
            email,
            socialLinks,
            aboutSection,
            featuredProjects,
            jsProjects,
            ctaSection,
            footerText,
        },
    };
}
