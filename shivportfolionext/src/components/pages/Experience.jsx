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
              ✅ Designed and developed scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring seamless integration with Stripe/PayPal/Razorpay for secure payment processing.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Built a dynamic e-commerce platform with features like cart management, order tracking, and real-time payment status updates.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Enhanced security by tokenizing sensitive data (JWT) and adhering to PCI-DSS compliance standards for payment gateway integrations.
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
              ✅ Created reusable UI components (e.g., dashboards, payment forms) with Material-UI, improving development efficiency.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Reduced payment gateway API errors by implementing error-handling middleware and user-friendly alerts for failed transactions.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Collaborated with backend teams to design MongoDB schemas for storing transaction histories and user invoices, ensuring data consistency.
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
              Front End Developer @ Govind Dande and Sons Pvt Ltd
            </strong>
            <br />
            2021 - 2022 | Full Stack E-commerce Solution
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Developed an admin panel with React.js and Chart.js to visualize transaction analytics, helping stakeholders track revenue growth and user behavior.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ utomated reconciliation of payment gateway data with MongoDB records using cron jobs, reducing manual efforts.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              ✅ Mentored junior developers in code reviews and best practices for maintaining secure, scalable payment systems.
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
