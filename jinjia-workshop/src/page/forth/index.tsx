import React,{useState,useEffect} from 'react'
import './index.less'
import { Card, Typography, Button,Divider,Skeleton  } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import teacher1 from '../../assets/forth/teacher1.png'
import {indexForth} from '../../request/all.js'
const { Meta } = Card;
const { Title,Text } = Typography;
type img={
  img:string,
  name:string,
  description:string
}
export default function index(props:object) {
  const [teacherList,setTeacherList]=useState([])
  useEffect(()=>{
    indexForth().then(res=>{
      setTeacherList(res)
    })
  },[])
  let loading=()=>teacherList.length==0?true:false
  return (
    <div className='container'>
      <div className='forthIn'>
        <div className='header' style={{margin:'50px 0 50px 0'}}>
        <Title style={{margin:'0px',fontSize:'56px'}}>师生风采</Title>
        <Title style={{margin:'0px',color:'white',fontSize:'40px',textShadow:'1px 1px 1px grey'}}>Elegant demeanour</Title>
        </div>
        <div className='teacherList'>
          <Skeleton loading={loading()} round active>
                      <Swiper
            slidesPerView={4}
            spaceBetween={40}
            pagination={{
              el: '.swiper-pagination',
              // dynamicBullets: true,
              clickable :true,
            }}
            Navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination,Navigation]}
            style={{height:600}}
            className='forthSwiper'

          >
            {
              teacherList.map(item => (
                <SwiperSlide key={item.index} style={{ background: 'none' }}>
                  <Card
                  bordered
                    hoverable
                    style={{ width: '100%'}}
                    cover={<img  src={item.img} />}
                  >
                    <Button style={{display:'block',margin:'0 auto',backgroundColor:'#bb021a'}} type="primary" danger>{item.name}</Button>
                    <br/>
                    <Text style={{display:'block'}}>{item.description}</Text>
                  </Card>
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
    </div>
  )
}
