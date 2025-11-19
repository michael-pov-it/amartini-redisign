import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
    const t = useTranslations('Header');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-heading text-xl font-bold text-primary">
                            Amartini<span className="text-secondary">.eu</span>
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-primary/80 text-foreground/60">
                        {t('home')}
                    </Link>
                    <Link href="/services" className="transition-colors hover:text-primary/80 text-foreground/60">
                        {t('services')}
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-primary/80 text-foreground/60">
                        {t('about')}
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-primary/80 text-foreground/60">
                        {t('contact')}
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button variant="default" size="sm" className="hidden md:flex">
                        {t('getStarted')}
                    </Button>
                    {/* Mobile Menu Trigger would go here */}
                </div>
            </div>
        </header>
    );
}
