import type { Metadata } from "next";
import "./globals.css";
import "@globals";

const title = "Dan Pudsey";
const description =
  "This is the portfolio site for Dan Pudsey, a London-based front end developer and digital designer";

// Square image, so X uses the "summary" card rather than "summary_large_image"
const socialImage = {
  url: "https://danpudsey.com/assets/img/v2/meta/social-meta-image-square.png",
  width: 1080,
  height: 1080,
  alt: "Dan Pudsey, front end developer and digital designer",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danpudsey.com"),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: title,
    title,
    description,
    locale: "en_GB",
    images: [socialImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
