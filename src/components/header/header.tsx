import DynamicIcon from "@/ui/dynamicIconRenderer";
import Logo from "./logo/logo";
import NavLinks from "./navbar/navbar";

export default function Header() {
  return (
    <header>
      <Logo />
      <NavLinks />
      <>
        <DynamicIcon svgName="bell" twClass="w-6 h-6 cursor-pointer" />
        <DynamicIcon svgName="search" twClass="w-6 h-6" />
      </>
    </header>
  )
}
