import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import { portfolioData } from '../Api/PortfolioData/portfolioData';
import rightoverlay from '../../assets/images/svg/arrow-overlay-icon.svg'
const Portfoliocarousel = () => {
  return (
    <div className='py-10 justify-center'>
      <Swiper
        modules={[Pagination, FreeMode]}
        freeMode={true}
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            spaceBetween:10,
            slidesPerView: 1,
            
          },
          480: {
            spaceBetween:10,
            slidesPerView: 2,
          },
          768: {
            spaceBetween:15,
            slidesPerView: 3,
          },

          912: {
            spaceBetween:15,
            slidesPerView: 3,
          },
          1280: {
            spaceBetween:30,
            slidesPerView: 5,
          },
          // 540: {
          //   width: 500,
          //   slidesPerView: 2,
          // },
          // 430: {
          //   width: 320,
          //   slidesPerView: 1,
          // },
          // 375: {
          //   width: 360,
          //   slidesPerView: 1,
          // },
          // 200: {
          //   width: 240,
          //   slidesPerView: 1,
          // },
        }}
      >
        {portfolioData.map((item) => (

          <SwiperSlide key={item.id}>
            {/* <a href='#/'>
              <img src={item.image} alt='img' />
              <div className='pt-10'>
                <h5 className='text-18'>{item.title}</h5>
                <h3 className='text-28 font-bold leading-8'>{item.content}</h3>
              </div>
            </a> */}

            <a href='#/'  className='h-fit group'>
                <div className='relative overflow-hidden'>
                   <img src={item.image} alt='img'/>
                   <div className='absolute h-full w-full bg-medium-blue/20 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                      <img src={rightoverlay} alt='right'/>
                   </div>
                </div>
                <div className='pt-10'>
                <h5 className='text-18'>{item.title}</h5>
                <h3 className='text-28 font-bold leading-8'>{item.content}</h3>
              </div>
            </a>


          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default Portfoliocarousel