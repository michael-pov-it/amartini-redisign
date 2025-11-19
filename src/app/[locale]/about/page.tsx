import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "About Us - Amartini.eu",
    description: "Learn more about Amartini, our mission, and our team.",
};

export default function AboutPage() {
    const t = useTranslations('AboutPage');

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

            {/* Main Content */}
            <section className="py-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">{t('whoWeAre')}</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    {t('description1')}
                                </p>
                                <p>
                                    {t('description2')}
                                </p>
                                <p>
                                    {t('description3')}
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            {/* Placeholder for team/office image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                    </div>

                    {/* Mission & Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
                            <h3 className="text-xl font-bold text-primary mb-4">{t('mission')}</h3>
                            <p className="text-muted-foreground">
                                {t('missionText')}
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
                            <h3 className="text-xl font-bold text-primary mb-4">{t('vision')}</h3>
                            <p className="text-muted-foreground">
                                {t('visionText')}
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
                            <h3 className="text-xl font-bold text-primary mb-4">{t('values')}</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>{t('valuesList.0')}</li>
                                <li>{t('valuesList.1')}</li>
                                <li>{t('valuesList.2')}</li>
                                <li>{t('valuesList.3')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-primary rounded-3xl p-12 text-white text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</div>
                                <div className="text-sm md:text-base opacity-80">{t('stats.permits')}</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</div>
                                <div className="text-sm md:text-base opacity-80">{t('stats.clients')}</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10+</div>
                                <div className="text-sm md:text-base opacity-80">{t('stats.experience')}</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</div>
                                <div className="text-sm md:text-base opacity-80">{t('stats.commitment')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
