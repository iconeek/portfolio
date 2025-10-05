import Link from "next/link";
import Wrapper from "./Wrapper";

import SocialsGrip from "@/components/globals/grip";

const routes = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Resume",
    href: "/Resume.pdf",
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
        <SocialsGrip />
      </Wrapper>
    </>
  );
};

export default Header;
