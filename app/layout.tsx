import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Mika × Bacchi | SUMMER FESTIVAL 2026";
const description =
  "美伽ちゃんへ。2026年の深川八幡祭りに一緒に行くための、特別な招待状。";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  applicationName: "Mika × Bacchi",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title,
    description,
    siteName: "Mika × Bacchi",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 909,
        alt: "Mika × Bacchi — SUMMER FESTIVAL 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
