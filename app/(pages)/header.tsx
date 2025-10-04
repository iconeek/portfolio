"use client";

import Wrapper from "@/components/globals/Wrapper";
import React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Camera, Grip, Mic, Search, Slash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "All",
    href: "/profile",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const SearchHeader = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between h-24">
        <div className="flex items-center justify-start w-full">
          <Link href="/">
            <Image
              src="/google.png"
              alt="Logo"
              width={140}
              height={140}
              className="object-contain hidden md:block"
            />
          </Link>
          <div className="rounded-full shadow-md hover:shadow-lg border h-14 w-full max-w-sm md:max-w-md lg:max-w-lg flex items-center justify-between px-4">
            <span className="flex items-center">
              <Link href="/">
                <Image
                  src="/google.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="object-contain flex md:hidden"
                />
              </Link>
              <span className="flex items-center">Neeraj Bhardwaj</span>
            </span>
            <span className="flex gap-3">
              <Link href="/">
                <X className="h-4.5 w-4.5 stroke-gray-700  " />
              </Link>
              <Slash className="stroke-gray-400 rotate-137 h-4.5 w-4.5" />
              <Mic className="h-4.5 w-4.5 stroke-gray-700  " />
              <Camera className="h-4.5 w-4.5 stroke-gray-700" />
              <Search className="h-4.5 w-4.5 stroke-gray-700 hidden md:block" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 pointer-events-none">
          <Grip className="h-5 w-5 pointer-events-none" />
          <Avatar className="pointer-events-none">
            <AvatarFallback className="pointer-events-none bg-gray-800 text-white">
              N
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Wrapper className="flex items-center justify-start gap-1 h-full max-w-4xl md:max-w-6xl lg:max-w-7xl">
        {routes.map((route) => (
          <Button variant="link" key={route.name} asChild>
            <Link
              href={route.href}
              className={cn(
                "hover:font-semibold hover:text-gray-800",
                pathName === route.href ? "text-gray-900 " : "text-gray-500"
              )}
            >
              {route.name}
            </Link>
          </Button>
        ))}
      </Wrapper>
    </div>
  );
};

export default SearchHeader;
