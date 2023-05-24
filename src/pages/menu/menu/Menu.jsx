import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../home/popularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;