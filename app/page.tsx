"use client";

import Wrapper from "@/components/globals/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Camera, Mic, Search, Slash } from "lucide-react";
import Image from "next/image";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import Typewriter from "typewriter-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper className="flex flex-col items-center justify-center space-y-4">
        <Image
          src="/qoogle.png"
          alt="Logo"
          width={400}
          height={400}
          className="object-contain"
        />

        <div className="rounded-full shadow-md hover:shadow-lg border h-12 w-full max-w-lg flex items-center justify-between px-4">
          <span className="flex gap-2 items-center">
            <Search className="h-4.5 w-4.5 stroke-gray-500" />
            <span className="flex items-center">
              <Typewriter
                options={{
                  strings: ["Neeraj"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* <Slash className="stroke-black animate-caret-blink rotate-137 h-5 w-5" /> */}
            </span>
          </span>

          <span className="flex gap-4.5">
            <Dialog>
              <DialogTrigger>
                <Mic className="h-4.5 w-4.5 stroke-gray-700 hover:stroke-gray-500 cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="h-screen !w-[100%] !max-w-screen !rounded-none flex items-center justify-center">
                <DialogHeader className="flex flex-col items-center justify-center">
                  <DialogTitle className="p-9 rounded-full bg-red-600 ">
                    <Mic className="size-7 stroke-white animate-pulse" />
                  </DialogTitle>
                  <DialogDescription>
                    HaHa..Gotcha. I am not a real mic.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Tooltip>
              <TooltipTrigger>
                <Camera className="h-4.5 w-4.5 stroke-gray-700" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Camera called in sick</p>
              </TooltipContent>
            </Tooltip>
          </span>
        </div>

        <div className="flex my-2 space-x-6">
          <Link
            href="/profile"
            className={buttonVariants({
              variant: "secondary",
              className:
                "font-normal antialiased tracking-normal hover:border-1 hover:border-gray-300",
            })}
          >
            Qoogle Search
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "secondary",
              className:
                "font-normal antialiased tracking-normal hover:border-1 hover:border-gray-300",
            })}
          >
            I&apos;m Feeling Lucky
          </Link>
        </div>

        <div className="text-xs mt-4">
          <span>
            Qoogle offered in:
            <a
              rel="stylesheet"
              href="#"
              className="text-blue-950 pl-1 hover:underline"
            >
              English
            </a>
          </span>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
