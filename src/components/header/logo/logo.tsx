import headerConfig from "@/configs/header/headerConfig.json";
export default function Logo() {
    const { logoDesktop, desktopBreakpoint, logoLaptop, laptopBreakpoint, logoMobile } = headerConfig;
    return (
        <picture>
            <source media={logoDesktop} srcSet={desktopBreakpoint}/>
            <source media={logoLaptop} srcSet={laptopBreakpoint}/>
            <img src={logoMobile} alt="StreamVibe Logo" />
        </picture>
    )
}