import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/scss";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import slide1 from "../img/digital-marketing-gb39f377e5_1280.jpg";
import slide2 from "../img/colorful-g3a4654038_1280.jpg";
import slide3 from "../img/facebook-g3026ad855_1280.jpg";
import slide4 from "../img/ecommerce-g36e7993c6_1280.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperBanner() {
    return (
        <div>
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 3000, disableOnInteraction:false}}
                speed={1000}
                style={{width:"950px", height:"350px"}}
            >
                <SwiperSlide className="swiperSlide"><a href="https://kr.investing.com/equities/south-korea" target="_blank"><img className="imgSize" src={slide1} alt="Slide1"/></a></SwiperSlide>
                <SwiperSlide className="swiperSlide"><a href="https://www.musinsa.com/app/" target="_blank"><img className="imgSize" src={slide2} alt="Slide2"/></a></SwiperSlide>
                <SwiperSlide className="swiperSlide"><a href="https://ko-kr.facebook.com/facebook/" target="_blank"><img className="imgSize" src={slide3} alt="Slide3"/></a></SwiperSlide>
                <SwiperSlide className="swiperSlide"><a href="https://toss.im/" target="_blank"><img className="imgSize" src={slide4} alt="Slide4"/></a></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperBanner;