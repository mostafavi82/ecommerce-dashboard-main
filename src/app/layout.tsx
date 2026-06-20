import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/hooks/useTheme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Culters — Sales E-Commerce Dashboard",
  description:
    "Sales e-commerce dashboard built with Next.js and Tailwind CSS.",
};

/** Applies the saved theme before first paint to avoid a flash. */
const noFlashScript = `
(function () {
  try {
    var t = localStorage.getItem("culters-theme");
    if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
