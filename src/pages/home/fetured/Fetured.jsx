import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Fetured = () => {
    return (
        <div className='featured-img bg-fixed pt-10 mb-20 text-white'>
            <SectionTitle heading='featured item' subHeading='check it out'></SectionTitle>
            <div className='md:flex justify-center items-center px-36 py-20'>
                <div>
                <img className='' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Feb 23 2025</p>
                    <p className='uppercase'>Where i can get Some</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil minima dignissimos temporibus. Aliquam doloremque similique, harum dolor, illo aut minima dolore temporibus aliquid asperiores, pariatur magnam unde consectetur? Corporis, nam dolore voluptatum quas atque fugiat ipsam eligendi molestiae nulla enim reprehenderit quos dolores minus laboriosam corrupti, aperiam sunt modi voluptatem?</p>
                    <button className="btn btn-outline border-0 border-b-4">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;