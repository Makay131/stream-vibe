import DynamicIcon from "@/ui/dynamicIconRenderer";
import Logo from "./logo/logo";
import NavLinks from "./navbar/navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-[15px] 2xl:py-[18px] bg-transparent">
      <Logo />
      <>
      <NavLinks />
      <span className="flex items-center gap-3.5 2xl:gap-7">
        <DynamicIcon svgName="bell" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
        <DynamicIcon svgName="search" twClass="w-6 h-6 2xl:w-[34px] 2xl:h-[34px] cursor-pointer" />
      </span>
      </>
    </header>
  )
}
