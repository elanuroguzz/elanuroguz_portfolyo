export const metadata = {
  title: "Yetenekler & Eğitim | Elanur Oğuz",
  description: "Elanur Oğuz'un teknik becerileri, akademik geçmişi ve sertifikaları.",
};

export default function YeteneklerEgitim() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Eğitim & Yetenekler</h1>
        <p className="page-subtitle">Teknik yetkinliklerim, akademik odak noktalarım ve aldığım eğitimler</p>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem' }}>
        
        {/* Left Column: Technical Skills */}
        <div className="glass-card">
          <h2 className="skill-category-title" style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>Teknik Yetkinlikler</h2>
          
          <div className="skill-category">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Programlama Dilleri</h3>
            <div className="skills-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C#</span>
            </div>
          </div>

          <div className="skill-category" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Veri Tabanı</h3>
            <div className="skills-tags">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Veri Tabanı Yönetim Sistemleri (DBMS)</span>
            </div>
          </div>

          <div className="skill-category" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Araçlar & Platformlar</h3>
            <div className="skills-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Visual Studio</span>
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="glass-card">
          <h2 className="skill-category-title" style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>Eğitim Geçmişi</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2025 - Devam Ediyor</div>
              <h3 className="timeline-title">Ön Lisans</h3>
              <p className="timeline-subtitle">Kütahya Dumlupınar Üniversitesi Simav Meslek Yüksekokulu</p>
              <p style={{ fontSize: '0.95rem' }}>
                <strong>Bölüm:</strong> Bilgisayar Programcılığı <br />
                <strong>Sosyal Rol:</strong> Bölüm / Sınıf Temsilcisi
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 - 2025 Mezunu</div>
              <h3 className="timeline-title">Lise</h3>
              <p className="timeline-subtitle">Akkent Anadolu Lisesi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Certificates */}
      <div className="glass-card" style={{ marginBottom: '3rem' }}>
        <h2 className="skill-category-title" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Sertifikalar</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="contact-icon-wrapper" style={{ flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Python ile Yapay Zeka Eğitimi</h3>
            <p style={{ fontSize: '0.95rem' }}>
              <strong>Kurum:</strong> Techcareer.net | <strong>Yıl:</strong> 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
