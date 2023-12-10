import headerConfig from "@/configs/header/headerConfig.json";
export default function Logo() {
    const { logoDesktop, desktopBreakpoint, logoLaptop, laptopBreakpoint, logoMobile } = headerConfig;
    return (
        <picture>
            <source media={`(min-width: ${desktopBreakpoint})`} srcSet={logoDesktop} />
            <source media={`(min-width: ${laptopBreakpoint})`} srcSet={logoLaptop} />
            <img src={logoMobile} alt="StreamVibe Logo" />
        </picture>
    )
}