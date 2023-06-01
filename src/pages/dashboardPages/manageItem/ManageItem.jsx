import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';

const ManageItem = () => {

    const [menu, , refetch] = useMenu();
    const [axiosInstance] = useAxiosSecure();

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if(res.data.deletedCount > 0){
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // Swal.fire(
    //     'Deleted!',
    //     'Your file has been deleted.',
    //     'success'
    // )

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss || Manage Item</title>
            </Helmet>
            <SectionTitle subHeading='Harry Up' heading='manage all items'></SectionTitle>



            <div className="overflow-x-auto overflow-y-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map(item => <tr key={item._id}>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-red-700 btn-xl"><FaTrashAlt className="text-2xl"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;