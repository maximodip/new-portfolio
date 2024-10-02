import { defineCollection, z } from "astro:content";

import HtmlIcon from "../components/icons/HtmlIcon.astro";
import CssIcon from "../components/icons/CssIcon.astro";
import JsIcon from "../components/icons/JsIcon.astro";
import TsIcon from "../components/icons/TsIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import NextIcon from "../components/icons/NextIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import NodeIcon from "../components/icons/NodeIcon.astro";
import SqlIcon from "../components/icons/SqlIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import LinuxIcon from "../components/icons/LinuxIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import GithubIcon from "../components/icons/GithubIcon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    img: z.string(),
    type: z.enum(["Pagina web", "Aplicacion web"]),
  }),
});

export const collections = { projects };

export const skills = [
  { title: "HTML", icon: HtmlIcon },
  { title: "CSS", icon: CssIcon },
  { title: "Node.js", icon: NodeIcon },
  { title: "Express", icon: ExpressIcon },
  { title: "JavaScript", icon: JsIcon },
  { title: "TypeScript", icon: TsIcon },
  { title: "React", icon: ReactIcon },
  { title: "Next.js", icon: NextIcon },
  { title: "Astro", icon: AstroIcon },
  { title: "Tailwind", icon: TailwindIcon },
  { title: "Java", icon: JavaIcon },
  { title: "MySQL", icon: SqlIcon },
  { title: "Git", icon: GitIcon },
  { title: "Github", icon: GithubIcon },
  { title: "Linux", icon: LinuxIcon },
];
