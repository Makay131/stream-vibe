import headerConfig from "@/configs/header/headerConfig.json";
import Link from "next/link";
export default function NavLinks() {
    const { navLinks } = headerConfig;
    return (
        <nav>
            <ul>
            {navLinks.map(link => (
                <Link key={link.key} href={link.path}>
                    <li >{link.name}</li>
                </Link> 
            ))}
            </ul>
        </nav>
    )
}