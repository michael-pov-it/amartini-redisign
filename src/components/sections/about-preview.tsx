import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for a professional office image */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Office Image</span>
                            </div>
                            {/* Using a real image from Unsplash if possible, otherwise a colored block */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                    10+
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Years of Experience</p>
                                    <p className="font-bold text-primary">Trusted Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
                            About Amartini
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                            Your Reliable Partner for <br />
                            <span className="text-secondary">Workforce & Immigration</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We relieve companies from the burden of searching for employees and handling complex immigration paperwork. Our mission is to provide economic benefit to the Slovak Republic by integrating qualified international talent.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Comprehensive administration for residence permits",
                                "Professional mediation of labor force",
                                "Guaranteed reliability and legal compliance",
                                "Individual approach to every client"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" asChild>
                            <Link href="/about">More About Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
