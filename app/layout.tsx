import type React from "react"
import type { Metadata } from "next"
import { Martian_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
})

export const metadata: Metadata = {
  title: "Giorgia Giannico - Portfolio",
  description: "Designer crafting beautiful and functional digital experiences",
  generator: "v0.app",
  icons: {
    icon: "/images/logo-white.png",
    shortcut: "/images/logo-white.png",
    apple: "/images/logo-white.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${martianMono.variable} ${ibmPlexSans.variable} antialiased`}>
      <body>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer name="Giorgia Giannico" />
      </body>
    </html>
  )
}
