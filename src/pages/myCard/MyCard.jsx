import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import {FaTrashAlt} from "react-icons/fa" ;

const MyCard = () => {

    const [card] = useCart()

    const total = card.reduce((previous, current) => previous + current.price, 0)


    return (
        <>
            <Helmet>
                <title>Bistro Boss | My card</title>
            </Helmet>
            <div className="flex justify-around">
                <h2 className="uppercase font-semibold text-3xl">total order :{card.length}</h2>
                <h3 className="uppercase font-semibold text-3xl">totol Price :{total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}

                        {
                            card.map((food, index) => <tr
                            key={food._id}
                            >
                                <th>
                                    {index}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={food.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {food.name}
                                </td>
                                <td className="">{food.price}</td>
                                <td>
                                    <button className="btn btn-ghost bg-red-700 btn-xl"><FaTrashAlt className="text-2xl"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyCard;