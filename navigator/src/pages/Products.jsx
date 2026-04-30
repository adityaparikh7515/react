

const productData = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₹1999',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₹2999',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: '₹1499',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    id: 4,
    name: 'Backpack',
    price: '₹999',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4'
  }
];

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>

      <div className="products-grid">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price}</p>
              <button className="product-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

