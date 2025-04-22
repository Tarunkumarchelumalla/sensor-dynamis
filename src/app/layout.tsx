
import Footer from "@/components/footer/page";
import ResponsiveAppBar from "@/components/navbar/page";
import "./_global.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensor Dynamis",
  description:
    "Explore Sensor Dynamis,Proactive Forecasting",
  icons: {
    icon: "/logo.svg",
  },
};
import "./_global.scss";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
