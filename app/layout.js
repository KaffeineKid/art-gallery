import "./globals.css";
import { Truculenta } from "next/font/google";

const truculenta = Truculenta({ subsets: ["latin"], weight: ["100"]});

export const metadata = {
  title: "The Art Gallery",
  description: "Get arsty!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={truculenta.className}>
      {children}
      </body>
    </html>
  );
}
