import Wrapper from "@/components/globals/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Camera, Mic, Search, Slash } from "lucide-react";
import Image from "next/image";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper className="flex flex-col items-center justify-center space-y-4">
        <Image src="/google.png" alt="Logo" width={400} height={400} className="object-contain" />

        <div className="rounded-full shadow-md hover:shadow-lg border h-12 w-full max-w-lg flex items-center justify-between px-4">
          <span className="flex gap-2 items-center">
            <Search className="h-4.5 w-4.5 stroke-gray-500" />
            <span className="flex items-center">
              NEERAJ
              <Slash className="stroke-black animate-caret-blink rotate-137 h-5 w-5" />
            </span>
          </span>

          <span className="flex gap-4.5">
            <Mic className="h-4.5 w-4.5 stroke-gray-700  " />
            <Camera className="h-4.5 w-4.5 stroke-gray-700" />
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
          <Button
            className="font-normal antialiased tracking-normal"
            variant="secondary"
          >
            I&apos;m Feeling Lucky
          </Button>
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
