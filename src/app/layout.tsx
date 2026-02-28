import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "陶孟春 | 前端开发工程师",
  description: "4年前端开发经验，精通 React、TypeScript，专注于构建高性能、可维护的 Web 应用",
  keywords: ["前端开发", "React", "TypeScript", "Next.js", "Web开发"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}