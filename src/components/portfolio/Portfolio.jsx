import React from "react";
import "./portfolio.css";

import achievements from "../../achievements";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Achivements and Additonal Skills</h5>
      <h2> Details(Swipe)</h2>
      <Swiper
        className="container portfolioContainer"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {achievements.map((achievement) => (
          <SwiperSlide className="portfolio" key={achievement.id}>
            <div className="playlistImage">
              <img src={achievement.image} alt="" className="achivementImg" />
            </div>
            <h5 className="achivementTitle">{achievement.title}</h5>
            <small className="achivementDetails">
              {achievement.description}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
