import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import Image from "next/image";
import BajajLogo from "../../image/BajajLogo.png";
import OsumareLogo from "../../image/OsumareLogo.webp";
import DandeLogo from "../../image/DandeLogo.png";

export function Experience() {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            <strong>Software Developer @ Bajaj Technology Services</strong>
            <br />
            Feb 2024 - Present | E-commerce Domain
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Built responsive SPAs with React.js + Tailwind CSS
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Developed RESTful APIs with Node.js/Express.js (300ms avg
              response)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Integrated Firebase for real-time database updates
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <Image
              src={BajajLogo} // Replace with actual image path
              alt="E-commerce Platform"
              className="rounded-lg object-cover aspect-square h-18 w-42"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            <strong>
              Full Stack Developer Intern @ Osumare Marketing Solutions
            </strong>
            <br />
            Aug 2023 - Feb 2024 | E-commerce Domain
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Implemented sales analytics dashboard with 50% faster
              processing
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Optimized mobile UI achieving 95+ Lighthouse score
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Collaborated on CI/CD pipeline implementation
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <Image
              src={OsumareLogo} // Replace with actual image path
              alt="Sales Dashboard"
              className="rounded-lg object-cover aspect-square h-18 w-42"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            <strong>
              Technical Support Engineer@ Govind Dande and Sons Pvt Ltd
            </strong>
            <br />
            2021 - 2022 | Full Stack E-commerce Solution
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Provided technical support for enterprise systems
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ JWT authentication & cart management system
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Implemented automated monitoring solutions
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <Image
              src={DandeLogo} // Replace with actual image path
              alt="Flipkart Clone"
              className="rounded-lg object-cover aspect-square h-18 w-42"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
