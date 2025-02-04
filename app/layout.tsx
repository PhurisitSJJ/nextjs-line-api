import type { Metadata } from "next";
import { anuphan } from "@/app/ui/fonts/font";
import "./globals.css";


export const metadata: Metadata = {
  title: "NIM-SEE-SENG",
  description: "NIM NIM NIM",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${anuphan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
