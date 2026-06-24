export interface StackItem {
  name: string;
  logo: string;
  link: string;
}

export const stackData: StackItem[] = [
  { name: "React", logo: "/react-logo.svg", link: "https://reactjs.org/" },
  { name: "Next.js", logo: "/nextjs-logo.svg", link: "https://nextjs.org/" },
  {
    name: "Tailwind CSS",
    logo: "/tailwind-logo.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "React Native",
    logo: "/Native.svg",
    link: "https://reactnative.dev/",
  },
  {
    name: "Ant Design",
    logo: "/antdesign-logo.svg",
    link: "https://ant.design/",
  },
  { name: "Expo", logo: "/expo-logo.svg", link: "https://expo.dev/" },
  { name: "Git", logo: "/git-logo.svg", link: "https://git-scm.com/" },
  {
    name: "TypeScript",
    logo: "/ts-logo.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tanstack Query",
    logo: "/tanstack.png",
    link: "https://tanstack.com/query/latest",
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs",
    link: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
    link: "https://www.python.org/",
  },
  {
    name: "Contentful",
    logo: "https://cdn.simpleicons.org/contentful",
    link: "https://www.contentful.com/",
  },
];
