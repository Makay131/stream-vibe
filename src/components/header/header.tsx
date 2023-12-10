import DynamicIcon from "@/ui/dynamicIconRenderer";
import Logo from "./logo/logo";
import NavLinks from "./navbar/navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-[15px] 2xl:py-[18px] bg-transparent fixed top-0 left-0 right-0 px-4 lg:px-20 2xl:px-[162px] z-10">
      <Logo />
        <NavLinks />
        <span className="hidden md:flex items-center gap-3.5 2xl:gap-7">
          <DynamicIcon svgName="bell" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
          <DynamicIcon svgName="search" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
        </span>
        <div className="p-3 flex items-center justify-center md:hidden bg-vibe-black-10 border-[3px] border-vibe-black-15 rounded-md cursor-pointer">
          <DynamicIcon svgName="menu" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
        </div>
    </header>
  )
}
