import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const ManageItem = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss || Manage Item</title>
            </Helmet>
            <SectionTitle subHeading='Harry Up' heading='manage all items'></SectionTitle>
            
        </div>
    );
};

export default ManageItem;