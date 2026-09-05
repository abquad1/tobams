import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: [
    {
      path: "../fonts/Nunito-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = localFont({
  src: [
    {
      path: "../fonts/nunito-sans/nunito-sans.ttf",
      style: "normal",
    },
    {
      path: "../fonts/nunito-sans/nunito-sans-italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobams Group",
  description: "Training and Development",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
