import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../menuCategory/MenuCategory";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {

    const [menu] = useMenu()

    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <div className="my-20">
                <SectionTitle heading="today's offer" subHeading="don't miss"></SectionTitle>
            </div>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>

            {/* dessert menu items*/}
            <MenuCategory items={dessert} title='dessert' img={dessertImg}></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;