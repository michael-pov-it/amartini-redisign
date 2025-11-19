import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/40">
            <div className="container flex flex-col gap-8 py-8 md:py-12 px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-heading text-xl font-bold text-primary">
                            Amartini<span className="text-secondary">.eu</span>
                        </span>
                        <p className="text-sm text-muted-foreground">
                            {t('description')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">{t('services')}</h3>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                            {t('services')}
                        </Link>
                        {/* We can add more specific links if needed, but for now generic or specific from translation if we want */}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">{t('company')}</h3>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                            {t('about')}
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                            {t('contact')}
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            {t('privacyPolicy')}
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">{t('contact')}</h3>
                        <p className="text-sm text-muted-foreground">
                            Bratislava, Slovakia
                        </p>
                        <p className="text-sm text-muted-foreground">
                            info@amartini.eu
                        </p>
                        <p className="text-sm text-muted-foreground">
                            +421 900 000 000
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t pt-4">
                    <p className="text-xs text-muted-foreground">
                        {t('rights', { year: currentYear })}
                    </p>
                </div>
            </div>
        </footer>
    );
}
