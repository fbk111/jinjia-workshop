import React, { Component, useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Typography, Button,Skeleton } from "antd";
import first from '../../assets/third/first.png'
import "swiper/css";
import "swiper/css/pagination";
import {indexThird} from '../../request/all.js'
import "./index.less";

// import required modules
import { Navigation, Pagination } from "swiper";
const { Title, Text } = Typography;
interface img{
  img:string,
  title:string,
  text:string,
  button1:string,
  button2:string
}
export default function App(props: object) {
  const [imgList,setImgList]=useState([])
  useEffect(()=>{
    indexThird().then(res=>{
      setImgList(res)
    })
  },[])
  let loading=()=>imgList.length==0?true:false
  return (
    <>
      <div>
        <div className='header' style={{ width: '90%', height: '170px', margin: '0 auto', marginTop: '50px' }}>
          <Title style={{ margin: '0px', fontSize: '56px' }}>项目作品</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Project works</Title>
        </div>
        <Skeleton paragraph={{ rows: 20 }} style={{width:'90%',margin:'0 auto'}} loading={loading()} active round width>
        <Swiper
          spaceBetween={30}
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
          style={{ width: '100%', height: '700px' }}
          className='thirdSwiper1'
        >
          {
            imgList.map(item => (
              <SwiperSlide key={item.index}>
                <Row gutter={24}>

                  <Col className="gutter-row" lg={{ span: 12, offset: 1 }} xs={{ span: 24 }}>
                    <img style={{ width: '100%', }} src={item.img} />
                  </Col>
                  <Col className="gutter-row" lg={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 1 }}>
                    <Title level={3}>{item.title}</Title>
                    <div style={{ width: '100%', marginTop: '20px', marginBottom: '50px' }}>
                      <Text style={{ fontSize: '20px' }}>{item.text}</Text>
                    </div>
                    <Button style={{ backgroundColor: '#bb021a', display: 'inline-block', marginRight: '10px' }} type="primary" danger>{item.button1}</Button>
                    <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>{item.button2}</Button>
                  </Col>
                  <Col className="gutter-row" lg={{ span: 3}} xs={{ span: 0}}>

                  </Col>
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
    </>
  );
}
