import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

   const [menu] = useMenu()
   const popularMenu = menu.filter(item => item.category === 'popular')



    return (
        <section className="mb-12">
            <SectionTitle heading='from our menu' subHeading='popular item'></SectionTitle>

            <div className="grid md:grid-cols-2 gap-2">
                {
                    popularMenu.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4">view full menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;