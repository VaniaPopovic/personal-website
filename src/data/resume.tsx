import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vanja Popovic",
  initials: "VP",
  url: "https://vanjapopovic.me",
  location: "Glasgow, UK",
  locationLink: "https://www.google.com/maps/place/Glasgow",
  description: "Full Stack Javascript Developer",
  summary:
    "A dedicated software developer from Cyprus, driven by a passion for innovation and technology, striving to create impactful solutions that bridge the gap between user needs and cutting-edge software.",
  avatarUrl: "/me.jpg",
  skills: [
    "Typescript",
    "Kotlin",
    "Swift",
    "Python",
    "C#",
    "SQL",
    "React",
    "Next.js",
    "Tailwind",
    "React Native",
    "Expo",
    "Express.js",
    "Hono",
    "TRPC",
    "Redux",
    "GraphQL",
    "Vue",
    "Nuxt",
    "Pinia",
    "Firebase",
    "Prisma",
    "Drizzle ORM",
    "Framer Motion",
    "ASP.NET Core",
    "FastAPI",
    "Django",
    "Databricks",
    "Jetpack Compose",
    "SwiftUI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vaniapopovic@icloud.com",
    tel: "+447851632260",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VaniaPopovic",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaniapopovic",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/VaniaPopovic",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vaniapopovic@icloud.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Talking Medicines",
      href: "https://talkingmedicines.com",
      badges: [],
      location: "Glasgow, UK",
      title: "Data Tech Team Lead / Data Engineer",
      logoUrl: "/talkingmedicines.png",
      start: "Dec 2018",
      end: "Present",
      description:
        "Talking Medicines provides AI-powered conversational data intelligence for healthcare marketing, offering insights through the Drug-GPT product to analyze and interpret patient and healthcare professional discussions.",
    },
    {
      company: "Bobbll / Jobvibe",
      href: "https://jobvibe.io",
      badges: [],
      location: "Glasgow, UK",
      title: "Founder / CTO",
      logoUrl: "/jobvibe.png",
      start: "Jun 2018",
      end: "Present",
      description:
        "Jobvibe is a SaaS platform that enables marketing and recruitment teams to collaborate on video content for attracting, screening, onboarding, and retaining talent.",
    },
  ],
  education: [
    {
      school: "University of Glasgow",
      href: "https://www.gla.ac.uk/",
      degree: "MSc Computing Science",
      logoUrl: "/glasgow.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "University of Central Lancashire",
      href: "https://www.uclan.ac.uk/",
      degree: "BSc Computer Science",
      logoUrl: "/uclan.jpg",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Planout",
      href: "https://planoutapp.co",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Planout is an online reservation platform that lets you easily discover and book top spots to eat, drink, party, and swim, all with a seamless and secure booking experience.",
      technologies: [
        "Next.js",
        "Expo",
        "Typescript",
        "MySQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://planoutapp.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/planout.png",
      video: "",
    },
  ],
  publications: [
    {
      title:
        "Classifying patient voice in social media data using neural networks: A comparison of AI models on different data sources and therapeutic domains",
      description:
        "Comparative study using neural networks to classify patient discussions on social media, confirming dataset and linguistic analysis importance in enhancing AI patient voice classification across diverse therapeutic areas and data sources.",
    },
  ],
  languages: [
    { language: "Greek", proficiency: "Native speaker" },
    { language: "Serbian", proficiency: "Native speaker" },
    { language: "English", proficiency: "Fluent" },
    { language: "Spanish", proficiency: "Conversational" },
  ],
} as const;
