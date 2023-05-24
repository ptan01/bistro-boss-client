import Cover from "../../../shared/Cover";
import MenuItem from "../../../shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-2 my-20">
                {
                    items.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;