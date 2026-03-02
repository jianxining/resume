import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "陶孟春 | 软件开发工程师",
  description: "中国科学技术大学硕士在读，专注Agent开发、后端架构与AI应用。美团、Hidream.ai实习经验。",
  keywords: ["软件开发", "Agent开发", "后端开发", "AI应用", "中科大"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
