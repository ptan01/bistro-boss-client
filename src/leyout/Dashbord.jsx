import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaUser, FaBook,FaUtensils } from 'react-icons/fa'
import { HiMenuAlt2 } from 'react-icons/hi';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashbord = () => {

    const [card] = useCart()

    const [isAdmin] = useAdmin()

    // const admin = isAdmin;
    // const admin = true;


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    <div>
                        <h2 className="text-3xl font-bold">Bistro Boss</h2>
                        <p>Restaurant</p>
                    </div>
                    {isAdmin ? 
                    <>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/additem'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/history'><HiMenuAlt2></HiMenuAlt2>Manage Items</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/history'><FaBook></FaBook>Manage BooKing</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/alluser'><FaUser></FaUser>All User</NavLink></li>
                    </>
                     : 
                    <>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/dashboard/mycard'><FaShoppingCart></FaShoppingCart> My card <div className="badge badge-secondary">+{card?.length}</div></NavLink></li>
                    </>}
                    <div className="divider"></div>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/menu'><HiMenuAlt2></HiMenuAlt2>Our Menu</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to='/order/salad'><FaShoppingCart></FaShoppingCart> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;