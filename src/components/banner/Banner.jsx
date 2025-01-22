import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bannerOne from '../../assets/banner.png'
import bannerTwo from '../../assets/banner2.png'
import bannerThree from '../../assets/banner3.png'
// import bannertwo from '../../assets/banner/banner2.jpg'
// import bannerthree from '../../assets/banner/banner3.jpg'
// import bannerfour from '../../assets/banner/banner4.jpg'
// import bannerfive from '../../assets/banner/banner5.jpg'
// import bannersix from '../../assets/banner/banner6.jpg'
// import bannerseven from '../../assets/banner/banner7.jpg'



const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='mx-auto mb-8'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img className='w-full h-[820px]' src={bannerOne} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img className='w-full h-[820px]' src={bannerOne} alt="Banner One" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75">
              <h2 className='text-4xl lg:text-4xl  text-white text-center mt-[480px]'>Todays HighLight <br /> <span className='pt-4'>All News</span></h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <img className='w-full h-[820px]' src={bannerTwo} alt="Banner One" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75">
              <h2 className='text-4xl lg:text-4xl  text-white text-center mt-[480px]'>Todays HighLight <br /> <span className='pt-4'>All News</span></h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <img className='w-full h-[820px]' src={bannerThree} alt="Banner One" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75">
              <h2 className='text-4xl lg:text-4xl  text-white text-center mt-[480px]'>Todays HighLight <br /> <span className='pt-4'>All News</span></h2>
            </div>
          </div>
        </SwiperSlide>


        <div className="autoplay-progress w-8" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;