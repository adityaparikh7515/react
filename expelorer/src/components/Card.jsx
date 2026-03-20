import "./main.css"



const Card= ({products})=>{
    return(
        <div className="container">
            {
                products.map((p)=>(
                    <div className="card" key={p.id}>
                        <img src={p.online_image_address} alt="" />
                        <p>{p.name}</p>
                        <p>{p.category}</p>
                        <p className="price">Price:{p.price}</p>
                        <p>{p.description}</p>
                        <button>Get Item..</button>

                    </div>
                ))
            }
        </div>
    )
}

export default Card;