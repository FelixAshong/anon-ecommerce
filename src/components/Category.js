import React from 'react';

const Category = () => {
  const categories = [
    {
      icon: '/src/assets/images/icons/dress.svg',
      title: 'Dress & frock',
      amount: '53'
    },
    {
      icon: '/src/assets/images/icons/coat.svg',
      title: 'Winter wear',
      amount: '58'
    },
    {
      icon: '/src/assets/images/icons/glasses.svg',
      title: 'Glasses & lens',
      amount: '68'
    },
    {
      icon: '/src/assets/images/icons/shorts.svg',
      title: 'Shorts & jeans',
      amount: '84'
    },
    {
      icon: '/src/assets/images/icons/tee.svg',
      title: 'T-shirts',
      amount: '35'
    },
    {
      icon: '/src/assets/images/icons/jacket.svg',
      title: 'Jacket',
      amount: '16'
    },
    {
      icon: '/src/assets/images/icons/watch.svg',
      title: 'Watch',
      amount: '27'
    },
    {
      icon: '/src/assets/images/icons/hat.svg',
      title: 'Hat & caps',
      amount: '39'
    }
  ];

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-img-box">
                <img src={category.icon} alt={category.title} width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{category.title}</h3>
                  <p className="category-item-amount">({category.amount})</p>
                </div>
                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category; 