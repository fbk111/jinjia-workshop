import React, { useState,useEffect } from 'react';
import { Carousel, Card, FloatButton, Button, Typography,Skeleton  } from 'antd';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import {indexSecond} from '../../request/all.js'
const { Title, Text } = Typography;
const App: React.FC = (props) => {  
  const [imgList,setImgList]=useState([])
  const [certificateList,setCertificateList]=useState([])
  let loading=()=>imgList.length==0?true:false
  //相当于componentDidMount
  useEffect(()=>{
    indexSecond().then(res=>{
      setImgList(res.studentAward)
      setCertificateList(res.certificateList)
    })
  },[])
 return <div className='container' style={{ backgroundColor: 'white' }}>
    <div className='secondIn' >
      <div className='header' style={{ width: '100%', height: '170px', marginTop: '50px' }}>
        <Title style={{ margin: '0px', fontSize: '56px' }}>荣誉获奖证书</Title>
        <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px black' }}>Honorary Award</Title>
      </div>
      <Skeleton loading={loading()} active round>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable :true,
        }}
        Navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ width: '100%', height: '420px', marginBottom: '100px',display:imgList.length==0?'none':'block' }}
      >
        {
          imgList.map(item => (
            <SwiperSlide key={item.index}>
              <Card
                bordered
                hoverable
                cover={<img style={{ width: '90%', borderRadius: '10px', height: '250px', display: 'block', margin: '10px auto' }} alt="example" src={item.img} />}
              >
                <Text >
                  {item.p}
                </Text>

                <Button type="primary" style={{ display: 'block', margin: '0 auto',marginTop:'10px',backgroundColor:'#bb021a' }} danger>{item.button}</Button>
              </Card>
            </SwiperSlide>
          ))
        }
        <div className="swiper-button-prev">
         <img src={props.last}/>
        </div>
        <div className="swiper-button-next">
          <img src={props.next}/>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
      </Skeleton>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        }}
        Navigation={true}
        modules={[Navigation,Autoplay]}
        style={{ height: '180px' }}

      >
        {
          certificateList.map(item => (
            <SwiperSlide key={item.index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={item.img} />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>


  </div>

      };

export default App;