"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimda', label: 'Hakkımda' },
    { href: '/yetenekler', label: 'Eğitim & Yetenekler' },
    { href: '/iletisim', label: 'İletişim' }
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span>Elanur Oğuz</span>
        </Link>

        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>


      </div>
    </header>
  );
}
