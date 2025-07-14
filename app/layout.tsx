import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeWrapper from "@/components/ThemeWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erin Paul Manjaly - Personal Portfolio",
  description: "Erin Paul Manjaly's personal portfolio website showcasing skills, projects, and certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ThemeProvider>

        {/* ✅ GoatCounter script placed properly */}
        <Script
          data-goatcounter="https://eldragox.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
