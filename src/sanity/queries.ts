 import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    description,
    category,
    techStack,
    image,
    websiteUrl,
  }
`;
