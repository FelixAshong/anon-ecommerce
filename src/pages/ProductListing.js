import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchAndFilter from '../components/SearchAndFilter';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Mock product data - in a real app, this would come from an API
  const mockProducts = [
    {
      id: 1,
      defaultImage: '/src/assets/images/products/clothes-1.jpg',
      hoverImage: '/src/assets/images/products/clothes-2.jpg',
      title: 'Relaxed Short full Sleeve T-Shirt',
      category: 'Clothing',
      price: '45.00',
      originalPrice: '12.00',
      rating: 4.5,
      badge: 'New'
    },
    {
      id: 2,
      defaultImage: '/src/assets/images/products/clothes-2.jpg',
      hoverImage: '/src/assets/images/products/clothes-3.jpg',
      title: 'Girls pnk Embro design Top',
      category: 'Clothing',
      price: '61.00',
      originalPrice: '9.00',
      rating: 4.2,
      badge: 'Sale',
      badgeType: 'angle',
      badgeColor: 'red'
    },
    {
      id: 3,
      defaultImage: '/src/assets/images/products/clothes-3.jpg',
      hoverImage: '/src/assets/images/products/clothes-4.jpg',
      title: 'Black Floral Wrap Midi Skirt',
      category: 'Clothing',
      price: '76.00',
      originalPrice: '25.00',
      rating: 4.8
    },
    {
      id: 4,
      defaultImage: '/src/assets/images/products/shirt-1.jpg',
      hoverImage: '/src/assets/images/products/shirt-2.jpg',
      title: 'Pure Garment Dyed Cotton Shirt',
      category: 'Mens Fashion',
      price: '68.00',
      originalPrice: '31.00',
      rating: 4.3
    },
    {
      id: 5,
      defaultImage: '/src/assets/images/products/jacket-5.jpg',
      hoverImage: '/src/assets/images/products/jacket-6.jpg',
      title: 'MEN Yarn Fleece Full-Zip Jacket',
      category: 'Winter wear',
      price: '61.00',
      originalPrice: '11.00',
      rating: 4.6
    },
    {
      id: 6,
      defaultImage: '/src/assets/images/products/jacket-1.jpg',
      hoverImage: '/src/assets/images/products/jacket-2.jpg',
      title: 'Mens Winter Leathers Jackets',
      category: 'Winter wear',
      price: '32.00',
      originalPrice: '20.00',
      rating: 4.1
    },
    {
      id: 7,
      defaultImage: '/src/assets/images/products/jacket-3.jpg',
      hoverImage: '/src/assets/images/products/jacket-4.jpg',
      title: 'Mens Winter Leathers Jackets',
      category: 'Jackets',
      price: '50.00',
      originalPrice: '25.00',
      rating: 4.4
    },
    {
      id: 8,
      defaultImage: '/src/assets/images/products/shorts-1.jpg',
      hoverImage: '/src/assets/images/products/shorts-2.jpg',
      title: 'Better Basics French Terry Sweatshorts',
      category: 'Shorts',
      price: '20.00',
      originalPrice: '10.00',
      rating: 4.0
    },
    {
      id: 9,
      defaultImage: '/src/assets/images/products/sports-1.jpg',
      hoverImage: '/src/assets/images/products/sports-2.jpg',
      title: 'Running & Trekking Shoes - White',
      category: 'Sports',
      price: '49.00',
      originalPrice: '15.00',
      rating: 4.7
    },
    {
      id: 10,
      defaultImage: '/src/assets/images/products/sports-2.jpg',
      hoverImage: '/src/assets/images/products/sports-3.jpg',
      title: 'Trekking & Running Shoes - black',
      category: 'Sports',
      price: '78.00',
      originalPrice: '36.00',
      rating: 4.5
    },
    {
      id: 11,
      defaultImage: '/src/assets/images/products/party-wear-1.jpg',
      hoverImage: '/src/assets/images/products/party-wear-2.jpg',
      title: 'Womens Party Wear Shoes',
      category: 'Party wear',
      price: '94.00',
      originalPrice: '42.00',
      rating: 4.3
    },
    {
      id: 12,
      defaultImage: '/src/assets/images/products/sports-3.jpg',
      hoverImage: '/src/assets/images/products/sports-4.jpg',
      title: 'Sports Claw Women\'s Shoes',
      category: 'Sports',
      price: '54.00',
      originalPrice: '65.00',
      rating: 4.2
    },
    {
      id: 13,
      defaultImage: '/src/assets/images/products/sports-6.jpg',
      hoverImage: '/src/assets/images/products/sports-5.jpg',
      title: 'Air Trekking Shoes - white',
      category: 'Sports',
      price: '52.00',
      originalPrice: '55.00',
      rating: 4.4
    },
    {
      id: 14,
      defaultImage: '/src/assets/images/products/shoe-3.jpg',
      hoverImage: '/src/assets/images/products/shoe-4.jpg',
      title: 'Boot With Suede Detail',
      category: 'boots',
      price: '20.00',
      originalPrice: '30.00',
      rating: 4.1
    },
    {
      id: 15,
      defaultImage: '/src/assets/images/products/shoe-1.jpg',
      hoverImage: '/src/assets/images/products/shoe-2.jpg',
      title: 'Men\'s Leather Formal Wear shoes',
      category: 'formal',
      price: '56.00',
      originalPrice: '78.00',
      rating: 4.6
    },
    {
      id: 16,
      defaultImage: '/src/assets/images/products/shoe-2.jpg',
      hoverImage: '/src/assets/images/products/shoe-2_1.jpg',
      title: 'Casual Men\'s Brown shoes',
      category: 'Casual',
      price: '50.00',
      originalPrice: '55.00',
      rating: 4.3
    },
    {
      id: 17,
      defaultImage: '/src/assets/images/products/watch-3.jpg',
      hoverImage: '/src/assets/images/products/watch-4.jpg',
      title: 'Pocket Watch Leather Pouch',
      category: 'Watches',
      price: '50.00',
      originalPrice: '34.00',
      rating: 4.5
    },
    {
      id: 18,
      defaultImage: '/src/assets/images/products/jewellery-3.jpg',
      hoverImage: '/src/assets/images/products/jewellery-2.jpg',
      title: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: '84.00',
      originalPrice: '30.00',
      rating: 4.8
    },
    {
      id: 19,
      defaultImage: '/src/assets/images/products/perfume.jpg',
      title: 'Titan 100 Ml Womens Perfume',
      category: 'Perfume',
      price: '42.00',
      originalPrice: '10.00',
      rating: 4.2
    },
    {
      id: 20,
      defaultImage: '/src/assets/images/products/belt.jpg',
      title: 'Men\'s Leather Reversible Belt',
      category: 'Belt',
      price: '24.00',
      originalPrice: '10.00',
      rating: 4.0
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (filters) => {
    let filtered = [...products];

    if (filters.category && filters.category !== 'All Categories') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.priceRange && filters.priceRange !== 'All Prices') {
      const price = parseFloat(filters.priceRange.replace(/[^0-9]/g, ''));
      switch (filters.priceRange) {
        case 'Under $25':
          filtered = filtered.filter(product => parseFloat(product.price) < 25);
          break;
        case '$25 - $50':
          filtered = filtered.filter(product => {
            const p = parseFloat(product.price);
            return p >= 25 && p <= 50;
          });
          break;
        case '$50 - $100':
          filtered = filtered.filter(product => {
            const p = parseFloat(product.price);
            return p >= 50 && p <= 100;
          });
          break;
        case '$100 - $200':
          filtered = filtered.filter(product => {
            const p = parseFloat(product.price);
            return p >= 100 && p <= 200;
          });
          break;
        case 'Over $200':
          filtered = filtered.filter(product => parseFloat(product.price) > 200);
          break;
      }
    }

    if (filters.rating && filters.rating !== 'All Ratings') {
      const minRating = parseInt(filters.rating);
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    setFilteredProducts(filtered);
  };

  const handleSort = (sortBy) => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        // In a real app, this would be based on sales data
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    setFilteredProducts(sorted);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="product-listing">
      <div className="container">
        <div className="page-header">
          <h1>All Products</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>
        </div>

        <SearchAndFilter 
          onSearch={handleSearch}
          onFilter={handleFilter}
          onSort={handleSort}
        />

        <div className="listing-header">
          <div className="results-info">
            <p>Showing {filteredProducts.length} of {products.length} products</p>
          </div>
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <ion-icon name="grid-outline"></ion-icon>
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <ion-icon name="list-outline"></ion-icon>
            </button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <ion-icon name="search-outline" className="no-results-icon"></ion-icon>
            <h2>No products found</h2>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="btn-primary"
              onClick={() => {
                setFilteredProducts(products);
                // Reset search and filter components
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="pagination">
            <button className="pagination-btn" disabled>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-dots">...</span>
            <button className="pagination-btn">10</button>
            <button className="pagination-btn">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing; 