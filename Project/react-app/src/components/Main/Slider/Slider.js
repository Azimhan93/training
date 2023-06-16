import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Slider.css';

export default function Slider() {
  return (
    <>
        <Swiper
            className="slide"
            loop={true}
            centeredSlides={true}
            allowSlideNext={true}
            spaceBetween={5}
            speed={500}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true
            }}
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                "--swiper-pagination-position": "absolute"
            }}
            pagination={{
                clickable: false
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
        >
        <SwiperSlide >
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d4vki2o-f0a6894a-7ae3-4994-8b3b-49cf94d7daba.jpg/v1/fill/w_1600,h_611,q_75,strp/__the_amazing_spider_man_____movie_banner_by_andrewss7_d4vki2o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjExIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kNHZraTJvLWYwYTY4OTRhLTdhZTMtNDk5NC04YjNiLTQ5Y2Y5NGQ3ZGFiYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7YncAQIhRQ7b5NCQH23t_L-4rk7MFnZvQsceE3Kclvo" height={400} alt="spiderman"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d4vki2o-f0a6894a-7ae3-4994-8b3b-49cf94d7daba.jpg/v1/fill/w_1600,h_611,q_75,strp/__the_amazing_spider_man_____movie_banner_by_andrewss7_d4vki2o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjExIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kNHZraTJvLWYwYTY4OTRhLTdhZTMtNDk5NC04YjNiLTQ5Y2Y5NGQ3ZGFiYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7YncAQIhRQ7b5NCQH23t_L-4rk7MFnZvQsceE3Kclvo" height={400}  alt="avengers"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d4vki2o-f0a6894a-7ae3-4994-8b3b-49cf94d7daba.jpg/v1/fill/w_1600,h_611,q_75,strp/__the_amazing_spider_man_____movie_banner_by_andrewss7_d4vki2o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjExIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kNHZraTJvLWYwYTY4OTRhLTdhZTMtNDk5NC04YjNiLTQ5Y2Y5NGQ3ZGFiYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7YncAQIhRQ7b5NCQH23t_L-4rk7MFnZvQsceE3Kclvo" height={400} alt="avengers"/>
        </SwiperSlide>
        </Swiper>
    </>
  );
}