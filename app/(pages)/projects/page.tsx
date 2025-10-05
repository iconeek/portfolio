import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    name: "Portfolio Website — NStack",
    link: "https://codewithnik.vercel.app",
    author: "Neeraj",
    logo: "/codewithnik.png",
    time: "Aug 9, 2024",
    description:
      "This portfolio website serves as a personal showcase, allowing visitors to learn more about the individual, view their skills, and get in touch with them easily. ",
  },
  {
    name: "Portfolio Website",
    link: "https://neerajportfolio-eight.vercel.app",
    author: "Neeraj",
    logo: "/neerajportfolio.png",
    time: "Jun 22, 2024",
    description:
      "This portfolio website serves as a personal showcase, allowing visitors to learn more about the individual, view their skills, and get in touch with them easily. ",
  },
  {
    name: "Orthodontics Website",
    link: "https://ravi-orthodontics.vercel.app",
    author: "Neeraj",
    logo: "/raviorthodontics.png",
    time: "Oct 9, 2024",
    description:
      "This website enables dental patients to book an appointment. This website is designed to be user-friendly and interaction. It provides a better way to engage with the people.",
  },
  {
    name: "Mental Health Website",
    link: "https://mymentalhole.vercel.app",
    author: "Neeraj",
    logo: "/mentalhole.webp",
    time: "Oct 9, 2024",
    description:
      "This website enables dental patients to book an appointment. This website is designed to be user-friendly and interaction. It provides a better way to engage with the people.",
  },
];

const Projects = () => {
  return (
    <div className="flex items-start ">
      <div className="my-4 flex flex-col gap-6 ">
        {projects.map(({ name, link, logo, author, description, time }) => (
          <div key={name} className="flex gap-2 items-center ">
            <div className="flex flex-col">
              <Link href={link} target="_blank" className="w-fit h-fit">
                <div className="flex items-center justify-start gap-3">
                  <div className="rounded-full">
                    <Avatar className="pointer-events-none">
                      <AvatarFallback className="pointer-events-none bg-gray-800 text-white">
                        N
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm">{author}</p>
                    <p className="text-xs flex items-center">
                      {link}{" "}
                      <Popover>
                        <PopoverTrigger className="hover:cursor-pointer hover:bg-zinc-300 rounded-full p-1">
                          <EllipsisVertical className="h-3 w-3 stroke-black " />
                        </PopoverTrigger>
                        <PopoverContent className="w-fit">
                          <Link
                            href="mailto:neeraj.webdev26@gmail.com"
                            className="flex items-center gap-2 hover:underline"
                          >
                            <ExternalLink className="h-4 w-4 " /> Open
                          </Link>
                        </PopoverContent>
                      </Popover>
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg text-blue-800 hover:underline font-regular tracking-tight">
                    {name}
                  </h1>
                </div>
              </Link>
              <div className=" flex items-center gap-4">
                <p className="text-sm max-w-md">
                  {time} - {description}
                </p>
              </div>
            </div>
            <Link href={link} className=" flex justify-center items-center ">
              <Image
                src={logo}
                alt={name}
                height={150}
                width={150}
                className="rounded-md hover:scale-106 transition object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
      <Separator orientation="vertical" />
      {/* <aside className="hidden lg:flex ">
        <p>Hello</p>
      </aside> */}
    </div>
  );
};

export default Projects;
