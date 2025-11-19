import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Contact Us - Amartini.eu",
    description: "Get in touch with us for professional HR and residence services.",
};

export default function ContactPage() {
    const t = useTranslations('ContactPage');

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

            <section className="py-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-8">{t('getInTouch')}</h2>
                            <p className="text-lg text-muted-foreground mb-10">
                                {t('description')}
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{t('visitUs')}</h3>
                                        <p className="text-muted-foreground">
                                            Amartini s.r.o.<br />
                                            Business Center Bratislava<br />
                                            811 09 Bratislava, Slovakia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{t('emailUs')}</h3>
                                        <p className="text-muted-foreground">
                                            info@amartini.eu<br />
                                            support@amartini.eu
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{t('callUs')}</h3>
                                        <p className="text-muted-foreground">
                                            +421 900 000 000<br />
                                            +421 2 00 00 00 00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{t('openingHours')}</h3>
                                        <p className="text-muted-foreground">
                                            {t('days')}<br />
                                            {t('closed')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                            <h3 className="text-2xl font-bold text-primary mb-6">{t('sendMessage')}</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">{t('form.firstName')}</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">{t('form.lastName')}</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">{t('form.email')}</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">{t('form.subject')}</label>
                                    <select
                                        id="subject"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="">{t('form.selectTopic')}</option>
                                        <option value="residence">{t('form.topics.residence')}</option>
                                        <option value="labor">{t('form.topics.labor')}</option>
                                        <option value="hr">{t('form.topics.hr')}</option>
                                        <option value="other">{t('form.topics.other')}</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">{t('form.message')}</label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder={t('form.message')}
                                    />
                                </div>

                                <Button type="submit" className="w-full">{t('form.submit')}</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
