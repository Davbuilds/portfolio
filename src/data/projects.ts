export interface Project {
  name: string;
  description: string;
  techStack: string[];
  links: {
    website?: string;
  };
  image: string;
}

export const projects: Project[] = [
  {
    name: "LangEasy",
    description:
      "LangeasyAI is at the forefront of AI innovation, designed to collect, process, and refine multilingual data. The platform was created in collaboration with technical talents sourced from 3MTT, with the goal of developing Nigeria's first-ever multilingual AI model on both text and audio datasets. LangeasyAI is revolutionizing the way data is harnessed to train AI models, ensuring they are diverse, accurate, and culturally aligned.",
    techStack: ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    links: { website: "https://langeasy.ai/" },
    image: "/langeasy.png",
  },
  {
    name: "Ovation",
    description:
      "Ovation is an internal data quality and review tool. The platform provides a centralized dashboard for reviewing, validating, organizing, and auditing theatre-related data scraped from multiple online sources, ensuring accuracy, consistency, and traceability across the data pipeline.",
    techStack: ["Next.js", "Python", "TypeScript", "Tanstack Query", "Zustand"],
    links: {},
    image: "/ovation.png",
  },
  {
    name: "Audio Chunker",
    description:
      "Audio Annotator is a web application for waveform-based audio segmentation and annotation, enabling precise region editing, validation, and export of audio chunks for AI and speech dataset workflows",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Tanstack Query"],
    links: {
      website:
        "https://chunker-frontend-dev-775818477993.us-central1.run.app/sign-in",
    },
    image: "/chunker.png",
  },
  {
    name: "LLM Portal for Data Cleaning",
    description:
      "Our internal LLM portal is an essential tool for data cleaning and processing. It works in three stages: evaluation, ranking, and fine-tuning. This ensures that any data collected is rigorously examined and optimized, allowing for the highest quality inputs to enhance model training.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Tanstack Query"],
    links: {},
    image: "/langeasy3.png",
  },
  {
    name: "Ifelodun LCDA",
    description: "Official website of Ifelodun Local Council Development Authority, providing residents with access to council news, announcements, and civic information in a clean, content-managed platform powered by Contentful.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Contentful",
      "TypeScript",
      "Tanstack Query",
    ],
    links: { website: "https://www.ifelodunlcda.com/" },
    image: "/ifelodun.png",
  },
  {
    name: "Tayo Oyetibo LP",
    description: "Official campaign and profile website for Tayo Oyetibo, built to present his political vision, achievements, and initiatives to constituents through a fast, modern web experience.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Tanstack Query"],
    links: { website: "https://tolp.vercel.app/" },
    image: "/tolp.png",
  },
    {
    name: "MEDNOVA",
    description: "MEDNOVA is a doctor-patient booking platform that streamlines appointment scheduling, enabling patients to find and book verified doctors with ease while giving healthcare providers a clean dashboard to manage their availability and consultations.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Tanstack Query"],
    links: { website: "https://med-nova.vercel.app/" },
    image: "/Mednova.png",
  },
];
