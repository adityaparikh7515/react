import "./main.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div>
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#" class="hover:text-white">All Products</a></li>
                        <li><a href="#" class="hover:text-white">New Arrivals</a></li>
                        <li><a href="#" class="hover:text-white">Best Sellers</a></li>
                        <li><a href="#" class="hover:text-white">Deals & Offers</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-white">About Us</a></li>
                        <li><a href="#" class="hover:text-white">Careers</a></li>
                        <li><a href="#" class="hover:text-white">Blog</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3>More information</h3>
                    <ul>
                        <li><a href="#" class="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white">Returns</a></li>



                    </ul>

                </div>

            </div>
        </div>


    )
}

export default Footer;