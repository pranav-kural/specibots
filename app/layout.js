import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Montserrat, Raleway, Baumans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "SpeciBots",
  description: "Specialized bots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
