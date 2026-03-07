"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const { locale, toggleLocale, t } = useI18n()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/uludagdev.png"
            alt="Bursa Uludag Universitesi Yazilim Toplulugu"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            StarTech<span className="text-accent">2026</span>
          </span>
        </Link>

        <span className="hidden text-sm tracking-widest uppercase text-muted-foreground md:block">
          #hayalimdekimeslek
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label={locale === "tr" ? "Switch to English" : "Switch to Turkish"}
          >
            <span className={locale === "tr" ? "text-foreground" : "text-muted-foreground"}>
              TR
            </span>
            <span className="text-border">/</span>
            <span className={locale === "en" ? "text-foreground" : "text-muted-foreground"}>
              EN
            </span>
          </button>

          <Link
            href="#faq"
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground md:inline-flex"
          >
            {t("faqTitle")}
          </Link>

          <Link
            href="#apply"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("reserveYourPlace")}
          </Link>
        </div>
      </nav>
    </header>
  )
}
