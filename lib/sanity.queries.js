import { groq } from "next-sanity";

export const homeSectionQuery = groq`
    *[_type == 'author'][0]{
        name,
        description,
        name_ru,
        description_ru,
        email
    }
`;

export const socialLinksQuery = groq`
    *[_type == 'social'] | order(index) {
        _id,
        title,
        url
    }
`;

export const aboutSectionQuery = groq`
    *[_type == 'author'][0]{
        about,
        about_ru,
        profilePicture
    }
`;

export const featuredProjectsQuery = groq`
    *[_type == 'featuredProject'] | order(index) {
        _id,
        title,
        description,
        title_ru,
        description_ru,
        url, 
        repo,
        screenshot,
        technologies[]->{_id, title, icon}
    }
`;

export const jsProjectsQuery = groq`
    *[_type == 'jsProject'] | order(index) {
        _id,
        title,
        description,
        title_ru,
        description_ru,
        url, 
        repo,
        technologies[]->{_id, title, icon}
    }
`;

export const ctaSectionQuery = groq`
    *[_type == 'author'][0]{
        cta,
        cta_ru
    }
`;
