import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper className="fixed bottom-0 h-14 text-sm w-full flex items-center justify-between bg-[#f2f2f2]">
      <span className="font-regular tracking-wide">Canada</span>
      <span className="font-regular tracking-wide">
        Hire me:
        <Link
          href="mailto:neeraj.webdev26@gmail.com"
          className="ml-1 hover:underline font-semibold text-blue-900"
        >
          Neeraj Neeraj
        </Link>
      </span>
    </Wrapper>
  );
};

export default Footer;
