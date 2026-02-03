import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BedtimeRitual",
  description:
    "AI-generated mythological stories that help parents guide calm, caring bedtime routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(245,245,220,1))]">
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 ring-1 ring-primary/15 shadow-sm">
                  <span className="text-sm font-semibold tracking-[0.3em] text-primary">
                    BR
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
                    BedtimeRitual
                  </p>
                  <p className="text-sm text-primary/70">
                    Mythic stories for calmer nights
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-primary/60">
                <span className="rounded-full bg-white/70 px-4 py-2 ring-1 ring-primary/15">
                  Parent guided
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 ring-1 ring-primary/15">
                  Child friendly
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 ring-1 ring-primary/15">
                  Gentle routines
                </span>
              </div>
            </header>
            <main className="flex-1 py-10">{children}</main>
            <footer className="text-xs text-primary/60">
              Crafted with kindness, rituals, and a little bit of mythology.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
