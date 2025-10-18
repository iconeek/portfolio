"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
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
  // {
  //   name: "About",
  //   href: "/about",
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
];

export default function Menu() {
  const pathName = usePathname();
  return (
    <>
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
    </>
  );
}
