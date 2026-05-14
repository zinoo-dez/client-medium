import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/components.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Medium Clone",
  description: "A production-grade Medium clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
