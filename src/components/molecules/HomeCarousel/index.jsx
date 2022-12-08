import "./HomeCarousel.scss";
import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";

import spaceBoy from "./images/A_boy_looking_at_space_shuttles_launching_from_earth__storybook_illustration.png";
import pinkMagic from "./images/A_magical_Princess_in_a_dark_pink_background__storybook_illustration.png";
import pony from "./images/A_beautiful_pony_standing_on_a_hill_bright_sky__storybook_illustration.png";
import magicalPrincess from "./images/A_magical_Princess_in_a_dark_pink_background__storybook_illustration.png";
import boy from "./images/boyanddog.jpeg";
import christmas from "./images/christmas.jpeg";
import firePlace from "./images/fireplace.jpeg";
import flowers from "./images/flowers.jpeg";
import lion from "./images/lion.jpeg";
import superBoy from "./images/A_super_boy_saving_his_cat__storybook_illustration.png";
import childrenplaying from "./images/Children_playing_in_the_rain__Chiraz_background___Storybook_Illustration.png";
import boysReading from "./images/Three_boys_reading__storybook_illustration.png";

const HomeCarousel = () => {
  return (
    <div className="swipes">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

        onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  speed={1000}
                  breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 30 },
                      480: { slidesPerView: 2, spaceBetween: 30 },
                      680: { slidesPerView: 4, spaceBetween: 30 },
                     1024: { slidesPerView: 5, spaceBetween: 10 }
                  }}
      >
        <SwiperSlide><div className="item"><img src={spaceBoy} alt="spaceboy" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={childrenplaying} alt="childrenplaying"/></div></SwiperSlide>

                   <SwiperSlide><div className="item"><img src={magicalPrincess} alt="magicalprincess" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={boy} alt="boy and his dog" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={pony} alt="pony" /></div></SwiperSlide>

                   <SwiperSlide><div className="item"><img src={christmas} alt="christmas" /></div></SwiperSlide>
                     <SwiperSlide><div className="item"><img src={firePlace} alt="fireplace" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={boysReading} alt="boysreading" /></div></SwiperSlide>

                  <SwiperSlide><div className="item"><img src={pinkMagic} alt="pinkmagic" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={flowers} alt="flowers" /></div></SwiperSlide>

                    <SwiperSlide><div className="item"><img src={superBoy} alt="superboy" /></div></SwiperSlide>

                   <SwiperSlide><div className="item"><img src={lion} alt="lion" /></div></SwiperSlide>
      </Swiper>
    </div>
  );

  // return (
  //     <div className="home_carousel_wrapper">
  //         <div className="home_carousel_container">
  //         {/* <div className="home_carousel_container_item"> */}
  //             <Swiper
  //                 modules={[Autoplay]}
  //                 spaceBetween={0}
  //                 slidesPerView={1}
  //                 autoplay={{
  //                     pauseOnMouseEnter:true,
  //                     disableOnInteraction: true,
  //                 }}
  //                 onSlideChange={() => console.log('slide change')}
  //                 onSwiper={(swiper) => console.log(swiper)}
  //                 speed={1000}
  //                 breakpoints={{
  //                     320: { slidesPerView: 1, spaceBetween: 30 },
  //                     480: { slidesPerView: 2, spaceBetween: 30 },
  //                     680: { slidesPerView: 4, spaceBetween: 30 },
  //                     768: { slidesPerView: 4, spaceBetween: 30 },
  //                     1020: { slidesPerView: 5, spaceBetween: 10 }
  //                 }}
  //             >
  //                 <SwiperSlide><div className="item"><img src={spaceBoy} alt="spaceboy" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={childrenplaying} alt="childrenplaying"/></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={magicalPrincess} alt="magicalprincess" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={boy} alt="boy and his dog" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={pony} alt="pony" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={christmas} alt="christmas" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={firePlace} alt="fireplace" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={boysReading} alt="boysreading" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={pinkMagic} alt="pinkmagic" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={flowers} alt="flowers" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={superBoy} alt="superboy" /></div></SwiperSlide>

  //                     <SwiperSlide><div className="item"><img src={lion} alt="lion" /></div></SwiperSlide>

  //             </Swiper>
  //             {/* </div> */}

  //         </div>

  //     </div>
  // )
};

export default HomeCarousel;
