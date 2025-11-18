import { Metadata } from "next";
import { FileText, Users, Briefcase, Scale, Globe, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Services - Amartini.eu",
    description: "Explore our comprehensive HR and residence services.",
};

const services = [
    {
        id: "residence",
        icon: FileText,
        title: "Residence Permits",
        description: "We handle the entire process of obtaining residence permits in Slovakia for non-EU nationals.",
        image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2670&auto=format&fit=crop",
        details: [
            "Temporary residence for employment",
            "Blue Card applications",
            "Family reunification",
            "Permanent residence applications",
            "Renewal of residence permits"
        ]
    },
    {
        id: "labor",
        icon: Users,
        title: "Labor Mediation",
        description: "Connecting employers with skilled workers from third countries to fill labor shortages.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
        details: [
            "Recruitment of qualified personnel",
            "Visa support and documentation",
            "Integration assistance",
            "Labor market testing",
            "Communication with labor offices"
        ]
    },
    {
        id: "hr",
        icon: Briefcase,
        title: "HR Development",
        description: "Strategic human resources consulting to optimize your workforce and company culture.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
        details: [
            "HR process optimization",
            "Employee training and development",
            "Performance management systems",
            "Organizational structure consulting",
            "Compensation and benefits planning"
        ]
    },
    {
        id: "legal",
        icon: Scale,
        title: "Legal Consulting",
        description: "Expert legal advice focusing on immigration law, labor code, and employment regulations.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop",
        details: [
            "Employment contracts review",
            "Compliance with Slovak labor laws",
            "Representation before authorities",
            "Legal audits of HR processes",
            "Dispute resolution support"
        ]
    },
    {
        id: "relocation",
        icon: Globe,
        title: "Relocation Services",
        description: "End-to-end support for employees moving to Slovakia to ensure a smooth transition.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
        details: [
            "Housing search assistance",
            "School and kindergarten registration",
            "Bank account opening",
            "Health insurance registration",
            "Cultural orientation"
        ]
    },
    {
        id: "corporate",
        icon: Building2,
        title: "Corporate Services",
        description: "Tailored solutions for companies establishing or expanding their presence in Slovakia.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        details: [
            "Company formation assistance",
            "Office space consultation",
            "Local market analysis",
            "Regulatory compliance",
            "Business networking"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-primary py-16 md:py-24">
                <div className="container px-4 md:px-8 max-w-screen-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                        Our Services
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300">
                        Professional solutions tailored to your business needs. We specialize in immigration, HR, and legal support.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container px-4 md:px-8 max-w-screen-2xl">
                    <div className="grid gap-12 md:gap-16">
                        {services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                                <span className="text-foreground/80">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4">
                                        <Button asChild>
                                            <Link href="/contact">Request Consultation</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg bg-muted">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
