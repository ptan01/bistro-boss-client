import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoute from "./PrivetRoute";
import Secret from "../pages/secret/Secret";
import Dashbord from "../leyout/Dashbord";
import MyCard from "../pages/dashboardPages/myCard/MyCard";
import AllUser from "../pages/dashboardPages/allUser/AllUser";
import AddItem from "../pages/dashboardPages/addItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/dashboardPages/manageItem/ManageItem";
import Payment from "../pages/dashboardPages/payment/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secret',
                element: <PrivetRoute><Secret></Secret></PrivetRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashbord></Dashbord></PrivetRoute>,
        children: [
            {
                path: '/dashboard/mycard',
                element: <MyCard></MyCard>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            // Admin routes
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/additem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: '/dashboard/manageitem',
                element: <ManageItem></ManageItem>
            }
        ]
    }
])