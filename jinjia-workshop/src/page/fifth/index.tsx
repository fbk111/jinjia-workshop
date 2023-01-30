import React, { useState, useEffect } from 'react';
import { Card, Typography, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import { indexFifth } from '../../request/all.js'
import './index.less'
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const { Title, Text } = Typography

const App: React.FC = () => {
  const [componyList, setComponyList] = useState([])
  const [schoolList, setSchoolList] = useState([])
  useEffect(() => {
    indexFifth().then(res => {
      setComponyList(res.componyList)
      setSchoolList(res.schoolList)

    })
  }, [])
  let loadingCompony = () => componyList.length == 0 ? true : false
  let loadingSchool = () => schoolList.length == 0 ? true : false
  return <div className='fifthContent'>
    <div className='fifthIn'>
      <div className='header'>
        <p className='header1'>荣誉获奖证书</p>
        <p className='header2'>Honorary Award</p>
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
                schoolList.map(item => (
                  <SwiperSlide>
                    <Card className='card' bordered hoverable title={item.title} extra={<a href="#">More</a>}>
                      <p className='content'> {item.description}</p>
                    </Card>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </Skeleton>

        <div className='header'>
          <p className='header1'>荣誉获奖证书</p>
          <p className='header2'>Honorary Award</p>
        </div>
        <Skeleton loading={loadingCompony()} active round>
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
            className="swiperForth2"
          >
            {
              componyList.map(item => (
                <SwiperSlide>
                  <Card className='card2' bordered hoverable>
                    <p className='content'>{item.name}</p>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Skeleton>
        <Skeleton loading={loadingCompony()} active round>
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
            className="swiperForth2"
          >
            {
              componyList.map(item => (
                <SwiperSlide>
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