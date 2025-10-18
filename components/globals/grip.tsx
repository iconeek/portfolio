"use client";

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
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect, usePathname } from "next/navigation";
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
  const pathName = usePathname();
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-2">
          <Grip className="h-5 w-5" />
        </PopoverTrigger>
        <PopoverContent className="w-fit gap-8 grid grid-cols-2">
          {socials.map(({ name, href, icon: Icon, stroke, border, fill }) => (
            <Link
              href={href}
              key={name}
              target="_blank"
              className="p-4 hover:bg-zinc-100 rounded-lg"
            >
              <span className="flex  flex-col items-center justify-center">
                <Icon className={cn("", stroke, fill)} />
                <span className="h-full w-full text-sm text-center">
                  {name}
                </span>
              </span>
            </Link>
          ))}
        </PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <AvatarFallback className=" bg-gray-800 text-white">
              N
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Button
            variant="link"
            onClick={() => {
              redirect("/");
            }}
            className={cn("h-full w-full cursor-pointer")}
          >
            <DropdownMenuLabel>{pathName === "/" ? "Hello User" : "Sign out"}</DropdownMenuLabel>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SocialsGrip;
