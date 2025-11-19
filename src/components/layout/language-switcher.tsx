"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "sk" : "en";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            disabled={isPending}
            className="font-medium"
        >
            {locale === "en" ? "SK" : "EN"}
        </Button>
    );
}
