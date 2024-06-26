import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/social";
import Photo from "@/components/photo";
import Stats from "@/components/stats";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full mb-8">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web & Mobile App Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Hemanshu</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in planning, designing & programming web & mobile apps.
              <br />{" "}
            </p>
            <p className="font-black mb-9 py-2 px-2 border-y border-white/20">
              Let's Transform Your Ideas into Powerful Apps!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link
                  href="https://drive.google.com/file/d/1T8Isq2QHC9Ag6nwV49FRFWimvgH9I9zM/view?usp=drive_link"
                  target="_blank"
                >
                  Download CV
                </Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
