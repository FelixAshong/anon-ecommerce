import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
    availability: ''
  });
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All Categories',
    'Clothing',
    'Shoes',
    'Accessories',
    'Electronics',
    'Home & Garden',
    'Sports',
    'Beauty'
  ];

  const priceRanges = [
    'All Prices',
    'Under $25',
    '$25 - $50',
    '$50 - $100',
    '$100 - $200',
    'Over $200'
  ];

  const ratings = [
    'All Ratings',
    '4+ Stars',
    '3+ Stars',
    '2+ Stars'
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    onSort(value);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      rating: '',
      availability: ''
    });
    setSearchTerm('');
    onFilter({});
    onSearch('');
  };

  return (
    <div className="search-filter">
      <div className="container">
        {/* Search Bar */}
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
          </form>
        </div>

        {/* Filters and Sort */}
        <div className="filter-section">
          <div className="filter-row">
            <div className="filter-group">
              <label>Category:</label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Price Range:</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="filter-select"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Rating:</label>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="filter-select"
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Availability:</label>
              <select
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="filter-select"
              >
                <option value="">All Items</option>
                <option value="in-stock">In Stock</option>
                <option value="on-sale">On Sale</option>
                <option value="new-arrival">New Arrivals</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="filter-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={clearFilters} className="clear-filters-btn">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {(filters.category || filters.priceRange || filters.rating || filters.availability || searchTerm) && (
          <div className="active-filters">
            <h4>Active Filters:</h4>
            <div className="filter-tags">
              {searchTerm && (
                <span className="filter-tag">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')}>×</button>
                </span>
              )}
              {filters.category && (
                <span className="filter-tag">
                  Category: {filters.category}
                  <button onClick={() => handleFilterChange('category', '')}>×</button>
                </span>
              )}
              {filters.priceRange && (
                <span className="filter-tag">
                  Price: {filters.priceRange}
                  <button onClick={() => handleFilterChange('priceRange', '')}>×</button>
                </span>
              )}
              {filters.rating && (
                <span className="filter-tag">
                  Rating: {filters.rating}
                  <button onClick={() => handleFilterChange('rating', '')}>×</button>
                </span>
              )}
              {filters.availability && (
                <span className="filter-tag">
                  Availability: {filters.availability}
                  <button onClick={() => handleFilterChange('availability', '')}>×</button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter; 