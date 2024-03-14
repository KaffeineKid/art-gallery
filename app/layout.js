import "./globals.css";
import { Truculenta } from "next/font/google";
import { Kanit } from "next/font/google";
import Header from "./components/Header/Header";

const truculenta = Truculenta({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-truculenta",
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "The Art Gallery",
  description: "Get arsty!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${truculenta.variable}`}>
        {children}
        <Header />
      </body>
    </html>
  );
}
