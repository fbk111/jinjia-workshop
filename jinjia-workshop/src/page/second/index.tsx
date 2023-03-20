import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, Button, Skeleton } from 'antd';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css';
import './index.less'
import json from '../../assets/imgLiost.json'
import hornor1 from '../../assets/seconds/hornor1.png'
import hornor2 from '../../assets/seconds/hornor2.png'
import hornor3 from '../../assets/seconds/hornor3.png'
import hornor4 from '../../assets/seconds/hornor4.png'
import certificate1 from '../../assets/seconds/certificate1.png'
import certificate2 from '../../assets/seconds/certificate2.png'
import certificate3 from '../../assets/seconds/certificate3.png'
import certificate4 from '../../assets/seconds/certificate4.png'
import certificate5 from '../../assets/seconds/certificate5.png'
import certificate6 from '../../assets/seconds/certificate6.png'
import certificate7 from '../../assets/seconds/certificate7.png'
const App: React.FC<any> = (props: any) => {
  const [imgList, setImgList] = useState<Array<Object>>([])
  const [certificateList, setCertificateList] = useState<Array<Object>>([])
  const [secondmove, setSecondMove] = useState(false)
  let loading = () => imgList.length == 0 ? true : false
  //相当于componentDidMount
  useEffect(() => {
    setImgList(hornorList)
    setCertificateList(certificateAll)
  }, [])

  const hornorList = [
    {
      "index": 211,
      "img": hornor1,
      "p": "齐瓒获2020年中华人民共和国第一届职业技能大赛铜牌。",
      "button": "国家级"
    },
    {
      "index": 212,
      "img": hornor2,
      "p": "吴涛获2022年全国职业院校技能大赛移动应用开发赛项三等奖。",
      "button": "国家级"
    },
    {
      "index": 213,
      "img": hornor3,
      "p": "刘景鸿获2022年第六届一带一路暨金砖国家职业发展与技术创新大赛一等奖。",
      "button": "国家级"
    },
    {
      "index": 214,
      "img": hornor4,
      "p": "吴涛、曹元顺获第三届“海河工匠杯”技能大赛前一、二名。",
      "button": "国家级"
    }
  ]

  const certificateAll = [
    {
      "index": 221,
      "img": certificate1
    },
    {
      "index": 222,
      "img": certificate2
    },
    {
      "index": 223,
      "img": certificate3
    },
    {
      "index": 224,
      "img": certificate4
    },
    {
      "index": 225,
      "img": certificate5
    },
    {
      "index": 226,
      "img": certificate6
    },
    {
      "index": 227,
      "img": certificate7
    }
  ]
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
              <Card bordered hoverable>
                <motion.div

                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={item.img} style={{ width: '100%' }} />
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