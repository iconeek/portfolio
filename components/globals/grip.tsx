import React from "react";
import {
  EllipsisVertical,
  ExternalLink,
  GithubIcon,
  Grip,
  Linkedin,
  LinkedinIcon,
  Mail,
  Twitter,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
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
    name: "Twitter",
    href: "#",
    icon: Twitter,
    stroke: "stroke-blue-500",
    border: "border-blue-400",
    fill: "hover:fill-blue-600",
  },
  {
    name: "Email",
    href: "mailto:neeraj.webdev26@gmail.com",
    icon: Mail,
    stroke: "stroke-red-600",
    border: "border-red-400",
    fill: "",
  },
];

const SocialsGrip = () => {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-2">
          <Grip className="h-5 w-5" />
        </PopoverTrigger>
        <PopoverContent className="w-fit space-x-6 space-y-6 grid grid-cols-2">
          {socials.map(({ name, href, icon: Icon, stroke, border, fill }) => (
            <Link
              href={href}
              key={name}
              target="_blank"
              className="p-2 hover:bg-zinc-100 rounded-lg"
            >
              <span className="flex py-6 flex-col items-center justify-center">
                <Icon className={cn("", stroke, fill)} />
                <span className="h-full w-full text-sm text-center">
                  {name}
                </span>
              </span>
            </Link>
          ))}
        </PopoverContent>
      </Popover>

      <Avatar className="pointer-events-none">
        <AvatarFallback className="pointer-events-none bg-gray-800 text-white">
          N
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SocialsGrip;
