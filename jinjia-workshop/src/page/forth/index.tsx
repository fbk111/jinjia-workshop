import React, { useState, useEffect } from 'react'
import './index.less'
import { Card, Typography, Button, Divider, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import teacher1 from '../../assets/forth/teacher1.png'
import { indexForth } from '../../request/all.js'
const { Meta } = Card;
const { Title, Text } = Typography;
type img = {
  img: string,
  name: string,
  description: string
}
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
        <div className='header'>
          <p className='header1'>荣誉获奖证书</p>
          <p className='header2'>Honorary Award</p>
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
                teacherList.map(item => (
                  <SwiperSlide key={item.index} style={{ background: 'none' }}>
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
