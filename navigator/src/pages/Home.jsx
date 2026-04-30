import React from 'react';


const Home = () => {
  return (
    <div className="home-container">

      {/* Section 1 - Hero */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Welcome to E-Cart</h1>
          <p>Your one-stop shop for everything</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </section>

      {/* Section 2 - Categories */}
      <section className="home-categories">
        <h2>Shop by Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home</div>
          <div className="category-card">Accessories</div>
        </div>
      </section>

      {/* Section 3 - Featured Products */}
      <section className="home-featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>

      {/* Section 4 - Banner */}
      <section className="home-banner">
        <h2>Big Sale - Up to 50% Off</h2>
      </section>

      {/* Section 5 - Footer Info */}
      <section className="home-info">
        <div className="info-box">Free Shipping</div>
        <div className="info-box">Easy Returns</div>
        <div className="info-box">24/7 Support</div>
      </section>

    </div>
  );
};

export default Home;
