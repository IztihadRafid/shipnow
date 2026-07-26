import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito-sans',
});



export const metadata: Metadata = {
  title: "ShipNow",
  description: "ShipNow is a shipping management platform that helps businesses streamline their shipping processes, track shipments, and improve customer satisfaction. With ShipNow, you can easily manage your shipments, generate shipping labels, and get real-time updates on your deliveries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full  xl:max-w-[1440px] mx-auto">{children}</body>
    </html>
  );
}
