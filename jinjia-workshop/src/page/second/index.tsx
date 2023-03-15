import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Card, Button, Typography, Skeleton } from 'antd';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import { indexSecond } from '../../request/all.js'
const { Title, Text } = Typography;
const App: React.FC<any> = (props: any) => {
  const [imgList, setImgList] = useState([])
  const [certificateList, setCertificateList] = useState([])
  const [secondmove, setSecondMove] = useState(false)
  let loading = () => imgList.length == 0 ? true : false
  //相当于componentDidMount
  useEffect(() => {
    indexSecond().then((res: any) => {
      setImgList(res.studentAward)
      setCertificateList(res.certificateList)
    })
  }, [])

  return <div className='secondContent'>
    <div className='secondIn' >
      <div className='header'
        style={{
          transform: props.pageNumber == 1 ? "none" : "translateX(500px)",
          opacity: props.pageNumber == 1 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        <p className='header1' >荣誉获奖证书</p>
        <p className='header2' >Honorary Award</p>
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
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
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
            imgList.map((item: any, index) => (
              <SwiperSlide
                style={{
                  transform: props.pageNumber == 1 ? "none" : `translateX(${500 - index * 100}px)`,
                  opacity: props.pageNumber == 1 ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}>
                <Card
                  className='secondCard'
                  bordered
                  hoverable
                  cover={<img className='award' src={item.img} />}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >

                    <p className='cardText'>
                      {item.p}
                    </p>

                    <Button onClick={() => setSecondMove(!secondmove)} className='button' type="primary" style={{ margin: '0 auto', backgroundColor: '#bb021a' }} danger>{item.button}</Button>
                  </motion.div>

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
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Navigation, Autoplay]}
        className='mySwiperSecond2'

      >
        {
          certificateList.map((item: any, index) => (
            <SwiperSlide
              key={item.index}
              style={{
                transform: props.pageNumber == 1 ? "none" : `translateX(${-(500 - index * 100)}px)`,
                opacity: props.pageNumber == 1 ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}>
              <Card bordered hoverable >
                <motion.div
               
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={item.img} style={{width:'100%'}}/>
                </motion.div>
              </Card>

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>


  </div >

};

export default App;