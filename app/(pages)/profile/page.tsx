import Wrapper from "@/components/globals/Wrapper";
import SearchHeader from "../header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  EllipsisVertical,
  ExternalLink,
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Search,
  Twitter,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Projects from "../projects/page";
import Footer from "@/components/globals/Footer";

const socials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/neerajneerajweb/",
    icon: Linkedin,
    stroke: "stroke-blue-500",
    border: "border-blue-400",
    fill: "hover:fill-blue-600",
  },
  {
    name: "Github",
    href: "https://github.com/iconeek",
    icon: GithubIcon,
    stroke: "stroke-black",
    border: "border-zinc-400",
    fill: "hover:fill-zinc-800",
  },
  {
    name: "X",
    href: "#",
    icon: Twitter,
    stroke: "stroke-blue-500",
    border: "border-blue-400",
    fill: "hover:fill-blue-600",
  },
];

const pictures = [
  {
    src: "/picone.jpeg",
    alt: "My Farm picture",
    name: "Farm",
  },
  {
    src: "/pictwo.jpeg",
    alt: "My Hiking picture",
    name: "Hiking",
  },
  {
    src: "/picthree.jpeg",
    alt: "My Activity picture",
    name: "Activity",
  },
  {
    src: "/picfour.jpeg",
    alt: "My Games picture",
    name: "Games",
  },
  {
    src: "/picfive.jpeg",
    alt: "My Outing picture",
    name: "Outing",
  },
];

const related = [
  {
    name: "Neeraj ",
    suggestion: "Projects",
    href: "/projects",
  },
  {
    name: "Neeraj ",
    suggestion: "About",
    href: "/about",
  },
  {
    name: "Neeraj ",
    suggestion: "Contact",
    href: "/contact",
  },
  {
    name: "Neeraj ",
    suggestion: "Resume",
    href: "/Resume.pdf",
  },
  {
    name: "Neeraj ",
    suggestion: "Homepage",
    href: "/",
  },
];

const Profile = () => {
  return (
    <Wrapper className="my-6 flex flex-col justify-start gap-6 w-full max-w-4xl md:max-w-6xl lg:max-w-7xl">
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Neeraj </h1>
          <p className="text-sm text-gray-800 flex items-center gap-2">
            Full Stack Developer
            <Popover>
              <PopoverTrigger className="hover:cursor-pointer hover:bg-zinc-300 rounded-full p-1">
                <EllipsisVertical className="h-4 w-4 stroke-black " />
              </PopoverTrigger>

              <PopoverContent className="w-fit">
                <Link
                  href="mailto:neeraj.webdev26@gmail.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Mail className="h-4 w-4 " /> Email me
                </Link>
              </PopoverContent>
            </Popover>
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full font-regular border-black bg-blue-100 hover:bg-blue-100 hover:cursor-pointer"
        >
          <Link href="/Resume.pdf" className="h-full w-full" target="_blank">
            Resume
          </Link>
        </Button>
        <Button
          className="rounded-full border-none bg-blue-100 font-regular hover:bg-blue-200 hover:cursor-pointer"
          variant="outline"
        >
          <Link href="/about">About</Link>
        </Button>
      </div>

      <div className="flex items-center justify-start gap-2">
        <Carousel>
          <CarouselContent>
            {pictures.map((picture) => (
              <CarouselItem
                className="basis-1/3 md:basis-1/5"
                key={picture.name}
              >
                <Dialog>
                  <DialogTrigger className="hover:cursor-pointer">
                    <div className="relative">
                      <Image
                        src={picture.src}
                        alt={picture.alt}
                        height={200}
                        width={200}
                        className="rounded-lg"
                      />
                      <p className="absolute bottom-2 left-2 font-semibold text-white">
                        {picture.name}
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <Image
                          src={picture.src}
                          alt={picture.alt}
                          height={410}
                          width={410}
                          className="rounded-lg"
                        />
                      </DialogTitle>
                    </DialogHeader>
                    {/* <DialogFooter>

                    </DialogFooter> */}
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator />

      <div className="flex flex-col md:flex-row items-center">
        <div className="">
          <h1 className="text-xl font-semibold">About</h1>
          <p className="my-4">
            I&apos;m a Full Stack Developer with 1.5+ years of experience
            building web applications that are both functional and
            user-friendly. I&apos;ve worked with technologies like React,
            Node.js, Next.js, and MongoDB, developing everything from smooth,
            responsive frontend interfaces to secure, scalable back-end systems.
            I&apos;m also skilled in translating design concepts into clean,
            interactive UIs using Figma. I&apos;ve focused on delivering secure,
            high-performance applications with authentication and deploying them
            on platforms like AWS and Vercel. Currently, I&apos;m diving deeper
            into Cloud Data Management to broaden my expertise in cloud
            technologies.
          </p>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-bold">Born: </span>March 24, 2000 (age 26
              years),{" "}
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLjAvMmD04s1ILKpMzEtUyMxLyUwEAF5NB-s&q=haryana+india&rlz=1C1UEAD_enCA1179CA1179&oq=haryana&gs_lcrp=EgZjaHJvbWUqDQgAEC4YkQIYgAQYigUyDQgAEC4YkQIYgAQYigUyBggBEEUYOTIMCAIQLhhDGIAEGIoFMgwIAxAuGEMYgAQYigUyEggEEAAYQxiDARixAxiABBiKBTISCAUQLhhDGIMBGLEDGIAEGIoFMgwIBhAAGEMYgAQYigUyBwgHEAAYgAQyBwgIEAAYgATSAQgyMjgyajFqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                className="text-blue-800 hover:underline"
              >
                Haryana,
              </a>{" "}
              <a
                href="https://www.google.com/search?q=india&sca_esv=42764d033c29afff&rlz=1C1UEAD_enCA1179CA1179&sxsrf=AE3TifPOxm_uMkzp5wW0QmoFQX2TY0EILw%3A1759616636143&ei=fJ7haIXMCLCA5OMPuOfDmAk&ved=0ahUKEwiF-qbkyouQAxUwAHkGHbjzEJMQ4dUDCBA&uact=5&oq=india&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWluZGlhMhAQABiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMgsQLhiABBiRAhiKBTILEC4YgAQYkQIYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBhAAGAcYHjIKEAAYgAQYQxiKBTIGEAAYBxgeSKgGUPMEWPMEcAJ4AZABAJgBeKABeKoBAzAuMbgBA8gBAPgBAZgCA6ACjwHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDRAuGIAEGLADGEMYigWYAwCIBgGQBguSBwMyLjGgB5IMsgcDMC4xuAeCAcIHBTItMi4xyAcS&sclient=gws-wiz-serp"
                className="text-blue-800 hover:underline"
              >
                India
              </a>{" "}
            </p>
            <p className="text-sm">
              <span className="font-bold">Education: </span>
              <a
                href="https://www.conestogac.on.ca/"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                Contestoga College,
              </a>{" "}
              <a
                href="https://www.dsu.edu.in/"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                Dayananda Sagar University
              </a>
            </p>
            <p className="text-sm">
              <span className="font-bold">Height: </span>177 cm
            </p>
            <p className="text-sm">
              <span className="font-bold">Weight: </span>201 lbs
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold my-4">Profiles</h1>
        <div className="flex items-center justify-start gap-6">
          {socials.map(({ name, href, icon: Icon, stroke, border, fill }) => (
            <Link
              key={name}
              href={href}
              className={cn("border-2 p-2 rounded-full", border)}
              target="_blank"
            >
              <Icon className={cn("h-5 w-5 ", stroke, fill)} />
            </Link>
          ))}
        </div>
      </div>
      <Separator />
      <Projects />

      <div className="">
        <h1 className="text-2xl font-regular my-4">Related Topics</h1>
        <div className="grid grid-cols-2 space-x-4 space-y-4">
          {related.map(({ name, href, suggestion }) => (
            <Link
              href={href}
              key={suggestion}
              className="flex justify-between items-center gap-2 rounded-md p-4 bg-zinc-100 hover:bg-zinc-200"
            >
              <p className="w-full">
                {name} <span className="font-bold">{suggestion}</span>
              </p>
              <Search className="h-4 w-4 stroke-gray-600" />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
