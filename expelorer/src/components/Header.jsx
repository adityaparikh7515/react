import "./main.css";



const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>QuantCart</h1>
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contect us</a>
            </div>
            <div className="btns">
                <button>log in</button>
            </div>
        </div>
    )
}
export default Header;