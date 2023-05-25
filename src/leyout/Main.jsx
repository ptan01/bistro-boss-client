import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';

const Main = () => {
    const location = useLocation()

    console.log(location)
    const islogin = location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div>
            { islogin || <NavBar></NavBar>}
            <Outlet></Outlet>
            { islogin || <Footer></Footer>}
        </div>
    );
};

export default Main;