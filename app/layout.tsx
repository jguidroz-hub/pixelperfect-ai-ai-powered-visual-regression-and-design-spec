import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PixelPerfect AI - AI-powered visual regression and design spec adherence for UI development',
  description: 'Value Proposition: Automates Design QA for front-end developers and QA teams, visually comparing implemented UIs against design specs (e.g., Figma, Sketch). Reduces manual errors, speeds up QA cycles, and ensures pixel-perfect consistency and adherence to design systems across various devices.

Target Customer: Front-end development teams, UI/UX designers, and Quality Assurance engineers in product-led companies and agencies building web or mobile applications.

---
Category: Micro-SaaS
Target Market: Front-end development teams, UI/UX designers, and Quality Assurance engineers in product-led companies and agencies building web or mobile applications.
Source Hypothesis ID: 0c32a506-e6f4-4406-9e7a-4b93aed222c6
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PixelPerfect AI - AI-powered visual regression and design spec adherence for UI development</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
