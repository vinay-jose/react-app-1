import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/smartphones">Smartphones</NavLink></li>
                <li><NavLink to="/laptops">Laptops</NavLink></li>
                <li><NavLink to="/fragrances">Fragrances</NavLink></li>
                <li><NavLink to="/skincare">Skincare</NavLink></li>
                <li><NavLink to="/home-decoration">Home decor</NavLink></li>
                <li><NavLink to="/groceries">Groceries</NavLink></li>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/category1">Category 1</a></li>
                <li><a href="/category2">Category 2</a></li>
                <li><a href="/category3">Category 3</a></li>
                <li><a href="/category4">Category 4</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar