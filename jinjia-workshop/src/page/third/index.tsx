import React, { Component, useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Typography, Button, Skeleton } from "antd";
import first from '../../assets/third/first.png'
import "swiper/css";
import "swiper/css/pagination";
import { indexThird } from '../../request/all.js'
import "./index.less";

// import required modules
import { Navigation, Pagination } from "swiper";
const { Title, Text } = Typography;
interface img {
  img: string,
  title: string,
  text: string,
  button1: string,
  button2: string
}
export default function App(props: object) {
  const [imgList, setImgList] = useState([])
  useEffect(() => {
    indexThird().then(res => {
      setImgList(res)
    })
  }, [])
  let loading = () => imgList.length == 0 ? true : false
  return (
    <div className="thirdContent">
      <div className="thirdIn">
      <div className='header'>
        <p className='header1'>荣誉获奖证书</p>
        <p className='header2'>Honorary Award</p>
      </div>
      <Skeleton paragraph={{ rows: 20 }} style={{ width: '90%', margin: '0 auto' }} loading={loading()} active round width>
        <Swiper
          spaceBetween={30}
          pagination={{
            el: '.swiper-pagination',
            // dynamicBullets: true,
            clickable: true,
          }}
          Navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className='thirdSwiper1'
        >
          {
            imgList.map(item => (
              <SwiperSlide key={item.index}>
                <Row align="top">
                  <Col className="gutter-row" lg={{ span: 13 }} xs={{ span: 24 }}>
                    <img className="img" src={item.img} />
                  </Col>
                  <Col lg={{ span: 1 }}></Col>
                  <Col className="contentAll" lg={{ span: 9 }} xs={{ span: 24 }}>
                    <p className="title">{item.title}</p>
                    <p className="content">{item.text}</p>
                    <Button className='button'>{item.button2}</Button>
                    <Button className='button'>{item.button1}</Button>
                  </Col>
                  <Col lg={{ span: 1}}></Col>
                </Row>
              </SwiperSlide>
            ))
          }
          <div className="swiper-pagination"></div>
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

  );
}
