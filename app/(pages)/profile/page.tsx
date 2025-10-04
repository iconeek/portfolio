import Wrapper from "@/components/globals/Wrapper";
import SearchHeader from "../header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

const Profile = () => {
  return (
    <Wrapper className="mt-6 flex flex-col justify-start gap-6 w-full max-w-4xl md:max-w-6xl lg:max-w-7xl">
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Neeraj Neeraj</h1>
          <p className="text-sm text-gray-800 flex items-center gap-2">
            Full Stack Developer
            <EllipsisVertical className="h-4 w-4 stroke-black" />
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full font-regular border-black bg-blue-100 hover:bg-blue-100 hover:cursor-pointer"
        >
          <Link href="/Resume.pdf" className="h-full w-full" target="_blank">
            Resume
          </Link>
        </Button>
        <Button
          className="rounded-full border-none bg-blue-100 font-regular hover:bg-blue-200 hover:cursor-pointer"
          variant="outline"
        >
          <Link href="/about">About</Link>
        </Button>
      </div>

      <div className="flex items-center justify-start gap-2">
        <div className="relative">
          <Image
            src="/pictwo.jpeg"
            alt="Profile"
            height={200}
            width={200}
            className="rounded-lg"
          />
          <p className="absolute bottom-2 left-2 font-semibold text-white">
            Hiking
          </p>
        </div>
        <div className="relative">
          <Image
            src="/picthree.jpeg"
            alt="Profile"
            height={200}
            width={200}
            className="rounded-lg"
          />
          <p className="absolute bottom-2 left-2 font-semibold text-white">
            Activity
          </p>
        </div>
        <div className="relative hidden md:flex">
          <Image
            src="/picone.jpeg"
            alt="Profile"
            height={200}
            width={200}
            className=" rounded-lg"
          />
          <p className="absolute bottom-2 left-2 font-semibold text-white">
            Farm
          </p>
        </div>
      </div>
      <Separator />

      <div className="flex flex-col md:flex-row items-center">
        <div className="">
          <h1 className="text-lg font-semibold">About</h1>
          <p className="mt-4">
            I&apos;m a Full Stack Developer with 1.5+ years of experience
            building web applications that are both functional and
            user-friendly. I&apos;ve worked with technologies like React,
            Node.js, Next.js, and MongoDB, developing everything from smooth,
            responsive frontend interfaces to secure, scalable back-end systems.
            I&apos;m also skilled in translating design concepts into clean,
            interactive UIs using Figma. I&apos;ve focused on delivering secure,
            high-performance applications with authentication and deploying them
            on platforms like AWS and Vercel. Currently, I&apos;m diving deeper
            into Cloud Data Management to broaden my expertise in cloud
            technologies.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-sm">
              <span className="font-bold">Born: </span>March 24, 2000 (age 26
              years),{" "}
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLjAvMmD04s1ILKpMzEtUyMxLyUwEAF5NB-s&q=haryana+india&rlz=1C1UEAD_enCA1179CA1179&oq=haryana&gs_lcrp=EgZjaHJvbWUqDQgAEC4YkQIYgAQYigUyDQgAEC4YkQIYgAQYigUyBggBEEUYOTIMCAIQLhhDGIAEGIoFMgwIAxAuGEMYgAQYigUyEggEEAAYQxiDARixAxiABBiKBTISCAUQLhhDGIMBGLEDGIAEGIoFMgwIBhAAGEMYgAQYigUyBwgHEAAYgAQyBwgIEAAYgATSAQgyMjgyajFqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                className="text-blue-800 hover:underline"
              >
                Haryana,
              </a>{" "}
              <a
                href="https://www.google.com/search?q=india&sca_esv=42764d033c29afff&rlz=1C1UEAD_enCA1179CA1179&sxsrf=AE3TifPOxm_uMkzp5wW0QmoFQX2TY0EILw%3A1759616636143&ei=fJ7haIXMCLCA5OMPuOfDmAk&ved=0ahUKEwiF-qbkyouQAxUwAHkGHbjzEJMQ4dUDCBA&uact=5&oq=india&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWluZGlhMhAQABiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMgsQLhiABBiRAhiKBTILEC4YgAQYkQIYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBhAAGAcYHjIKEAAYgAQYQxiKBTIGEAAYBxgeSKgGUPMEWPMEcAJ4AZABAJgBeKABeKoBAzAuMbgBA8gBAPgBAZgCA6ACjwHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDRAuGIAEGLADGEMYigWYAwCIBgGQBguSBwMyLjGgB5IMsgcDMC4xuAeCAcIHBTItMi4xyAcS&sclient=gws-wiz-serp"
                className="text-blue-800 hover:underline"
              >
                India
              </a>{" "}
            </p>
            <p className="text-sm">
              <span className="font-bold">Education: </span>
              <a
                href="https://www.conestogac.on.ca/"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                Contestoga College,
              </a>{" "}
              <a
                href="https://www.dsu.edu.in/"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                Dayananda Sagar University
              </a>
            </p>
            <p className="text-sm">
              <span className="font-bold">Height: </span>177cm
            </p>
            <p className="text-sm">
              <span className="font-bold">Weight: </span>92 Kg
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Profile;
