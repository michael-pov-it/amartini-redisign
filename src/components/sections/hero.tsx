import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary pt-16 md:pt-0">
            {/* Background Pattern/Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            </div>

            <div className="container relative z-10 flex flex-col items-center gap-8 px-4 text-center md:px-8">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent backdrop-blur-sm">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                    {t('badge')}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {t.rich('title', {
                        br: () => <br className="hidden md:block" />,
                        span: (chunks) => (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-200">
                                {chunks}
                            </span>
                        )
                    })}
                </h1>

                <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
                    {t('description')}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="gap-2 text-base" asChild>
                        <Link href="/contact">
                            {t('cta')} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 hover:text-white border-white/20" asChild>
                        <Link href="/services">
                            {t('explore')}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
