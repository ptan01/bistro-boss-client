
const FoodCard = ({item}) => {
    const {image, price , recipe, name} = item ;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-800 text-white mr-5 mt-5 px-3 rounded-lg">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 border-orange-400">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;