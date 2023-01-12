import React, { Component, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Typography, Button } from "antd";
import first from '../../assets/third/first.png'
import second from '../../assets/third/second.png'
import third from '../../assets/third/thrid.png'
import forth from '../../assets/third/forth.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
const imgList:img[] = [
  {
    img: first,
    title: '快办一体机终端项目',
    text: '该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ',
    button1: '横向课题',
    button2: 'App开发'
  },
  {
    img: second,
    title: '快办一体机终端项目',
    text: '该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ',
    button1: '横向课题',
    button2: 'App开发'
  },
  {
    img: third,
    title: '快办一体机终端项目',
    text: '该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ',
    button1: '横向课题',
    button2: 'App开发'
  },
  {
    img: forth,
    title: '快办一体机终端项目',
    text: '该项目采用Android原生 + H5 移动混合开发技术，技术选型合理，可扩展性强。项目成果在行政案件快速办理（领域）进行了应用，有效简化了行政案件的办理流程，提高了办案人员工作效率，帮助客户创造经济效益近200万。    ',
    button1: '横向课题',
    button2: 'App开发'
  }
]
export default function App(props: object) {
  return (
    <>
      <div className="container">
        <div className='header' style={{ width: '90%', height: '170px', margin: '0 auto', marginTop: '50px' }}>
          <Title style={{ margin: '0px', fontSize: '56px' }}>项目作品</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Project works</Title>
        </div>
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
          style={{ width: '100%', height: '600px' }}
          className='thirdSwiper1'
        >
          {
            imgList.map(item => (
              <SwiperSlide >
                <Row gutter={24}>
                  <Col className="gutter-row" span={1}>

                  </Col>
                  <Col className="gutter-row" span={12} >
                    <img style={{ width: '100%' }} src={item.img} />
                  </Col>
                  <Col className="gutter-row" span={1} >

                  </Col>
                  <Col className="gutter-row" span={7}>
                    <Title level={3}>{item.title}</Title>
                    <div style={{ width: '100%', marginTop: '20px', marginBottom: '50px' }}>
                      <Text style={{ fontSize: '20px' }}>{item.text}</Text>
                    </div>
                    <Button style={{ backgroundColor: '#bb021a', display: 'inline-block', marginRight: '10px' }} type="primary" danger>{item.button1}</Button>
                    <Button style={{ backgroundColor: '#bb021a' }} type="primary" danger>{item.button2}</Button>
                  </Col>
                  <Col className="gutter-row" span={3}>

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
      </div>
    </>
  );
}
