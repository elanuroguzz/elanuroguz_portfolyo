import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Elanur Oğuz | Portfolyo",
  description: "Elanur Oğuz - Bilgisayar Programcısı Portfolyo Web Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <div className="max-width">
            <p>&copy; {new Date().getFullYear()} Elanur Oğuz. Tüm Hakları Saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
