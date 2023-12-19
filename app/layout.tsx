import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "elderJoy",
  description:
    "elderJoy é uma plataforma para gerenciamento de eventos voltado para a terceira idade.",
  icons: "/assets/images/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={`${poppins.variable} bg-primary-50`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
