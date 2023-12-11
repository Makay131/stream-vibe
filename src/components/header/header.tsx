"use client";

import DynamicIcon from "@/ui/dynamicIconRenderer";
import Logo from "./logo/logo";
import NavLinks from "./navbar/navbar";
import { useState } from "react";

export default function Header() {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(true);
  };
  return (
    <header className="flex justify-between items-center pt-10 pb-[14px] md:py-[15px] 2xl:py-[18px] bg-transparent fixed top-0 left-0 right-0 px-4 lg:px-20 2xl:px-[162px] z-10">
      <Logo />
        <NavLinks />
        <span className="hidden md:flex items-center gap-3.5 2xl:gap-7">
          <DynamicIcon svgName="bell" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
          <DynamicIcon svgName="search" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
        </span>
        <div className="p-3 flex items-center justify-center md:hidden bg-vibe-black-10 border-[3px] border-vibe-black-15 rounded-md cursor-pointer"
          onClick={toggleNavbar}>
          <DynamicIcon svgName="menu" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
        </div>
        <div
        className={`fixed md:hidden top-0 right-0 h-full w-full bg-white overflow-y-auto transition-transform transform ${
          isNavbarVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          <span onClick={() => setNavbarVisibility(false)}>
            <DynamicIcon svgName="close" twClass="w-6 h-6 cursor-pointer absolute top-10 right-10" />
          </span>
          <NavLinks type="mobile"/>
      </div>
    </header>
  )
}
