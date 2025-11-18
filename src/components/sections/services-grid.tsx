import { Briefcase, FileText, Users, Globe, Scale, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: FileText,
        title: "Residence Permits",
        description: "Complete administration for temporary and permanent residence in Slovakia for non-EU nationals.",
    },
    {
        icon: Users,
        title: "Labor Mediation",
        description: "Connecting companies with qualified labor force from third countries to fill vacant positions.",
    },
    {
        icon: Briefcase,
        title: "HR Development",
        description: "Comprehensive strategies for human resources, training, and workforce optimization.",
    },
    {
        icon: Scale,
        title: "Legal Consulting",
        description: "Expert advice on immigration law, labor codes, and employment regulations.",
    },
    {
        icon: Globe,
        title: "Relocation Services",
        description: "Full support for employees moving to Slovakia, including housing and integration.",
    },
    {
        icon: Building2,
        title: "Corporate Services",
        description: "Tailored solutions for businesses expanding their workforce with international talent.",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Our Expertise
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        We offer a wide range of professional services designed to streamline your business operations and immigration processes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-sm transition-all hover:shadow-md border border-border/50 hover:border-primary/20"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                {service.description}
                            </p>
                            <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors">
                                Learn more <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
