import React, { useState, useEffect } from 'react';
import { Card, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import champion from '../../assets/champion.png'
import './index.less'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
const App: React.FC<any> = (props: any) => {
  const [componyList, setComponyList] = useState<Array<Object>>([])
  const [schoolList, setSchoolList] = useState<Array<Object>>([])
  const componyAll = [
    {
      "index": 511,
      "title": "横向课题",
      "description": "客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。"
    },
    {
      "index": 512,
      "title": "协同育人",
      "description": "客户将软件项目整体交由工坊师生团队开发，工坊组建项目开发团队，独立完成项目开发，并保质如期交付。"
    },
    {
      "index": 513,
      "title": "劳务支持",
      "description": "客户负责软件项目开发管理，包括团队、进度、质量等，存在劳务短缺或需要技术支持时，工坊提供劳务支持。"
    }
  ]
  const schoolAll1 = [
    {
      "index": 521,
      "name": "人人众包（天津）科技有限公司"
    },
    {
      "index": 522,
      "name": "大连东软教育科技集团有限公司"
    },
    {
      "index": 523,
      "name": "聚维科技（天津）有限公司"
    }
  ]
  const schoolAll2 = [
    {
      "index": 524,
      "name": "北京东方迪格信息技术有限公司"
    },
    {
      "index": 525,
      "name": "火星先驱（天津）科技有限公司"
    },
    {
      "index": 526,
      "name": "中慧云启科技集团有限公司"
    }
  ]
  useEffect(() => {
    setSchoolList(schoolAll1.concat(schoolAll2))
    setComponyList(componyAll)
  }, [])
  let loadingCompony = () => componyList.length == 0 ? true : false
  let loadingSchool = () => schoolList.length == 0 ? true : false
  return <div className='fifthContent'>
    <div className='fifthIn'>
      <div className='header'
        style={{
          transform: props.pageNumber == 4 ? "none" : "translateX(500px)",
          opacity: props.pageNumber == 4 ? 1 : 0,
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

                componyAll.map((item: any, index) => (

                  <SwiperSlide
                    style={{
                      transform: props.pageNumber == 4 ? "none" : `translateX(${500 - index * 100}px)`,
                      opacity: props.pageNumber == 4 ? 1 : 0,
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
            transform: props.pageNumber == 4 ? "none" : "translateX(-200px)",
            opacity: props.pageNumber == 4 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>
          <p className='header1'>合作企业</p>
          <p className='header2'>Enterprises</p>
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
              schoolAll1.map((item: any, index) => (
                <SwiperSlide
                  style={{
                    transform: props.pageNumber == 4 ? "none" : `translateY(100px)`,
                    opacity: props.pageNumber == 4 ? 1 : 0,
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
              schoolAll2.map((item: any) => (
                <SwiperSlide
                  style={{
                    transform: props.pageNumber == 4 ? "none" : `translateY(-100px)`,
                    opacity: props.pageNumber == 4 ? 1 : 0,
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

      </div>
    </div>
  </div>
};

export default App;