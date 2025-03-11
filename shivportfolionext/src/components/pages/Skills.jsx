import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import { Import } from "lucide-react";
import Skill1 from "../../image/skill1.png";
import Skill2 from "../../image/skill2.png";
import Skill3 from "../../image/skill3.png";
import Skill4 from "../../image/skill4.png";

export function Skills() {
  return (
    <div className="mx-auto px-16">
      <h1 className="py-10 text-center text-4xl md:text-[3rem] font-bold mt-1 leading-none">
        Technical Skills
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: Skill2,
    title: "Front-End",
    description:
      "HTML, CSS, JavaScript, Bootstrap, AJAX, JSON, React.js, Next.js, Redux, Material-UI, Tailwind CSS, Styled Components, and more.",
    link: "https://stripe.com",
  },
  {
    icon: Skill3, // ✅ Ensure image exists in `public/images/`
    title: "Back-End",
    description:
      "Node.js, Express.js, MongoDB, Mongoose, Redux.js, FireBase, RESTful APIs, GraphQL, and more.",
    link: "https://netflix.com",
  },
  {
    icon: Skill1, // ✅ Update filename if needed
    title: "Development Tools",
    description:
      "Microsoft Visual Studio Code, Tailwind CSS, Figma, AEM, and more.",
    link: "https://google.com",
  },
  {
    icon: Skill4, // ✅ Ensure correct filename
    title: "Platforms",
    description: "Windows, Git, GitHub, AWS, Render, Netlify, and more.",
    link: "https://meta.com",
  },
];
