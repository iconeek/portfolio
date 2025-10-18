"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
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
import { z, ZodObject } from "zod";
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
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { EmailSchema, formSchema } from "@/schema/emailSchema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/globals/email-template";
import { send } from "@/actions/sendEmail";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<EmailSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: EmailSchema) {
    try {
      setIsLoading(true);
      await send(values);
      form.reset();
      toast.success("Sent successfully");
      setIsLoading(false);
      setOpen((prev) => !prev);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
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
                  autoComplete="off"
                  autoFocus={false}
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
                  <p className="text-xs">
                    When you submit this form, you may be asked to provide
                    personal information such as your name, email address, or
                    any other details necessary for us to respond to your
                    inquiry.
                  </p>
                  <Button
                    className="rounded-full border border-black bg-blue-100 hover:bg-blue-200 hover:cursor-pointer text-black w-full"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting" : "Submit"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </SheetDescription>
          
        </SheetContent>
      </Sheet>
    </div>
  );
}
