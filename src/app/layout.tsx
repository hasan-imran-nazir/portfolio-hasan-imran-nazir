import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Hasan Imran Nazir | Front-End Developer Portfolio",
  description:
    "The personal portfolio of Hasan Imran Nazir, a front-end developer working with React, Next.js, TypeScript, and Tailwind CSS, and a Computer Science and Engineering student at Feni University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="dot-pattern min-h-screen bg-background text-ink antialiased selection:bg-primary selection:text-white">
        {/* Ambient chromatic glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/12 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 h-[550px] w-[550px] rounded-full bg-cyan/25 blur-[130px]" />
          <div className="absolute top-2/3 left-10 h-[500px] w-[500px] rounded-full bg-rose-soft/50 blur-[120px]" />
          <div className="absolute -bottom-20 right-1/4 h-[650px] w-[650px] rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <Header />
        {children}
      </body>
    </html>
  );
}
