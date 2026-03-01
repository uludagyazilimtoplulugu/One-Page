# StarTech2026 - #hayalimdekimeslek

Bursa Uludağ Üniversitesi Yazılım Topluluğu tarafından düzenlenen **StarTech2026** teknoloji etkinliğinin ön-kayıt landing page sayfası.

## Özellikler

- Koyu temalı, modern ve minimalist tasarım
- Türkçe / İngilizce çoklu dil desteği (client-side i18n)
- Animasyonlu yıldız alanı (canvas) arka plan
- Scroll-tetiklemeli fade-in animasyonları
- Tam responsive (mobile-first) tasarım

## Teknolojiler

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Font:** Space Grotesk, Space Mono
- **Ikon:** Lucide React

## Proje Yapısı

```
app/
  layout.tsx          # Root layout, font ve metadata tanımları
  page.tsx            # Ana sayfa (I18nProvider ile sarılı)
  globals.css         # Tema tokenları ve global stiller
components/
  navbar.tsx          # Üst Menü, dil değiştirme butonu
  hero.tsx            # Hero bölümü (başlık, açıklama, CTA, istatistikler)
  starfield.tsx       # Canvas üzerine animasyonlu yıldız arka planı
  fade-in.tsx         # IntersectionObserver tabanlı fade-in wrapper
lib/
  i18n.tsx            # Dil context, ceviriler (TR/EN)
  utils.ts            # Yardımcı fonksiyonlar (cn)
public/
  images/
    uludagdev.png     # Yazılım Toplulugu Logosu
```

## Kurulum

```bash
pnpm install
pnpm dev
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## Dil Desteği

Sayfa varsayılan olarak Türkçe açılır. Navbar'daki **TR / EN** butonuyla dil değiştirilebilir. Çeviriler `lib/i18n.tsx` dosyasında tanımlıdır.

## Deploy

```bash
pnpm build
pnpm start
```
