export const metadata = {
  title: "Hakkımda | Elanur Oğuz",
  description: "Elanur Oğuz hakkında detaylı bilgi, kariyer hedefleri ve ilgi alanları.",
};

export default function Hakkimda() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Hakkımda</h1>
        <p className="page-subtitle">Kariyer yolculuğum, hedeflerim ve vizyonum</p>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem' }}>
        <div className="glass-card">
          <h2 className="skill-category-title" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Profil & Özet</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Kütahya Dumlupınar Üniversitesi Simav Meslek Yüksekokulu Bilgisayar Programcılığı bölümü öğrencisiyim. Teknolojik gelişmeleri yakından takip eden, sürekli öğrenmeye ve kendini geliştirmeye odaklı bir yazılımcı adayıyım.
          </p>
          <p>
            Enerjik, gelişime açık ve motivasyonu yüksek yapımla ekiplere değer katarken, yeni teknolojileri hızla kavrayarak kendimi sektöre en iyi şekilde hazırlamayı hedefliyorum.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="skill-category-title" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Temel Amaç & Vizyon</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            En temel amacım, sektörü yakından öğrenmek, kurumsal süreçleri tecrübe etmek ve akademik eğitimimi pratik bilgilerle güçlendirmektir.
          </p>
          <p>
            Kurumsal standartları ve işleyişi yerinde gözlemleyerek gerçek dünya problemlerine çözümler üreten bir mühendislik vizyonu kazanmak istiyorum.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ marginBottom: '3rem' }}>
        <h2 className="skill-category-title" style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Gelecek Hedefleri & İlgi Alanları</h2>
        
        <div className="grid-3">
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>OOP ve Yazılım Standartları</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Mevcut Python ve C# bilgimi nesne yönelimli programlama (OOP) prensipleriyle derinleştirmek ve yazdığım kodları kurumsal yazılım standartlarına taşımak.
            </p>
          </div>
          
          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>Veri Tabanı Modelleme</h3>
            <p style={{ fontSize: '0.95rem' }}>
              SQL ve veri tabanı yönetimi alanındaki akademik birikimimi, sektör yapısına ve büyük ölçekli projelere uygun veri modellerini inceleyerek pratik olarak geliştirmek.
            </p>
          </div>

          <div style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>Agile & Modern Metodolojiler</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Sektörde yaygın olarak kullanılan modern yazılım geliştirme metodolojilerini (Agile/Scrum) profesyonel bir ekibin işleyişi içinde gözlemleyerek deneyim kazanmak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
