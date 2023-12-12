import { arimo, domine } from "./font/font";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
// import Navbar from "./components/navbar";

export const metadata = {
  title: "Tech for Good",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domine.variable} ${arimo.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
