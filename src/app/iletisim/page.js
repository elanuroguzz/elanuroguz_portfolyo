"use client";

export default function Iletisim() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">İletişim</h1>
        <p className="page-subtitle">Sorularınız, iş ortaklıkları veya sadece merhaba demek için benimle iletişime geçin</p>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem' }}>
        
        {/* Left Column: Contact Details */}
        <div className="glass-card">
          <h2 className="skill-category-title" style={{ color: 'var(--text-primary)', marginBottom: '2.5rem' }}>İletişim Bilgileri</h2>
          
          <div className="contact-info-list">
            
            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>E-posta</h4>
                <p><a href="mailto:Elanuroguz52@gmail.com" style={{ textDecoration: 'underline' }}>Elanuroguz52@gmail.com</a></p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/elanur-oğuz-169001369" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>linkedin.com/in/elanur-oğuz-169001369</a></p>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p><a href="https://github.com/elanuroguzz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>github.com/elanuroguzz</a></p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-card">
          <h2 className="skill-category-title" style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>Mesaj Gönderin</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Adınız Soyadınız</label>
              <input className="form-control" type="text" id="name" required placeholder="Elanur Oğuz" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">E-posta Adresiniz</label>
              <input className="form-control" type="email" id="email" required placeholder="ornek@alan.com" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Mesajınız</label>
              <textarea className="form-control" id="message" required placeholder="Mesajınızı buraya yazabilirsiniz..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Gönder
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
