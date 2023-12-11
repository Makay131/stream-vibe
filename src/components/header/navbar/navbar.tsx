"use client";

import headerConfig from "@/configs/header/headerConfig.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
    type?: 'non-mobile' | 'mobile',
}

export default function NavLinks({ type = 'non-mobile'} : NavLinksProps) {
    const { navLinks } = headerConfig;
    const pathname = usePathname();

    if(type === 'non-mobile')
    return (
            <ul className="hidden md:flex items-center bg-vibe-black-06 rounded-lg 2xl:rounded-xl border-[3px] 2xl:border-4 py-2 2xl:py-2.5 pl-2 2xl:pl-2.5 pr-[30px] 2xl:pr-10 border-vibe-black-12 gap-4 2xl:gap-[30px]">
                {navLinks.map(link => (
                    <Link key={link.key} href={link.path}>
                        <li className={`text-vibe-grey-75 text-sm 2xl:text-lg font-normal leading-[21px] 2xl:leading-[27px] hover:text-vibe-white duration-300 ${pathname === link.path ? 'py-3 2xl:py-[14px] px-5 2xl:px-6 rounded-lg bg-vibe-black-10 border border-vibe-black-10 text-vibe-white font-medium' : ''}`}>{link.name}</li>
                    </Link> 
                ))}
            </ul>
    )
    if(type === 'mobile')
    return (
            <ul className="flex flex-col items-center justify-center min-h-screen bg-vibe-black-06 gap-4">
                {navLinks.map(link => (
                    <Link key={link.key} href={link.path}>
                        <li className={`text-vibe-grey-75 text-sm 2xl:text-lg font-normal leading-[21px] 2xl:leading-[27px] hover:text-vibe-white duration-300 ${pathname === link.path ? 'py-3 2xl:py-[14px] px-5 2xl:px-6 rounded-lg bg-vibe-black-10 border border-vibe-black-10 text-vibe-white font-medium' : ''}`}>{link.name}</li>
                    </Link> 
                ))}
            </ul>
)
}