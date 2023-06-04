import { useContext } from "react";
import { AuthContext } from "../../../proveder/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id} = item;
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const [,refetch] = useCart()






    const handleAddToCard = (item) => {
        console.log(item)
        if (user) {
            const cartItem = {foodId : _id, name, image , price, email : user.email  }
            fetch('https://bistro-boss-server-khaki.vercel.app/cards', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'food added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login ?',
                text: "You need to login before add to card!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}})
                }
            })
        }
    }


    return (
        <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-800 text-white mr-5 mt-5 px-3 rounded-lg">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 border-orange-400">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;