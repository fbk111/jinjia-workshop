import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Skeleton } from 'antd';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import { indexSecond } from '../../request/all.js'
const { Title, Text } = Typography;
const App: React.FC = (props) => {
  const [imgList, setImgList] = useState([])
  const [certificateList, setCertificateList] = useState([])
  let loading = () => imgList.length == 0 ? true : false
  //相当于componentDidMount
  useEffect(() => {
    indexSecond().then(res => {
      setImgList(res.studentAward)
      setCertificateList(res.certificateList)
    })
  }, [])
  return <div className='secondContent'>
    <div className='secondIn' >
      <div className='header'>
        <p className='header1'>荣誉获奖证书</p>
        <p className='header2'>Honorary Award</p>
      </div>
      <Skeleton paragraph={{ rows: 20 }} loading={loading()} active round>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'disable'
          }}
          modules={[Pagination, Navigation]}
          className="mySwiperSecond"
          style={{ display: imgList.length == 0 ? 'none' : 'block' }}
        >
          {
            imgList.map(item => (
              <SwiperSlide key={item.index}>
                <Card
                  className='secondCard'
                  bordered
                  hoverable
                  cover={<img className='award' src={item.img} />}
                >
                  <p className='cardText'>
                    {item.p}
                  </p>

                  <Button className='button' type="primary" style={{ display: 'block', margin: '0 auto', marginTop: '10px', backgroundColor: '#bb021a' }} danger>{item.button}</Button>
                </Card>
              </SwiperSlide>
            ))
          }
        <div className="swiper-button-prev">
        <img src={props.last} />
        </div>
        <div className="swiper-button-next">
        <img src={props.next} />
        </div>
        </Swiper>
      </Skeleton>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        }}
        Navigation={true}
        modules={[Navigation, Autoplay]}
        className='mySwiperSecond2'
        style={{ height: '180px' }}

      >
        {
          certificateList.map(item => (
            <SwiperSlide key={item.index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card bordered hoverable>
                <img src={item.img} />
              </Card>

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>


  </div>

};

export default App;