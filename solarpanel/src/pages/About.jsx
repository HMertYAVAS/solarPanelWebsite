import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Hakkımızda</h1>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Enerjinin Geleceği Burada Başlıyor</h2>
          <p>
            Güneş enerjisi, günümüzün en dinamik ve sürdürülebilir enerji kaynaklarından biridir. Biz, [Firma Adı], bu geleceği şekillendiren lider bir güneş enerjisi çözümleri sağlayıcısı olarak, enerji dönüşümünde önemli bir rol oynuyoruz. 20 yılı aşkın tecrübemizle, yenilikçi ve güvenilir solar panel çözümleri sunarak, hem bireysel hem de kurumsal müşterilerimizin enerji ihtiyaçlarını karşılıyoruz.
          </p>
          <img src="https://images.pexels.com/photos/1108557/pexels-photo-1108557.jpeg" alt="Güneş Enerjisi" className="about-image-large" />
          <h2>Vizyonumuz</h2>
          <p>
            Güneş enerjisinin herkes için erişilebilir ve ekonomik bir çözüm olmasını sağlamak, vizyonumuzu oluşturmaktadır. Müşterilerimize, çevreye duyarlı ve maliyet etkin enerji çözümleri sunarak, enerji tüketimlerini optimize etmelerini ve sürdürülebilir bir yaşam tarzını benimsemelerini sağlıyoruz. Bizim için enerji sadece bir ihtiyaç değil, aynı zamanda geleceğe dair bir taahhüttür.
          </p>
          <img src="https://images.pexels.com/photos/256138/pexels-photo-256138.jpeg" alt="Güneş Panelleri" className="about-image-large" />
          <h2>Misyonumuz</h2>
          <p>
            Misyonumuz, en yüksek kalite standartlarına sahip güneş panelleri ve enerji çözümleri sunarak, müşterilerimize uzun ömürlü ve verimli enerji çözümleri sağlamaktır. Yatırım yaptığınız her ürün, ileri teknoloji ile üretilmiş ve kalite kontrol testlerinden geçirilmiştir. Ekibimiz, yenilikçi yaklaşımları ve müşteri odaklı hizmet anlayışı ile her zaman yanınızda.
          </p>
          <img src="https://images.pexels.com/photos/4148472/pexels-photo-4148472.jpeg" alt="Enerji Sistemi" className="about-image-large" />
          <h2>Neden Biz?</h2>
          <ul>
            <li>Kalite ve Güvenilirlik: Ürünlerimiz, uluslararası kalite standartlarına uygun olarak üretilir ve her biri sıkı kalite kontrol testlerinden geçer. Müşterilerimize güvenilir ve uzun ömürlü enerji çözümleri sunuyoruz.</li>
            <li>Yenilikçi Teknoloji: Sektördeki en son teknolojileri takip ediyor ve uyguluyoruz. Solar panellerimiz, yüksek verimlilik ve dayanıklılık sağlamak için en son teknolojilere sahip olup, enerji üretiminde maksimum performans sunar.</li>
            <li>Çevre Dostu Yaklaşım: Sürdürülebilirlik, iş modelimizin merkezindedir. Çevreye duyarlı üretim süreçlerimiz ve enerji çözümlerimiz, karbon ayak izinizi azaltmanıza yardımcı olur.</li>
            <li>Profesyonel Destek: Deneyimli ve uzman ekibimiz, ihtiyaçlarınızı anlamak ve en uygun çözümleri sunmak için buradadır. Satış sonrası destek hizmetlerimizle, her adımda yanınızdayız.</li>
          </ul>
          <h2>Ürün ve Hizmetlerimiz</h2>
          <p>
            <strong>Solar Paneller:</strong> Yüksek verimlilik ve dayanıklılığa sahip geniş bir solar panel yelpazesi sunuyoruz. Her ihtiyaca yönelik çözümlerimizle, enerji gereksinimlerinizi en iyi şekilde karşılıyoruz.
          </p>
          <p>
            <strong>Enerji Sistemleri:</strong> Güneş enerjisi sistemlerinin kurulumu ve bakımı konusundaki uzmanlığımızla, size en iyi performansı sağlayacak enerji sistemlerini tasarlıyor ve uyguluyoruz.
          </p>
          <p>
            <strong>Danışmanlık Hizmetleri:</strong> Enerji ihtiyacınıza uygun en iyi çözümleri bulmanıza yardımcı olmak için uzman danışmanlık hizmetleri sunuyoruz. İhtiyaç analizi ve sistem tasarımı konularında profesyonel destek sağlıyoruz.
          </p>
          <h2>Gelecek Vizyonumuz</h2>
          <p>
            Gelecek, güneş enerjisi ile şekilleniyor ve biz bu dönüşümün öncüsü olmaktan gurur duyuyoruz. Ar-Ge yatırımlarımız ve yenilikçi projelerimizle, güneş enerjisinin potansiyelini en üst düzeye çıkarmak için çalışıyoruz. Enerji ihtiyacınızı karşılamak ve çevreye duyarlı çözümler sunmak için sürekli olarak gelişiyoruz.
          </p>
          <p>[Firma Adı], güneş enerjisinin sunduğu tüm avantajları size sunmak için burada. Daha temiz, daha sürdürülebilir bir gelecek için bizimle birlikte ilerleyin.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
