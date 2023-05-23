import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])