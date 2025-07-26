import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = [
    {
      image: '/src/assets/images/banner-1.jpg',
      alt: "women's latest fashion sale",
      subtitle: "Trending item",
      title: "Women's latest fashion sale",
      text: "starting at $ 20.00",
      buttonText: "Shop now"
    },
    {
      image: '/src/assets/images/banner-2.jpg',
      alt: "modern sunglasses",
      subtitle: "Trending accessories",
      title: "Modern sunglasses",
      text: "starting at $ 15.00",
      buttonText: "Shop now"
    },
    {
      image: '/src/assets/images/banner-3.jpg',
      alt: "new fashion summer sale",
      subtitle: "Sale Offer",
      title: "New fashion summer sale",
      text: "starting at $ 29.99",
      buttonText: "Shop now"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {bannerData.map((slide, index) => (
            <div 
              key={index} 
              className={`slider-item ${index === currentSlide ? 'active' : ''}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <img src={slide.image} alt={slide.alt} className="banner-img" />
              <div className="banner-content">
                <p className="banner-subtitle">{slide.subtitle}</p>
                <h2 className="banner-title">{slide.title}</h2>
                <p className="banner-text">
                  starting at $ <b>{slide.text.split('$')[1].split('.')[0]}</b>.{slide.text.split('.')[1]}
                </p>
                <a href="#" className="banner-btn">{slide.buttonText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner; 