import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Category from '../components/Category';
import ProductShowcase from '../components/ProductShowcase';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  // New Arrivals data
  const newArrivals = [
    {
      id: 1,
      defaultImage: '/src/assets/images/products/clothes-1.jpg',
      title: 'Relaxed Short full Sleeve T-Shirt',
      category: 'Clothes',
      price: '45.00',
      originalPrice: '12.00'
    },
    {
      id: 2,
      defaultImage: '/src/assets/images/products/clothes-2.jpg',
      title: 'Girls pnk Embro design Top',
      category: 'Clothes',
      price: '61.00',
      originalPrice: '9.00'
    },
    {
      id: 3,
      defaultImage: '/src/assets/images/products/clothes-3.jpg',
      title: 'Black Floral Wrap Midi Skirt',
      category: 'Clothes',
      price: '76.00',
      originalPrice: '25.00'
    },
    {
      id: 4,
      defaultImage: '/src/assets/images/products/shirt-1.jpg',
      title: 'Pure Garment Dyed Cotton Shirt',
      category: 'Mens Fashion',
      price: '68.00',
      originalPrice: '31.00'
    },
    {
      id: 5,
      defaultImage: '/src/assets/images/products/jacket-5.jpg',
      title: 'MEN Yarn Fleece Full-Zip Jacket',
      category: 'Winter wear',
      price: '61.00',
      originalPrice: '11.00'
    },
    {
      id: 6,
      defaultImage: '/src/assets/images/products/jacket-1.jpg',
      title: 'Mens Winter Leathers Jackets',
      category: 'Winter wear',
      price: '32.00',
      originalPrice: '20.00'
    },
    {
      id: 7,
      defaultImage: '/src/assets/images/products/jacket-3.jpg',
      title: 'Mens Winter Leathers Jackets',
      category: 'Jackets',
      price: '50.00',
      originalPrice: '25.00'
    },
    {
      id: 8,
      defaultImage: '/src/assets/images/products/shorts-1.jpg',
      title: 'Better Basics French Terry Sweatshorts',
      category: 'Shorts',
      price: '20.00',
      originalPrice: '10.00'
    }
  ];

  // Trending data
  const trending = [
    {
      id: 9,
      defaultImage: '/src/assets/images/products/sports-1.jpg',
      title: 'Running & Trekking Shoes - White',
      category: 'Sports',
      price: '49.00',
      originalPrice: '15.00'
    },
    {
      id: 10,
      defaultImage: '/src/assets/images/products/sports-2.jpg',
      title: 'Trekking & Running Shoes - black',
      category: 'Sports',
      price: '78.00',
      originalPrice: '36.00'
    },
    {
      id: 11,
      defaultImage: '/src/assets/images/products/party-wear-1.jpg',
      title: 'Womens Party Wear Shoes',
      category: 'Party wear',
      price: '94.00',
      originalPrice: '42.00'
    },
    {
      id: 12,
      defaultImage: '/src/assets/images/products/sports-3.jpg',
      title: 'Sports Claw Women\'s Shoes',
      category: 'Sports',
      price: '54.00',
      originalPrice: '65.00'
    },
    {
      id: 13,
      defaultImage: '/src/assets/images/products/sports-6.jpg',
      title: 'Air Trekking Shoes - white',
      category: 'Sports',
      price: '52.00',
      originalPrice: '55.00'
    },
    {
      id: 14,
      defaultImage: '/src/assets/images/products/shoe-3.jpg',
      title: 'Boot With Suede Detail',
      category: 'boots',
      price: '20.00',
      originalPrice: '30.00'
    },
    {
      id: 15,
      defaultImage: '/src/assets/images/products/shoe-1.jpg',
      title: 'Men\'s Leather Formal Wear shoes',
      category: 'formal',
      price: '56.00',
      originalPrice: '78.00'
    },
    {
      id: 16,
      defaultImage: '/src/assets/images/products/shoe-2.jpg',
      title: 'Casual Men\'s Brown shoes',
      category: 'Casual',
      price: '50.00',
      originalPrice: '55.00'
    }
  ];

  // Top Rated data
  const topRated = [
    {
      id: 17,
      defaultImage: '/src/assets/images/products/watch-3.jpg',
      title: 'Pocket Watch Leather Pouch',
      category: 'Watches',
      price: '50.00',
      originalPrice: '34.00'
    },
    {
      id: 18,
      defaultImage: '/src/assets/images/products/jewellery-3.jpg',
      title: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: '84.00',
      originalPrice: '30.00'
    },
    {
      id: 19,
      defaultImage: '/src/assets/images/products/perfume.jpg',
      title: 'Titan 100 Ml Womens Perfume',
      category: 'Perfume',
      price: '42.00',
      originalPrice: '10.00'
    },
    {
      id: 20,
      defaultImage: '/src/assets/images/products/belt.jpg',
      title: 'Men\'s Leather Reversible Belt',
      category: 'Belt',
      price: '24.00',
      originalPrice: '10.00'
    },
    {
      id: 21,
      defaultImage: '/src/assets/images/products/jewellery-2.jpg',
      title: 'platinum Zircon Classic Ring',
      category: 'jewellery',
      price: '62.00',
      originalPrice: '65.00'
    },
    {
      id: 22,
      defaultImage: '/src/assets/images/products/watch-1.jpg',
      title: 'Smart watche Vital Plus',
      category: 'Watches',
      price: '56.00',
      originalPrice: '78.00'
    },
    {
      id: 23,
      defaultImage: '/src/assets/images/products/shampoo.jpg',
      title: 'shampoo conditioner packs',
      category: 'cosmetics',
      price: '20.00',
      originalPrice: '30.00'
    },
    {
      id: 24,
      defaultImage: '/src/assets/images/products/jewellery-1.jpg',
      title: 'Rose Gold Peacock Earrings',
      category: 'jewellery',
      price: '20.00',
      originalPrice: '30.00'
    }
  ];

  // New Products data
  const newProducts = [
    {
      id: 25,
      defaultImage: '/src/assets/images/products/jacket-3.jpg',
      hoverImage: '/src/assets/images/products/jacket-4.jpg',
      category: 'jacket',
      title: 'Mens Winter Leathers Jackets',
      price: '48.00',
      originalPrice: '75.00',
      badge: '15%',
      rating: 3
    },
    {
      id: 26,
      defaultImage: '/src/assets/images/products/shirt-1.jpg',
      hoverImage: '/src/assets/images/products/shirt-2.jpg',
      category: 'shirt',
      title: 'Pure Garment Dyed Cotton Shirt',
      price: '45.00',
      originalPrice: '56.00',
      badge: 'sale',
      badgeType: 'angle',
      badgeColor: 'black',
      rating: 3
    },
    {
      id: 27,
      defaultImage: '/src/assets/images/products/jacket-5.jpg',
      hoverImage: '/src/assets/images/products/jacket-6.jpg',
      category: 'Jacket',
      title: 'MEN Yarn Fleece Full-Zip Jacket',
      price: '58.00',
      originalPrice: '65.00',
      rating: 3
    },
    {
      id: 28,
      defaultImage: '/src/assets/images/products/clothes-3.jpg',
      hoverImage: '/src/assets/images/products/clothes-4.jpg',
      category: 'skirt',
      title: 'Black Floral Wrap Midi Skirt',
      price: '25.00',
      originalPrice: '35.00',
      badge: 'new',
      badgeType: 'angle',
      badgeColor: 'pink',
      rating: 5
    },
    {
      id: 29,
      defaultImage: '/src/assets/images/products/shoe-2.jpg',
      hoverImage: '/src/assets/images/products/shoe-2_1.jpg',
      category: 'casual',
      title: 'Casual Men\'s Brown shoes',
      price: '99.00',
      originalPrice: '105.00',
      rating: 5
    },
    {
      id: 30,
      defaultImage: '/src/assets/images/products/watch-3.jpg',
      hoverImage: '/src/assets/images/products/watch-4.jpg',
      category: 'watches',
      title: 'Pocket Watch Leather Pouch',
      price: '150.00',
      originalPrice: '170.00',
      badge: 'sale',
      badgeType: 'angle',
      badgeColor: 'black',
      rating: 3
    },
    {
      id: 31,
      defaultImage: '/src/assets/images/products/watch-1.jpg',
      hoverImage: '/src/assets/images/products/watch-2.jpg',
      category: 'watches',
      title: 'Smart watche Vital Plus',
      price: '100.00',
      originalPrice: '120.00',
      rating: 4
    },
    {
      id: 32,
      defaultImage: '/src/assets/images/products/party-wear-1.jpg',
      hoverImage: '/src/assets/images/products/party-wear-2.jpg',
      category: 'party wear',
      title: 'Womens Party Wear Shoes',
      price: '25.00',
      originalPrice: '30.00',
      badge: 'sale',
      badgeType: 'angle',
      badgeColor: 'black',
      rating: 3
    },
    {
      id: 33,
      defaultImage: '/src/assets/images/products/jacket-1.jpg',
      hoverImage: '/src/assets/images/products/jacket-2.jpg',
      category: 'jacket',
      title: 'Mens Winter Leathers Jackets',
      price: '32.00',
      originalPrice: '45.00',
      rating: 4
    },
    {
      defaultImage: '/src/assets/images/products/sports-2.jpg',
      hoverImage: '/src/assets/images/products/sports-4.jpg',
      category: 'sports',
      title: 'Trekking & Running Shoes - black',
      price: '58.00',
      originalPrice: '64.00',
      badge: 'sale',
      badgeType: 'angle',
      badgeColor: 'black',
      rating: 3
    },
    {
      defaultImage: '/src/assets/images/products/shoe-1.jpg',
      hoverImage: '/src/assets/images/products/shoe-1_1.jpg',
      category: 'formal',
      title: 'Men\'s Leather Formal Wear shoes',
      price: '50.00',
      originalPrice: '65.00',
      rating: 4
    },
    {
      defaultImage: '/src/assets/images/products/shorts-1.jpg',
      hoverImage: '/src/assets/images/products/shorts-2.jpg',
      category: 'shorts',
      title: 'Better Basics French Terry Sweatshorts',
      price: '78.00',
      originalPrice: '85.00',
      badge: 'sale',
      badgeType: 'angle',
      badgeColor: 'black',
      rating: 3
    }
  ];

  return (
    <main>
      <Banner />
      <Category />
      
      <div className="product-container">
        <div className="container">
          <div className="product-minimal">
            <ProductShowcase title="New Arrivals" products={newArrivals} />
            <ProductShowcase title="Trending" products={trending} />
            <ProductShowcase title="Top Rated" products={topRated} />
          </div>
          
          <ProductGrid title="New Products" products={newProducts} />
        </div>
      </div>

      {/* Testimonials, CTA & Service */}
      <div>
        <div className="container">
          <div className="testimonials-box">
            <div className="testimonial">
              <h2 className="title">testimonial</h2>
              <div className="testimonial-card">
                <img src="/src/assets/images/testimonial-1.jpg" alt="alan doe" className="testimonial-banner" width="80" height="80" />
                <p className="testimonial-name">Alan Doe</p>
                <p className="testimonial-title">CEO & Founder Invision</p>
                <img src="/src/assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26" />
                <p className="testimonial-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor dolor sit amet.
                </p>
              </div>
            </div>

            <div className="cta-container">
              <img src="/src/assets/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />
              <a href="#" className="cta-content">
                <p className="discount">25% Discount</p>
                <h2 className="cta-title">Summer collection</h2>
                <p className="cta-text">Starting @ $10</p>
                <button className="cta-btn">Shop now</button>
              </a>
            </div>

            <div className="service">
              <h2 className="title">Our Services</h2>
              <div className="service-container">
                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="boat-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">UK Orders Only</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            <div className="blog-card">
              <a href="#">
                <img src="/src/assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner" />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">Fashion</a>
                <a href="#">
                  <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                </a>
                <p className="blog-meta">
                  By <cite>Mr Admin</cite> / <time dateTime="2022-04-06">Apr 06, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img src="/src/assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle." className="blog-banner" width="300" />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">Clothes</a>
                <h3>
                  <a href="#" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Robin</cite> / <time dateTime="2022-01-18">Jan 18, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img src="/src/assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue." className="blog-banner" width="300" />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">Shoes</a>
                <h3>
                  <a href="#" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Selsa</cite> / <time dateTime="2022-02-10">Feb 10, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img src="/src/assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle." className="blog-banner" width="300" />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">Electronics</a>
                <h3>
                  <a href="#" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Pawar</cite> / <time dateTime="2022-03-15">Mar 15, 2022</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage; 