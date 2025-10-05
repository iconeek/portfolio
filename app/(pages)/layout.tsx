import React from "react";
import SearchHeader from "./header";
import Wrapper from "@/components/globals/Wrapper";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/globals/Footer";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper>
        <SearchHeader />
        <Separator />
        {children}
      </Wrapper>
      <Footer />
    </>
  );
};

export default PagesLayout;
