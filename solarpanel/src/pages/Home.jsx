import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Güneş Enerjisi ile Geleceği Aydınlatın</h1>
          <p>En kaliteli ve verimli solar paneller ile enerji tasarrufu sağlayın.</p>
          <a href="" className="btn-primary">Ürünlerimizi Görün</a>
        </div>
      </header>

      <section className="about-section">
        <h2>Hakkımızda</h2>
        <p>Güneş enerjisi sektöründe uzun yıllara dayanan tecrübemizle, en yüksek kaliteye sahip solar paneller sunuyoruz. Amacımız, temiz ve sürdürülebilir enerji çözümleri ile yaşam kalitenizi artırmak.</p>
      </section>

      <section id="products" className="products-section">
        <h2>Ürünlerimiz</h2>
        <div className="product-card">
          <img src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Solar Panel 1" />
          <h3>Panel Modeli 1</h3>
          <p>Yüksek verimlilik ve dayanıklılık.</p>
        </div>
        <div className="product-card">
          <img src="https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Solar Panel 2" />
          <h3>Panel Modeli 2</h3>
          <p>Ekonomik ve etkili enerji çözümü.</p>
        </div>
        <div className="product-card">
          <img src="https://images.pexels.com/photos/4148472/pexels-photo-4148472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Solar Panel 3" />
          <h3>Panel Modeli 3</h3>
          <p>Uzun ömür ve yüksek performans.</p>
        </div>
      </section>

      <section className="why-us-section">
        <h2>Neden Biz?</h2>
        <ul>
          <li>Yüksek kaliteli ürünler</li>
          <li>Uygun fiyatlar</li>
          <li>Profesyonel müşteri hizmetleri</li>
          <li>Uzun garanti süresi</li>
        </ul>
      </section>

      <section className="contact-call-to-action">
        <h2>Bizimle İletişime Geçin</h2>
        <p>Güneş enerjisi çözümlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.</p>
        <a href="#contact" className="btn-primary">İletişim</a>
      </section>
    </div>
  );
};

export default Home;
