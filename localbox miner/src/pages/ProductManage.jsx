import React, { useEffect, useState } from 'react'


const ProductManage = () => {
  const [product, setProduct] = useState(() => {
    const data = localStorage.getItem('product-data')
    return data ? JSON.parse(data) : []
  });

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = [...product, form];
    setProduct(updatedProducts);
    localStorage.setItem('product-data', JSON.stringify(updatedProducts));

    // reset form
    setForm({
      name: "",
      category: "",
      description: "",
      price: "",
      image: ""
    });
  }

  return (
    <div className="container">
      <h2>Product Management</h2>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>

          <tbody>
            {product.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <img src={p.image} alt={p.name} className="product-img" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <h3>Add Product</h3>

        <div className="form-grid">
          <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
          <input type="text" placeholder="Category" name="category" value={form.category} onChange={handleChange} />
          <input type="number" placeholder="Price" name="price" value={form.price} onChange={handleChange} />
          <input type="text" placeholder="Image URL" name="image" value={form.image} onChange={handleChange} />
        </div>

        <textarea placeholder="Description" name="description" value={form.description} onChange={handleChange}></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default ProductManage