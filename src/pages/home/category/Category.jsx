import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle heading={'order online'} subHeading={'from 11.00am to 10.00pm'}></SectionTitle>
            <div className="w-2/3 mx-auto">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h2 className="text-4xl text-center -mt-16 pb-10 text-white">Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h2 className="text-4xl text-center -mt-16 pb-10 text-white">Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h2 className="text-4xl text-center -mt-16 pb-10 text-white">Pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h2 className="text-4xl text-center -mt-16 pb-10 text-white">desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h2 className="text-4xl text-center -mt-16 pb-10 text-white">Salad</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;