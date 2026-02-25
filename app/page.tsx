import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Starfield } from "@/components/starfield"
import { I18nProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen overflow-hidden bg-background">
        <Starfield />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
          </main>
        </div>
      </div>
    </I18nProvider>
  )
}
