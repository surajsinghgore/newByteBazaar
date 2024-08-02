import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/Provider";
import Header from '../components/Header/page'
import CartPopUpModal from "@/components/modal/CartPopUpModal";
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
      <Providers>

      <Header />
      
      {children}
      <CartPopUpModal />
      </Providers>
      </body>
    </html>
  );
}
