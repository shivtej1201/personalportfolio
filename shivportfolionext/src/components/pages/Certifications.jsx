import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import Certification1 from "../../image/Certification1.jpg"; // ✅ If the image exists at this path
import Certification2 from "../../image/Certification2.jpg"; // ✅ If the image exists at this path
import Certification3 from "../../image/Certification3.jpeg"; // ✅ If the image exists at this path
import Certification4 from "../../image/Certification4.jpg"; // ✅ If the image exists at this path
import Certification5 from "../../image/Certification5.jpg"; // ✅ If the image exists at this path
import Certification6 from "../../image/Certification6.jpg"; // ✅ If the image exists at this path

export function Certifications() {
  const testimonials = [
    {
      quote: "It includes complex joins, unions, and sub-queries.",
      name: "SQL (Intermediate)",
      designation: "www.hackerrank.com",
      src: Certification1,
    },
    {
      quote: "It covers topics like Problem solving, SQL, and REST API.",
      name: "Software Engineer",
      designation: "www.hackerrank.com",
      src: Certification2,
    },
    {
      quote:
        "Understand the concepts behind an Event-Driven Architecture and Concurrency",
      name: "NodeJS",
      designation: "www.simplilearn.com",
      src: Certification3,
    },
    {
      quote:
        "It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
      name: "JavaScript (Intermediate)",
      designation: "www.hackerrank.com",
      src: Certification4,
    },
    {
      quote: "It covers topics like React, CSS, and JavaScript.",
      name: "Frontend Developer (React)",
      designation: "www.hackerrank.com",
      src: Certification5,
    },
    {
      quote:
        "Flutter training course is designed to learn how to use Flutter to develop high-quality, interactive mobile applications both for iOS and Android devices.",
      name: "Flutter Course",
      designation: "www.simplilearn.com",
      src: Certification6,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
