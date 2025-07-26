import React, { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'US',
    dateOfBirth: '1990-01-01',
    gender: 'male'
  });

  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: [
        { name: 'Premium Cotton T-Shirt', quantity: 2, price: 29.99 },
        { name: 'Classic Jeans', quantity: 1, price: 29.99 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 149.99,
      items: [
        { name: 'Running Shoes', quantity: 1, price: 149.99 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 45.99,
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 45.99 }
      ]
    }
  ]);

  const [wishlist] = useState([
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      image: '/src/assets/images/products/shirt-1.jpg',
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Classic Jeans',
      price: 59.99,
      image: '/src/assets/images/products/clothes-1.jpg',
      addedDate: '2024-01-08'
    }
  ]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    alert('Profile updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'green';
      case 'shipped':
        return 'blue';
      case 'processing':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const renderProfileTab = () => (
    <div className="profile-tab">
      <h2>Profile Information</h2>
      <form onSubmit={handleProfileUpdate} className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={profileData.zipCode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="orders-tab">
      <h2>Order History</h2>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div className="order-header">
              <div className="order-info">
                <h3>Order #{order.id}</h3>
                <p>Placed on {new Date(order.date).toLocaleDateString()}</p>
                <span className={`status status-${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-total">
                <strong>${order.total.toFixed(2)}</strong>
              </div>
            </div>
            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item-detail">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="order-actions">
              <button className="btn-secondary">View Details</button>
              <button className="btn-secondary">Track Order</button>
              <button className="btn-secondary">Reorder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlistTab = () => (
    <div className="wishlist-tab">
      <h2>My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <div className="wishlist-item-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <p className="added-date">Added on {new Date(item.addedDate).toLocaleDateString()}</p>
              <div className="wishlist-actions">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-secondary">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddressesTab = () => (
    <div className="addresses-tab">
      <h2>Saved Addresses</h2>
      <div className="addresses-list">
        <div className="address-item">
          <div className="address-content">
            <h3>Home Address</h3>
            <p>123 Main St</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </div>
          <div className="address-actions">
            <button className="btn-secondary">Edit</button>
            <button className="btn-secondary">Delete</button>
          </div>
        </div>
        <button className="btn-primary">Add New Address</button>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="settings-tab">
      <h2>Account Settings</h2>
      <div className="settings-section">
        <h3>Password</h3>
        <form className="password-form">
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" />
          </div>
          <button type="submit" className="btn-primary">Update Password</button>
        </form>
      </div>

      <div className="settings-section">
        <h3>Email Preferences</h3>
        <div className="preference-item">
          <label>
            <input type="checkbox" defaultChecked />
            Receive promotional emails
          </label>
        </div>
        <div className="preference-item">
          <label>
            <input type="checkbox" defaultChecked />
            Receive order updates
          </label>
        </div>
        <div className="preference-item">
          <label>
            <input type="checkbox" />
            Receive newsletter
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Privacy</h3>
        <button className="btn-secondary">Download My Data</button>
        <button className="btn-secondary">Delete Account</button>
      </div>
    </div>
  );

  return (
    <div className="account-page">
      <div className="container">
        <h1>My Account</h1>
        
        <div className="account-content">
          <div className="account-sidebar">
            <nav className="account-nav">
              <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <ion-icon name="person-outline"></ion-icon>
                Profile
              </button>
              <button
                className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <ion-icon name="bag-outline"></ion-icon>
                Orders
              </button>
              <button
                className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <ion-icon name="heart-outline"></ion-icon>
                Wishlist
              </button>
              <button
                className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <ion-icon name="location-outline"></ion-icon>
                Addresses
              </button>
              <button
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <ion-icon name="settings-outline"></ion-icon>
                Settings
              </button>
            </nav>
          </div>

          <div className="account-main">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'orders' && renderOrdersTab()}
            {activeTab === 'wishlist' && renderWishlistTab()}
            {activeTab === 'addresses' && renderAddressesTab()}
            {activeTab === 'settings' && renderSettingsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account; 