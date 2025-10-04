import Link from "next/link";
import Wrapper from "./Wrapper";
import { Grip } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const routes = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

const Header = () => {
  return (
    <>
      <Wrapper className="h-14 text-sm w-full flex items-center justify-between">
        <div>
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className=" hover:underline px-2 "
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 pointer-events-none">
          <Grip className="h-5 w-5 pointer-events-none" />
          <Avatar className="pointer-events-none">
            <AvatarFallback className="pointer-events-none bg-gray-800 text-white">
              N
            </AvatarFallback>
          </Avatar>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
