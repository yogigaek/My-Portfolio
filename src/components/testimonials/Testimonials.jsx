import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Prakasa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nihil exercitationem nisi rem commodi debitis perferendis culpa omnis cum non sed ipsum, natus quam laborum placeat deserunt, sit distinctio.'
  },
  {
    avatar: AVTR2,
    name: 'Ernest Prakasa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nihil exercitationem nisi rem commodi debitis perferendis culpa omnis cum non sed ipsum, natus quam laborum placeat deserunt, sit distinctio.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from mentor Eduwork</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}> 
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials