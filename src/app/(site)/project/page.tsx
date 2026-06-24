import React from "react";
import ProjectsClient from "./ProjectsClient";
import { client, urlFor } from "@/sanity/client";
import { projectsQuery } from "@/sanity/queries";
import { projects as staticProjects } from "@/data/projects";

type SanityRaw = {
  _id: string;
  name: string;
  description: string;
  category: "web" | "mobile";
  techStack: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  websiteUrl?: string;
};

export type ProjectItem = {
  _id: string;
  name: string;
  description: string;
  category: "web" | "mobile";
  techStack: string[];
  imageUrl: string | null;
  websiteUrl?: string;
};

export default async function ProjectsPage() {
  const sanityProjects: SanityRaw[] = await client.fetch(projectsQuery);

  const fromStatic: ProjectItem[] = staticProjects.map((p, i) => ({
    _id: `static-${i}`,
    name: p.name,
    description: p.description,
    category: "web" as const,
    techStack: p.techStack,
    imageUrl: p.image,
    websiteUrl: p.links.website,
  }));

  const fromSanity: ProjectItem[] = sanityProjects.map((p) => ({
    _id: p._id,
    name: p.name,
    description: p.description,
    category: p.category,
    techStack: p.techStack ?? [],
    imageUrl: p.image ? urlFor(p.image).width(800).url() : null,
    websiteUrl: p.websiteUrl,
  }));

  const projects = [...fromStatic, ...fromSanity];

  return <ProjectsClient projects={projects} />;
}
