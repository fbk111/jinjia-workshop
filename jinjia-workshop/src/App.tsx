import React, { FC,useState } from 'react';
import { Button, FloatButton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper";
import 'antd/dist/reset.css';
import './App.css';
import First from './page/first/index'
import Second from './page/second/index'
import Third from './page/third'
import Forth from './page/forth'
import Fifth from './page/fifth'
import Sixth from './page/sixth'
import last from './assets/last.png'
import next from './assets/next.png'
import { SwiperEvents } from 'swiper/types';
//滑动和分页器和字体
const App: FC = () => {
  const [activeIndex,setActiveIndex]=useState('0')
 
  let swiperController;
  const pageChange=(page:number)=>{
   swiperController.slideTo(page,3000,false)
  }
  return(
   <div className="App">
    <FloatButton.BackTop style={{position:'fixed',zIndex:1000}} />
    <Swiper
      direction={"vertical"}
      modules={[Pagination,Mousewheel]}
      className="allSwiper"
      mousewheel={true}
      onSlideChange={(e:SwiperEvents) => setActiveIndex(e.activeIndex)}
      onSwiper={(swiper) => swiperController=swiper}
    >
      <SwiperSlide>
        <First changePage={pageChange} activeIndex={activeIndex}/>
      </SwiperSlide>
      <SwiperSlide>
        <Second last={last} next={next} />
      </SwiperSlide>

      <SwiperSlide>
        <Third last={last} next={next} />
      </SwiperSlide>
      <SwiperSlide>
        <Forth last={last} next={next} />
      </SwiperSlide>
      <SwiperSlide>
        <Fifth />
      </SwiperSlide>
      <SwiperSlide>
        <Sixth next={next} last={last} />
      </SwiperSlide>
    </Swiper>
  </div>
  )

};

export default App;