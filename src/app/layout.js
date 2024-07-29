import { Inter } from "next/font/google";
import "./globals.css";
export const metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "BYTE BAZAAR",
  description: "Byte BAZAAR E-Commerce platform",
  keywords: ["Byte BAZAAR E-Commerce platform"],

  creator: "impactmindz tech solutions",
  publisher: "impactmindz tech solutions",
};

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      
      
      {children}</body>
    </html>
  );
}
