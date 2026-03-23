import React, { useState } from 'react';

const Review = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Shoes", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTn6DTFyKxZlbpg30zmQ5JgjWOaNphkYMI7_6GAAFAGgrSyS9IOLnfkh4Jz2DSs4YQoCIIHe1vIzqNz1nLWs03wqrQWVF0wyVowykusie6u9LMt0diwllc9qFw", price: 299, reviews: [] },
        { id: 2, name: "Laptop", image: "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg", price: 199, reviews: [] },
        { id: 3, name: "Mobile", image: "https://image.made-in-china.com/202f0j00TBwlKzJrEVfC/Xs16-PRO-Android-Mobile-Cellphone3-Inch-2000mAh-4-128GB-4G-LTE-Mini-Smartphone.webp", price: 299, reviews: [] },
        { id: 4, name: "Ear buds", image: "https://cdn.thewirecutter.com/wp-content/media/2025/10/BEST-BLUETOOTH-EARBUDS-5057.jpg", price: 499, reviews: [] },
        { id: 5, name: "Gimble", image: "https://m.media-amazon.com/images/I/616aCVZjcqL._AC_UF1000,1000_QL80_.jpg", price: 799, reviews: [] },
    ]);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");
    const [selected, setSelected] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProducts = products.map((p) => {
            if (p.id === selected) {
                const newReview = {
                    id: Date.now(),
                    name,
                    message,
                    rating
                };

                return {
                    ...p,
                    reviews: [...p.reviews, newReview]
                };
            }
            return p;
        });

        setProducts(updatedProducts);
        setName("");
        setMessage("");
        setRating("");
        setSelected(null);
    };

    return (
        <>
            <h1 className="title">Product Review System</h1>

            <div className="product-container">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <img src={p.image} alt="" />
                        <h3>{p.name}</h3>
                        <p>Price : ₹{p.price}</p>
                        <button onClick={() => setSelected(p.id)}>Give Review</button>
                    </div>
                ))}
            </div>

            <div className="main-container">
                <div className="form-container">
                    {selected && (
                        <form onSubmit={handleSubmit}>
                            <h2>Give review on Product</h2>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter name"
                            />

                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter review message"
                            />

                            <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value="">Select Rating</option>
                                <option value="1">★</option>
                                <option value="2">★★</option>
                                <option value="3">★★★</option>
                                <option value="4">★★★★</option>
                                <option value="5">★★★★★</option>
                            </select>

                            <button type="submit">Submit</button>
                            <button
                                type="button"
                                className="btn2"
                                onClick={() => setSelected(null)}
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>

                <div className="review-container">
                    {products.map((product) => (
                        <div className="review-card" key={product.id}>
                            {product.reviews.map((r) => (
                                <div className="review-content" key={r.id}>
                                    <h3>{r.name}</h3>
                                    <p>{r.message}</p>
                                    <p>{r.rating}⭐</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Review;