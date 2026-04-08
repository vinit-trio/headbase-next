import BackToTop from "./components/BackToTop";
import ClickBurst from "./components/ClickBurst";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

export const metadata = {
  title: "Headbase",
  description: "IT solutions for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </LenisProvider>
        <ClickBurst />
      </body>
    </html>
  );
}