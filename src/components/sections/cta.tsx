import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] bg-white/20 rotate-12 blur-3xl rounded-full" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[100%] bg-secondary/30 -rotate-12 blur-3xl rounded-full" />
            </div>

            <div className="container px-4 md:px-8 max-w-screen-2xl relative z-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Ready to Streamline Your HR Processes?
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-10">
                    Whether you need help with residence permits or finding the right employees, our team of experts is here to assist you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                        <Link href="/services">View Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
