import Wrapper from "@/components/globals/Wrapper";
import React from "react";
import { motion } from "motion/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Camera, Grip, Mic, Search, Slash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SocialsGrip from "@/components/globals/grip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import Contact from "./contact";

import { EmailSchema } from "@/schema/emailSchema";
import Menu from "./menu";

const SearchHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between h-24">
        <div className="flex items-center justify-start w-full">
          <Link href="/">
            <Image
              src="/qoogleshort.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain hidden md:block"
            />
          </Link>
          <div className="rounded-full shadow-md hover:shadow-lg border h-14 w-full max-w-sm md:max-w-md lg:max-w-lg flex items-center justify-between px-4">
            <span className="flex items-center">
              <Link href="/">
                <Image
                  src="/qoogleshort.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain flex md:hidden mr-1"
                />
              </Link>
              <span className="flex items-center">Neeraj </span>
            </span>
            <span className="flex gap-3">
              <Link href="/">
                <X className="h-4.5 w-4.5 stroke-gray-700 hover:stroke-gray-500" />
              </Link>
              <Slash className="stroke-gray-400 rotate-137 h-4.5 w-4.5" />
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
                      Kidding! I am actually not listening.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Tooltip>
                <TooltipTrigger>
                  <Camera className="h-4.5 w-4.5 cursor-pointer hover:stroke-gray-500 stroke-gray-700" />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Camera called in sick</p>
                </TooltipContent>
              </Tooltip>
              <Search className="h-4.5 w-4.5 stroke-gray-700 hidden md:block" />
            </span>
          </div>
        </div>

        <SocialsGrip />
      </div>

      <Wrapper className="flex items-center justify-start gap-1 h-full max-w-4xl md:max-w-6xl lg:max-w-7xl">
        <Menu />
        <Contact />
      </Wrapper>
    </div>
  );
};

export default SearchHeader;
