import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { HiUserGroup } from 'react-icons/hi';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUser = () => {

    const [axiosInstance] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosInstance.get('/users')
        return res.data
    })



    const handleMakeAdmin = (id) => {
        console.log(id)
        fetch(`https://bistro-boss-server-khaki.vercel.app/users/admin/${id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin has been added',
                        showConfirmButton: false,
                        timer: 1000
                      })
                }
                console.log(data)
            })
    }


    
    const handleDelete = (userId) => {

        axiosInstance.delete(`/users/delete/${userId}`)
        .then(res => {
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user has been deleted',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })
    
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
                                <td>{user.role ? <p>Admin</p> : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-[#D1A054] btn-xl"><HiUserGroup className="text-2xl"></HiUserGroup></button>}</td>
                                <td> <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost bg-red-700 btn-xl"><FaTrashAlt className="text-2xl"></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;