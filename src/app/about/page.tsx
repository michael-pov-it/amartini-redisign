import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - Amartini.eu",
    description: "Learn more about Amartini, our mission, and our team.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-primary py-16 md:py-24">
                <div className="container px-4 md:px-8 max-w-screen-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        About Amartini
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300">
                        Your trusted partner in navigating the complexities of international labor and residence administration.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Amartini is a premier consulting agency based in Slovakia, specializing in the administration of residence permits and the mediation of labor force from third countries.
                                </p>
                                <p>
                                    Founded with the vision of simplifying the bureaucratic hurdles faced by both employers and international workers, we have established ourselves as a reliable partner for businesses across various sectors.
                                </p>
                                <p>
                                    Our team consists of experienced professionals in law, human resources, and immigration policy, dedicated to providing comprehensive services that bring economic benefit to the Slovak Republic while relieving companies of administrative burdens.
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
                            <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To facilitate the seamless integration of international talent into the Slovak labor market, fostering economic growth and cultural exchange.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
                            <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To be the leading agency in Central Europe for comprehensive immigration and HR solutions, known for integrity and excellence.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
                            <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Professionalism</li>
                                <li>Transparency</li>
                                <li>Reliability</li>
                                <li>Client-centric approach</li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-primary rounded-3xl p-12 text-white text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</div>
                                <div className="text-sm md:text-base opacity-80">Permits Processed</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</div>
                                <div className="text-sm md:text-base opacity-80">Corporate Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10+</div>
                                <div className="text-sm md:text-base opacity-80">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100%</div>
                                <div className="text-sm md:text-base opacity-80">Commitment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
