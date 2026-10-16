import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Pudsey",
  description:
    "This is the portfolio site for Dan Pudsey, a London based front end developer and digital designer",
  icons: {
    icon: "/favicon.ico",
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
