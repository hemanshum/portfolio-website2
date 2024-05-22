import Socials from "./social";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary absolute lg:bottom-0 inset-x-0 border-t border-white/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-white/60 text-[20px] hover:text-accent transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Hemaanshu MMahajan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
