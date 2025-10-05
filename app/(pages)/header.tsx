"use client";

import Wrapper from "@/components/globals/Wrapper";
import React from "react";
import { motion } from "motion/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Camera, Grip, Mic, Search, Slash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email().min(2, {
    message: "Email must be correct.",
  }),
  message: z
    .string()
    .min(2, {
      message: "Message must be at least 2 characters.",
    })
    .optional(),
});

const SearchHeader = () => {
  const pathName = usePathname();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          {/* <code className="text-white">{JSON.stringify(data, null, 2)}</code> */}
        </pre>
      ),
    });
  }
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
                <X className="h-4.5 w-4.5 stroke-gray-700  " />
              </Link>
              <Slash className="stroke-gray-400 rotate-137 h-4.5 w-4.5" />
              <Mic className="h-4.5 w-4.5 stroke-gray-700  " />
              <Camera className="h-4.5 w-4.5 stroke-gray-700" />
              <Search className="h-4.5 w-4.5 stroke-gray-700 hidden md:block" />
            </span>
          </div>
        </div>

        <SocialsGrip />
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
        <Sheet>
          <SheetTrigger
            className={cn(
              "hover:font-semibold hover:cursor-pointer hover:text-gray-800",
              "hover:text-gray-900 text-gray-500",
              buttonVariants({
                variant: "link",
              })
            )}
          >
            Contact
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b shadow-sm">
              <SheetTitle className="w-full text-xl font-regular">
                Send Hello to Neeraj
              </SheetTitle>
            </SheetHeader>
            <SheetDescription className="text-black" asChild>
              <motion.div
                className="px-4 w-full space-y-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-regular text">
                            Your Name (required)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John doe"
                              {...field}
                              className="shadow-none focus-visible:border-none  focus-visible:ring-zinc-500 rounded-none"
                            />
                          </FormControl>
                          {/* <FormDescription className="text-xs">
                            Please type your real name
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-regular text">
                            Your Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="johndoe@gmail.com"
                              {...field}
                              className="shadow-none focus-visible:border-none  focus-visible:ring-zinc-500 rounded-none"
                            />
                          </FormControl>
                          {/* <FormDescription className="text-xs">
                            Please type your correct email
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-regular text">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about yourself"
                              {...field}
                              className="shadow-none focus-visible:border-none  focus-visible:ring-zinc-500 resize-none h-28 rounded-none"
                            />
                          </FormControl>
                          {/* <FormDescription className="text-xs">
                            Please write your the reason
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </motion.div>
            </SheetDescription>
            <SheetFooter className="flex flex-col gap-4">
              <p className="text-xs">
                When you submit this form, you may be asked to provide personal
                information such as your name, email address, or any other
                details necessary for us to respond to your inquiry.
              </p>
              <Button
                className="rounded-full border border-black bg-blue-100 hover:bg-blue-200 hover:cursor-pointer text-black"
                disabled
              >
                Submit
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Wrapper>
    </div>
  );
};

export default SearchHeader;
