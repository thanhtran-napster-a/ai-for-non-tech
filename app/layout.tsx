import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vibe Coding — Build Real Things Without Writing Code",
  description: "How to go from idea to live website in an afternoon — no developer required.",
  openGraph: {
    title: "Vibe Coding — Build Real Things Without Writing Code",
    description: "How to go from idea to live website in an afternoon — no developer required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} antialiased bg-cream`}>
        {children}
      </body>
    </html>
  );
}
