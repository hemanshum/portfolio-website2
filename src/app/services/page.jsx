"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "App Development",
    description:
      "Our Mobile App Development service leverages the latest technologies, including React Native, Expo and Redux Toolkit, to create high-performance, scalable, and user-friendly applications. Whether you're starting from scratch or looking to enhance an existing app, we provide end-to-end solutions tailored to your business needs. Let us help you bring your vision to life with seamless functionality and intuitive design.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Our Web Development service utilizes React, NextJS, Tailwind CSS, Shadcn UI, Parse Server, and MongoDB to create dynamic, responsive, and scalable web applications. From front-end design to back-end integration, we ensure your web app is fast, secure, and user-friendly. Let us transform your ideas into robust web solutions that drive growth and engagement.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Our UI/UX Design service focuses on creating visually appealing and highly intuitive designs that enhance user engagement. We blend aesthetics with functionality to deliver seamless and enjoyable user experiences. From wireframes to final designs, we tailor every aspect to align with your brand and user needs, ensuring a cohesive and captivating digital presence. Craft Exceptional User Experiences and Stunning Interfaces!",
    href: "https://www.behance.net/hemanshum",
  },
  {
    num: "04",
    title: "Design",
    description:
      "Our Design service offers creative solutions for social media posts, presentations, flyers, posters, and logos. We focus on crafting visually compelling and brand-aligned designs that capture attention and convey your message effectively. Whether for digital or print, we ensure your materials stand out and make a lasting impression.",
    href: "",
  },
];

import { delay, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* desctription */}
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
