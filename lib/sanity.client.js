import { config } from "./config";
import { createClient } from "next-sanity";
import * as queries from "./sanity.queries";

export const sanityClient = createClient(config);

export async function getHomeSection() {
    return await sanityClient.fetch(queries.homeSectionQuery);
}

export async function getSocialLinks() {
    return await sanityClient.fetch(queries.socialLinksQuery);
}

export async function getAboutSection() {
    return await sanityClient.fetch(queries.aboutSectionQuery);
}

export async function getFeaturedProjects() {
    return await sanityClient.fetch(queries.featuredProjectsQuery);
}

export async function getJsProjects() {
    return await sanityClient.fetch(queries.jsProjectsQuery);
}

export async function getCtaSection() {
    return await sanityClient.fetch(queries.ctaSectionQuery);
}
