import React, { FC,useState } from 'react';
import { Button, FloatButton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper";
import { ArrowUpOutlined} from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.less';
import './utils/font.js'
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
  const [activeIndex,setActiveIndex]=useState<number>(0)
 
  const [swiperController,setSwiperController]=useState<any>()
  const pageChange=(page:any)=>{
   swiperController.slideTo(page,1000,false)
  }
  const isShowButton=()=>{
    if(activeIndex==2||activeIndex==3||activeIndex==4||activeIndex==5){
      return true
    }else{
      return false
    }
  }
  const goTop=()=>{
    swiperController.slideTo(0,3000,false)
  }
  return(
   <div className="App">
    <Button type='primary' style={{display:isShowButton()==true?'block':'none'}} className='scrollButton' danger onClick={goTop}><ArrowUpOutlined /></Button>
    <Swiper
      direction={"vertical"}
      modules={[Pagination,Mousewheel]}
      className="allSwiper"
      mousewheel={true}
      onSlideChange={(e:any) =>{setActiveIndex(e.activeIndex)}}
      onSwiper={(swiper) => {setSwiperController(swiper)}}
    >
      <SwiperSlide>
        <First changePage={pageChange} activeIndex={activeIndex} pageNumber={activeIndex}/>
      </SwiperSlide>
      <SwiperSlide>
        <Second last={last} next={next} pageNumber={activeIndex}/>
      </SwiperSlide>

      <SwiperSlide>
        <Third last={last} next={next} pageNumber={activeIndex}/>
      </SwiperSlide>
      <SwiperSlide>
        <Forth last={last} next={next} pageNumber={activeIndex}/>
      </SwiperSlide>
      <SwiperSlide>
        <Fifth pageNumber={activeIndex}/>
      </SwiperSlide>
      <SwiperSlide>
        <Sixth next={next} last={last} pageNumber={activeIndex}/>
      </SwiperSlide>
    </Swiper>
  </div>
  )

};

export default App;