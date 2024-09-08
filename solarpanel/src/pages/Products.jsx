import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Solar Panel Modeli 1',
    description: 'Yüksek verimlilik ve dayanıklılık.',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'Bu panel, yüksek performanslı fotovoltaik hücreleri ile verimliliği artırır ve uzun ömürlü kullanım sağlar.'
  },
  {
    id: 2,
    name: 'Solar Panel Modeli 2',
    description: 'Ekonomik ve etkili enerji çözümü.',
    image: 'https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'Ekonomik fiyatı ve etkin enerji üretimi ile bu panel, bütçe dostu bir seçenek sunar.'
  },
  {
    id: 3,
    name: 'Solar Panel Modeli 3',
    description: 'Uzun ömür ve yüksek performans.',
    image: 'https://images.pexels.com/photos/4148472/pexels-photo-4148472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'Dayanıklı malzemeleri ve yüksek verimliliği ile uzun yıllar güvenle kullanılabilir.'
  }
];

const Products = () => {
  return (
    <div className="products-container">
      <h1>Ürünlerimiz</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-info-text">{product.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
