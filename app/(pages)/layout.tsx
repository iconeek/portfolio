import React from "react";
import SearchHeader from "./header";
import Wrapper from "@/components/globals/Wrapper";
import { Separator } from "@/components/ui/separator";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <SearchHeader />
      <Separator />
      {children}
    </Wrapper>
  );
};

export default PagesLayout;
