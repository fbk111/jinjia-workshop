import { useState, useEffect, useRef } from 'react'
import './index.less'
import {  motion } from "framer-motion";
import { Card, Button, Divider, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import { indexForth } from '../../request/all.js'
export default function index(props: object) {
  const [teacherList, setTeacherList] = useState([])
  useEffect(() => {
    indexForth().then(res => {
      setTeacherList(res)
    })
  }, [])
  let loading = () => teacherList.length == 0 ? true : false
  return (
    <div className='forthContent'>
      <div className='forthIn'>
        <div className='header'
          style={{
            transform: props.pageNumber==3 ? "none" : "translateX(500px)",
            opacity: props.pageNumber==3 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>师生风采</p>
          <p className='header2'>Elegant demeanour</p>
        </div>
        <div className='teacherList'>
          <Skeleton paragraph={{ rows: 20 }} loading={loading()} round active>
            <Swiper
              slidesPerView={4}
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
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 4,
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
              className='forthSwiper'

            >
              {
                teacherList.map((item,index) => (
                  <SwiperSlide key={item.index}
                  style={{
                    transform: props.pageNumber==3 ? "none" : "translateX(-500px)",
                    opacity: props.pageNumber==3 ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Card
                        bordered
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img src={item.img} className='img' />}
                      >
                        <Button style={{ display: 'block', margin: '0 auto', backgroundColor: '#bb021a' }} type="primary" danger>{item.name}</Button>
                        <br />
                        <p className='content' style={{ display: 'block' }}>{item.description}</p>
                      </Card>
                    </motion.div>
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

        </div>
      </div>
    </div>
  )
}
