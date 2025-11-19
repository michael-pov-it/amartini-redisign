import { Briefcase, FileText, Users, Globe, Scale, Building2 } from "lucide-react";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const serviceKeys = [
    { id: "residencePermits", icon: FileText },
    { id: "laborMediation", icon: Users },
    { id: "hrDevelopment", icon: Briefcase },
    { id: "legalConsulting", icon: Scale },
    { id: "relocationServices", icon: Globe },
    { id: "corporateServices", icon: Building2 },
];

export function ServicesGrid() {
    const t = useTranslations('Services');

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceKeys.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-sm transition-all hover:shadow-md border border-border/50 hover:border-primary/20"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {t(`${service.id}.title`)}
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                {t(`${service.id}.description`)}
                            </p>
                            <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors">
                                {t('learnMore')} <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/services">{t('viewAll')}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
