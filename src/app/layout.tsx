// app/layout.tsx # Global layout (wrapper for main pages)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <nav className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
        </nav>
        {children} {/* Render children pages */}
        </body>
        </html>
    );
}
