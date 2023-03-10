import React, { Component, useRef, useState, useEffect } from "react";
// Import Swiper React components
import { useInView } from "framer-motion";
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
export default function App(props: any) {
  const [imgList, setImgList] = useState([])
  useEffect(() => {
    indexThird().then((res:any) => {
      setImgList(res)
    })
  }, [])
  let loading = () => imgList.length == 0 ? true : false
  return (
    <div className="thirdContent">
      <div className="thirdIn"
      >
        <div className='header'
          style={{
            transform: props.pageNumber==2 ? "none" : "translateX(-200px)",
            opacity: props.pageNumber==2 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>项目作品</p>
          <p className='header2'>Project works</p>
        </div>
        <Skeleton paragraph={{ rows: 20 }} style={{ width: '90%', margin: '0 auto' }} loading={loading()} active round>
          <Swiper
            spaceBetween={30}
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
            className='thirdSwiper1'
          >
            {
              imgList.map((item:any) => (
                <SwiperSlide
                style={{
                  opacity: props.pageNumber==2 ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}>
                  <Row align="top">
                    <Col className="gutter-row" lg={{ span: 13 }} xs={{ span: 24 }}>
                      <img className="img" src={item.img} />
                    </Col>
                    <Col lg={{ span: 1 }}></Col>
                    <Col className="contentAll" lg={{ span: 9 }} xs={{ span: 24 }}>
                      <p className="title">{item.title}</p>
                      <p className="content">{item.text}</p>
                      <div className="buttonList">
                        <Button className='button'>{item.button2}</Button>
                        <Button className='button'>{item.button1}</Button>
                      </div>

                    </Col>
                    <Col lg={{ span: 1 }}></Col>
                  </Row>
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

  );
}
