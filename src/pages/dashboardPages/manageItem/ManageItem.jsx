import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const ManageItem = () => {

    const [menu] = useMenu()

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
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;