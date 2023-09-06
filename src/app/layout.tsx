import { mono, sans } from "@/ui/styles/fonts";
import "@/ui/styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs boilerplate",
  description: "Nextjs apps boilerplate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
