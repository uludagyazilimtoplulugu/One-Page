"use client"

import { FadeIn } from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "oklch(0.72 0.19 160)" }}
        aria-hidden="true"
      />

      <FadeIn delay={100} direction="none">
        <span className="mb-6 inline-block rounded-full border border-accent/50 bg-accent/10 px-5 py-2 text-sm font-semibold tracking-widest uppercase text-accent">
          {t("comingSoon")}
        </span>
      </FadeIn>

      <FadeIn delay={200}>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          {t("headline")}
        </h1>
      </FadeIn>

      <FadeIn delay={350}>
        <p className="mt-4 text-xl font-medium tracking-wide text-accent md:text-2xl">
          {t("hashtag")}
        </p>
      </FadeIn>

      <FadeIn delay={500}>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
          {t("description")}
        </p>
      </FadeIn>

      <FadeIn delay={650}>
        <a
          href="#apply"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all hover:scale-105 hover:opacity-90"
        >
          {t("reserveYourPlace")}
          <ArrowLeft className="h-4 w-4" />
        </a>
      </FadeIn>

      <FadeIn delay={800}>
        <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">2026</span>
            <span>{t("year")}</span>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">4</span>
            <span>{t("tracks")}</span>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">1</span>
            <span>{t("mission")}</span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
