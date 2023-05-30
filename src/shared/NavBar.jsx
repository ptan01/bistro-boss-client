import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const NavBar = () => {

    const { user, logOut } = useAuth()

    const [card] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }


    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to='/dashboard'>
                <FaShoppingCart className="text-2xl"></FaShoppingCart>
                <div className="badge badge-secondary">+{card?.length}</div>
            </Link>
        </li>


        {
            user ? <>
                <li><button onClick={handleLogOut} className="btn btn-outline">Log Out</button></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }

    </>

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-2xl text-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact bg-opacity-80 dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;