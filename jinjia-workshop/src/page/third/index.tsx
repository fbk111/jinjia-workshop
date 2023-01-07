import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col } from "antd";
import first from '../../assets/third/first.png'
import second from '../../assets/third/second.png'
import third from '../../assets/third/thrid.png'
import forth from '../../assets/third/forth.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.less";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="container">
        <div className='header' style={{ width: '100%', height: '170px' }}>
          <h1 style={{ fontSize: '72px', color: 'black', margin: '0px' }}>荣誉获奖证书</h1>
          <h2 style={{ fontSize: '56px', margin: '0px' }}>水水水水是黑色</h2>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{ width:'100%',height: '550px' }}
        >
          <SwiperSlide style={{wsidth:'100%'}}>
            <Row gutter={16} style={{width:'100%',height:'100%',padding:'0px'}}>
              <Col className="gutter-row" span={2} style={{padding:'0px'}}>

              </Col>
              <Col className="gutter-row" span={10} style={{padding:'0px'}}>
                   <img src={first}/>
              </Col>
              <Col className="gutter-row" span={1} style={{padding:'0px'}}>

              </Col>
              <Col className="gutter-row" span={9} style={{padding:'0px'}}>

              </Col>
              <Col className="gutter-row" span={2} style={{padding:'0px'}}>

              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <img src={second}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={third}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={forth}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
