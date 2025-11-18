import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container flex flex-col gap-8 py-8 md:py-12 px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-heading text-xl font-bold text-primary">
                            Amartini<span className="text-secondary">.eu</span>
                        </span>
                        <p className="text-sm text-muted-foreground">
                            Comprehensive services in human resources, residence permits, and legal consulting.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Services</h3>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                            Residence Permits
                        </Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                            Labor Mediation
                        </Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                            HR Consulting
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Company</h3>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                            Contact
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Contact</h3>
                        <p className="text-sm text-muted-foreground">
                            Bratislava, Slovakia
                        </p>
                        <p className="text-sm text-muted-foreground">
                            info@amartini.eu
                        </p>
                        <p className="text-sm text-muted-foreground">
                            +421 900 000 000
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t pt-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Amartini.eu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
