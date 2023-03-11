import React, { useState, useEffect, useRef } from 'react';
import { Card, Typography, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import { indexFifth } from '../../request/all.js'
import { useInView, motion } from "framer-motion";
import champion from '../../assets/champion.png'
import './index.less'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
const App: React.FC<any> = (props:any) => {
  const [componyList, setComponyList] = useState([])
  const [schoolList, setSchoolList] = useState([])
  useEffect(() => {
    indexFifth().then((res:any)=> {
      setComponyList(res.componyList)
      setSchoolList(res.schoolList)

    })
  }, [])
 
  let loadingCompony = () => componyList.length == 0 ? true : false
  let loadingSchool = () => schoolList.length == 0 ? true : false
  return <div className='fifthContent'>
    <div className='fifthIn'>
      <div className='header'
        style={{
          transform: props.pageNumber==4 ? "none" : "translateX(500px)",
          opacity: props.pageNumber==4 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}>

        <p className='header1' key="b">校企合作</p>
        <p className='header2' key="c">Cooperation</p>
      </div>
      <div>
        <Skeleton loading={loadingSchool()} active round>
          <div className='school'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="swiperForth"
            >
              {

                schoolList.map((item:any, index) => (

                  <SwiperSlide
                    style={{
                      transform: props.pageNumber==4 ? "none" : `translateX(${500 - index * 100}px)`,
                      opacity: props.pageNumber==4 ? 1 : 0,
                      transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }}>
                    <Card className='card' bordered hoverable title={item.title} extra={<img src={champion} className='champion'></img>}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <p className='content'> {item.description}</p>
                      </motion.div>
                    </Card>
                  </SwiperSlide>

                ))
              }

            </Swiper>
          </div>
        </Skeleton>

        <div className='header'
          style={{
            transform: props.pageNumber==4 ? "none" : "translateX(-200px)",
            opacity: props.pageNumber==4 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>合作企业</p>
          <p className='header2'>enterprises</p>
        </div>
        <Skeleton loading={loadingCompony()} active round>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              0: {
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="swiperForth2"
          >
            {
              componyList.map((item:any, index) => (
                <SwiperSlide
                  style={{
                    transform: props.pageNumber==4 ? "none" : `translateY(100px)`,
                    opacity: props.pageNumber==4 ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                  }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className='card2' bordered hoverable>
                      <p className='content'>{item.name}</p>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Skeleton>
        <Skeleton loading={loadingCompony()} active round>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              0: {
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="swiperForth2"
          >
            {
              componyList.map((item:any) => (
                <SwiperSlide
                style={{
                  transform: props.pageNumber==4 ? "none" : `translateY(-100px)`,
                  opacity: props.pageNumber==4 ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}>
                  <Card className='card2' bordered hoverable>
                    <p className='content'>{item.name}</p>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Skeleton>

      </div>
    </div>
  </div>
};

export default App;