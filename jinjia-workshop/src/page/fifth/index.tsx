import React, { useState, useEffect } from 'react';
import { Card, Typography, Skeleton } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import { indexFifth } from '../../request/all.js'
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
  return <>
    <div>
      <div className='fifthIn' style={{ width: '90%', margin: '0 auto' }}>
        <div className='header' style={{ margin: '50px 0 50px 0' }}>
          <Title style={{ margin: '0px', fontSize: '18px' }}>校企合作</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Cooperation</Title>
        </div>
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
              className="mySwiper"
            >
              {
                schoolList.map(item => (
                  <SwiperSlide>
                    <Card style={{ height: 230 }} bordered hoverable title={item.title} extra={<a href="#">More</a>}>
                      <Text> {item.description}</Text>
                    </Card>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </Skeleton>

        <div className='header' style={{ margin: '50px 0 50px 0' }}>
          <Title style={{ margin: '0px', fontSize: '18px' }}>合作企业</Title>
          <Title style={{ margin: '0px', color: 'white', fontSize: '40px', textShadow: '1px 1px 1px grey' }}>Cooperative enterprises</Title>
        </div>
        <Skeleton loading={loadingCompony()} active round>
          <div className='compony'>
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {
                componyList.map(item => (
                  <SwiperSlide>
                    <Card bordered hoverable>
                      <Text>{item.name}</Text>
                    </Card>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Skeleton>

      </div>

    </div>

  </>
};

export default App;