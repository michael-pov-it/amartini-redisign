import { Metadata } from "next";
import { FileText, Users, Briefcase, Scale, Globe, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Services - Amartini.eu",
    description: "Explore our comprehensive HR and residence services.",
};

const serviceConfig = {
    residencePermits: { icon: FileText, image: "/images/residence-permits.png" },
    laborMediation: { icon: Users, image: "/images/labor-mediation.png" },
    hrDevelopment: { icon: Briefcase, image: "/images/hr-development.png" },
    legalConsulting: { icon: Scale, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop" },
    relocationServices: { icon: Globe, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop" },
    corporateServices: { icon: Building2, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" }
};

const serviceKeys = Object.keys(serviceConfig) as Array<keyof typeof serviceConfig>;

export default function ServicesPage() {
    const t = useTranslations('Services');
    const tCommon = useTranslations('CTA');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-primary py-16 md:py-24">
                <div className="container px-4 md:px-8 max-w-screen-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        {t('title')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl">
                    <div className="grid gap-12 md:gap-16">
                        {serviceKeys.map((key, index) => {
                            const config = serviceConfig[key];
                            const Icon = config.icon;

                            return (
                                <div key={key} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 space-y-6">
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary">{t(`${key}.title`)}</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {t(`${key}.description`)}
                                        </p>
                                        <ul className="space-y-3">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                                    <span className="text-foreground/80">{t(`${key}.details.${i}`)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <Button asChild>
                                                <Link href="/contact">{tCommon('contact')}</Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex-1 w-full">
                                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg bg-muted">
                                            <Image
                                                src={config.image}
                                                alt={t(`${key}.title`)}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-muted/30 border-t">
                <div className="container px-4 md:px-8 max-w-screen-2xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                        We understand that every business is unique. Contact us to discuss your specific requirements and how we can help.
                    </p>
                    <Button size="lg" variant="default" asChild>
                        <Link href="/contact">{tCommon('contact')}</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
