import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { HiUserGroup } from 'react-icons/hi';


const AllUser = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })


    const handleMakeAdmin = (id)=> {
        console.log(id)
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }



    const handleDelete = () => {

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All User</title>
            </Helmet>
            <h1 className="text-4xl font-bold">Total User : {users.length} </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-[#D1A054] btn-xl"><HiUserGroup className="text-2xl"></HiUserGroup></button></td>
                                <td> <button className="btn btn-ghost bg-red-700 btn-xl"><FaTrashAlt className="text-2xl"></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;