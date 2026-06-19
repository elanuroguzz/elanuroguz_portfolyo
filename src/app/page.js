import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-info">
        <span className="hero-subtitle">Merhaba, Ben</span>
        <h1 className="hero-title">Elanur Oğuz</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'block' }}>
          Bilgisayar Programcısı
        </p>
        <p className="hero-desc">
          Teknolojik gelişmeleri yakından takip eden, sürekli öğrenmeye ve kendini geliştirmeye odaklı bir yazılımcı adayıyım. Akademik eğitimimi pratik projelerle destekleyerek sektöre güçlü bir adım atmayı hedefliyorum.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link href="/hakkimda" className="btn btn-primary">
            Hakkımda Daha Fazla
          </Link>
          <Link href="/iletisim" className="btn btn-secondary">
            İletişime Geç
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-shape"></div>
      </div>
    </div>
  );
}
